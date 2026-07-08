import{r as o,j as e}from"./index-D_f1bGuV.js";import{u as E,W as L,P as K,M as Y,a as q,C as J,S as O,b as H,_ as N,R as I,T as Q,c as ee,O as te}from"./RoundedBox-dCQDa2_t.js";const re={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},se={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},ae=o.forwardRef(({scale:t=10,frames:c=1/0,opacity:r=1,width:s=1,height:i=1,blur:a=1,near:n=0,far:l=10,resolution:m=512,smooth:j=!0,color:d="#000000",depthWrite:g=!1,renderOrder:U,...u},V)=>{const D=o.useRef(null),f=E(v=>v.scene),x=E(v=>v.gl),y=o.useRef(null);s=s*(Array.isArray(t)?t[0]:t||1),i=i*(Array.isArray(t)?t[1]:t||1);const[M,X,Z,h,S,P,w]=o.useMemo(()=>{const v=new L(m,m),G=new L(m,m);G.texture.generateMipmaps=v.texture.generateMipmaps=!1;const _=new K(s,i).rotateX(Math.PI/2),$=new Y(_),b=new q;b.depthTest=b.depthWrite=!1,b.onBeforeCompile=p=>{p.uniforms={...p.uniforms,ucolor:{value:new J(d)}},p.fragmentShader=p.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),p.fragmentShader=p.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const k=new O(re),z=new O(se);return z.depthTest=k.depthTest=!1,[v,_,b,$,k,z,G]},[m,s,i,t,d]),C=v=>{h.visible=!0,h.material=S,S.uniforms.tDiffuse.value=M.texture,S.uniforms.h.value=v*1/256,x.setRenderTarget(w),x.render(h,y.current),h.material=P,P.uniforms.tDiffuse.value=w.texture,P.uniforms.v.value=v*1/256,x.setRenderTarget(M),x.render(h,y.current),h.visible=!1};let A=0,R,B;return H(()=>{y.current&&(c===1/0||A<c)&&(A++,R=f.background,B=f.overrideMaterial,D.current.visible=!1,f.background=null,f.overrideMaterial=Z,x.setRenderTarget(M),x.render(f,y.current),C(a),j&&C(a*.4),x.setRenderTarget(null),D.current.visible=!0,f.overrideMaterial=B,f.background=R)}),o.useImperativeHandle(V,()=>D.current,[]),o.createElement("group",N({"rotation-x":Math.PI/2},u,{ref:D}),o.createElement("mesh",{renderOrder:U,geometry:X,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},o.createElement("meshBasicMaterial",{transparent:!0,map:M.texture,opacity:r,depthWrite:g})),o.createElement("orthographicCamera",{ref:y,args:[-s/2,s/2,i/2,-i/2,n,l]}))}),F={available:{color:"#cdbfa4",emissive:"#3a3220",intensity:.25},held:{color:"#d98e32",emissive:"#d98e32",intensity:.5},claimed:{color:"#c6a15b",emissive:"#c6a15b",intensity:.55},selected:{color:"#e6c691",emissive:"#e6c691",intensity:1}};function ie({seat:t,position:c,isSelected:r,onSelect:s}){const i=r?"selected":t.state,{color:a,emissive:n,intensity:l}=F[i]??F.available,[m,j]=o.useState(!1),d=o.useRef(),g=t.state==="available";H(({clock:u})=>{d.current&&(i==="held"?d.current.emissiveIntensity=l+Math.sin(u.elapsedTime*2.4)*.2:d.current.emissiveIntensity=l+(m&&g?.35:0))});const U=o.useMemo(()=>e.jsx("meshStandardMaterial",{ref:d,color:a,emissive:n,emissiveIntensity:l,roughness:.55,metalness:.15}),[a,n,l]);return e.jsxs("group",{position:c,onClick:u=>{u.stopPropagation(),(g||r)&&s(t)},onPointerOver:u=>{u.stopPropagation(),j(!0),g&&(document.body.style.cursor="pointer")},onPointerOut:()=>{j(!1),document.body.style.cursor="auto"},children:[e.jsx(I,{args:[.52,.16,.5],radius:.05,smoothness:3,position:[0,.26,0],castShadow:!0,receiveShadow:!0,children:U}),e.jsx(I,{args:[.52,.62,.13],radius:.05,smoothness:3,position:[0,.56,-.21],rotation:[-.12,0,0],castShadow:!0,children:e.jsx("meshStandardMaterial",{color:a,emissive:n,emissiveIntensity:l*.6,roughness:.65,metalness:.1})}),e.jsx(I,{args:[.34,.17,.1],radius:.04,smoothness:3,position:[0,.94,-.245],rotation:[-.12,0,0],children:e.jsx("meshStandardMaterial",{color:"#1d2f40",roughness:.5,metalness:.25})}),[-.3,.3].map(u=>e.jsxs("mesh",{position:[u,.36,.02],children:[e.jsx("boxGeometry",{args:[.06,.08,.44]}),e.jsx("meshStandardMaterial",{color:"#1b2a38",roughness:.35,metalness:.5})]},u)),e.jsxs("mesh",{position:[0,.09,0],children:[e.jsx("cylinderGeometry",{args:[.07,.1,.18,12]}),e.jsx("meshStandardMaterial",{color:"#101a24",roughness:.4,metalness:.6})]}),e.jsx(Q,{position:[0,1.06,-.26],rotation:[0,0,0],fontSize:.09,color:t.state==="claimed"||r?"#f3e9d7":"#8a8272",anchorX:"center",anchorY:"middle",children:t.state==="claimed"&&t.holder?.initials?t.holder.initials:t.id}),r&&e.jsxs("mesh",{position:[0,.012,.02],rotation:[-Math.PI/2,0,0],children:[e.jsx("ringGeometry",{args:[.38,.46,32]}),e.jsx("meshBasicMaterial",{color:"#e6c691",transparent:!0,opacity:.75})]})]})}const T=1.25,W=.85;function ne(t,c){const r=(t.row-(c+1)/2)*T;return[t.side==="port"?-W:W,0,r]}function oe({length:t}){return e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,1.15,0],rotation:[Math.PI/2,0,0],children:[e.jsx("cylinderGeometry",{args:[2.1,2.1,t,48,1,!0]}),e.jsx("meshStandardMaterial",{color:"#16283a",roughness:.85,metalness:.1,side:1})]}),e.jsxs("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[e.jsx("planeGeometry",{args:[3.6,t]}),e.jsx("meshStandardMaterial",{color:"#101c2a",roughness:.9})]}),e.jsxs("mesh",{position:[0,1.15,-t/2],children:[e.jsx("circleGeometry",{args:[2.12,48]}),e.jsx("meshStandardMaterial",{color:"#0e1a26",emissive:"#c6a15b",emissiveIntensity:.08})]}),e.jsxs("mesh",{position:[0,.006,0],rotation:[-Math.PI/2,0,0],children:[e.jsx("planeGeometry",{args:[.5,t]}),e.jsx("meshStandardMaterial",{color:"#c6a15b",roughness:.7,emissive:"#c6a15b",emissiveIntensity:.12})]}),Array.from({length:Math.round(t/1.6)},(c,r)=>e.jsxs("mesh",{position:[0,2.3,(r-(Math.round(t/1.6)-1)/2)*1.6],children:[e.jsx("boxGeometry",{args:[.16,.02,.9]}),e.jsx("meshStandardMaterial",{color:"#0b1520",emissive:"#e8d9bb",emissiveIntensity:.55})]},r))]})}function ce({rows:t}){return o.useMemo(()=>{const r=[];for(let s=0;s<t;s++){const i=(s-(t-1)/2)*T;for(const a of[-1,1])r.push({key:`${s}-${a}`,position:[a*1.94,1.35,i],side:a})}return r},[t]).map(r=>e.jsxs("group",{position:r.position,rotation:[0,Math.PI/2*r.side*-1,0],children:[e.jsxs("mesh",{children:[e.jsx("capsuleGeometry",{args:[.13,.16,4,12]}),e.jsx("meshStandardMaterial",{color:"#0b1520",emissive:r.side===1?"#d9ab6a":"#8fb0c4",emissiveIntensity:1.05})]}),e.jsx("pointLight",{color:r.side===1?"#e8c186":"#9db8c9",intensity:1.4,distance:2.4,decay:2,position:[0,0,.28]})]},r.key))}function ve({trip:t,seats:c,selectedSeatId:r,onSelectSeat:s}){const i=t.cabinLayout.rows,a=i*T+2.4;return e.jsxs(ee,{shadows:!0,dpr:[1,2],camera:{position:[0,1.85,a*.62],fov:50},onPointerMissed:()=>s(null),"aria-label":"Interactive 3D cabin seat map",onCreated:n=>{},children:[e.jsx("color",{attach:"background",args:["#060d1f"]}),e.jsx("fog",{attach:"fog",args:["#12202e",11,26]}),e.jsx("ambientLight",{color:"#f3e9d7",intensity:.55}),e.jsx("directionalLight",{color:"#e8c186",intensity:1.6,position:[4,3.5,2],castShadow:!0,"shadow-mapSize":[1024,1024]}),e.jsx("directionalLight",{color:"#5a7d8c",intensity:.4,position:[-4,2.5,-2]}),[-.28,.22].map(n=>e.jsx("pointLight",{color:"#e8c186",intensity:3,distance:4,decay:2,position:[0,2.05,a*n]},n)),e.jsx(oe,{length:a}),e.jsx(ce,{rows:i}),e.jsx(ae,{position:[0,.015,0],scale:[4.2,a],opacity:.55,blur:2.2,far:2.5,resolution:512,frames:1}),c.map(n=>e.jsx(ie,{seat:n,position:ne(n,i),isSelected:n.id===r,onSelect:l=>s(l)},n.id)),e.jsx(te,{target:[0,.75,0],enablePan:!1,enableDamping:!0,dampingFactor:.08,minDistance:2.4,maxDistance:a*.85,minPolarAngle:.55,maxPolarAngle:1.45,minAzimuthAngle:-.75,maxAzimuthAngle:.75,rotateSpeed:.6})]})}export{ve as default};
