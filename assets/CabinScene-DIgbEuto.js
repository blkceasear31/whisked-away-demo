import{r as i,j as e}from"./index-D7m2Vn4E.js";import{V as I,B as q,_ as Z,S as J,u as N,W,P as Q,M as ee,a as te,C as re,b as $,c as Y,T as se,d as oe,O as ne}from"./OrbitControls-BR2kDWWN.js";function ae(t,c=Math.PI/3){const o=Math.cos(c),s=(1+1e-10)*100,r=[new I,new I,new I],n=new I,a=new I,d=new I,v=new I;function D(m){const x=~~(m.x*s),u=~~(m.y*s),g=~~(m.z*s);return`${x},${u},${g}`}const h=t.index?t.toNonIndexed():t,l=h.attributes.position,y={};for(let m=0,x=l.count/3;m<x;m++){const u=3*m,g=r[0].fromBufferAttribute(l,u+0),b=r[1].fromBufferAttribute(l,u+1),T=r[2].fromBufferAttribute(l,u+2);n.subVectors(T,b),a.subVectors(g,b);const P=new I().crossVectors(n,a).normalize();for(let p=0;p<3;p++){const w=r[p],M=D(w);M in y||(y[M]=[]),y[M].push(P)}}const f=new Float32Array(l.count*3),S=new q(f,3,!1);for(let m=0,x=l.count/3;m<x;m++){const u=3*m,g=r[0].fromBufferAttribute(l,u+0),b=r[1].fromBufferAttribute(l,u+1),T=r[2].fromBufferAttribute(l,u+2);n.subVectors(T,b),a.subVectors(g,b),d.crossVectors(n,a).normalize();for(let P=0;P<3;P++){const p=r[P],w=D(p),M=y[w];v.set(0,0,0);for(let A=0,R=M.length;A<R;A++){const C=M[A];d.dot(C)>o&&v.add(C)}v.normalize(),S.setXYZ(u+P,v.x,v.y,v.z)}}return h.setAttribute("normal",S),h}const ie={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},ce={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},j=1e-5;function ue(t,c,o){const s=new J,r=o-j;return s.absarc(j,j,j,-Math.PI/2,-Math.PI,!0),s.absarc(j,c-r*2,j,Math.PI,Math.PI/2,!0),s.absarc(t-r*2,c-r*2,j,Math.PI/2,0,!0),s.absarc(t-r*2,j,j,0,-Math.PI/2,!0),s}const G=i.forwardRef(function({args:[c=1,o=1,s=1]=[],radius:r=.05,steps:n=1,smoothness:a=4,bevelSegments:d=4,creaseAngle:v=.4,children:D,...h},l){const y=i.useMemo(()=>ue(c,o,r),[c,o,r]),f=i.useMemo(()=>({depth:s-r*2,bevelEnabled:!0,bevelSegments:d*2,steps:n,bevelSize:r-j,bevelThickness:r,curveSegments:a}),[s,r,a]),S=i.useRef(null);return i.useLayoutEffect(()=>{S.current&&(S.current.center(),ae(S.current,v))},[y,f]),i.createElement("mesh",Z({ref:l},h),i.createElement("extrudeGeometry",{ref:S,args:[y,f]}),D)}),le=i.forwardRef(({scale:t=10,frames:c=1/0,opacity:o=1,width:s=1,height:r=1,blur:n=1,near:a=0,far:d=10,resolution:v=512,smooth:D=!0,color:h="#000000",depthWrite:l=!1,renderOrder:y,...f},S)=>{const m=i.useRef(null),x=N(U=>U.scene),u=N(U=>U.gl),g=i.useRef(null);s=s*(Array.isArray(t)?t[0]:t||1),r=r*(Array.isArray(t)?t[1]:t||1);const[b,T,P,p,w,M,A]=i.useMemo(()=>{const U=new W(v,v),_=new W(v,v);_.texture.generateMipmaps=U.texture.generateMipmaps=!1;const L=new Q(s,r).rotateX(Math.PI/2),K=new ee(L),z=new te;z.depthTest=z.depthWrite=!1,z.onBeforeCompile=B=>{B.uniforms={...B.uniforms,ucolor:{value:new re(h)}},B.fragmentShader=B.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),B.fragmentShader=B.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const O=new $(ie),F=new $(ce);return F.depthTest=O.depthTest=!1,[U,L,z,K,O,F,_]},[v,s,r,t,h]),R=U=>{p.visible=!0,p.material=w,w.uniforms.tDiffuse.value=b.texture,w.uniforms.h.value=U*1/256,u.setRenderTarget(A),u.render(p,g.current),p.material=M,M.uniforms.tDiffuse.value=A.texture,M.uniforms.v.value=U*1/256,u.setRenderTarget(b),u.render(p,g.current),p.visible=!1};let C=0,E,k;return Y(()=>{g.current&&(c===1/0||C<c)&&(C++,E=x.background,k=x.overrideMaterial,m.current.visible=!1,x.background=null,x.overrideMaterial=P,u.setRenderTarget(b),u.render(x,g.current),R(n),D&&R(n*.4),u.setRenderTarget(null),m.current.visible=!0,x.overrideMaterial=k,x.background=E)}),i.useImperativeHandle(S,()=>m.current,[]),i.createElement("group",Z({"rotation-x":Math.PI/2},f,{ref:m}),i.createElement("mesh",{renderOrder:y,geometry:T,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},i.createElement("meshBasicMaterial",{transparent:!0,map:b.texture,opacity:o,depthWrite:l})),i.createElement("orthographicCamera",{ref:g,args:[-s/2,s/2,r/2,-r/2,a,d]}))}),H={available:{color:"#cdbfa4",emissive:"#3a3220",intensity:.25},held:{color:"#d98e32",emissive:"#d98e32",intensity:.5},claimed:{color:"#c6a15b",emissive:"#c6a15b",intensity:.55},selected:{color:"#e6c691",emissive:"#e6c691",intensity:1}};function ve({seat:t,position:c,isSelected:o,onSelect:s}){const r=o?"selected":t.state,{color:n,emissive:a,intensity:d}=H[r]??H.available,[v,D]=i.useState(!1),h=i.useRef(),l=t.state==="available";Y(({clock:f})=>{h.current&&(r==="held"?h.current.emissiveIntensity=d+Math.sin(f.elapsedTime*2.4)*.2:h.current.emissiveIntensity=d+(v&&l?.35:0))});const y=i.useMemo(()=>e.jsx("meshStandardMaterial",{ref:h,color:n,emissive:a,emissiveIntensity:d,roughness:.55,metalness:.15}),[n,a,d]);return e.jsxs("group",{position:c,onClick:f=>{f.stopPropagation(),(l||o)&&s(t)},onPointerOver:f=>{f.stopPropagation(),D(!0),l&&(document.body.style.cursor="pointer")},onPointerOut:()=>{D(!1),document.body.style.cursor="auto"},children:[e.jsx(G,{args:[.52,.16,.5],radius:.05,smoothness:3,position:[0,.26,0],castShadow:!0,receiveShadow:!0,children:y}),e.jsx(G,{args:[.52,.62,.13],radius:.05,smoothness:3,position:[0,.56,-.21],rotation:[-.12,0,0],castShadow:!0,children:e.jsx("meshStandardMaterial",{color:n,emissive:a,emissiveIntensity:d*.6,roughness:.65,metalness:.1})}),e.jsx(G,{args:[.34,.17,.1],radius:.04,smoothness:3,position:[0,.94,-.245],rotation:[-.12,0,0],children:e.jsx("meshStandardMaterial",{color:"#1d2f40",roughness:.5,metalness:.25})}),[-.3,.3].map(f=>e.jsxs("mesh",{position:[f,.36,.02],children:[e.jsx("boxGeometry",{args:[.06,.08,.44]}),e.jsx("meshStandardMaterial",{color:"#1b2a38",roughness:.35,metalness:.5})]},f)),e.jsxs("mesh",{position:[0,.09,0],children:[e.jsx("cylinderGeometry",{args:[.07,.1,.18,12]}),e.jsx("meshStandardMaterial",{color:"#101a24",roughness:.4,metalness:.6})]}),e.jsx(se,{position:[0,1.06,-.26],rotation:[0,0,0],fontSize:.09,color:t.state==="claimed"||o?"#f3e9d7":"#8a8272",anchorX:"center",anchorY:"middle",children:t.state==="claimed"&&t.holder?.initials?t.holder.initials:t.id}),o&&e.jsxs("mesh",{position:[0,.012,.02],rotation:[-Math.PI/2,0,0],children:[e.jsx("ringGeometry",{args:[.38,.46,32]}),e.jsx("meshBasicMaterial",{color:"#e6c691",transparent:!0,opacity:.75})]})]})}const V=1.25,X=.85;function me(t,c){const o=(t.row-(c+1)/2)*V;return[t.side==="port"?-X:X,0,o]}function fe({length:t}){return e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,1.15,0],rotation:[Math.PI/2,0,0],children:[e.jsx("cylinderGeometry",{args:[2.1,2.1,t,48,1,!0]}),e.jsx("meshStandardMaterial",{color:"#16283a",roughness:.85,metalness:.1,side:1})]}),e.jsxs("mesh",{position:[0,0,0],rotation:[-Math.PI/2,0,0],receiveShadow:!0,children:[e.jsx("planeGeometry",{args:[3.6,t]}),e.jsx("meshStandardMaterial",{color:"#101c2a",roughness:.9})]}),e.jsxs("mesh",{position:[0,1.15,-t/2],children:[e.jsx("circleGeometry",{args:[2.12,48]}),e.jsx("meshStandardMaterial",{color:"#0e1a26",emissive:"#c6a15b",emissiveIntensity:.08})]}),e.jsxs("mesh",{position:[0,.006,0],rotation:[-Math.PI/2,0,0],children:[e.jsx("planeGeometry",{args:[.5,t]}),e.jsx("meshStandardMaterial",{color:"#c6a15b",roughness:.7,emissive:"#c6a15b",emissiveIntensity:.12})]}),Array.from({length:Math.round(t/1.6)},(c,o)=>e.jsxs("mesh",{position:[0,2.3,(o-(Math.round(t/1.6)-1)/2)*1.6],children:[e.jsx("boxGeometry",{args:[.16,.02,.9]}),e.jsx("meshStandardMaterial",{color:"#0b1520",emissive:"#e8d9bb",emissiveIntensity:.55})]},o))]})}function de({rows:t}){return i.useMemo(()=>{const o=[];for(let s=0;s<t;s++){const r=(s-(t-1)/2)*V;for(const n of[-1,1])o.push({key:`${s}-${n}`,position:[n*1.94,1.35,r],side:n})}return o},[t]).map(o=>e.jsxs("group",{position:o.position,rotation:[0,Math.PI/2*o.side*-1,0],children:[e.jsxs("mesh",{children:[e.jsx("capsuleGeometry",{args:[.13,.16,4,12]}),e.jsx("meshStandardMaterial",{color:"#0b1520",emissive:o.side===1?"#d9ab6a":"#8fb0c4",emissiveIntensity:1.05})]}),e.jsx("pointLight",{color:o.side===1?"#e8c186":"#9db8c9",intensity:1.4,distance:2.4,decay:2,position:[0,0,.28]})]},o.key))}function pe({trip:t,seats:c,selectedSeatId:o,onSelectSeat:s}){const r=t.cabinLayout.rows,n=r*V+2.4;return e.jsxs(oe,{shadows:!0,dpr:[1,2],camera:{position:[0,1.85,n*.62],fov:50},onPointerMissed:()=>s(null),"aria-label":"Interactive 3D cabin seat map",onCreated:a=>{},children:[e.jsx("color",{attach:"background",args:["#060d1f"]}),e.jsx("fog",{attach:"fog",args:["#12202e",11,26]}),e.jsx("ambientLight",{color:"#f3e9d7",intensity:.55}),e.jsx("directionalLight",{color:"#e8c186",intensity:1.6,position:[4,3.5,2],castShadow:!0,"shadow-mapSize":[1024,1024]}),e.jsx("directionalLight",{color:"#5a7d8c",intensity:.4,position:[-4,2.5,-2]}),[-.28,.22].map(a=>e.jsx("pointLight",{color:"#e8c186",intensity:3,distance:4,decay:2,position:[0,2.05,n*a]},a)),e.jsx(fe,{length:n}),e.jsx(de,{rows:r}),e.jsx(le,{position:[0,.015,0],scale:[4.2,n],opacity:.55,blur:2.2,far:2.5,resolution:512,frames:1}),c.map(a=>e.jsx(ve,{seat:a,position:me(a,r),isSelected:a.id===o,onSelect:d=>s(d)},a.id)),e.jsx(ne,{target:[0,.75,0],enablePan:!1,enableDamping:!0,dampingFactor:.08,minDistance:2.4,maxDistance:n*.85,minPolarAngle:.55,maxPolarAngle:1.45,minAzimuthAngle:-.75,maxAzimuthAngle:.75,rotateSpeed:.6})]})}export{pe as default};
