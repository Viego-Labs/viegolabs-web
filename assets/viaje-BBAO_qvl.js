import{n as e}from"./sonido-D0nviq9y.js";import{$ as t,A as n,At as r,B as i,C as a,Ct as o,D as s,E as c,Et as l,F as u,G as d,H as f,I as p,J as m,K as h,L as g,M as _,Mt as v,N as y,O as b,Ot as x,P as S,Q as C,R as w,S as T,T as E,Tt as D,U as O,V as k,W as A,X as ee,Y as te,Z as j,_ as ne,_t as M,a as N,at as re,b as ie,bt as ae,c as oe,ct as se,d as P,dt as ce,et as F,ft as le,g as ue,h as de,ht as I,i as fe,it as pe,j as me,jt as L,k as he,kt as R,l as z,lt as ge,m as B,mt as _e,n as ve,nt as ye,o as V,ot as be,p as xe,pt as Se,rt as Ce,s as we,st as Te,t as Ee,tt as De,u as Oe,ut as H,v as U,vt as W,w as G,wt as ke,x as Ae,xt as K,y as je,yt as Me,z as q}from"./three.module-CJekic7u.js";import{t as Ne}from"./RoomEnvironment-D1C1wJIc.js";function Pe(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Fe(e){let t=new Map,n=new Map,r=e.clone();return Ie(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Ie(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Ie(e.children[r],t.children[r],n)}var Le=class extends i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new He(e)}),this.register(function(e){return new Ue(e)}),this.register(function(e){return new Qe(e)}),this.register(function(e){return new $e(e)}),this.register(function(e){return new et(e)}),this.register(function(e){return new Ge(e)}),this.register(function(e){return new Ke(e)}),this.register(function(e){return new qe(e)}),this.register(function(e){return new Je(e)}),this.register(function(e){return new Ve(e)}),this.register(function(e){return new Ye(e)}),this.register(function(e){return new We(e)}),this.register(function(e){return new Ze(e)}),this.register(function(e){return new Xe(e)}),this.register(function(e){return new ze(e)}),this.register(function(e){return new tt(e,Y.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new tt(e,Y.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new nt(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=k.extractUrlBase(e);a=k.resolveURL(t,this.path)}else a=k.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new U(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===rt){try{a[Y.KHR_BINARY_GLTF]=new ot(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Y.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Mt(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Y.KHR_MATERIALS_UNLIT:a[t]=new Be;break;case Y.KHR_DRACO_MESH_COMPRESSION:a[t]=new st(i,this.dracoLoader);break;case Y.KHR_TEXTURE_TRANSFORM:a[t]=new ct;break;case Y.KHR_MESH_QUANTIZATION:a[t]=new lt;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Re(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function J(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Y={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},ze=class{constructor(e){this.parser=e,this.name=Y.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],s,c=new B(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],q);let l=a.range===void 0?0:a.range;switch(a.type){case`directional`:s=new ne(c),s.target.position.set(0,0,-1),s.add(s.target);break;case`point`:s=new be(c),s.distance=l;break;case`spot`:s=new o(c),s.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,s.angle=a.spot.outerConeAngle,s.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return s.position.set(0,0,0),wt(s,a),a.intensity!==void 0&&(s.intensity=a.intensity),s.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(s),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Be=class{constructor(){this.name=Y.KHR_MATERIALS_UNLIT}getMaterialType(){return h}extendParams(e,t,n){let r=[];e.color=new B(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],q),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,I))}return Promise.all(r)}},Ve=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},He=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new R(e,e)}return Promise.all(r)}},Ue=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_DISPERSION}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},We=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Ge=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_SHEEN}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new B(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],q)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,I)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Ke=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},qe=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_VOLUME}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new B().setRGB(i[0],i[1],i[2],q),Promise.all(r)}},Je=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_IOR}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ye=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_SPECULAR}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new B().setRGB(i[0],i[1],i[2],q),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,I)),Promise.all(r)}},Xe=class{constructor(e){this.parser=e,this.name=Y.EXT_MATERIALS_BUMP}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Ze=class{constructor(e){this.parser=e,this.name=Y.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return J(this.parser,e,this.name)===null?null:m}extendMaterialParams(e,t){let n=J(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Qe=class{constructor(e){this.parser=e,this.name=Y.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},$e=class{constructor(e){this.parser=e,this.name=Y.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},et=class{constructor(e){this.parser=e,this.name=Y.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},tt=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},nt=class{constructor(e){this.name=Y.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let e of i.primitives)if(e.mode!==pt.TRIANGLES&&e.mode!==pt.TRIANGLE_STRIP&&e.mode!==pt.TRIANGLE_FAN&&e.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],s={};for(let e in a)o.push(this.parser.getDependency(`accessor`,a[e]).then(t=>(s[e]=t,s[e])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],i=e[0].count,a=[];for(let e of n){let t=new A,n=new r,o=new H,l=new r(1,1,1),u=new c(e.geometry,e.material,i);for(let e=0;e<i;e++)s.TRANSLATION&&n.fromBufferAttribute(s.TRANSLATION,e),s.ROTATION&&o.fromBufferAttribute(s.ROTATION,e),s.SCALE&&l.fromBufferAttribute(s.SCALE,e),u.setMatrixAt(e,t.compose(n,o,l));let d=null;for(let e in s)if(e===`_COLOR_0`){let t=s[e];u.instanceColor=new E(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(d===null){let e=u.geometry;d=new Oe,d.name=e.name;for(let t in e.attributes)d.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)d.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&d.setIndex(e.index),d.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)d.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(d.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(d.boundingSphere=e.boundingSphere.clone()),d.drawRange.start=e.drawRange.start,d.drawRange.count=e.drawRange.count,d.userData=Object.assign({},e.userData),u.geometry=d}let t=s[e];d.setAttribute(e,new E(t.array,t.itemSize,t.normalized))}De.prototype.copy.call(u,e),this.parser.assignFinalMaterial(u),a.push(u)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}},rt=`glTF`,it=12,at={JSON:1313821514,BIN:5130562},ot=class{constructor(e){this.name=Y.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,it),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rt)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-it,i=new DataView(e,it),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===at.JSON){let r=new Uint8Array(e,it+a,t);this.content=n.decode(r)}else if(r===at.BIN){let n=it+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},st=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Y.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=vt[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=vt[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=mt[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,q,n)})})}},ct=class{constructor(){this.name=Y.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},lt=class{constructor(){this.name=Y.KHR_MESH_QUANTIZATION}},ut=class extends he{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},dt=new H,ft=class extends ut{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return dt.fromArray(i).normalize().toArray(i),i}},pt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ht={9728:j,9729:p,9984:t,9985:w,9986:C,9987:g},gt={33071:xe,33648:ee,10497:Se},_t={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vt={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},yt={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},bt={CUBICSPLINE:void 0,LINEAR:me,STEP:n},xt={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function St(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Ct(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function wt(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Tt(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Et(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Dt(e){let t,n=e.extensions&&e.extensions[Y.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Ot(n.attributes):e.indices+`:`+Ot(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Ot(e.targets[n]);return t}function Ot(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function kt(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function At(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var jt=new A,Mt=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Re,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new D(this.options.manager):new G(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new U(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Ct(i,a,r),wt(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Y.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(k.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=_t[r.type],t=mt[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new z(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=_t[r.type],o=mt[r.componentType],c=o.BYTES_PER_ELEMENT,l=c*a,u=r.byteOffset||0,d=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,f=r.normalized===!0,p,m;if(d&&d!==l){let e=Math.floor(u/d),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,l=t.cache.get(n);l||(p=new o(i,e*d,r.count*d/c),l=new s(p,d/c),t.cache.add(n,l)),m=new b(l,a,u%d/c,f)}else p=i===null?new o(r.count*a):new o(i,u,r.count*a),m=new z(p,a,f);if(r.sparse!==void 0){let t=_t.SCALAR,n=mt[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(m=new z(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(m.setX(t,u[e*a]),a>=2&&m.setY(t,u[e*a+1]),a>=3&&m.setZ(t,u[e*a+2]),a>=4&&m.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=ht[n.magFilter]||1006,t.minFilter=ht[n.minFilter]||1008,t.wrapS=gt[n.wrapS]||1e3,t.wrapT=gt[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new ke(e);t.needsUpdate=!0,n(t)}),t.load(k.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),wt(e,a),e.userData.mimeType=a.mimeType||At(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Y.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Y.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Y.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new se,f.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new y,f.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return te}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Y.KHR_MATERIALS_UNLIT]){let e=r[Y.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new B(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],q),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,I)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||xt.OPAQUE;if(l===xt.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===xt.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==h&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new R(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==h&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==h){let e=i.emissiveFactor;o.emissive=new B().setRGB(e[0],e[1],e[2],q)}return i.emissiveTexture!==void 0&&a!==h&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,I)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),wt(n,i),t.associations.set(n,{materials:e}),i.extensions&&Ct(r,n,i),n})}createUniqueName(e){let t=ge.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Y.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Pt(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Dt(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Y.KHR_DRACO_MESH_COMPRESSION]?i(o):Pt(new Oe,o,t),o.mode===pt.TRIANGLE_STRIP?e=e.then(e=>Pe(e,1)):o.mode===pt.TRIANGLE_FAN&&(e=e.then(e=>Pe(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?St(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],f=a[n],p,m=o[n];if(f.mode===pt.TRIANGLES||f.mode===pt.TRIANGLE_STRIP||f.mode===pt.TRIANGLE_FAN||f.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),p=e&&t?new ae(l,m):new d(l,m),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(f.mode===pt.LINES)p=new u(l,m);else if(f.mode===pt.LINE_STRIP)p=new _(l,m);else if(f.mode===pt.LINE_LOOP)p=new S(l,m);else if(f.mode===pt.POINTS)p=new Te(l,m);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&Et(p,i),p.name=t.createUniqueName(i.name||`mesh_`+e),wt(p,i),f.extensions&&Ct(r,p,f),t.assignFinalMaterial(p),c.push(p)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Ct(r,c[0],i),c[0];let l=new Ae;i.extensions&&Ct(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new pe(O.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Ce(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wt(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new A;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Me(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new fe(i,void 0,l);return wt(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),o=[],s=i.children||[];for(let e=0,t=s.length;e<t;e++)o.push(n.getDependency(`node`,s[e]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,i.skin);return Promise.all([a,Promise.all(o),c]).then(function(e){let t=e[0],n=e[1],i=e[2];i!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(i,jt)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,i=n[0];t.pivot=new r().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],i.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new V:t.length>1?new Ae:t.length===1?t[0]:new De,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),wt(o,i),i.extensions&&Ct(n,o,i),i.matrix!==void 0){let e=new A;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Ae;n.name&&(i.name=r.createUniqueName(n.name)),wt(i,n),n.extensions&&Ct(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Fe(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof f||e instanceof ke)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}yt[i.path]===yt.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(yt[i.path]){case yt.weights:l=F;break;case yt.rotation:l=ce;break;case yt.translation:case yt.scale:l=L;break;default:switch(n.itemSize){case 1:l=F;break;default:l=L}}let u=r.interpolation===void 0?me:bt[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+yt[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=kt(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof ce?ft:ut)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Nt(e,t,n){let i=t.attributes,a=new we;if(i.POSITION!==void 0){let e=n.json.accessors[i.POSITION],t=e.min,o=e.max;if(t!==void 0&&o!==void 0){if(a.set(new r(t[0],t[1],t[2]),new r(o[0],o[1],o[2])),e.normalized){let t=kt(mt[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let o=t.targets;if(o!==void 0){let e=new r,t=new r;for(let r=0,i=o.length;r<i;r++){let i=o[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=kt(mt[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}a.expandByVector(e)}e.boundingBox=a;let s=new K;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Pt(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=vt[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return de.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),wt(e,t),Nt(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Tt(e,t.targets,n)})}var Ft=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),It={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Lt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Rt=new Ce(-1,1,1,-1,0,1),zt=new class extends Oe{constructor(){super(),this.setAttribute(`position`,new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new je([0,2,0,0,2,0],2))}},Bt=class{constructor(e){this._mesh=new d(zt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Vt=class extends Lt{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof W?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=x.clone(e.uniforms),this.material=new W({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Bt(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ht=class extends Lt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ut=class extends Lt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Wt=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new v(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:T}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vt(It),this.copyPass.material.blending=0,this.timer=new l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ht!==void 0&&(r instanceof Ht?n=!0:r instanceof Ut&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Gt=class extends Lt{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Kt={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},qt=class e extends Lt{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new v(a,o,{type:T,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new v(a,o,{type:T,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new v(a,o,{type:T,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),a=Math.round(a/2),o=Math.round(o/2)}let s=Kt;this.highPassUniforms=x.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1),new r(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=x.clone(It.uniforms),this.blendMaterial=new W({uniforms:this.copyUniforms,vertexShader:It.vertexShader,fragmentShader:It.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new h,this._fsQuad=new Bt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new W({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};qt.BlurDirectionX=new R(1,0),qt.BlurDirectionY=new R(0,1);var Jt={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Yt=class extends Lt{constructor(){super(),this.isOutputPass=!0,this.uniforms=x.clone(Jt.uniforms),this.material=new le({name:Jt.name,uniforms:this.uniforms,vertexShader:Jt.vertexShader,fragmentShader:Jt.fragmentShader}),this._fsQuad=new Bt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Xt=e=>e.replace(/^mixamorig:?/,``).replace(/_\d+$/,``),Zt=new Set([`Hips`,`Spine`,`Spine1`,`Spine2`]),Qt=new H;function $t(e){let t=0;for(let n=e.parent;n;n=n.parent)t++;return t}function en(e,t,n,i=60){let a=n.parent;a?.remove(n);let o=new Map;n.traverse(e=>{e.isBone&&!o.has(Xt(e.name))&&o.set(Xt(e.name),e)});let s=new Map;t.traverse(e=>{s.has(Xt(e.name))||s.set(Xt(e.name),e)});let c=new Set([`Neck`,`Head`,`HeadTop_End`,`_rootJoint`]),l=[...o].filter(([e])=>s.has(e)&&!c.has(e)).map(([e,t])=>({b:e,d:t,o:s.get(e)}));l.sort((e,t)=>$t(e.d)-$t(t.d)),t.updateMatrixWorld(!0),n.updateMatrixWorld(!0);for(let e of l)e.reposoO=e.o.getWorldQuaternion(new H).invert(),e.reposoD=e.d.getWorldQuaternion(new H),e.guardado=e.d.quaternion.clone();let u=l.find(e=>e.b===`Hips`),d=u?u.o.getWorldPosition(new r):null,f=u?u.d.getWorldPosition(new r):null,p=u?u.d.position.clone():null,m=e=>l.filter(e=>/^(Left|Right)Foot$/.test(e.b)).map(t=>t[e]),h=(e,t)=>e.getWorldPosition(new r).y-Math.min(...t.map(e=>e.getWorldPosition(new r).y)),g=u?h(u.d,m(`d`))/Math.max(1e-6,h(u.o,m(`o`))):1,_=[];n.traverse(e=>{e.isBone&&/^(Left|Right)(Foot|ToeBase)$/.test(Xt(e.name))&&_.push(e)});let v=Math.min(..._.map(e=>e.getWorldPosition(new r).y)),y=new N(t);y.clipAction(e).play();let b=Math.ceil(e.duration*i)+1,x=new Float32Array(b);for(let e of l)e.valores=new Float32Array(b*4);let S=new Float32Array(b*3),C=new H,w=new H,T=new r,E=new r;for(let r=0;r<b;r++){let a=Math.min(e.duration,r/i);x[r]=a,y.setTime(a),t.updateMatrixWorld(!0);for(let e of l)e.o.getWorldQuaternion(C).multiply(e.reposoO),Zt.has(e.b)&&C.slerp(Qt,.15),C.multiply(e.reposoD),e.d.parent.getWorldQuaternion(w).invert(),e.d.quaternion.copy(w.multiply(C)).normalize(),e.d.updateMatrixWorld(!0),e.d.quaternion.toArray(e.valores,r*4);if(u){T.copy(u.o.getWorldPosition(T)).sub(d).multiplyScalar(g*.7).add(f),u.d.position.copy(u.d.parent.worldToLocal(E.copy(T))),n.updateMatrixWorld(!0);let e=1/0;for(let t of _)e=Math.min(e,t.getWorldPosition(E).y);T.y-=e-v,u.d.parent.worldToLocal(T),T.toArray(S,r*3)}}for(let e of l)e.d.quaternion.copy(e.guardado);u&&u.d.position.copy(p),n.updateMatrixWorld(!0),y.uncacheRoot(t),a?.add(n);let{desde:D,largo:O}=tn(l,S,b,i),k=Math.round(.3*i),A=new Float32Array(O);for(let e=0;e<O;e++)A[e]=e/i;let ee=new H,te=new H,j=l.map(e=>{let t=e.valores.slice(D*4,(D+O)*4);for(let n=0;n<k;n++){let r=(n+1)/k,i=O-k+n,a=D-k+n;ee.fromArray(t,i*4),te.fromArray(e.valores,a*4),ee.slerp(te,r).toArray(t,i*4)}return new ce(`${e.d.name}.quaternion`,A,t)});if(u){let e=S.slice(D*3,(D+O)*3);for(let t=0;t<k;t++){let n=(t+1)/k,r=O-k+t,i=D-k+t;for(let t=0;t<3;t++)e[r*3+t]+=(S[i*3+t]-e[r*3+t])*n}j.push(new L(`${u.d.name}.position`,A,e))}return new fe(`baile`,(O-1)/i,j)}function tn(e,t,n,r){let i={coste:1/0,desde:Math.round(r),largo:Math.round(4*r)},a=new H,o=new H;for(let s=Math.round(1*r);s<n-5*r;s+=2)for(let n=Math.round(3*r);n<=Math.round(5*r);n+=2){let r=s+n,c=0;for(let t of e)a.fromArray(t.valores,s*4),o.fromArray(t.valores,r*4),c+=1-Math.abs(a.dot(o));for(let e=0;e<3;e++)c+=Math.abs(t[s*3+e]-t[r*3+e])*4;c<i.coste&&(i={coste:c,desde:s,largo:n})}return i}var nn=2.4,rn=32,an=nn*rn,on=nn*2,X=3.6,sn=2.7;function cn(e){let t=e;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var ln=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),un=(e,t,n)=>{let r=ln((e-t)/(n-t));return r*r*(3-2*r)},dn=(e,t,n)=>Math.exp(-((e-t)/n)*((e-t)/n)),fn=`
  #define PI 3.14159265
  uniform float uTiempo;
  uniform float uFlujo;
  uniform float uVelocidad;
  uniform float uAparece;
  uniform float uNacer;
  uniform float uBlanqueo;
  uniform float uAltoPx;
  uniform float uVentana;
  uniform float uMargen;
  uniform float uZ0;
  uniform float uRecorrido;
  uniform vec3 uFondo;
  uniform float uNiebla;
  uniform float uFuerzaNucleo;
  uniform float uNucleoD;
  uniform vec3 uColorNucleo;
  uniform vec3 uTurquesa;
  uniform vec3 uBlanco;
  uniform vec3 uCalido;
  uniform vec3 uMagenta;
  uniform vec3 uAcero;
  uniform vec3 uAzul;
  uniform vec3 uMenta;
  uniform vec3 uAmbar;

  float azar(float n) { return fract(sin(n) * 43758.5453123); }
  vec4 azar4(float n) {
    vec4 p = fract(vec4(n) * vec4(0.1031, 0.1030, 0.0973, 0.1099));
    p += dot(p, p.wzxy + 33.33);
    return fract((p.xxyz + p.yzzw) * p.zywx);
  }
  // El mundo se mide en avance: el avance en el que la cámara pasa por ese z.
  float avanceEn(float z) { return (uZ0 - z) / uRecorrido; }
  float pesoCristal(float a) { return smoothstep(0.405, 0.465, a); }
  float pesoClaro(float a) { return smoothstep(0.682, 0.712, a); }
  float niebla(float d, float k) { float x = uNiebla * k * max(d, 0.0); return 1.0 - exp(-x * x); }
  // Color de la luz de cada mundo.
  vec3 tinte(float a) {
    vec3 c = mix(uAcero, uTurquesa, smoothstep(0.06, 0.2, a));
    c = mix(c, mix(uCalido, uMagenta, 0.3 + 0.3 * sin(a * 60.0)), pesoCristal(a));
    return mix(c, uTurquesa, pesoClaro(a));
  }
  // Un entorno inventado para reflejos y refracciones: bandas de color alrededor y el núcleo, que solo se ve
  // cuando el rayo apunta de verdad hacia él.
  vec3 entorno(vec3 r, float a) {
    float bandas = pow(0.5 + 0.5 * sin(atan(r.y, r.x) * 3.0 + r.z * 4.0 + uTiempo * 0.2), 8.0);
    return tinte(a) * bandas * 0.25 + uColorNucleo * pow(max(-r.z, 0.0), 24.0) * 0.3;
  }
  float haciaNucleo(vec3 r, vec3 p, float k) {
    vec3 n = normalize(vec3(0.0, 0.0, cameraPosition.z - uNucleoD) - p);
    return pow(max(dot(r, n), 0.0), k);
  }
`,pn=`
  ${fn}
  // Cinta: distancia de la pieza por delante de la cámara; 'ciclo' cuenta las vueltas para variar el azar.
  float cinta(float d0, out float ciclo) {
    float u = d0 + cameraPosition.z - uFlujo + uMargen;
    ciclo = floor(u / uVentana);
    return u - ciclo * uVentana - uMargen;
  }
  // Mundo cristal: el pasillo cuadrado pasa a hexagonal, se retuerce en espiral y se cierra en embudo hacia el núcleo.
  vec3 cristalizar(vec3 p, float m, float d) {
    if (m < 0.001) return p;
    float r = length(p.xy);
    float a = atan(p.y, p.x);
    float q = max(abs(p.x), abs(p.y));
    float a6 = mod(a, PI / 3.0) - PI / 6.0;
    float rh = q / cos(a6);
    float embudo = 1.0 / (1.0 + m * 0.013 * max(d - 8.0, 0.0));
    float rn = mix(r, rh, m) * embudo;
    float an = a + m * (d * 0.032 + 0.35 * sin(uTiempo * 0.13 + d * 0.04));
    return vec3(cos(an) * rn, sin(an) * rn, p.z);
  }
  // Nacimiento: las piezas brotan alrededor del astronauta (unas 12 unidades por delante) y se extienden.
  float brotar(float d, float retraso) {
    float umbral = retraso + abs(d - 12.0) / 70.0;
    return smoothstep(umbral, umbral + 0.22, uNacer);
  }
  float pixelEn(vec3 p) {
    float d = max(0.2, -(viewMatrix * modelMatrix * vec4(p, 1.0)).z);
    return d * 2.0 / (projectionMatrix[1][1] * uAltoPx);
  }
  float segundoMayor(vec3 f) { return max(min(f.x, f.y), min(max(f.x, f.y), f.z)); }
  vec3 girarZ(vec3 v, float a) { float c = cos(a); float s = sin(a); return vec3(c * v.x - s * v.y, s * v.x + c * v.y, v.z); }
  vec3 rotarEje(vec3 v, vec3 k, float a) { float c = cos(a); float s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
`,mn=`
  ${pn}
  attribute vec4 aDatos;
  varying vec3 vLocal;
  varying vec3 vEscala;
  varying vec3 vMundo;
  varying float vA;
  varying float vCob;
  varying float vNeon;
  varying float vSemilla;
  varying float vD;
  void main() {
    vec3 c = instanceMatrix[3].xyz;
    float ciclo;
    float d = cinta(-c.z, ciclo);
    vec4 r = azar4(aDatos.x * 517.3 + ciclo * 7.13);
    float zMundo = cameraPosition.z - d;
    float a = avanceEn(zMundo);
    float esta = step(r.x, aDatos.y * (1.0 - 0.25 * pesoCristal(a) * step(aDatos.y, 0.7)));
    float s = esta * brotar(d, 0.25 + r.z * 0.15) * (1.0 - pesoClaro(a)) * smoothstep(uVentana - uMargen, uVentana - uMargen - 12.0, d);
    vec3 esc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
    mat3 base = mat3(instanceMatrix);
    vec2 cxy = c.xy;
    #ifdef PLACA
      // Las placas giran 90° por vuelta y, en el cristal, se inclinan y crecen como facetas de vidrio.
      float k = floor(r.y * 4.0) * PI * 0.5 * aDatos.w;
      cxy = girarZ(vec3(cxy, 0.0), k).xy;
      float m0 = pesoCristal(a);
      esc *= 1.0 + m0 * 0.4;
    #endif
    vec3 centro = vec3(cxy, zMundo);
    float px = 1.25 * pixelEn(centro);
    vec3 f = max(vec3(1.0), vec3(px) / esc);
    vCob = 1.0 / segundoMayor(f);
    vec3 local = position * f * vec3(mix(0.15, 1.0, s), mix(0.15, 1.0, s), s);
    vec3 v = base * local;
    #ifdef PLACA
      v = girarZ(v, k) * (1.0 + m0 * 0.4);
      vec3 eje = normalize(vec3(-cxy.y, cxy.x, 0.0) + 1e-4);
      v = rotarEje(v, eje, m0 * (0.5 + 0.7 * r.w) * (r.z > 0.5 ? 1.0 : -1.0));
    #endif
    vec3 p = centro + v;
    float dv = cameraPosition.z - p.z;
    p = cristalizar(p, pesoCristal(avanceEn(p.z)), dv);
    vec4 mundo = modelMatrix * vec4(p, 1.0);
    vMundo = mundo.xyz;
    vLocal = position;
    vEscala = esc * f;
    vA = a;
    vD = d;
    vNeon = step(1.0 - aDatos.z * (1.0 + 0.5 * pesoCristal(a)), r.y);
    vSemilla = r.w;
    gl_Position = projectionMatrix * viewMatrix * mundo;
  }
`,hn=`
  ${fn}
  varying vec3 vLocal;
  varying vec3 vEscala;
  varying vec3 vMundo;
  varying float vA;
  varying float vCob;
  varying float vNeon;
  varying float vSemilla;
  varying float vD;
  void main() {
    vec3 n = normalize(cross(dFdx(vMundo), dFdy(vMundo)));
    vec3 v = normalize(cameraPosition - vMundo);
    if (dot(n, v) < 0.0) n = -n;
    float nv = clamp(dot(n, v), 0.0, 1.0);
    float fres = pow(1.0 - nv, 4.0);
    vec3 luz = tinte(vA);
    float cristal = pesoCristal(vA);
    vec3 r = reflect(-v, n);

    // Distancia a la arista más cercana, en unidades del mundo.
    vec3 e = (0.5 - abs(vLocal)) * vEscala;
    float m1 = min(e.x, min(e.y, e.z));
    float m3 = max(e.x, max(e.y, e.z));
    float m2 = e.x + e.y + e.z - m1 - m3;
    #ifdef PLACA
      float arista = 1.0 - smoothstep(0.0, fwidth(m2) * 1.2 + 0.008, m2);
    #else
      float arista = 1.0 - smoothstep(0.0, fwidth(m2) * 1.5 + 0.012, m2);
    #endif

    vec3 col = mix(vec3(0.006, 0.008, 0.009), luz * 0.012, cristal);
    // Linterna que viaja con la cámara.
    vec3 L = cameraPosition + vec3(0.0, 0.0, -5.0) - vMundo;
    float dl = length(L); L /= dl;
    float aten = 1.0 / (1.0 + 0.03 * dl * dl);
    col += (max(dot(n, L), 0.0) * 0.05 + pow(max(dot(n, normalize(L + v)), 0.0), 48.0) * 0.22) * aten * mix(uBlanco, luz, 0.5);
    // Contraluz del núcleo, al fondo.
    vec3 Ln = normalize(vec3(0.0, 0.0, cameraPosition.z - uNucleoD) - vMundo);
    col += pow(max(dot(n, normalize(Ln + v)), 0.0), 30.0) * uFuerzaNucleo * 0.3 * uColorNucleo;
    col += entorno(r, vA) * (0.04 + fres * 0.1);

    float pulso = 0.75 + 0.25 * sin(uTiempo * 1.4 + vSemilla * 40.0);
    float filo = (0.02 + 0.03 * vSemilla) + vNeon * mix(1.4, 0.95, cristal) * pulso + cristal * 0.06;
    col += arista * mix(luz, uBlanco, 0.25 - 0.1 * cristal) * filo;

    #ifdef PLACA
      // Celosía: algunas placas son pantallas con líneas de datos. Cristal: vidrio que refleja y refracta.
      float pantalla = step(0.86, vSemilla) * (1.0 - cristal);
      vec2 q = vLocal.xz * vEscala.xz;
      float lineas = step(0.55, fract(q.x * 3.0)) * step(0.3, fract(q.y * 1.7 + vSemilla * 9.0));
      col += pantalla * luz * lineas * 0.12 * pulso;
      // Vidrio oscuro: refracta el núcleo en un punto con dispersión y refleja bandas de color en los bordes.
      vec3 disp = vec3(haciaNucleo(refract(-v, n, 0.84), vMundo, 900.0), haciaNucleo(refract(-v, n, 0.88), vMundo, 900.0), haciaNucleo(refract(-v, n, 0.92), vMundo, 900.0));
      disp *= smoothstep(4.0, 12.0, vD); // de cerca, la faceta ocuparía media pantalla
      col = mix(col, luz * 0.008, cristal * 0.85);
      col += cristal * (disp * (0.5 + 1.5 * arista) * (0.5 + uFuerzaNucleo) + entorno(r, vA) * fres * 0.7 + arista * mix(luz, uBlanco, 0.3) * 0.6);
    #else
      // Varilla de vidrio: una línea de luz por dentro.
      float centro = min(abs(vLocal.x), abs(vLocal.y));
      float linea = 1.0 - smoothstep(0.0, 0.1 + fwidth(centro) * 1.5, centro);
      col += cristal * linea * mix(luz, uBlanco, 0.2) * (0.08 + 0.35 * vNeon) * pulso;
    #endif

    // Onda de luz que recorre el túnel hacia el fondo.
    float onda = exp(-pow((vD - mod(uTiempo * 13.0, 70.0)) / 1.4, 2.0));
    col += (arista * 1.2 + 0.03) * onda * luz;

    // Antes del mundo claro las piezas se blanquean; al final, todo es luz.
    col = mix(col, uBlanco * (0.5 + arista), smoothstep(0.672, 0.7, vA) * 0.45);
    col *= vCob * uAparece;
    col = mix(col, uFondo, niebla(vD, 1.0));
    col = mix(col, uBlanco * 2.0, uBlanqueo);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,gn=`
  ${pn}
  attribute vec4 aChispa;
  varying vec3 vColor;
  varying float vD;
  float parpadeo(float s, float tipo, float t) {
    if (tipo < 0.5) return 0.45 + 0.55 * pow(0.5 + 0.5 * sin(t * (0.5 + s * 1.6) + s * 50.0), 2.0);
    if (tipo < 1.5) {
      float x = t * (1.2 + s * 4.5) + s * 91.0;
      float i = floor(x);
      float v = mix(azar(i + s * 137.0), azar(i + 1.0 + s * 137.0), smoothstep(0.0, 0.2, fract(x)));
      return 0.04 + pow(v, 3.0) * 1.9;
    }
    if (tipo < 2.5) {
      float x = t * (0.3 + s * 0.6) + s * 13.0;
      return 0.05 + step(0.62, azar(floor(x) + s * 71.0)) * exp(-fract(x) * 7.0) * 3.5;
    }
    if (tipo < 3.5) return 1.0;
    return pow(0.5 + 0.5 * sin(t * (1.0 + s * 3.0) + s * 80.0), 8.0) * 1.4 + 0.02;
  }
  // Paleta de cada mundo, elegida al azar por chispa y por vuelta.
  vec3 colorDe(float a, vec4 r) {
    float x = r.y;
    vec3 celosia = x < 0.42 ? uBlanco : x < 0.86 ? uTurquesa : x < 0.96 ? uMenta : uCalido;
    vec3 cristal = x < 0.4 ? uCalido : x < 0.62 ? uMagenta : x < 0.76 ? uAmbar : x < 0.95 ? uBlanco : uTurquesa;
    vec3 claro = x < 0.5 ? uTurquesa : x < 0.8 ? uBlanco : uAzul;
    vec3 c = r.z < pesoCristal(a) ? cristal : celosia;
    return r.w < pesoClaro(a) ? claro : c;
  }
  void main() {
    vec3 c = instanceMatrix[3].xyz;
    float s0 = aChispa.x;
    float tipo = aChispa.y;
    float d0 = -c.z;
    if (tipo > 2.5 && tipo < 3.5) d0 -= uTiempo * (8.0 + s0 * 14.0); // los paquetes corren hacia la cámara
    float ciclo;
    float d = cinta(d0, ciclo);
    vec4 rg = azar4(aChispa.w * 311.7 + ciclo * 5.31); // azar del grupo en esta vuelta
    vec4 r = azar4(s0 * 733.1 + ciclo * 3.17);
    float zMundo = cameraPosition.z - d;
    float a = avanceEn(zMundo);
    // Densidad de nubes por mundo: más en el cristal, pocas en el claro.
    float densidad = mix(mix(0.7, 1.0, pesoCristal(a)), 0.12, pesoClaro(a));
    float esta = tipo > 3.5 ? 1.0 : step(rg.x, densidad);
    float nace = brotar(d, r.x * 0.35);
    float destelloNacer = 1.0 + 3.0 * (1.0 - nace) * step(0.01, nace); // asoman con un fogonazo
    float brillo = parpadeo(s0, tipo, uTiempo) * aChispa.z * destelloNacer;
    if (tipo > 2.5 && tipo < 3.5) brillo *= sin(PI * clamp(d / (uVentana - uMargen), 0.0, 1.0));
    // Las nubes cambian de esquina en cada vuelta.
    float k = floor(rg.y * 4.0) * PI * 0.5;
    vec3 esc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
    vec3 centro = girarZ(vec3(c.xy, 0.0), k) + vec3(0.0, 0.0, zMundo);
    centro.xy += vec2(sin(uTiempo * 0.5 + s0 * 20.0), cos(uTiempo * 0.37 + s0 * 13.0)) * 0.025;
    // Estela: con velocidad, las chispas se alargan a lo largo del túnel.
    float estela = 1.0 + clamp(uVelocidad * 0.03, 0.0, 1.6) * (tipo > 3.5 ? 1.8 : 1.0) * (1.0 - pesoClaro(a));
    brillo /= sqrt(estela);
    float px = 1.1 * pixelEn(centro);
    vec3 f = max(vec3(1.0), vec3(px) / esc);
    float cob = 1.0 / segundoMayor(f);
    float s = esta * nace * smoothstep(uVentana - uMargen, uVentana - uMargen - 10.0, d);
    vec3 v = girarZ(mat3(instanceMatrix) * (position * f * vec3(s, s, s * estela)), k);
    vec3 p = centro + v;
    p = cristalizar(p, pesoCristal(avanceEn(p.z)), cameraPosition.z - p.z);
    vec4 mundo = modelMatrix * vec4(p, 1.0);
    vD = d;
    vColor = mix(colorDe(a, r) * brillo * sqrt(cob) * smoothstep(1.0, 5.0, d) + uFondo * pesoClaro(a), uFondo, niebla(d, 0.62));
    gl_Position = projectionMatrix * viewMatrix * mundo;
  }
`,_n=`
  ${fn}
  varying vec3 vColor;
  varying float vD;
  void main() {
    vec3 col = vColor * uAparece;
    col = mix(col, uBlanco * 2.0, uBlanqueo);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,vn=`
  ${pn}
  attribute vec4 aEsquirla;
  varying vec3 vMundo;
  varying float vA;
  varying float vD;
  varying float vSemilla;
  void main() {
    vec3 c = instanceMatrix[3].xyz;
    float ciclo;
    float d = cinta(-c.z, ciclo);
    vec4 r = azar4(aEsquirla.x * 211.9 + ciclo * 4.77);
    float zMundo = cameraPosition.z - d;
    float a = avanceEn(zMundo);
    float peso = mix(0.12, 1.0, pesoCristal(a)) * (1.0 - pesoClaro(a));
    float s = step(r.x, peso) * brotar(d, 0.4) * smoothstep(uVentana - uMargen, uVentana - uMargen - 10.0, d);
    float k = r.y * 2.0 * PI;
    vec3 eje = vec3(sin(aEsquirla.z) * cos(aEsquirla.w), sin(aEsquirla.z) * sin(aEsquirla.w), cos(aEsquirla.z));
    vec3 v = rotarEje(mat3(instanceMatrix) * position * s, eje, uTiempo * aEsquirla.y + r.z * 6.283);
    vec3 p = girarZ(vec3(c.xy, 0.0), k) + vec3(0.0, 0.0, zMundo) + girarZ(v, k);
    p = cristalizar(p, pesoCristal(avanceEn(p.z)), cameraPosition.z - p.z);
    vec4 mundo = modelMatrix * vec4(p, 1.0);
    vMundo = mundo.xyz;
    vA = a;
    vD = d;
    vSemilla = r.w;
    gl_Position = projectionMatrix * viewMatrix * mundo;
  }
`,yn=`
  ${fn}
  varying vec3 vMundo;
  varying float vA;
  varying float vD;
  varying float vSemilla;
  void main() {
    vec3 n = normalize(cross(dFdx(vMundo), dFdy(vMundo)));
    vec3 v = normalize(cameraPosition - vMundo);
    if (dot(n, v) < 0.0) n = -n;
    float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 2.5);
    vec3 luz = tinte(vA);
    vec3 L = normalize(cameraPosition + vec3(0.0, 0.0, -5.0) - vMundo);
    float destello = pow(max(dot(reflect(-L, n), v), 0.0), 60.0);
    vec3 vidrio = mix(luz, uBlanco, fres * 0.6);
    vec3 col = vidrio * (0.008 + fres * 0.14) + uBlanco * destello * 2.2 + entorno(reflect(-v, n), vA) * fres * 0.5;
    col *= (0.7 + 0.3 * sin(uTiempo * 0.9 + vSemilla * 31.0)) * uAparece * (1.0 - niebla(vD, 0.9)) * smoothstep(1.5, 6.0, vD);
    gl_FragColor = vec4(col * (1.0 - uBlanqueo), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,bn=`
  float radioTubo(float th, float z) {
    return 5.4 * (1.0 + 0.14 * sin(2.0 * th + z * 0.11 + uTiempo * 0.25) + 0.08 * sin(5.0 * th - z * 0.23 + 1.3) + 0.05 * sin(z * 0.07 + uTiempo * 0.1));
  }
`,xn=`
  ${pn}
  ${bn}
  varying vec3 vMundo;
  varying float vD;
  varying float vClaro;
  varying vec3 vRuido;
  void main() {
    float th = atan(position.y, position.x);
    float d = -position.z - uMargen; // la geometría va de 0 a -uVentana
    float z = cameraPosition.z - d;
    float c = pesoClaro(avanceEn(z));
    float r = radioTubo(th, z) * (1.0 + (1.0 - c) * 2.5);
    vec3 p = vec3(cos(th) * r, sin(th) * r, z);
    vec4 mundo = modelMatrix * vec4(p, 1.0);
    vMundo = mundo.xyz;
    vD = d;
    vClaro = c;
    vRuido = vec3(th / (2.0 * PI) * 11.0, z * 0.2, 0.0); // 11 celdas por vuelta
    gl_Position = projectionMatrix * viewMatrix * mundo;
  }
`,Sn=`
  ${fn}
  varying vec3 vMundo;
  varying float vD;
  varying float vClaro;
  varying vec3 vRuido;
  vec2 azar2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453123);
  }
  // Celdas de Voronoi animadas sobre la superficie del tubo (la vuelta se cierra sin costura):
  // distancia al centro más cercano y al segundo.
  vec2 celdas(vec2 x) {
    vec2 i = floor(x); vec2 f = fract(x);
    vec2 res = vec2(8.0);
    for (int j = -1; j <= 1; j++) for (int h = -1; h <= 1; h++) {
      vec2 b = vec2(float(h), float(j));
      vec2 id = i + b;
      id.x = mod(id.x, 11.0);
      vec2 o = 0.5 + 0.4 * sin(uTiempo * 0.35 + 6.2831 * azar2(id));
      vec2 rr = b + o - f;
      float dd = dot(rr, rr);
      if (dd < res.x) { res.y = res.x; res.x = dd; } else if (dd < res.y) { res.y = dd; }
    }
    return sqrt(res);
  }
  void main() {
    vec3 n = normalize(cross(dFdx(vMundo), dFdy(vMundo)));
    vec3 v = normalize(cameraPosition - vMundo);
    if (dot(n, v) < 0.0) n = -n;
    vec2 cel = celdas(vRuido.xy);
    float ancho = fwidth(cel.x) * 1.5;
    float burbuja = 1.0 - smoothstep(0.36 - ancho, 0.36 + ancho, cel.x);
    float aro = 1.0 - smoothstep(0.0, 0.06 + ancho, abs(cel.x - 0.4));
    float surco = 1.0 - smoothstep(0.0, 0.1, cel.y - cel.x);
    // Pared turquesa intensa con formas blandas blancas, como nubes o burbujas, y un poco de azul en los surcos.
    vec3 pared = mix(uTurquesa, uAzul, 0.25 * surco) * 0.62;
    vec3 col = mix(pared, uBlanco * 0.82, burbuja);
    col = mix(col, uTurquesa * 0.35, aro * 0.5);
    vec3 L = normalize(vec3(0.0, 0.0, cameraPosition.z - 60.0) - vMundo);
    col *= 0.7 + 0.3 * max(dot(n, L), 0.0);
    col = mix(col, uBlanco * 0.85, smoothstep(30.0, 70.0, vD) * 0.6); // se aclara hacia el fondo
    col = mix(col, uFondo, niebla(vD, 0.45) * (1.0 - vClaro * 0.6));
    col = mix(col, uBlanco * 2.0, uBlanqueo);
    gl_FragColor = vec4(col, vClaro * uAparece * smoothstep(uVentana - uMargen, uVentana - uMargen - 6.0, vD));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Cn=`
  ${pn}
  ${bn}
  attribute vec4 aBurbuja;
  varying vec3 vMundo;
  varying vec3 vNormal;
  varying float vD;
  varying float vSemilla;
  void main() {
    float ciclo;
    float d = cinta(aBurbuja.y, ciclo);
    vec4 r = azar4(aBurbuja.w * 97.1 + ciclo * 3.3);
    float th = aBurbuja.x + r.x * 6.283;
    float z = cameraPosition.z - d;
    float c = pesoClaro(avanceEn(z));
    float tam = aBurbuja.z * c * (1.0 + 0.06 * sin(uTiempo * 1.3 + r.y * 20.0)) * step(0.25, r.z);
    vec3 er = vec3(cos(th), sin(th), 0.0);
    vec3 et = vec3(-sin(th), cos(th), 0.0);
    vec3 ez = vec3(0.0, 0.0, 1.0);
    vec3 escala = vec3(0.65, 1.0, 1.15) * tam;
    vec3 q = position;
    vec3 p = er * (radioTubo(th, z) - tam * 0.3) + vec3(0.0, 0.0, z) + er * q.x * escala.x + et * q.y * escala.y + ez * q.z * escala.z;
    vec3 nl = normalize(q / max(escala, vec3(1e-4)));
    vNormal = normalize(er * nl.x + et * nl.y + ez * nl.z);
    vec4 mundo = modelMatrix * vec4(p, 1.0);
    vMundo = mundo.xyz;
    vD = d;
    vSemilla = r.w;
    gl_Position = projectionMatrix * viewMatrix * mundo;
  }
`,wn=`
  ${fn}
  varying vec3 vMundo;
  varying vec3 vNormal;
  varying float vD;
  varying float vSemilla;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 v = normalize(cameraPosition - vMundo);
    float nv = clamp(dot(n, v), 0.0, 1.0);
    float fres = pow(1.0 - nv, 3.0);
    vec3 L = normalize(vec3(0.3, 0.6, -1.0));
    float dif = 0.55 + 0.45 * max(dot(n, L), 0.0);
    float spec = pow(max(dot(reflect(-L, n), v), 0.0), 40.0);
    vec3 iris = mix(uTurquesa, uAzul, 0.5 + 0.5 * sin(fres * 6.0 + vSemilla * 10.0));
    float envolver = smoothstep(-0.4, 1.0, dot(n, L));
    vec3 col = mix(uTurquesa * 0.55, uBlanco * 0.92, envolver) + iris * fres * 0.5 + uBlanco * spec * 1.2;
    col = mix(col, uFondo, niebla(vD, 0.45));
    col = mix(col, uBlanco * 2.0, uBlanqueo);
    gl_FragColor = vec4(col * uAparece, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Tn=`
  uniform float uTam;
  uniform float uNucleoD;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0;
    vec4 mv = viewMatrix * vec4(0.0, 0.0, cameraPosition.z - uNucleoD, 1.0);
    mv.xy += position.xy * uTam;
    gl_Position = projectionMatrix * mv;
  }
`,En=`
  uniform float uTiempo;
  uniform float uFuerzaNucleo;
  uniform float uAparece;
  uniform float uCerca;
  uniform vec3 uColorNucleo;
  uniform vec3 uBlanco;
  varying vec2 vUv;
  void main() {
    float r = length(vUv);
    float a = atan(vUv.y, vUv.x);
    float centro = exp(-r * r * 1600.0) * 12.0 + exp(-r * 30.0) * 1.4;
    float esfera = exp(-r * r * 160.0) * 0.9 * uCerca;
    float aro = exp(-pow((r - 0.15) / 0.02, 2.0)) * 0.3 * uCerca * (0.8 + 0.2 * sin(uTiempo * 1.7));
    float halo = exp(-r * 9.0) * 0.3 + exp(-r * 3.2) * 0.05;
    float rayos = pow(abs(sin(a * 3.0 + uTiempo * 0.04)), 80.0) * exp(-r * 9.0) * 0.5;
    float raya = exp(-abs(vUv.y) * 160.0) * exp(-abs(vUv.x) * 3.5) * 0.5;
    vec3 col = uBlanco * (centro + esfera) + uColorNucleo * (aro + halo + rayos + raya);
    col *= uFuerzaNucleo * uAparece * (1.0 - smoothstep(0.7, 1.0, r));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Dn({inicio:e=-14,largo:t=400,ligero:n=!1}={}){let i=cn(20261028),o=()=>{let e=0;for(let t=0;t<4;t++)e+=i();return(e-2)*1.732},s=n?[X,5.4,8.2]:[X,5,6.8,9.2,12.5],l=[...s.slice().reverse().map(e=>-e),...s],u=e=>{let t=Math.abs(e),n=0;for(let e=0;e<s.length;e++)Math.abs(s[e]-t)<Math.abs(s[n]-t)&&(n=e);return n},f=n?.42:1,p=new r,m=new r,h=new r,g=new r,_=new A,v=[],y=(e,t,n,r,i,a,o,s,c,l,u,d)=>v.push(e,t,n,r,i,a,o,s,c,l,u,d),b=[.08,.06,.05,.045,.045],x=n?[.85,.5,.32]:[.95,.8,.62,.48,.36];for(let e=0;e<rn;e++){let t=-e*nn,r=e%4==0;for(let e=0;e<l.length;e++)for(let n=0;n<l.length-1;n++){let a=l[n],o=l[n+1],s=Math.max(u(l[e]),u(Math.min(Math.abs(a),Math.abs(o)))),c=b[s]*(r?1.7:1)*(.8+.4*i()),d=s===0?r?.3:.06:.03,f=Math.min(1,x[s]*(r?1.15:1));y(a,l[e],t,o,l[e],t,c,0,Math.sign(l[e]),0,f,d),y(l[e],a,t,l[e],o,t,c,Math.sign(l[e]),0,0,f,d)}for(let e of l)for(let n of l){let r=Math.max(u(e),u(n));y(e,n,t,e,n,t-nn,b[r]*(.8+.4*i()),e,n,0,r===0?1:x[r]*.9,r===0?.12:.02)}for(let e=0;e<(n?8:26);e++){let e=s[Math.min(s.length-1,Math.floor(i()*i()*s.length))],n=i()<.5?-1:1,r=i()<.5,a=(X+o()*2.4)*(i()<.5?1:-1),c=t-i()*nn,l=.022+i()*.025,u=n*e,d=.4+i()*2.4;i()<.55?r?y(u,a,c,u,a,c-d,l,n,0,0,.8,.05):y(a,u,c,a,u,c-d,l,0,n,0,.8,.05):r?y(u,a,c,u,a+d,c,l,n,0,0,.8,.05):y(a,u,c,a+d,u,c,l,0,n,0,.8,.05)}}let S=[];for(let e=0;e<rn;e++){let t=-e*nn;for(let e=0;e<(n?14:40);e++){let e=t-i()*nn;if(i()<.7){let t=s[Math.min(s.length-1,Math.floor(i()*i()*s.length))],n=i()<.5?-1:1,r=(i()<.5?-1:1)*Math.max(0,X+o()*1.8),a=.12+i()**2*1.5,c=.2+i()**1.6*2.4,l=.02+i()*.03,u=n*(t+l*.5+.02);i()<.5?S.push(u,r,e,l,a,c):S.push(r,u,e,a,l,c)}else{let e=(i()<.5?-1:1)*(X+Math.abs(o())*2.6),n=(i()<.5?-1:1)*(X+Math.abs(o())*2.6);S.push(e,n,t-.05,.25+i()**2*1.3,.2+i()**2*1.1,.02+i()*.02)}}}let C=[],w=(e,t,n,r,a,o,s,c,l)=>C.push(e,t,n,r,a,o,i(),s,c,l),T=Math.round(150*f);for(let e=0;e<T;e++){let e=-i()*an,t=Math.round(14+i()**1.6*80),n=i()<.5?-1:1,r=i()<.5?-1:1,a,c;i()<.86?(a=n*(X+Math.abs(o())*1.1),c=r*(X+Math.abs(o())*1.1)):i()<.5?(a=n*(X+Math.abs(o())*1.5),c=(i()*2-1)*3):(a=(i()*2-1)*3,c=r*(X+Math.abs(o())*1.5));let l=i();for(let n=0;n<t;n++){let t=a+o()*.45,n=c+o()*.45,r=e+o()*1.4,d=i()<.3?0:i()<.8?1:2,f=.7+i()**4*5.5,p=.04+i()**3*.26,m=.04+i()**3*.18,h=i()<.12;i()<.28?(r=-Math.round(-r/nn)*nn+.06,Math.abs(t)<X&&Math.abs(n)<X&&(Math.abs(t)>Math.abs(n)?t=Math.sign(t)*X:n=Math.sign(n)*X),w(t,n,r,p,m,.02,d,f,l)):Math.abs(t)>=Math.abs(n)?(t=Math.sign(t||1)*(s[u(t)]-.04),w(t,n,r,.02,m,h?.6+i()*1.4:p,d,f,l)):(n=Math.sign(n||1)*(s[u(n)]-.04),w(t,n,r,p,.02,h?.6+i()*1.4:m,d,f,l))}}for(let e=0;e<Math.round(120*f);e++)w((i()<.5?-1:1)*s[i()<.7?0:1],(i()<.5?-1:1)*s[i()<.7?0:1],-i()*an,.04,.04,.6+i()*1.6,3,1.4+i()*2,i());for(let e=0;e<Math.round(1100*f);e++){let e=i()*Math.PI*2,t=3.2+i()**1.3*9,n=.02+i()**3*.04;w(Math.cos(e)*t,Math.sin(e)*t,-i()*an,n,n,n,4,.8+i()*1.5,i())}let D=[];for(let e=0;e<Math.round(900*f);e++){let e=i()*Math.PI*2,t=4.1+i()**2*6,n=i(),r,a,s;n<.45?(r=-Math.sin(e),a=Math.cos(e),s=o()*.3):n<.8?(r=o()*.3,a=o()*.3,s=1):(r=o(),a=o(),s=o()),D.push(Math.cos(e)*t,Math.sin(e)*t,-i()*an,r,a,s,.03+i()*.1,.02+i()*.05,.25+i()**1.5*1.3)}let O={uTiempo:{value:0},uFlujo:{value:0},uVelocidad:{value:0},uAparece:{value:0},uNacer:{value:0},uBlanqueo:{value:0},uAltoPx:{value:900},uVentana:{value:an},uMargen:{value:on},uZ0:{value:sn},uRecorrido:{value:t+12},uFondo:{value:new B(`#030506`)},uNiebla:{value:.035},uFuerzaNucleo:{value:.3},uNucleoD:{value:70},uColorNucleo:{value:new B(`#9FF0E2`)},uTurquesa:{value:new B(`#38CCB2`)},uBlanco:{value:new B(`#F5F5F7`)},uCalido:{value:new B(`#FF8A3D`)},uMagenta:{value:new B(`#F062B0`)},uAcero:{value:new B(`#A8C4D4`)},uAzul:{value:new B(`#3D7BFF`)},uMenta:{value:new B(`#8AF7E2`)},uAmbar:{value:new B(`#FFC07A`)}},k=(e,t,n={})=>new W({uniforms:{...O},vertexShader:e,fragmentShader:t,...n}),ee=k(mn,hn),te=k(mn,hn,{defines:{PLACA:``}}),j=k(gn,_n),ne=k(vn,yn,{transparent:!0,blending:2,depthWrite:!1}),M=k(xn,Sn,{transparent:!0,side:1}),N=k(Cn,wn),ie={value:60},ae={value:0},se=new W({uniforms:{uTiempo:O.uTiempo,uFuerzaNucleo:O.uFuerzaNucleo,uAparece:O.uAparece,uColorNucleo:O.uColorNucleo,uBlanco:O.uBlanco,uNucleoD:O.uNucleoD,uTam:ie,uCerca:ae},vertexShader:Tn,fragmentShader:En,transparent:!0,blending:2,depthWrite:!1}),P=new Ae;P.name=`tunel`;let ce=()=>new oe(1,1,1),F=new oe(1,1,1,1,1,n?4:6),le=v.length/12,de=new Float32Array(le*4),I=new c(F,ee,le);for(let e=0;e<le;e++){let t=e*12;h.set(v[t+3]-v[t],v[t+4]-v[t+1],v[t+5]-v[t+2]);let n=h.length();h.divideScalar(n),g.set(v[t+7],v[t+8],v[t+9]),g.lengthSq()<1e-6&&g.set(0,0,1),g.normalize(),Math.abs(g.dot(h))>.98&&g.set(1,0,0),p.crossVectors(g,h).normalize(),m.crossVectors(h,p);let r=v[t+6];_.makeBasis(p.multiplyScalar(r),m.multiplyScalar(r),h.multiplyScalar(n)),_.setPosition((v[t]+v[t+3])/2,(v[t+1]+v[t+4])/2,(v[t+2]+v[t+5])/2),I.setMatrixAt(e,_),de.set([i(),v[t+10],v[t+11],0],e*4)}F.setAttribute(`aDatos`,new E(de,4));let fe=ce(),pe=S.length/6,me=new Float32Array(pe*4),L=new c(fe,te,pe);for(let e=0;e<pe;e++){let t=e*6;_.makeScale(S[t+3],S[t+4],S[t+5]).setPosition(S[t],S[t+1],S[t+2]),L.setMatrixAt(e,_),me.set([i(),.75,.04,1],e*4)}fe.setAttribute(`aDatos`,new E(me,4));let he=ce(),R=C.length/10,z=new Float32Array(R*4),ge=new c(he,j,R);for(let e=0;e<R;e++){let t=e*10;_.makeScale(C[t+3],C[t+4],C[t+5]).setPosition(C[t],C[t+1],C[t+2]),ge.setMatrixAt(e,_),z.set([C[t+6],C[t+7],C[t+8],C[t+9]],e*4)}he.setAttribute(`aChispa`,new E(z,4));let _e=new ye(.5,0),ve=D.length/9,V=new Float32Array(ve*4),be=new c(_e,ne,ve);for(let e=0;e<ve;e++){let t=e*9;h.set(D[t+3],D[t+4],D[t+5]).normalize(),g.set(D[t],D[t+1],0).normalize(),Math.abs(g.dot(h))>.98&&g.set(0,0,1),p.crossVectors(g,h).normalize(),m.crossVectors(h,p),_.makeBasis(p.multiplyScalar(D[t+6]),m.multiplyScalar(D[t+7]),h.multiplyScalar(D[t+8])),_.setPosition(D[t],D[t+1],D[t+2]),be.setMatrixAt(e,_),V.set([i(),(i()-.5)*.6,i()*Math.PI,i()*Math.PI*2],e*4)}_e.setAttribute(`aEsquirla`,new E(V,4));let xe=new ue(1,1,an,n?48:80,n?48:96,!0);xe.rotateX(-Math.PI/2),xe.translate(0,0,-76.8/2);let Se=new d(xe,M);Se.renderOrder=1;let Ce=new a(1,n?2:3),we=Math.round(150*f),Te=new Float32Array(we*4);for(let e=0;e<we;e++)Te.set([i()*Math.PI*2,i()*an,.35+i()**2*1.5,i()],e*4);Ce.setAttribute(`aBurbuja`,new E(Te,4));let Ee=new c(Ce,N,we),De=new re(1,1),Oe=new d(De,se);Oe.renderOrder=2;let H=e=>{let t=e.getRenderTarget();O.uAltoPx.value=t?t.height:e.domElement.height};for(let e of[I,L,ge,be,Se,Ee,Oe])e.frustumCulled=!1,e.onBeforeRender=H,P.add(e);P.visible=!1;let U={fondo:new B(`#030506`),niebla:.035,exposicion:.9,brillo:{fuerza:.8,umbral:.6}},G={oscuro:new B(`#030506`),cristal:new B(`#0A0509`),claro:new B(`#D9EEF0`),blanco:new B(`#FFFFFF`),nucleoCelosia:new B(`#B8FFF1`),nucleoCristal:new B(`#FFC9A0`),nucleoClaro:new B(`#FFFFFF`)},ke=null,K=null,je=0,Me=0,q=0,Ne=1,Pe=t+12,Fe=an/Pe;function Ie({tiempo:e=0,avance:t=0,aparece:n=1,lento:r=0}={}){let i=ke===null?0:ln(e-ke,0,.1);ke=e;let a=ln(t),o=1-.8*r;je+=i*o;let s=un(a,.42,.47),c=un(a,.685,.715),l=un(a,.95,1),u=un(a,0,.08);if(K!==null&&i>0){let e=a-K;Math.abs(e)>1e-5&&(Ne=Math.sign(e));let t=Math.min(Math.abs(e)*Pe/i,80);q+=(t-q)*(1-Math.exp(-4*i))}K=a;let d=(6-2*s-1.5*c)*u*o;Me+=i*d*Ne,O.uTiempo.value=je,O.uFlujo.value=Me,O.uVelocidad.value=q+d,O.uAparece.value=n,O.uNacer.value=u,O.uBlanqueo.value=l;let f=dn(a,.7,.014);O.uColorNucleo.value.copy(G.nucleoCelosia).lerp(G.nucleoCristal,s).lerp(G.nucleoClaro,c);let p=un(a,.63,.69);O.uFuerzaNucleo.value=(.25+.35*s+.5*p)*(1-.8*c)*u+.7*f+2*l,ie.value=55+30*p+25*f+50*l,ae.value=p*(1-c)+l;let m=un(a,.64,.69);U.fondo.copy(G.oscuro).lerp(G.cristal,s*(1-c)).lerp(G.claro,c).lerp(G.blanco,l),U.niebla=(.12-.085*u)*(1-s)+.03*s,U.niebla=U.niebla*(1-c)+.016*c,U.niebla*=1-.7*l,U.exposicion=.9+.1*s*(1-m)-.05*m+.5*l,U.brillo.fuerza=(.85+.2*s)*(1-m)+.35*m+.25*f+.8*l,U.brillo.umbral=Math.max(.1,(.55-.05*s)*(1-m)+.92*m-.12*f-.5*l),O.uFondo.value.copy(U.fondo),O.uNiebla.value=U.niebla,P.visible=n>.001;let h=a<.72;return I.visible=L.visible=h,be.visible=h&&a+Fe>.38,Se.visible=Ee.visible=a+Fe>.68&&l<.985,ge.visible=l<.985,U}function Le(){for(let e of[I,L,ge,be,Ee])e.dispose();for(let e of[F,fe,he,_e,xe,Ce,De])e.dispose();for(let e of[ee,te,j,ne,M,N,se])e.dispose();P.removeFromParent()}return P.userData.piezas={vigas:le,placas:pe,chispas:R,esquirlas:ve,burbujas:we},P.userData.inicio=e,{grupo:P,actualizar:Ie,liberar:Le}}function On(e,t,n,r){let i=2*Math.PI*t,a=n/(Math.PI*t),o=1/(i*i),s=r*n/i,c=e;return{valor:e,velocidad:0,objetivo:e,paso(e){if(e<=0)return;let t=(this.objetivo-c)/e;c=this.objetivo;let n=Math.max(o,e*e/2+e*a/2,e*a);this.velocidad+=(this.objetivo+s*t-this.valor-a*this.velocidad)*e/n,this.valor+=this.velocidad*e}}}var kn=new Float32Array(256).map((e,t)=>Math.sin(t*12.9898+78.233)*43758.5453%1);function An(e){let t=Math.floor(e),n=e-t,r=kn[t&255],i=kn[t+1&255],a=n*n*(3-2*n);return r+(i-r)*a}function jn(e,t=3){return t===1?An(e):(An(e)+An(e*2.03+17.1)*.5+(t>2?An(e*4.01+41.7)*.25:0))/(t>2?1.75:1.5)}var Z=new r(1,0,0),Mn=new r(0,1,0),Q=new r(0,0,1),Nn={Spine:[[Z,.5],[Q,.22]],Spine1:[[Z,.4]],Spine2:[[Z,.35]],LeftUpLeg:[[Z,-1.5],[Q,.3]],LeftLeg:[[Z,.75]],LeftFoot:[[Z,.75]],RightUpLeg:[[Z,.3],[Q,-.12]],RightLeg:[[Z,1.27]],RightArm:[[Z,-1.15],[Q,1.2]],RightForeArm:[[Z,-.1]],LeftArm:[[Mn,.7],[Q,-.5]],LeftForeArm:[[Mn,.2]]},Pn={Spine:[[Z,.08]],LeftUpLeg:[[Z,-.32],[Q,.05]],LeftLeg:[[Z,.5]],RightUpLeg:[[Z,-.16],[Q,-.05]],RightLeg:[[Z,.36]]},Fn={LeftArm:[Q,.08],RightArm:[Q,-.08],LeftForeArm:[Q,.5],RightForeArm:[Q,-.5]},In={LeftArm:[Q,1],RightArm:[Q,-.9],LeftForeArm:[Q,.3],RightForeArm:[Q,-.35]},Ln=e=>e.replace(/_\d+$/,``);function Rn(e){let t=new H;e.getWorldQuaternion(t).invert();let n=new Map;e.traverse(e=>{let r=Ln(e.name);if(!e.isBone||n.has(r)||!(r in Fn))return;let i=e.parent.getWorldQuaternion(new H).premultiply(t);n.set(r,{hueso:e,padre:i,padreInv:i.clone().invert(),reposo:e.quaternion.clone(),fase:n.size*9.1})});let r=new H,i=new H,a=new H;return(e,t,o)=>{if(!(e<=0))for(let[s,c]of n){let[n,l]=Fn[s],u=In[s][1],d=.07*jn(o*.12+c.fase,1);r.setFromAxisAngle(n,l+(u-l)*t+d).premultiply(c.padreInv).multiply(c.padre),i.copy(c.reposo).premultiply(r),a.copy(c.hueso.quaternion).slerp(i,e),c.hueso.quaternion.copy(a)}}}function zn(e,t){let n=new H;e.getWorldQuaternion(n).invert();let r=[],i=new Set;return e.traverse(e=>{let a=Ln(e.name);if(!e.isBone||i.has(a)||!(a in t))return;i.add(a);let o=e.parent.getWorldQuaternion(new H).premultiply(n),s=new H;for(let[e,n]of t[a])s.multiply(new H().setFromAxisAngle(e,n));s.premultiply(o.clone().invert()).multiply(o),r.push({hueso:e,meta:e.quaternion.clone().premultiply(s)})}),e=>{if(!(e<=0))for(let t of r)t.hueso.quaternion.slerp(t.meta,e)}}var Bn={ToeBase:.01,Foot:.13,Leg:.07};function Vn(e){let t=[],n=new Set;e.traverse(e=>{let r=Ln(e.name),i=r.match(/^(?:Left|Right)(ToeBase|Foot|Leg)$/)?.[1];e.isBone&&i&&!n.has(r)&&(n.add(r),t.push({hueso:e,margen:Bn[i]}))});let i=new r;return()=>{(e.parent||e).updateMatrixWorld(!0);let n=1/0;for(let e of t)n=Math.min(n,e.hueso.getWorldPosition(i).y-e.margen);return n}}var Hn=16,Un=[.05,.13,.26,.45,.75,1.4];function Wn(e){let t=e;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Gn(e){let t=new M,n=new pe(40,1,.01,20);n.position.z=1;let i=new Ae;t.add(i);let a=new P(document.createElement(`canvas`));a.generateMipmaps=!1,a.minFilter=p;let o=new W({uniforms:{uMapa:{value:a},uOpacidad:{value:1}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform sampler2D uMapa; uniform float uOpacidad; varying vec2 vUv; void main(){ gl_FragColor = vec4(texture2D(uMapa, vUv).rgb * (0.92 + 0.08 * vUv.y), uOpacidad); }`,side:2,transparent:!0,depthWrite:!1}),s=new u(new Oe,new y({color:16777215,transparent:!0,opacity:0}));i.add(s);let c=null;function l(){if(c)return!0;try{c=new ve({canvas:e,alpha:!0,antialias:!0,powerPreference:`high-performance`}),c.setClearColor(0,0),c.compile(t,n)}catch{c=null}return!!c}let f=[],m=!1;function h(e,t){for(let e of f)i.remove(e.malla),e.malla.geometry.dispose();f=[];let a=Wn(91),c=Array.from({length:Hn},(e,t)=>(t+a()*.6)/Hn*Math.PI*2),l=(n,r)=>{let i=c[n%Hn]+(a()-.5)*.08*r,o=Un[r]*(.85+a()*.3);return new R(e.x+Math.cos(i)*o/t,e.y+Math.sin(i)*o)},u=Un.map((e,t)=>c.map((e,n)=>l(n,t))),p=2*Math.tan(n.fov*Math.PI/360),m=p*t,h=e=>new r((e.x-.5)*m,(e.y-.5)*p,0),g=[];for(let t=0;t<Un.length;t++)for(let n=0;n<Hn;n++){let s=(n+1)%Hn,c=t===0?[e,u[0][n],u[0][s]]:[u[t-1][n],u[t][n],u[t][s],u[t-1][s]],l=[],p=[],m=c.length===3?[[0,1,2]]:[[0,1,2],[0,2,3]],_=c.reduce((e,t)=>e.add(t),new R).multiplyScalar(1/c.length),v=h(_);for(let[e,t,n]of m)for(let r of[c[e],c[t],c[n]]){let e=h(r).sub(v);l.push(e.x,e.y,0),p.push(r.x,r.y)}let y=new Oe;y.setAttribute(`position`,new je(l,3)),y.setAttribute(`uv`,new je(p,2));let b=new d(y,o);b.position.copy(v),i.add(b);let x=_.distanceTo(e),S=_.clone().sub(e).normalize();f.push({malla:b,origen:v.clone(),dir:S,lejos:x,vel:.35+a()*.5,haciaTi:.4+a()*.9-x*.4,eje:new r(a()-.5,a()-.5,a()-.5).normalize(),giro:(a()-.5)*9});for(let e=0;e<c.length;e++){let t=h(c[e]),n=h(c[(e+1)%c.length]);g.push(t.x,t.y,.001,n.x,n.y,.001)}}s.geometry.dispose(),s.geometry=new Oe,s.geometry.setAttribute(`position`,new je(g,3))}return{preparar:l,capturar(e,t,r,i,o){return l()?(c.setPixelRatio(o),c.setSize(r,i,!1),n.aspect=r/i,n.updateProjectionMatrix(),h(t,r/i),a.image=e,a.needsUpdate=!0,m=!0,this.pintar(0),!0):!1},soltar(){m=!1,e.style.visibility=`hidden`},pintar(r){if(!m)return;e.style.visibility=`visible`;let a=Math.max(0,1-r/.12);i.position.set(Math.sin(r*190)*.012*a,Math.cos(r*230)*.012*a,0),s.material.opacity=Math.min(1,r/.08)*(1-Math.min(1,Math.max(0,(r-.22)/.08)));let l=Math.max(0,(r-.22)/.78);for(let e of f){let t=Math.max(0,l-e.lejos*.25)*1.6;e.malla.position.set(e.origen.x+e.dir.x*e.vel*t,e.origen.y+e.dir.y*e.vel*t-.55*t*t,e.origen.z+e.haciaTi*t),e.malla.quaternion.setFromAxisAngle(e.eje,e.giro*t*.35)}o.uniforms.uOpacidad.value=1-Math.min(1,Math.max(0,(l-.6)/.4)),c.render(t,n)}}}var Kn={uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uRes:{value:new R(1,1)},uAberracion:{value:0},uVelocidad:{value:0},uGrano:{value:.03},uVineta:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTiempo, uAberracion, uVelocidad, uGrano, uVineta;
    uniform vec2 uRes;
    varying vec2 vUv;
    float azar(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float d = length(c);
      vec2 desvio = c * d * uAberracion;
      // desenfoque radial: cuatro muestras hacia el centro, más largas cuanto más deprisa
      vec4 col = vec4(0.0);
      for (int i = 0; i < 4; i++) {
        vec2 uv = vUv - c * uVelocidad * 0.06 * float(i) / 3.0;
        col.r += texture2D(tDiffuse, uv + desvio).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv - desvio).b;
        col.a += texture2D(tDiffuse, uv).a;
      }
      col /= 4.0;
      col.rgb *= mix(1.0, smoothstep(0.9, 0.2, d), uVineta);
      col.rgb += (azar(vUv * uRes + fract(uTiempo * 7.0) * 113.0) - 0.5) * uGrano;
      gl_FragColor = col;
    }
  `};function qn(){return new Vt(Kn)}var Jn=-14,Yn=400,Xn=1.1,Zn=2.6,Qn=2.4,$n=.75,er=.6,tr=4.1,nr=7,rr=1.6,ir=-1,ar=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),$=(e,t,n,r,i,a)=>{let o=ar((e-t)/(n-t));return a&&(o=a(o)),r+o*(i-r)},or=e=>e*e*e,sr=e=>1-(1-e)**3,cr=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,lr=(e,t=.35)=>(e<t?e*e/(2*t):e-t/2)/(1-t/2),ur=(e,t,n)=>ar((e-t)/(n-t));function dr(e){let t=e;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function fr(){let e=new W({uniforms:{uMapa:{value:null},uOpacidad:{value:1}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D uMapa;
      uniform float uOpacidad;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(uMapa, vUv);
        float borde = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x) * smoothstep(0.0, 0.05, vUv.y) * smoothstep(1.0, 0.95, vUv.y);
        gl_FragColor = vec4(c.rgb, borde * uOpacidad);
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!1}),t=new d(new re(43.5,29),e);return t.rotation.z=.42,t.visible=!1,t}function pr(){let e=dr(11),t=[];for(let n=0;n<1400;n++){let n=e()*Math.PI*2,r=e()*2-1,i=70+e()*40,a=Math.sqrt(1-r*r);t.push(Math.cos(n)*a*i,r*i,Math.sin(n)*a*i)}let n=new Oe;return n.setAttribute(`position`,new je(t,3)),new Te(n,new se({color:`#cfd8dc`,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.7,depthWrite:!1}))}function mr(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(0,0,0,1)`),n.addColorStop(.5,`rgba(0,0,0,.45)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new P(e)}function hr(e,t,n,r,i,a){let o=[],s=[[n-i,-r+i,-Math.PI/2],[n-i,r-i,0],[-n+i,r-i,Math.PI/2],[-n+i,-r+i,Math.PI]],c=Math.cos(a),l=Math.sin(a);for(let[n,r,a]of s)for(let s=0;s<=5;s++){let u=a+s/5*(Math.PI/2),d=n+Math.cos(u)*i,f=r+Math.sin(u)*i;o.push(`${(e+d*c-f*l).toFixed(1)}px ${(t+d*l+f*c).toFixed(1)}px`)}return`polygon(${o.join(`,`)})`}function gr({reducido:t,webgl:n,lenis:i,gsap:a}){let o=matchMedia(`(max-width: 720px), (pointer: coarse)`).matches,s=document.getElementById(`viaje`),c=document.getElementById(`viaje-lienzo`);if(!s||!c||t||!n)return;let l=s.querySelector(`.viaje-tableta`),u=s.querySelector(`.viaje-pantalla`),f=s.querySelector(`.viaje-recorrido`),p=s.querySelector(`.viaje-escenario`),m=s.querySelector(`.viaje-frase`),g=s.querySelector(`.viaje-marco`),_=s.querySelector(`.viaje-halo`),v=document.getElementById(`hablemos`),y=document.getElementById(`pulsar`),b=s.querySelector(`.viaje-mensajes`);m.setAttribute(`aria-label`,m.textContent.replace(/\s+/g,` `).trim());let x=[...m.querySelectorAll(`.viaje-linea`)].map(e=>{let t=e.textContent.trim().split(/\s+/);return e.textContent=``,e.setAttribute(`aria-hidden`,`true`),t.map((n,r)=>{let i=document.createElement(`span`);return i.textContent=n,e.append(i),r<t.length-1&&e.append(` `),i})}),S=0,C=0,w=e=>{S=+!!e,y?.setAttribute(`aria-pressed`,String(e)),b?.classList.toggle(`visibles`,e)};y&&(y.addEventListener(`pointerdown`,e=>{y.setPointerCapture?.(e.pointerId),w(!0)}),y.addEventListener(`pointerup`,()=>w(!1)),y.addEventListener(`pointercancel`,()=>w(!1)),y.addEventListener(`keydown`,e=>{e.key!==` `&&e.key!==`Enter`||e.repeat||(e.preventDefault(),w(!0))}),y.addEventListener(`keyup`,e=>{(e.key===` `||e.key===`Enter`)&&w(!1)}),y.addEventListener(`blur`,()=>w(!1)));let T=0,E=()=>{T=performance.now()};addEventListener(`wheel`,E,{passive:!0}),addEventListener(`touchmove`,E,{passive:!0}),addEventListener(`keydown`,e=>{[`ArrowDown`,`ArrowUp`,`PageDown`,`PageUp`,`Home`,`End`,` `].includes(e.key)&&e.target!==y&&E()});let k=new ve({canvas:c,antialias:!1,alpha:!0,powerPreference:`high-performance`});k.setPixelRatio(Math.min(devicePixelRatio||1,o?1.25:1.5)),k.toneMapping=4;let A=new M,ee=new B(`#030506`);A.background=ee,k.setClearColor(0,0),A.fog=new ie(`#030506`,0),A.environment=new Ee(k).fromScene(new Ne,.04).texture,A.environmentIntensity=.3;let j=new pe(35,1,.1,300),ae=fr(),oe=new B(`#EEF1F1`),se=mr(),P=new d(new re(400,400),new te({color:`#F4F6F6`,roughness:.7,metalness:0,transparent:!0}));P.rotation.x=-Math.PI/2;let ce=new d(new re(1,.6),new h({map:se,color:`#000000`,transparent:!0,depthWrite:!1}));ce.rotation.x=-Math.PI/2;let F=new d(new _e(.35,.5,64),new h({color:`#B4BDBD`,transparent:!0,depthWrite:!1}));F.rotation.x=-Math.PI/2,P.visible=ce.visible=F.visible=!1;let le=pr(),ue=Dn({inicio:Jn,largo:Yn,ligero:o});ue.grupo.visible=!1,A.add(ae,le,ue.grupo,P,ce,F);let de=Gn(document.getElementById(`viaje-cristal`));de.preparar();let fe=new ne(`#FFF4E6`,3.2);fe.position.set(6,7,-6);let me=new ne(`#ffffff`,1.1);me.position.set(-2,3,6);let L=new ne(`#6FA8FF`,.9);L.position.set(-5,-4,3),A.add(fe,me,L);let he=new be(`#38CCB2`,0,18,2);A.add(he);let z=new Ae;A.add(z);let ge=null,ye=null,V=null,xe=null,Se=null,Ce=null,Te=null,De=null,Oe=()=>{new D().load(e(o?`viaje/tierra-movil.webp`:`viaje/tierra.webp`),e=>{e.colorSpace=I,(e.image.decode?e.image.decode():Promise.resolve()).catch(()=>{}).then(()=>{k.initTexture(e),ae.material.uniforms.uMapa.value=e,ae.visible=!0})}),new Le().setMeshoptDecoder(Ft).load(e(o?`viaje/astronauta-movil.glb`:`viaje/astronauta.glb`),t=>{let n=t.scene;n.updateMatrixWorld(!0);let i=new we().setFromObject(n),a=1.9/i.getSize(new r).y;n.scale.multiplyScalar(a),n.position.copy(i.getCenter(new r).multiplyScalar(-a)),n.traverse(e=>{e.isMesh&&(e.frustumCulled=!1,e.material.fog=!1)}),z.add(n),ke(n);let o=e=>t.animations.find(t=>t.name===e);xe=Rn(n),Se=zn(n,Nn),Ce=zn(n,Pn),Te=Vn(n),o(`Mixamo Idle`)&&(ge=new N(n),ye=ge.clipAction(o(`Mixamo Idle`)).play(),o(`Mixamo Running`)&&(V=ge.clipAction(o(`Mixamo Running`)),V.setEffectiveWeight(0).play()),new Le().setMeshoptDecoder(Ft).load(e(`viaje/baile.glb`),e=>{De=ge.clipAction(en(e.animations[0],e.scene,n)),De.setEffectiveWeight(0).play()}))})},H=new IntersectionObserver(([e])=>{e.isIntersecting&&(H.disconnect(),Oe())},{rootMargin:`150% 0px`});H.observe(s);let U=new Wt(k);U.addPass(new Gt(A,j));let W=new qt(new R(1,1),.2,.5,.92);U.addPass(W),U.addPass(new Yt);let G=qn();U.addPass(G);function ke(e){k.setRenderTarget(U.readBuffer),k.compile(e,j,A),k.setRenderTarget(null)}ke(A);let K=new M,je=new re;for(let e of U.passes)for(let t of Object.values(e))for(let e of[t].flat())e?.isMaterial&&K.add(new d(je,e));k.setRenderTarget(U.readBuffer),k.compile(K,j),k.setRenderTarget(null),k.compile(K,j);let Me=!1;setTimeout(()=>{Me||U.render()},1500);let q={W:1,H:1,Y0:0,fin:9,sw:1,sh:1,tw:1,th:1,cx0:0,borde:0,radio:16},Pe=()=>i?i.scroll:scrollY,Fe=()=>{q.W=innerWidth,q.H=innerHeight,k.setSize(q.W,q.H),U.setSize(q.W,q.H),W.setSize(q.W/2,q.H/2),G.uniforms.uRes.value.set(q.W,q.H).multiplyScalar(k.getPixelRatio()),j.aspect=q.W/q.H,j.updateProjectionMatrix();let e=Pe(),t=u.getBoundingClientRect(),n=l.getBoundingClientRect(),r=f.getBoundingClientRect();q.Y0=e+t.top+t.height/2-q.H/2,q.fin=(e+r.bottom-q.H-q.Y0)/q.H,q.cx0=t.left+t.width/2,q.sw=t.width,q.sh=t.height,q.tw=n.width,q.th=n.height,q.borde=(n.width-t.width)/2,q.radio=parseFloat(getComputedStyle(u).borderTopLeftRadius)||16,g.style.width=`${q.tw}px`,g.style.height=`${q.th}px`,g.style.borderWidth=`${q.borde}px`,g.style.borderRadius=getComputedStyle(l).borderTopLeftRadius,Re()},Ie=[],Re=()=>{m.style.transform=`translateY(-50%)`,x.flat().forEach(e=>{e.style.transform=``});let e=m.getBoundingClientRect();Ie.length=0;for(let t of x){let n=t.map(e=>e.getBoundingClientRect()),r=e.width-n.reduce((e,t)=>e+t.width,0),i=0;for(let a=0;a<t.length;a++)Ie.push({w:t[a],dx:e.left+i-n[a].left}),i+=n[a].width+(t.length>1?r/(t.length-1):0)}};Fe(),addEventListener(`resize`,Fe),document.fonts?.ready.then(Fe),new ResizeObserver(()=>Fe()).observe(s);let J=0,Y=0,ze=[0,1,2].map(()=>On(0,1,.65,1.3)),Be=[0,1,2].map(()=>On(0,1,.85,1.1)),Ve=0,He=null,Ue=!1,We=Pe(),Ge=null,Ke=0;a.ticker.add((e,t)=>{let n=Math.min(t/1e3,1/20);Y+=n;let a=Pe();Ge!==null&&Math.abs(a-Ge)>2&&E(),Ge=null;let o=u.getBoundingClientRect();q.Y0=a+o.top+o.height/2-q.H/2,q.cx0=o.left+o.width/2,q.fin=(a+f.getBoundingClientRect().bottom-q.H-q.Y0)/q.H;let s=(a-q.Y0)/q.H;Ke+=(Math.abs(a-We)/q.H/Math.max(n,.001)-Ke)*(1-Math.exp(-6*n)),We=a,He!==null&&s<q.fin-.3&&(He=null,de.soltar(),document.documentElement.classList.remove(`cristal-roto`));let l=s>-(q.H+q.th)/(2*q.H)-.05&&s<q.fin+.05&&!document.hidden;c.style.visibility=l?`visible`:`hidden`,l&&(Me=!0),p.classList.toggle(`activo`,l&&s>.9&&s<q.fin-Qn);let d=v.getBoundingClientRect(),h=-.3-q.th/(2*q.H),y=s>h&&d.top>2&&!document.hidden,b=performance.now()-T>350&&!(i&&i.isScrolling===`smooth`);if(Ve=y&&b?Math.min(1,Ve+n):0,Ve>0&&i){let e=i.direction||1,t=ar((s-1)/Zn),r=1-.45*$(t,.2,.35,0,1)*(1-$(t,.7,.85,0,1)),a=s<.1?$(s,h,.1,.35,.15):Math.max(.15,$(s,.1,.6,0,1)),o=q.fin-Qn,c=1-$(s,o-.05,o+.1,0,.5)+$(s,o+$n-.1,o+$n+.1,0,.1),l=e*Xn*r*c*a*(1-.7*C)*Ve*n*q.H;e>0&&(l=Math.min(l,d.top)),e<0&&s<.15&&(l=0),l&&(i.scrollTo(i.scroll+l,{immediate:!0,force:!0}),Ge=Pe())}if(s>q.fin-.05&&d.top<q.H&&d.bottom>0&&!document.hidden){if(He===null){if(Ue&&Ke<3){U.render();let e=z.position.clone().add(new r(0,.6,0)).project(j),t=new R((e.x+1)/2,(e.y+1)/2);if(He=!de.capturar(c,t,q.W,q.H,k.getPixelRatio())||Y,He!==!0){document.documentElement.classList.add(`cristal-roto`);let e=v.getBoundingClientRect().top;i&&e>0&&(i.scrollTo(i.scroll+e,{immediate:!0,force:!0}),Ge=Pe()),dispatchEvent(new CustomEvent(`vl:sonido-efecto`,{detail:{nombre:`cristal`}}))}}else He=!0}Ue=!1;let e=typeof He==`number`,t=e?ar((Y-He)/rr):1;e&&t>=1&&(He=!0,de.soltar(),document.documentElement.classList.remove(`cristal-roto`));let a=e?v.getBoundingClientRect():d;c.style.visibility=`visible`,c.style.opacity=`1`,c.style.clipPath=`inset(${Math.max(0,a.top)}px 0 ${Math.max(0,q.H-a.bottom)}px 0)`,g.style.visibility=`hidden`,_.style.opacity=`0`,p.classList.remove(`activo`),m.style.visibility=`hidden`,J+=n;let o=$(a.top,q.H*.85,q.H*.05,0,1),s=sr(o);if(De){let e=$(o,.8,1,0,1);De.setEffectiveWeight(e),V?.setEffectiveWeight(1-e),ye?.setEffectiveWeight(0)}V&&(V.timeScale=.35),ge?.update(n),xe?.(1-$(o,.75,1,0,1),.8,J),A.background=null,A.fog.density=0,ae.visible=!1,ue.grupo.visible=!1,le.material.opacity=.35,W.enabled=!1,G.enabled=!1,he.intensity=0,j.position.set(0,.15,4.4*Math.max(1,(q.H/q.W)**.6)),j.rotation.set(0,0,0),j.fov=35,j.updateProjectionMatrix(),j.setViewOffset(q.W,q.H,0,q.H/2-(a.top+a.height/2),q.W,q.H),z.position.set(0,O.lerp(4,-.12,s),0),z.rotation.set(O.lerp(.5,0,s),O.lerp(Math.PI-.45,.6,cr($(o,.55,1,0,1))),0),U.render(),e&&t<1&&de.pintar(t);return}if(Ue=!1,A.background=ee,ae.visible=!!ae.material.uniforms.uMapa.value,De&&De.setEffectiveWeight(0),!l){g.style.visibility=`hidden`,m.style.visibility=`hidden`,_.style.opacity=`0`,Ve=0,de.soltar();return}C+=(S-C)*(1-Math.exp(-6*n)),J+=n*(1-.7*C),ge?.update(n*(1-.7*C));let x=ar(s),w=x,D=q.fin-Qn,te=Zn,ne=ar((s-1)/te),M=ar((s-1-te)/(D-1-te)),N=ar((s-D)/$n),re=ar((s-D-$n)/1.65),ie=O.lerp(q.cx0,q.W/2,w),se=s<0?q.H/2-s*q.H:q.H/2,I=O.lerp(1,Math.hypot(q.W,q.H)/Math.min(q.sw,q.sh),w),fe=.3*w;x<1?(g.style.visibility=`visible`,g.style.transform=`translate(${ie-q.tw/2}px, ${se-q.th/2}px) rotate(${fe}rad) scale(${I})`,c.style.clipPath=hr(ie,se,q.sw*I/2,q.sh*I/2,q.radio*I,fe)):(g.style.visibility=`hidden`,c.style.clipPath=`none`);let pe=ie,me=se;j.setViewOffset(q.W,q.H,q.W/2-pe,q.H/2-me,q.W,q.H),_.style.opacity=String($(x,.3,1,0,1)*(1-$(M,.85,1,0,1))*(1-N));let L=$(ne,.25,1,0,1),B=L>0&&L<1;if(m.style.visibility=B?`visible`:`hidden`,B){let e=$(L,.5,1,1,12,or)*$(L,0,.15,.85,1,sr);m.style.opacity=String($(L,.9,1,1,0)*$(L,0,.05,0,1)),m.style.transform=`translateY(-50%) scale(${e})`;let t=$(L,.4,.6,0,1,cr);for(let e of Ie)e.w.style.transform=`translateX(${t*e.dx}px)`}let _e=J,ve=cr($(ne,.1,.42,0,1)),be=or($(ne,.25,1,0,1)),we=cr($(M,0,.1,0,1)),Ee=cr($(M,0,.3,0,1)),Oe=$(ne,.15,.4,0,1);V&&(V.setEffectiveWeight(Oe),ye.setEffectiveWeight(1-Oe),V.timeScale=.35*(1-.7*C));let H=$(N,0,er,0,1),ke=$(N,er,.63,0,1,sr),Ae=$(re,0,.2,0,1),K=lr($(re,.22,1,0,1),.25);xe?.($(ne,.2,.45,0,1)*(1-Ae)*(N>0?.55:1),N>0?0:.45*$(M,.05,.35,0,1),J);let je=Math.min(1,be+we);for(let e=0;e<3;e++)ze[e].objetivo=jn(J*.12+e*31.7,1)*(.12+.3*we)*je,Be[e].objetivo=jn(J*.08+e*57.1+9,1)*(.06+.16*we)*je,ze[e].paso(n),Be[e].paso(n);let Ne=2.7*Math.max(1,q.H/q.W)**.6,Fe=O.lerp(4.25*Math.max(1,Ne/2.7),Ne,w),Le=Fe-M*412;j.position.set(Math.sin(_e*.3)*.05*(1-M),O.lerp(.42,.4,w*(1-M))+Math.cos(_e*.25)*.04,Le);let Re=(.003+.01*Math.min(1,Ke*.5))*w;j.rotation.set(jn(J*.9+3)*Re,jn(J*.8+19)*Re,M*Math.sin(M*Math.PI*2)*.12),j.fov=35+C*8+M*20,j.updateProjectionMatrix();let qe=Math.sin(_e*.5)*.04+be*.1,Je=Math.sin(_e*.8)*.05-be*.35,Ye=O.lerp(0,Ne-12,be),Xe=Math.sin(_e*.35)*.25,Ze=Math.cos(_e*.3)*.15-.2;z.position.set(O.lerp(qe,Xe,we)+ze[0].valor,O.lerp(Je,Ze,we)+ze[1].valor,Le+O.lerp(Ye-Fe,-12,we)+ze[2].valor),z.rotation.set(Math.sin(_e*.4)*.03*(1-ve)+.12*ve+.5*Ee+Be[0].valor,Math.sin(_e*.3)*.2*(1-ve)+(Math.PI-.45)*ve+Be[1].valor,Be[2].valor*.6),ae.position.set(.74,3.08-18*w,-40),ae.material.uniforms.uOpacidad.value=1-$(w,.5,.9,0,1),he.position.set(0,0,Le-2),he.intensity=10*$(M,0,.12,0,1);let Qe=M>0,$e=+!!Qe;ue.grupo.visible=Qe;let et=.9;if(Qe){let e=ue.actualizar({tiempo:Y,avance:M,aparece:1,lento:C});A.background=e.fondo,A.fog.color.copy(e.fondo),A.fog.density=e.niebla,et=e.exposicion,W.enabled=!0,W.strength=e.brillo.fuerza,W.threshold=e.brillo.umbral}else A.fog.density=0,W.enabled=!1;le.material.opacity=.7*$(w,.5,1,0,1)*(1-$e);let tt=N>0;if(P.visible=ce.visible=F.visible=tt,k.toneMappingExposure=et,c.style.opacity=`1`,tt){let e=Fe-412;ue.grupo.visible=!1,ae.visible=!1,le.material.opacity=0,A.background=oe,A.fog.color.copy(oe),A.fog.density=.03,W.enabled=!1,he.intensity=0,k.toneMappingExposure=.95,P.material.opacity=$(N,0,.25,0,1),P.position.set(0,ir,e-20);let t=cr($(re,.03,.2,0,1)),n=1-ke;if(z.rotation.set(jn(J*.7+4)*.04*n+.15*K,O.lerp(.5,0,t),jn(J*.6+8)*.05*n),V){let e=$(re,.2,.28,0,1);V.setEffectiveWeight(e),ye.setEffectiveWeight(1-e),V.timeScale=1.4}Ce?.(n),Se?.(ke*(1-t));let r=N<er?O.lerp(nr*1.15,nr,H):O.lerp(nr,1.1,K);z.position.set(0,0,e-r);let i=Te?ir-Te():-.050000000000000044,a=N<er?tr*(1-.3*H-.7*H*H):0,o=i+a+Math.abs(Math.sin(J*10))*.05*K;z.position.y=o,ce.position.set(z.position.x,-.995,z.position.z),ce.scale.setScalar(1.8/(1+a*.6)),ce.material.opacity=.45/(1+a);let s=$(N,er,.95,0,1,sr);F.position.set(z.position.x,-.99,z.position.z),F.scale.setScalar(.6+s*4),F.material.opacity=.6*(s>0?1-s:0);let c=ke*(1-$(N,.63,.85,0,1)),l=.08*c+.02*K,u=O.lerp(-.35,.3,cr($(re,.1,.9,0,1)))-.06*c,d=$(N,.62,.8999999999999999,0,1,cr),f=O.lerp(O.lerp(.19999999999999996,o+.25,d),o+.6,K);j.position.set(jn(J*17)*l,u+jn(J*19+5)*l,e),j.rotation.set(Math.atan2(f-u,r)+jn(J*13+9)*l*.5,0,jn(J*11+2)*l*.4),j.fov=40+16*$(K,.55,1,0,1,or),j.updateProjectionMatrix()}Ue=re>.6,G.enabled=!0,G.uniforms.uTiempo.value=J,G.uniforms.uVineta.value=.45*w,G.uniforms.uAberracion.value=(.004+.016*Math.min(1,Ke*.6))*w,G.uniforms.uVelocidad.value=Math.min(1,Ke*.5)*$e*(1-H),U.render()})}export{gr as iniciar,ur as tramo};