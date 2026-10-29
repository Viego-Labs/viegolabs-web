import{H as e,Nt as t,Rt as n,St as r,Tt as i,V as a,X as o,dt as s,lt as c,n as l,wt as u,zt as d}from"./three.module-DHL4233k.js";var f=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,p=`
  #define PI 3.14159265
  uniform sampler2D uImagen;
  uniform sampler2D uProfundidad; // negro = cerca, blanco = lejos
  uniform vec2 uTam;              // tarjeta en px
  uniform vec2 uTamImagen;        // textura en px
  uniform float uMargen;          // margen lateral del plano en px, para que la onda no se corte
  uniform vec2 uLienzo;           // lienzo en px reales
  uniform float uOnda;
  uniform float uAparece;
  uniform float uZoom;
  uniform float uDof;
  uniform float uRadio;
  uniform vec3 uFoco;
  uniform vec2 uTiron;
  varying vec2 vUv;

  float tramo(float a, float b, float x) { return clamp((x - a) / (b - a), 0.0, 1.0); }
  float ruido(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
  float caja(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r; }

  void main() {
    vec2 pantalla = gl_FragCoord.xy / uLienzo;
    vec2 uv = vec2((vUv.x * (uTam.x + 2.0 * uMargen) - uMargen) / uTam.x, vUv.y);
    // Onda del scroll: arriba y abajo de la pantalla la tarjeta se abre hacia fuera.
    uv.x -= (pantalla.x - 0.5) * (1.0 - sin(pantalla.y * PI)) * uOnda;

    // Recorte con esquinas redondeadas; al aparecer, la tarjeta crece del 70 % al 100 %.
    float d = caja((uv - 0.5) * uTam, uTam * 0.5 * mix(0.7, 1.0, uAparece), uRadio);
    float alfa = 1.0 - smoothstep(-fwidth(d), 0.0, d);
    if (alfa <= 0.0) discard;

    // Rayo desde una cámara que sigue al ratón (uFoco.xy) hasta la superficie del mapa de profundidad.
    vec2 aImagen = 1.0 / (uTamImagen * max(uTam.x / uTamImagen.x, uTam.y / uTamImagen.y));
    vec2 p = (uv - 0.5) * uTam * mix(0.75, 1.0, uAparece) * mix(0.975, 1.0, uZoom);
    vec2 gx = dFdx(p * aImagen);
    vec2 gy = dFdy(p * aImagen);
    float hondo = uTam.y * 0.15;
    float distCamara = uTam.y * mix(10.0, 5.0, uZoom);
    vec3 origen = vec3(uFoco.xy, distCamara);
    vec3 fondo = vec3(p, -hondo);
    vec3 dir = normalize(fondo - origen);
    float hastaPlano = distCamara / -dir.z;
    float paso = (length(fondo - origen) - hastaPlano) / float(PASOS_PARALAJE);
    vec2 n = vec2(ruido(gl_FragCoord.xy), ruido(gl_FragCoord.yx + 17.0));
    vec3 rayo = origen + dir * (hastaPlano + paso * n.x);
    for (int i = 0; i < PASOS_PARALAJE; i++) {
      if (-texture2D(uProfundidad, rayo.xy * aImagen + 0.5).r * hondo > rayo.z) break;
      rayo += dir * paso;
    }
    vec2 uvImagen = rayo.xy * aImagen + uTiron * 0.015 + 0.5;

    // Desenfoque por profundidad: solo mientras el ratón está encima.
    vec3 color;
    if (uZoom < 0.001) {
      color = textureGrad(uImagen, uvImagen, gx, gy).rgb;
    } else {
      float prof = texture2D(uProfundidad, uvImagen).r;
      float radio = 0.01 * uZoom * tramo(0.0, 0.5, abs(prof - uFoco.z) + uDof);
      float angulo = 2.0 * PI * n.y;
      float aspecto = uTamImagen.y / uTamImagen.x;
      color = vec3(0.0);
      for (int i = 0; i < PASOS_DESENFOQUE; i++) {
        float r = sqrt((float(i) + 0.5) / float(PASOS_DESENFOQUE)) * radio;
        angulo += 2.39996323;
        color += textureGrad(uImagen, uvImagen + r * vec2(cos(angulo) * aspecto, sin(angulo)), gx, gy).rgb;
      }
      color /= float(PASOS_DESENFOQUE);
    }
    gl_FragColor = vec4(color, alfa);
    #include <colorspace_fragment>
  }
`,m=[0,.2,.3],h=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),g=(e,t,n,r,i,a)=>{let o=h((e-t)/(n-t));return a&&(o=a(o)),r+o*(i-r)},_=e=>e===1?1:1-2**(-10*e),v=e=>{let t=m.findIndex(t=>e<t);return t<0?m.length:t},y=(e,t)=>1-(1-e)**(t*60);function b(e,t,n,r){let i=2*Math.PI*t,a=n/(Math.PI*t),o=1/(i*i),s=r*n/i,c=e;return{valor:e,velocidad:0,objetivo:e,paso(e){if(e<=0)return;let t=(this.objetivo-c)/e;c=this.objetivo;let n=Math.max(o,e*e/2+e*a/2,e*a);this.velocidad+=(this.objetivo+s*t-this.valor-a*this.velocidad)*e/n,this.valor+=this.velocidad*e}}}function x({gsap:x,lenis:S,tactil:C}){let w=[...document.querySelectorAll(`.proyecto`)],T=document.getElementById(`proyectos`);if(!w.length||!T)return null;let E=document.createElement(`canvas`);E.className=`proyectos-gl`,E.setAttribute(`aria-hidden`,`true`),document.body.append(E);let D;try{D=new l({canvas:E,antialias:!1,alpha:!0,powerPreference:`high-performance`})}catch{return E.remove(),null}D.debug.checkShaderErrors=!1,D.setPixelRatio(Math.min(devicePixelRatio||1,2));let O=new u,k=new c(0,1,0,-1,-10,10),A=new s(1,1),j=new n,M=new t,N={x:-1e4,y:-1e4};addEventListener(`pointermove`,e=>{N.x=e.clientX,N.y=e.clientY},{passive:!0});let P=w.map((e,t)=>{let r=e.querySelector(`.proyecto-img`),a=new i({uniforms:{uImagen:{value:null},uProfundidad:{value:null},uTam:{value:new n(1,1)},uTamImagen:{value:new n(16,10)},uMargen:{value:0},uLienzo:{value:j},uOnda:{value:0},uAparece:{value:0},uZoom:{value:0},uDof:{value:0},uRadio:{value:20},uFoco:{value:new d(0,0,-1)},uTiron:{value:new n}},defines:{PASOS_PARALAJE:C?8:12,PASOS_DESENFOQUE:8},vertexShader:f,fragmentShader:p,transparent:!0,depthTest:!1,depthWrite:!1}),s=new o(A,a);s.visible=!1,O.add(s);let c={t:e,marco:r,malla:s,material:a,indice:t,listo:!1,encima:!1,tiempo:0,ratioEncima:0,dof:0,tiron:new n,tironObjetivo:new n,foco:[b(0,1,.6,2),b(0,1,.6,2),b(-1,1,.6,2)],zoom:b(0,2.2,.7,3)};return r.addEventListener(`pointerenter`,e=>{e.pointerType!==`touch`&&(c.encima=!0)}),r.addEventListener(`pointerleave`,()=>{c.encima=!1}),c});D.compile(O,k);let F=(e,t)=>(e.image.decode?e.image.decode():Promise.resolve()).catch(()=>{}).then(()=>{D.initTexture(e),t()}),I=()=>{for(let t of P){let n=t.marco.querySelector(`img`),i=2,o=()=>{--i===0&&(t.listo=!0,t.tiempo=0,t.t.classList.add(`con-gl`))};M.load(n.currentSrc||n.src,n=>{n.colorSpace=r,n.minFilter=e,n.anisotropy=Math.min(4,D.capabilities.getMaxAnisotropy()),t.material.uniforms.uImagen.value=n,t.material.uniforms.uTamImagen.value.set(n.image.width,n.image.height),F(n,o)}),M.load(t.t.dataset.profundidad,e=>{e.colorSpace=``,e.minFilter=a,e.generateMipmaps=!1,t.material.uniforms.uProfundidad.value=e,F(e,o)})}},L=new IntersectionObserver(([e])=>{e.isIntersecting&&(L.disconnect(),I())},{rootMargin:`150% 0px`});L.observe(T);let R=()=>{let e=innerWidth,t=innerHeight;D.setSize(e,t),k.right=e,k.bottom=-t,k.updateProjectionMatrix(),D.getDrawingBufferSize(j)};R(),addEventListener(`resize`,R);let z=!1;new IntersectionObserver(([e])=>{z=e.isIntersecting,E.style.visibility=z?`visible`:`hidden`},{rootMargin:`100px`}).observe(T);let B=()=>S?S.scroll:scrollY,V=B(),H=0,U=0;return x.ticker.add((e,t)=>{let n=B(),r=Math.min(t/1e3,1/20);if(U+=r,H+=Math.abs(n-V)/innerHeight,V=n,H-=H*(1-Math.exp(-10*r)),H=Math.min(H,1),!z)return;let i=Math.min(.15,H*.5),a=innerWidth,o=innerHeight;for(let e of P){let t=e.marco.getBoundingClientRect();if(!e.listo||t.top>=o||t.bottom<=0){e.malla.visible=!1,e.tiempo=0;continue}e.malla.visible=!0,e.tiempo+=r;let n=e.material.uniforms,s=t.left+t.width/2,c=t.top+t.height/2,l=e.ratioEncima;if(e.ratioEncima=h(e.ratioEncima+(e.encima?r:-r)),l<e.ratioEncima){let t=v(e.ratioEncima);t!==v(l)&&e.tironObjetivo.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(g(e.ratioEncima,0,.6,1,0)),t===m.length&&e.tironObjetivo.multiplyScalar(.5)}else e.tironObjetivo.multiplyScalar(.95**(r*60));if(e.tiron.lerp(e.tironObjetivo,y(.2,r)),e.encima){let n=e.ratioEncima>0?g(e.ratioEncima,0,.3,1,0)*t.height*.75:0;e.foco[0].objetivo=(N.x-s+Math.cos(U*20)*n)/t.width*-t.height,e.foco[1].objetivo=-(N.y-c-Math.sin(U*30)*n),e.foco[2].objetivo=.5}else e.foco[0].objetivo=0,e.foco[1].objetivo=0,e.foco[2].objetivo=-1;e.zoom.objetivo=+!!e.encima,e.dof=h(e.dof+(e.encima?.75:-1)*r);for(let t of e.foco)t.paso(r);e.zoom.paso(r);let u=g(e.tiempo,0,2,0,1,_),d=e.indice%2-.5,f=t.width*.12;e.malla.scale.set(t.width+2*f,t.height,1),e.malla.position.set(s+(1-u)*d*-a*.1,-c,0),e.malla.rotation.z=(1-u)*d*-.1,n.uTam.value.set(t.width,t.height),n.uMargen.value=f,n.uOnda.value=i,n.uAparece.value=g(e.tiempo,0,1.5,0,1,_),n.uZoom.value=Math.max(0,e.zoom.valor),n.uDof.value=-.5*e.dof,n.uFoco.value.set(e.foco[0].valor,e.foco[1].valor,e.foco[2].valor),n.uTiron.value.copy(e.tiron)}D.render(O,k)}),{lienzo:E}}export{x as iniciarProyectosGL};