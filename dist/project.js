(()=>{"use strict";var e,t={415:(e,t,o)=>{var n=o(477),a=o(637),i=o(365),s=o(217),r=o(274);let c,m,l,d,w,p=0,h={};function y(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),d.handleResize(),g()}function u(e){c.add(e)}function g(){l.render(c,m)}let x,b=!1;const f=256;let A,z=[];function M(e,t,o=.7,n=.8,a={x:0,y:50,z:0},i=1){let s=new Ammo.btTransform;s.setIdentity(),s.setOrigin(new Ammo.btVector3(a.x,a.y,a.z));let r=t.quaternion;s.setRotation(new Ammo.btQuaternion(r.x,r.y,r.z,r.w));let c=t.scale;e.setLocalScaling(new Ammo.btVector3(c.x,c.y,c.z));let m=new Ammo.btDefaultMotionState(s),l=new Ammo.btVector3(0,0,0);e.calculateLocalInertia(i,l);let d=new Ammo.btRigidBodyConstructionInfo(i,m,e,l),w=new Ammo.btRigidBody(d);return w.setRestitution(o),w.setFriction(n),w}let S,B=100;function P(e=10,t=10,o=65280,a={x:-30,y:70,z:30},i="sphere"){e*=.2;let s=new n.Kj0(new n.xo$(e,32,32),new n.Wid({color:o}));s.name=i,s.position.set(a.x,a.y,a.z),s.castShadow=!0,s.receiveShadow=!0,s.collisionResponse=e=>{e.material.color.setHex(16777215*Math.random())};let r=new Ammo.btSphereShape(s.geometry.parameters.radius);r.setMargin(.05);let c=M(r,s,.7,0,a,t);s.userData.physicsBody=c,A.addRigidBody(c,2,399),u(s),z.push(s),c.threeMesh=s}function v(e,t){let o=function(e,t){let o,n=R(e),a=new Ammo.btTriangleMesh;for(let e=0;e<n.length;e+=9){let t=n[e],o=n[e+1],i=n[e+2],s=n[e+3],r=n[e+4],c=n[e+5],m=n[e+6],l=n[e+7],d=n[e+8],w=new Ammo.btVector3(t,o,i),p=new Ammo.btVector3(s,r,c),h=new Ammo.btVector3(m,l,d);a.addTriangle(w,p,h)}o=new Ammo.btBvhTriangleMeshShape(a,!1);let i=e.scale;return o.setLocalScaling(new Ammo.btVector3(i.x,i.y,i.z)),o}(t);!function(e,t,o){let n=new Ammo.btTransform;n.setIdentity(),n.setOrigin(new Ammo.btVector3(t.position.x,t.position.y,t.position.z));let a=t.quaternion;n.setRotation(new Ammo.btQuaternion(a.x,a.y,a.z,a.w)),e.addChildShape(n,o)}(e,t,o)}function R(e,t=[],o){if(e)if(e.geometry){let o=[...e.geometry.attributes.position.array];for(let t=0;t<o.length;t+=3)o[t]=o[t]*e.scale.x,o[t+1]=o[t+1]*e.scale.y,o[t+2]=o[t+2]*e.scale.z;console.log("** "+e.type+" Geometry ["+String(e.scale.x)+","+String(e.scale.y)+","+String(e.scale.z)+"]"),console.log("mesh.scale: "+e.scale.x+", "+e.scale.y+", "+e.scale.z),t.push(...o)}else console.log("** "+e.type+" **** ["+String(e.scale.x)+","+String(e.scale.y)+","+String(e.scale.z)+"]");let n=e.scale;return e.children.forEach(((e,a)=>{e.scale.x=e.scale.x*n.x,e.scale.y=e.scale.y*n.y,e.scale.z=e.scale.z*n.z,R(e,t,o)})),t}async function I(e,t){await e.load("../../../assets/sounds/splat.mp3",(function(e){t.setBuffer(e),t.setLoop(!1),t.setVolume(.2),t.play()}))}class D extends n.Hyl{constructor(e=1){super(),this.scale=e}getPoint(e,t=new n.Pa4){let o=Math.sin(7.2*Math.PI*e),a=Math.cos(7.2*Math.PI*e),i=3*e-1;return t.set(o,a,i).multiplyScalar(this.scale)}}const j=[];function O(e){j[e.code]=!1}function V(e){j[e.code]=!0}function C(e,t,o){window.requestAnimationFrame((e=>{C(0,t,o)}));let a=S.getDelta();!function(e){let t=c.getObjectByName("pictureAnchor",!0),o=c.getObjectByName("pictureWindow",!0),a=c.getObjectByName("pictureAnchor",!0),i=c.getObjectByName("pictureWindow",!0),s=c.getObjectByName("pictureFrameLineMesh1",!0),r=c.getObjectByName("pictureFrameLineMesh2",!0);const m=s.geometry.attributes.position.array,l=r.geometry.attributes.position.array,w=o.geometry.parameters.width,p=new n.Pa4,h=new n.Pa4;t.getWorldPosition(p),a.getWorldPosition(h),m[0]=p.x,m[1]=p.y,m[2]=p.z,l[0]=h.x,l[1]=h.y,l[2]=h.z;const y=new n.Pa4,u=new n.Pa4;o.getWorldPosition(y),i.getWorldPosition(u),m[3]=y.x-w/2,m[4]=y.y,m[5]=y.z,l[3]=u.x+w/2,l[4]=u.y,l[5]=u.z,s.geometry.attributes.position.needsUpdate=!0,s.geometry.computeBoundingBox(),s.geometry.computeBoundingSphere(),r.geometry.attributes.position.needsUpdate=!0,r.geometry.computeBoundingBox(),r.geometry.computeBoundingSphere(),d.update()}(),function(e){A.stepSimulation(e,10);for(let e=0;e<z.length;e++){let t=z[e],o=t.userData.physicsBody.getMotionState();if(o){o.getWorldTransform(x);let e=x.getOrigin(),n=x.getRotation();t.position.set(e.x(),e.y(),e.z()),t.quaternion.set(n.x(),n.y(),n.z(),n.w())}}b&&function(e){let t=A.getDispatcher().getNumManifolds();for(let e=0;e<t;e++){let t=A.getDispatcher().getManifoldByIndexInternal(e),o=t.getNumContacts();if(o>0){let n=Ammo.castObject(t.getBody0(),Ammo.btRigidBody),a=Ammo.castObject(t.getBody1(),Ammo.btRigidBody),i=n.threeMesh,s=a.threeMesh;if(i&&s)for(let r=0;r<o;r++){let o=t.getContactPoint(r);const c=o.getDistance();if(c<=0&&("sphere"===i.name&&s.name.includes("brick")||s.name.includes("brick")&&"sphere"===i.name||"sphere"===i.name&&"sphere"===s.name||"sphere"===s.name&&"sphere"===i.name||"pictureWindow"===i.name&&"canonBall"===s.name||"canonBall"===i.name&&"pictureWindow"===s.name||i.name.includes("brick")&&s.name.includes("brick")||s.name.includes("brick")&&i.name.includes("brick"))){let t=n.getLinearVelocity(),m=a.getLinearVelocity(),l=o.get_m_positionWorldOnA(),d=o.get_m_positionWorldOnB(),w=o.get_m_localPointA(),p=o.get_m_localPointB();console.log({manifoldIndex:e,contactIndex:r,distance:c,object0:{tag:i.name,velocity:{x:t.x(),y:t.y(),z:t.z()},worldPos:{x:l.x(),y:l.y(),z:l.z()},localPos:{x:w.x(),y:w.y(),z:w.z()}},object1:{tag:s.name,velocity:{x:m.x(),y:m.y(),z:m.z()},worldPos:{x:d.x(),y:d.y(),z:d.z()},localPos:{x:p.x(),y:p.y(),z:p.z()}}}),"function"==typeof i.collisionResponse&&i.collisionResponse(i),"function"==typeof s.collisionResponse&&s.collisionResponse(s)}}}}}()}(a),function(e,t){const o=c.getObjectByName("canonBall"),n=c.getObjectByName("brick0");(t.KeyI||n.position.y>1.38&&n.position.y<1.39)&&(0===p&&function(e,t={x:0,y:1,z:0}){if(!e.userData.physicsBody)return;let o=e.userData.physicsBody,n=new Ammo.btVector3(5,0,0),a=new Ammo.btVector3(t.x,t.y,t.z);o.activate(!0),o.applyImpulse(a,n)}(o,{x:0,y:400,z:3}),p++);const a=c.getObjectByName("movableGate");a.position.x<-9&&t.KeyD&&function(e,t){let o=new Ammo.btTransform,n=e.userData.physicsBody.getMotionState();n.getWorldTransform(o);let a=o.getOrigin();o.setOrigin(new Ammo.btVector3(a.x()+t.x,a.y()+t.y,a.z()+t.z)),n.setWorldTransform(o)}(a,{x:.2,y:0,z:0})}(0,j),g()}Ammo().then((async function(e){Ammo=e,await async function(){(function(){const e=document.createElement("canvas");document.body.appendChild(e),l=new n.CP7({canvas:e,antialias:!0}),l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(12570884,255),l.shadowMap.enabled=!0,l.shadowMapSoft=!0,l.shadowMap.type=n.ntZ,c=new n.xsS,c.background=new n.Ilk(14086384),w=new a.ZP,function(){let e=["px","nx","py","ny","pz","nz"],t=[];for(let o=0;o<6;o++)t.push(new n.vBJ({map:(new n.dpR).load("../../../assets/skyboxes/skybox1/"+e[o]+".jpg"),side:n._Li}));let o=new n.DvJ(100,120,100);const a=new n.Kj0(o,t);a.name="skyBoxMesh",a.position.x=0,a.position.y=59.9,a.position.z=0,c.add(a)}(),function(){let e=new n.Mig(16777215,.7);e.visible=!0,c.add(e);const t=w.addFolder("Ambient Light");t.add(e,"visible").name("On/Off"),t.add(e,"intensity").min(0).max(1).step(.01).name("Intensity"),t.addColor(e,"color").name("Color");let o=new n.Ox3(16777215,.5);o.visible=!0,o.position.set(0,105,0),o.castShadow=!0,o.shadow.camera.near=0,o.shadow.camera.far=301,o.shadow.camera.left=-50,o.shadow.camera.right=50,o.shadow.camera.top=250,o.shadow.camera.bottom=-250,o.shadow.camera.visible=!0,c.add(o);const a=w.addFolder("Directional Light");a.add(o,"visible").name("On/Off"),a.add(o,"intensity").min(0).max(1).step(.01).name("Intensity"),a.addColor(o,"color").name("Color")}(),m=new n.cPb(75,window.innerWidth/window.innerHeight,.1,1e4),m.position.x=30,m.position.y=160,m.position.z=100,d=new i.z(m,l.domElement),d.target.set(0,0,0),d.addEventListener("change",g)})(),function(e=!0){b=e,x=new Ammo.btTransform;let t=new Ammo.btDefaultCollisionConfiguration,o=new Ammo.btCollisionDispatcher(t),n=new Ammo.btDbvtBroadphase,a=new Ammo.btSequentialImpulseConstraintSolver;A=new Ammo.btDiscreteDynamicsWorld(o,n,a,t),A.setGravity(new Ammo.btVector3(0,-9.80665,0))}(!0),await async function(){!function(){const e=new n.lLk;e.onLoad=()=>{Object.values(h).forEach(((e,t)=>{const o=r.d9(e.gltf.scene),a=new n.Tme;a.add(o),a.scale.set(e.scale.x,e.scale.y,e.scale.z),a.position.set(e.position.x,e.position.y,e.position.z),u(a)}))},h={pc_nightmare_mushroom:{url:"../../../assets/models/pc_nightmare_mushroom/scene.gltf",scale:{x:.2,y:.2,z:.2},position:{x:0,y:5,z:-20}},pc_nightmare_mushroom1:{url:"../../../assets/models/pc_nightmare_mushroom/scene.gltf",scale:{x:.2,y:.2,z:.2},position:{x:-7,y:5,z:-17}},pc_nightmare_mushroom2:{url:"../../../assets/models/pc_nightmare_mushroom/scene.gltf",scale:{x:.2,y:.2,z:.2},position:{x:7,y:5,z:-22}},pc_nightmare_mushroom3:{url:"../../../assets/models/pc_nightmare_mushroom/scene.gltf",scale:{x:.2,y:.2,z:.2},position:{x:0,y:5,z:-10}}};const t=new s.E(e);for(const e of Object.values(h))t.load(e.url,(t=>{e.gltf=t}))}();let e=new n.SJI;m.add(e);let t=new n.BbS(e);(function(e){B=100;let t=new n._12(B,B,1,1);t.rotateX(-Math.PI/2);let o=new n.Wid({color:5997175,side:n.ehD}),a=new n.Kj0(t,o);a.receiveShadow=!0,a.name="xzplane";let i=M(new Ammo.btBoxShape(new Ammo.btVector3(B/2,0,B/2)),a,.7,.8,{x:0,y:0,z:0},0);a.userData.physicsBody=i,A.addRigidBody(i,1,394,24),u(a),z.push(a),i.threeMesh=a})(),P(12,70,242,{x:-16,y:99,z:17}),function(e=42725,t={x:-10,y:0,z:-30}){let o=new n.Kj0(new n.DvJ(5.5,.5,5.9,1,1),new n.Wid({color:e}));o.name="movableGate",t.y=t.y+5.5*o.scale.y/2,o.position.set(t.x,t.y,t.z),o.castShadow=!0,o.receiveShadow=!0;let a=o.geometry.parameters.width,i=o.geometry.parameters.height,s=o.geometry.parameters.depth,r=M(new Ammo.btBoxShape(new Ammo.btVector3(a/2,i/2,s/2)),o,.7,.8,t,0);r.setCollisionFlags(2|r.getCollisionFlags()),r.setActivationState(4),o.userData.physicsBody=r,A.addRigidBody(r,4,130),u(o),z.push(o),r.threeMesh=o}(242,{x:-16,y:92.7,z:17}),function(e=10,t=65280,o={x:0,y:0,z:0}){const a=function(){let e=30,t=1,o=3,a=0,i=0,s=0,r=3.5,c=1.5,m=.5,l={x:0,y:t/2+c/2,z:e/2-m/2},d=new n.ZAu;d.userData.tag="compoundBeam";let w=new n.DvJ(e,t,o,1,1),p=new n.Kj0(w,new n.xoR({color:16222749}));w.rotateY(Math.PI/2),p.position.set(a,i,s),p.castShadow=!0,d.add(p);let h=new n.DvJ(r,c,m,1,1),y=new n.Kj0(h,new n.xoR({color:10334257}));y.position.set(l.x,l.y,l.z),y.castShadow=!0,d.add(y);let g=new n.DvJ(r,c,m,1,1),x=new n.Kj0(g,new n.xoR({color:10334257}));g.rotateY(Math.PI/2),x.position.set(l.x-r/2+m/2,l.y,l.z-r/2+m/2),x.castShadow=!0,d.add(x);let b=new n.DvJ(r,c,m,1,1),S=new n.Kj0(b,new n.xoR({color:10334257}));b.rotateY(Math.PI/2),S.position.set(l.x+r/2-m/2,l.y,l.z-r/2+m/2),S.castShadow=!0,d.add(S);let B=new n.DvJ(r,c,m,1,1),P=new n.Kj0(B,new n.xoR({color:10334257}));P.position.set(l.x,l.y,l.z-r+m),P.castShadow=!0,d.add(P),d.castShadow=!0,d.receiveShadow=!0;let v=new Ammo.btCompoundShape,R=new Ammo.btBoxShape(new Ammo.btVector3(e/2,t/2,o/2)),I=new Ammo.btBoxShape(new Ammo.btVector3(r/2,c/2,m/2)),D=new Ammo.btTransform;D.setIdentity(),D.setOrigin(new Ammo.btVector3(p.position.x,p.position.y,p.position.z));let j=new n._fP;j.setFromAxisAngle(new n.Pa4(0,1,0),Math.PI/2),D.setRotation(new Ammo.btQuaternion(j.x,j.y,j.z,j.w)),v.addChildShape(D,R);let O=new Ammo.btTransform;O.setIdentity(),O.setOrigin(new Ammo.btVector3(y.position.x,y.position.y,y.position.z)),v.addChildShape(O,I);let V=new Ammo.btTransform;V.setIdentity(),V.setOrigin(new Ammo.btVector3(x.position.x,x.position.y,x.position.z));let C=new n._fP;C.setFromAxisAngle(new n.Pa4(0,1,0),Math.PI/2),V.setRotation(new Ammo.btQuaternion(C.x,C.y,C.z,C.w)),v.addChildShape(V,I);let _=new Ammo.btTransform;_.setIdentity(),_.setOrigin(new Ammo.btVector3(S.position.x,S.position.y,S.position.z));let W=new n._fP;W.setFromAxisAngle(new n.Pa4(0,1,0),Math.PI/2),_.setRotation(new Ammo.btQuaternion(W.x,W.y,W.z,W.w)),v.addChildShape(_,I);let K=new Ammo.btTransform;K.setIdentity(),K.setOrigin(new Ammo.btVector3(P.position.x,P.position.y,P.position.z)),v.addChildShape(K,I),v.setMargin(.05);let T=M(v,d,.3,0,{x:-15,y:2.5,z:32},2);return T.setDamping(.1,.5),T.setActivationState(4),d.userData.physicsBody=T,A.addRigidBody(T,f,415),u(d),z.push(d),T.threeMesh=d,T}(),i=function(e=12076763){let t=2,o=2,a=5,i={x:-15,y:t,z:30},s=new n.fHI(t,o,a);s.rotateZ(-Math.PI/2);const r=new n.Kj0(s,new n.Wid({color:e}));r.name="seesawAnchor",r.position.set(i.x,i.y,i.z),r.castShadow=!0,r.receiveShadow=!0,r.collisionResponse=e=>{e.material.color.setHex(16777215*Math.random())};const c=new Ammo.btCylinderShape(new Ammo.btVector3(t,o,a/2));c.setMargin(.05);const m=M(c,r,.4,.6,i,0);return r.userData.physicsBody=m,A.addRigidBody(m,24,399),z.push(r),m.threeMesh=r,u(r),z.push(r),m.threeMesh=r,m}(),s=(a.threeMesh.children[0].geometry.parameters.width,a.threeMesh.children[0].geometry.parameters.height/2),r=i.threeMesh.geometry.parameters.radiusTop,c=new Ammo.btVector3(0,r+s,0),m=new Ammo.btVector3(1,0,0),l=new Ammo.btVector3(0,0,0),d=new Ammo.btVector3(1,0,0),w=new Ammo.btHingeConstraint(i,a,c,l,m,d,!1),p=-Math.PI/12,h=Math.PI/12;w.setLimit(p,h,.9,.1,.1),w.enableAngularMotor(!0,0,.4),A.addConstraint(w,!1),A.addConstraint(w,!1)}(),async function(e=0,t={x:3,y:5,z:-5}){const o=new n.dpR,a=await o.loadAsync("../../../assets/textures/brick-wall.jpg");let i=new n.Kj0(new n.DvJ(42,10,1,1,1),new n.Wid({map:a}));i.name="box",i.position.set(t.x,t.y,t.z),i.castShadow=!0,i.receiveShadow=!0;let s=new Ammo.btBoxShape(new Ammo.btVector3(21,5,.5));s.setMargin(.05);let r=M(s,i,.7,.8,t,e);r.setActivationState(4),i.userData.physicsBody=r,A.addRigidBody(r,8,271),u(i),z.push(i),r.threeMesh=i}(),P(6,25,242,{x:-15,y:7,z:44}),await async function(e=0,t=16222749,o={x:-16,y:100,z:17}){let a=new Ammo.btCompoundShape,i=new n.ZAu;i.userData.tag="funnel",i.position.x=-15,i.position.y=10,i.position.z=20,i.scale.set(4,5,4),await async function(e,t){let o=.6;const a=new n.u9r,i=new Float32Array([-1,-1,1,-1,1,1,1,1,1,1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-.8,1,1,-.8,-1,1,-.8,-1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-.6,-1,-1,-.6,-1,-1,-.6,-1,1,-1,-1,1,o,-1,-1,1,-1,-1,1,-1,1,o,-1,-1,o,-1,1,1,-1,1,-.6,-1,-1,o,-1,-1,o,-1,-.6,o,-1,-.6,-.6,-1,-.6,-.6,-1,-1,-.6,-1,1,-.6,-1,o,o,-1,o,o,-1,o,o,-1,1,-.6,-1,1]);a.setAttribute("position",new n.TlE(i,3));let s=new n.xoR({color:8421376,side:n.ehD,transparent:!0,opacity:.6});s.transparent=!0;let r=new n.Kj0(a,s);r.castShadow=!0,r.name="startBox",r.position.x=0,r.position.y=0,r.position.z=0,e.add(r),v(t,r)}(i,a);let s=M(a,i,.4,.6,o,e);i.userData.physicsBody=s,A.addRigidBody(s,128,143),u(i),z.push(i),s.threeMesh=i}(),await async function(e,t){let o=new Ammo.btCompoundShape,a=new n.ZAu;a.name="slidingTubeTriangleMesh",a.position.copy(e),await async function(e,t){let o=new n.dpR,a=(await o.load("../../../assets/textures/green_grass.jpg"),new D(7)),i=new n.WXh(a,1e3,1.5,20,!1),s=new n.xoR({color:65280});s.side=n.ehD,s.opacity=.6,s.transparent=!0;let r=new n.Kj0(i,s);r.name="tubeMesh",r.rotation.x=Math.PI/2,r.rotation.z=Math.PI/3,r.castShadow=!0,e.add(r);let c=new n.ZAu,m=16711680,l=new n.DvJ(17,.3,20),d=new n.xoR({color:m}),w=new n.Kj0(l,d);w.position.set(-5,9,-8),w.rotation.x=Math.PI/10,w.rotation.y=Math.PI/10,c.add(w);let p=new n.DvJ(16,4,1),h=new n.xoR({color:m}),y=new n.Kj0(p,h);y.position.set(-0,8.5,-5),y.rotation.x=Math.PI/10,y.rotation.y=Math.PI/2.5,c.add(y);let u=new n.DvJ(7,4,1),g=new n.xoR({color:m}),x=new n.Kj0(u,g);x.position.set(-10,8.5,1),x.rotation.x=Math.PI/10,x.rotation.y=Math.PI/1.5,c.add(x),e.add(c),c.position.z=0,c.position.y=.2,e.rotation.y=-.5,v(t,y),v(t,w),v(t,r),v(t,x)}(a,o);let i=M(o,a,.4,.6,e,t);a.userData.physicsBody=i,A.addRigidBody(i,f,391),u(a),z.push(a),i.threeMesh=a}({x:-27,y:16,z:0},0),function(e=10,t={x:-33,y:27.7,z:-9}){let o=new n.ZAu;o.userData.tag="compoundBar";let a=new n.DvJ(14,2.5,2.5),i=new n.Kj0(a,new n.xoR({color:16222749}));i.rotateY(-Math.PI/2),i.position.set(0,0,0),i.castShadow=!0,o.add(i);let s=new n.DvJ(20,2.5,2.5),r=new n.Kj0(s,new n.xoR({color:16222749}));r.rotateY(Math.PI/4),r.position.set(10,0,0),r.castShadow=!0,o.add(r);let c=new n.DvJ(10,.5,20),m=new n.Kj0(c,new n.xoR({color:16222749}));m.rotateY(Math.PI/10),m.position.set(20,0,11),m.castShadow=!0,o.add(m);let l=new Ammo.btCompoundShape,d=new Ammo.btBoxShape(new Ammo.btVector3(7,1.25,1.25)),w=new Ammo.btBoxShape(new Ammo.btVector3(10,1.25,1.25)),p=new Ammo.btBoxShape(new Ammo.btVector3(5,.25,10)),h=new Ammo.btTransform;h.setIdentity(),h.setOrigin(new Ammo.btVector3(i.position.x,i.position.y,i.position.z));let y=new n._fP;y.setFromAxisAngle(new n.Pa4(0,1,0),-Math.PI/2),h.setRotation(new Ammo.btQuaternion(y.x,y.y,y.z,y.w)),l.addChildShape(h,d);let g=new Ammo.btTransform;g.setIdentity(),g.setOrigin(new Ammo.btVector3(r.position.x,r.position.y,r.position.z));let x=new n._fP;x.setFromAxisAngle(new n.Pa4(0,1,0),Math.PI/4),g.setRotation(new Ammo.btQuaternion(x.x,x.y,x.z,x.w)),l.addChildShape(g,w);let b=new Ammo.btTransform;b.setIdentity(),b.setOrigin(new Ammo.btVector3(m.position.x,m.position.y,m.position.z));let S=new n._fP;S.setFromAxisAngle(new n.Pa4(0,1,0),Math.PI/10),b.setRotation(new Ammo.btQuaternion(S.x,S.y,S.z,S.w)),l.addChildShape(b,p);let B=M(l,o,.2,.9,t,e);o.userData.physicsBody=B,A.addRigidBody(B,f,399),u(o),z.push(o),B.threeMesh=o}(),function(e=4,t=12750562,o={x:0,z:-15},a=30,i){let s=Math.PI/2;const r=Math.PI/20;let c={x:0,y:2.5,z:0};const m=new n.mTL;for(let l=0;l<20;l++){let d=new n.Kj0(new n.DvJ(2,5,.5,1,1),new n.Wid({color:t}));d.rotateY(r*(l+1)),d.name="brick"+l.toString(),c.x=o.x+a*Math.sin(s+r),c.z=o.z+a*Math.cos(s+r),s+=r,d.position.set(c.x,c.y,c.z),d.castShadow=!0,d.receiveShadow=!0;let w=new Ammo.btBoxShape(new Ammo.btVector3(1,2.5,.25)),p=new Ammo.btTransform;p.setIdentity(),p.setOrigin(new Ammo.btVector3(d.position.x,d.position.y,d.position.z));let h=new n._fP;h.setFromAxisAngle(new n.Pa4(0,1,0),r*(l+1)),p.setRotation(new Ammo.btQuaternion(h.x,h.y,h.z,h.w)),w.setMargin(.05);let y=M(w,d,.5,.8,c,e);y.setActivationState(4),d.userData.physicsBody=y;let g=0;d.collisionResponse=()=>{0===g&&I(m,i).then((e=>console.log(e))),g=1},A.addRigidBody(y,8,395),u(d),z.push(d),y.threeMesh=d}}(4,12750562,{x:0,z:-15},30,t),await async function(e=0,t=16222749,o={x:30,y:.5,z:-10}){let a=new Ammo.btCompoundShape,i=new n.ZAu;i.userData.tag="canon",i.position.x=0,i.position.y=0,i.position.z=0,await async function(e,t){let o=new n.DvJ(15,1,7),a=new n.xoR({color:56968}),i=new n.Kj0(o,a);i.name="canonBase",i.rotation.y=Math.PI/2,i.position.x=0,i.position.y=0,i.position.z=0,e.add(i),v(t,i);class s extends n.Hyl{constructor(e=1){super(),this.scale=e}getPoint(e,t=new n.Pa4){const o=20*e;return t.set(1,o,0).multiplyScalar(this.scale)}}let r=new s(1),c=new n.WXh(r,20,2.5,8,!1),m=new n.xoR({color:56968,side:n.ehD,transparent:!0,opacity:.6}),l=new n.Kj0(c,m);l.name="canonTube",l.rotation.x=Math.PI/5,l.position.x=-1,l.position.y=0,l.position.z=3,e.add(l),v(t,l)}(i,a);let s=M(a,i,.4,.3,o,e);i.userData.physicsBody=s,A.addRigidBody(s,f,143),u(i),z.push(i),s.threeMesh=i}(),await async function(e){const t=await async function(){let e={x:30,y:80,z:20};const t=new n.Kj0(new n.xo$(2,25,25),new n.Wid({color:16620648}));t.name="pictureAnchor",t.position.set(e.x,e.y,e.z),t.castShadow=!0,t.receiveShadow=!0;const o=new Ammo.btSphereShape(t.geometry.parameters.radius);o.setMargin(.05);const a=M(o,t,.4,.6,e,0);return t.userData.physicsBody=a,A.addRigidBody(a,512,11),z.push(t),a.threeMesh=t,u(t),z.push(t),a.threeMesh=t,a}(),o=await async function(e){let t={x:30,y:30,z:20},o=new n.mTL;const a=new n.dpR,i=await a.loadAsync("../../../assets/textures/glass_window.jpg"),s=new n.Kj0(new n.DvJ(20,20,.5),new n.xoR({map:i}));s.name="pictureWindow",s.position.set(t.x,t.y,t.z),s.castShadow=!0,s.receiveShadow=!0;let r=!0;s.collisionResponse=t=>{r&&(async function(e){const t=new n.dpR,o=await t.loadAsync("../../../assets/textures/glass_window_broken.jpg");e.material.map=o,e.material.needsUpdate=!0}(t),async function(e,t){await e.load("../../../assets/sounds/Big-Glass-Breaking.mp3",(function(e){t.setBuffer(e),t.setLoop(!1),t.setVolume(.2),t.play()}))}(o,e),async function(){let e,t,o,a=new n.UY4({size:1,vertexColors:!0}),i=2e3,s=[],r=[],c=new n.Ilk;for(let a=0;a<15e3;a++)e=n.M8C.randFloatSpread(i),t=n.M8C.randFloatSpread(i),o=n.M8C.randFloatSpread(i),s.push(e,t,o),c.setHex(16777215*Math.random()),r.push(c.r,c.g,c.b);const m=new n.u9r;m.setAttribute("position",new n.a$l(s,3)),m.setAttribute("color",new n.a$l(r,3)),u(new n.woe(m,a))}()),r=!1};const c=new Ammo.btBoxShape(new Ammo.btVector3(10,10,.25));c.setMargin(.05);const m=M(c,s,.7,.8,t,5);return s.userData.physicsBody=m,A.addRigidBody(m,8,523),z.push(s),m.threeMesh=s,u(s),z.push(s),m.threeMesh=s,m}(e);!function(e,t,o){const n=new Ammo.btVector3(0,0,0),a=new Ammo.btVector3(1,0,0),i=new Ammo.btVector3(0,50,0),s=new Ammo.btVector3(1,0,0),r=new Ammo.btHingeConstraint(e,t,n,i,a,s,!1),c=-Math.PI/6,m=Math.PI/6;r.setLimit(c,m,.8,.25,1),r.enableAngularMotor(!0,0,.5),A.addConstraint(r,!1)}(t,o)}(t),function(e,t){let o=c.getObjectByName(e,!0),a=c.getObjectByName(t,!0),i=c.getObjectByName(e,!0),s=c.getObjectByName(t,!0);const r=new n.nls({color:7478780}),m=[],l=[],d=new n.Pa4,w=new n.Pa4,p=new n.Pa4,h=new n.Pa4;o.getWorldPosition(d),a.getWorldPosition(w),i.getWorldPosition(p),s.getWorldPosition(h),m.push(d),m.push(w),l.push(p),l.push(h);const y=(new n.u9r).setFromPoints(m),g=(new n.u9r).setFromPoints(l),x=new n.x12(y,r),b=new n.x12(g,r);x.name="pictureFrameLineMesh1",b.name="pictureFrameLineMesh2",u(x),u(b)}("pictureAnchor","pictureWindow"),P(12,10,16711680,{x:-27,y:2,z:-10}),P(8,8,16711680,{x:30,y:20,z:5.5},"canonBall"),P(7.1,8,9109643,{x:-25,y:28,z:-12}),await async function(e=10,t=10,o={x:0,y:0,z:0}){let a=await(new n.dpR).load("../../../assets/textures/green_grass.jpg"),i=new n._12(e,t,10,10),s=new n.xoR({map:a});s.side=n.ehD;let r=new n.Kj0(i,s);r.name="grassMesh",r.rotation.x=Math.PI/2,r.position.set(o.x,o.y,o.z),function(e,t=1){const o=e.attributes.position.array;for(let e=0;e<o.length;e+=3)o[e+2]=Math.random()*t-t/2;e.attributes.position.needsUpdate=!0,e.computeVertexNormals()}(i),u(r)}(40,20,{x:2,y:.5,z:-16})}(),S=new n.SUY,window.addEventListener("resize",y,!1),document.addEventListener("keyup",O,!1),document.addEventListener("keydown",V,!1),C()}()}))}},o={};function n(e){var a=o[e];if(void 0!==a)return a.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,a,i)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,a,i]=e[l],r=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(r=!1,i<s&&(s=i));if(r){e.splice(l--,1);var m=a();void 0!==m&&(t=m)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,a,i]},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={242:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[s,r,c]=o,m=0;if(s.some((t=>0!==e[t]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var l=c(n)}for(t&&t(o);m<s.length;m++)i=s[m],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=n.O(void 0,[106],(()=>n(415)));a=n.O(a)})();
//# sourceMappingURL=project.js.map