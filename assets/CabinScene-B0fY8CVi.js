import{r as c,j as e}from"./index-DoxRZn8w.js";import{u as W,W as H,P as J,M as N,a as Q,C as ee,S as V,b as $,_ as se,R as g,T as te,c as re,O as ae}from"./RoundedBox-COEMlgMv.js";const ie={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},oe={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ne=c.forwardRef(({scale:s=10,frames:t=1/0,opacity:r=1,width:i=1,height:n=1,blur:o=1,near:l=0,far:u=10,resolution:m=512,smooth:D=!0,color:h="#000000",depthWrite:y=!1,renderOrder:j,...a},S)=>{const b=c.useRef(null),d=W(v=>v.scene),f=W(v=>v.gl),M=c.useRef(null);i=i*(Array.isArray(s)?s[0]:s||1),n=n*(Array.isArray(s)?s[1]:s||1);const[U,K,Y,x,T,w,A]=c.useMemo(()=>{const v=new H(m,m),_=new H(m,m);_.texture.generateMipmaps=v.texture.generateMipmaps=!1;const O=new J(i,n).rotateX(Math.PI/2),q=new N(O),I=new Q;I.depthTest=I.depthWrite=!1,I.onBeforeCompile=p=>{p.uniforms={...p.uniforms,ucolor:{value:new ee(h)}},p.fragmentShader=p.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),p.fragmentShader=p.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const L=new V(ie),F=new V(oe);return F.depthTest=L.depthTest=!1,[v,O,I,q,L,F,_]},[m,i,n,s,h]),B=v=>{x.visible=!0,x.material=T,T.uniforms.tDiffuse.value=U.texture,T.uniforms.h.value=v*1/256,f.setRenderTarget(A),f.render(x,M.current),x.material=w,w.uniforms.tDiffuse.value=A.texture,w.uniforms.v.value=v*1/256,f.setRenderTarget(U),f.render(x,M.current),x.visible=!1};let E=0,k,z;return $(()=>{M.current&&(t===1/0||E<t)&&(E++,k=d.background,z=d.overrideMaterial,b.current.visible=!1,d.background=null,d.overrideMaterial=Y,f.setRenderTarget(U),f.render(d,M.current),B(o),D&&B(o*.4),f.setRenderTarget(null),b.current.visible=!0,d.overrideMaterial=z,d.background=k)}),c.useImperativeHandle(S,()=>b.current,[]),c.createElement("group",se({"rotation-x":Math.PI/2},a,{ref:b}),c.createElement("mesh",{renderOrder:j,geometry:K,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},c.createElement("meshBasicMaterial",{transparent:!0,map:U.texture,opacity:r,depthWrite:y})),c.createElement("orthographicCamera",{ref:M,args:[-i/2,i/2,n/2,-n/2,l,u]}))}),X={available:{color:"#2d5788",emissive:"#17324f",intensity:.25},held:{color:"#d98e32",emissive:"#d98e32",intensity:.5},claimed:{color:"#c6a15b",emissive:"#c6a15b",intensity:.5},selected:{color:"#e6c691",emissive:"#e6c691",intensity:.95}},G="#9aa4ae",P="#1b2530";function le({seat:s,position:t,isSelected:r,onSelect:i}){const n=r?"selected":s.state,{color:o,emissive:l,intensity:u}=X[n]??X.available,[m,D]=c.useState(!1),h=c.useRef(),y=c.useRef(),j=s.state==="available";return $(({clock:a})=>{const S=n==="held"?u+Math.sin(a.elapsedTime*2.4)*.2:u+(m&&j?.35:0);h.current&&(h.current.emissiveIntensity=S),y.current&&(y.current.emissiveIntensity=S*.7)}),e.jsxs("group",{position:t,onClick:a=>{a.stopPropagation(),(j||r)&&i(s)},onPointerOver:a=>{a.stopPropagation(),D(!0),j&&(document.body.style.cursor="pointer")},onPointerOut:()=>{D(!1),document.body.style.cursor="auto"},children:[e.jsx(g,{args:[.56,.15,.5],radius:.045,smoothness:3,position:[0,.34,.02],castShadow:!0,receiveShadow:!0,children:e.jsx("meshStandardMaterial",{ref:h,color:o,emissive:l,emissiveIntensity:u,roughness:.55,metalness:.1})}),e.jsx(g,{args:[.56,.78,.12],radius:.05,smoothness:3,position:[0,.76,-.2],rotation:[-.1,0,0],castShadow:!0,children:e.jsx("meshStandardMaterial",{ref:y,color:o,emissive:l,emissiveIntensity:u*.7,roughness:.6,metalness:.08})}),e.jsx(g,{args:[.34,.16,.1],radius:.04,smoothness:3,position:[0,1.2,-.24],rotation:[-.1,0,0],children:e.jsx("meshStandardMaterial",{color:P,roughness:.55})}),[-.17,.17].map(a=>e.jsx(g,{args:[.07,.14,.09],radius:.03,position:[a,1.19,-.235],rotation:[-.1,0,a>0?-.25:.25],children:e.jsx("meshStandardMaterial",{color:P,roughness:.55})},a)),e.jsxs("group",{position:[0,.86,-.135],rotation:[-.1,0,0],children:[e.jsx(g,{args:[.34,.24,.015],radius:.015,children:e.jsx("meshStandardMaterial",{color:P,roughness:.4})}),e.jsxs("mesh",{position:[0,0,.009],children:[e.jsx("planeGeometry",{args:[.29,.19]}),e.jsx("meshStandardMaterial",{color:"#0a1522",emissive:s.state==="claimed"||r?"#c6a15b":"#274a72",emissiveIntensity:s.state==="claimed"||r?.5:.35})]}),e.jsx(te,{position:[0,0,.012],fontSize:.085,color:s.state==="claimed"||r?"#f3e9d7":"#9fc3e8",anchorX:"center",anchorY:"middle",letterSpacing:.08,children:s.state==="claimed"&&s.holder?.initials?s.holder.initials:s.id})]}),e.jsxs("mesh",{position:[0,.52,-.135],rotation:[-.1,0,0],children:[e.jsx("planeGeometry",{args:[.4,.015]}),e.jsx("meshStandardMaterial",{color:G,metalness:.5,roughness:.4})]}),[-.31,.31].map(a=>e.jsxs("group",{children:[e.jsx(g,{args:[.06,.05,.46],radius:.02,position:[a,.5,0],children:e.jsx("meshStandardMaterial",{color:P,roughness:.5})}),e.jsxs("mesh",{position:[a,.4,.18],children:[e.jsx("boxGeometry",{args:[.045,.16,.045]}),e.jsx("meshStandardMaterial",{color:G,metalness:.6,roughness:.3})]})]},a)),[-.2,.2].map(a=>e.jsxs("mesh",{position:[a,.14,.04],rotation:[.25,0,0],children:[e.jsx("cylinderGeometry",{args:[.022,.026,.3,10]}),e.jsx("meshStandardMaterial",{color:G,metalness:.65,roughness:.3})]},a)),r&&e.jsxs("mesh",{position:[0,.02,.02],rotation:[-Math.PI/2,0,0],children:[e.jsx("ringGeometry",{args:[.4,.48,32]}),e.jsx("meshBasicMaterial",{color:"#e6c691",transparent:!0,opacity:.8})]})]})}const C=1.25,Z=.85,R=2.15;function ce(s,t){const r=(s.row-(t+1)/2)*C;return[s.side==="port"?-Z:Z,0,r]}function ue({length:s}){return e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,1.15,0],rotation:[Math.PI/2,0,0],children:[e.jsx("cylinderGeometry",{args:[R,R,s,64,1,!0]}),e.jsx("meshStandardMaterial",{color:"#dfe4ea",roughness:.55,metalness:.05,side:1})]}),[-.5,.5].map(t=>e.jsxs("mesh",{position:[t,2.2,0],rotation:[0,0,t<0?.18:-.18],children:[e.jsx("boxGeometry",{args:[.14,.02,s*.96]}),e.jsx("meshStandardMaterial",{color:"#ffffff",emissive:"#f6f2ea",emissiveIntensity:2.4,toneMapped:!1})]},t)),e.jsxs("mesh",{position:[0,2.31,0],children:[e.jsx("boxGeometry",{args:[.8,.02,s*.96]}),e.jsx("meshStandardMaterial",{color:"#e8ecf1",roughness:.5})]}),[-1,1].map(t=>e.jsxs("group",{children:[e.jsxs("mesh",{position:[t*1.22,1.78,0],rotation:[0,0,t*.42],children:[e.jsx("boxGeometry",{args:[.5,.26,s*.96]}),e.jsx("meshStandardMaterial",{color:"#d3d9e0",roughness:.45,metalness:.08})]}),e.jsxs("mesh",{position:[t*1.42,1.58,0],rotation:[0,0,t*.42],children:[e.jsx("boxGeometry",{args:[.04,.02,s*.9]}),e.jsx("meshStandardMaterial",{color:"#2f6bd8",emissive:"#2f6bd8",emissiveIntensity:1.4,toneMapped:!1})]})]},t)),[-1,1].map(t=>e.jsxs("mesh",{position:[t*1.92,1.05,0],rotation:[0,t*-Math.PI/2,0],children:[e.jsx("planeGeometry",{args:[s*.96,.9]}),e.jsx("meshStandardMaterial",{color:"#122c4d",emissive:"#1e4a8a",emissiveIntensity:.28,roughness:.6})]},t)),e.jsxs("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[e.jsx("planeGeometry",{args:[3.8,s]}),e.jsx("meshStandardMaterial",{color:"#232b36",roughness:.9})]}),e.jsxs("mesh",{position:[0,.006,0],rotation:[-Math.PI/2,0,0],children:[e.jsx("planeGeometry",{args:[.55,s]}),e.jsx("meshStandardMaterial",{color:"#39434f",roughness:.85})]}),[-.3,.3].map(t=>e.jsxs("mesh",{position:[t,.012,0],rotation:[-Math.PI/2,0,0],children:[e.jsx("planeGeometry",{args:[.02,s*.94]}),e.jsx("meshStandardMaterial",{color:"#c6a15b",emissive:"#c6a15b",emissiveIntensity:.8})]},t)),e.jsxs("mesh",{position:[0,1.15,-s/2],children:[e.jsx("circleGeometry",{args:[R+.02,48]}),e.jsx("meshStandardMaterial",{color:"#e2e7ed",emissive:"#f3e9d7",emissiveIntensity:.12})]})]})}function me({rows:s}){return c.useMemo(()=>{const r=[];for(let i=0;i<s;i++){const n=(i-(s-1)/2)*C;for(const o of[-1,1])r.push({key:`${i}-${o}`,position:[o*1.9,1.15,n],side:o})}return r},[s]).map(r=>e.jsx("group",{position:r.position,rotation:[0,Math.PI/2*r.side*-1,0],children:e.jsxs("mesh",{children:[e.jsx("capsuleGeometry",{args:[.11,.14,4,12]}),e.jsx("meshStandardMaterial",{color:"#0b1a2e",emissive:"#4a7ec2",emissiveIntensity:.8})]})},r.key))}function fe({trip:s,seats:t,selectedSeatId:r,onSelectSeat:i}){const n=s.cabinLayout.rows,o=n*C+2.4;return e.jsxs(re,{shadows:!0,dpr:[1,2],camera:{position:[0,1.75,o*.62],fov:52},onPointerMissed:()=>i(null),"aria-label":"Interactive 3D cabin seat map",onCreated:l=>{l.gl.toneMappingExposure=1.15},children:[e.jsx("color",{attach:"background",args:["#0a1420"]}),e.jsx("fog",{attach:"fog",args:["#233242",12,30]}),e.jsx("ambientLight",{color:"#eef2f6",intensity:.85}),e.jsx("directionalLight",{color:"#ffffff",intensity:1.1,position:[0,4,2],castShadow:!0,"shadow-mapSize":[1024,1024]}),Array.from({length:Math.ceil(o/2.4)},(l,u)=>{const m=(u-(Math.ceil(o/2.4)-1)/2)*2.4;return e.jsx("pointLight",{color:"#f8f4ec",intensity:2.4,distance:4.5,decay:2,position:[0,2.15,m]},u)}),[-1.5,1.5].map(l=>e.jsx("pointLight",{color:"#3a6fd8",intensity:1.2,distance:3.5,decay:2,position:[l,1.5,0]},l)),e.jsx(ue,{length:o}),e.jsx(me,{rows:n}),e.jsx(ne,{position:[0,.015,0],scale:[4.2,o],opacity:.45,blur:2.2,far:2.5,resolution:512,frames:1}),t.map(l=>e.jsx(le,{seat:l,position:ce(l,n),isSelected:l.id===r,onSelect:u=>i(u)},l.id)),e.jsx(ae,{target:[0,.9,0],enablePan:!1,enableDamping:!0,dampingFactor:.08,minDistance:2.4,maxDistance:o*.85,minPolarAngle:.55,maxPolarAngle:1.45,minAzimuthAngle:-.75,maxAzimuthAngle:.75,rotateSpeed:.6})]})}export{fe as default};
