!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){function o(e){e&&e.systems.building&&e.systems.building.reexamineBuilding()}function n(e){"position"==e.detail.name&&o(e.detail.target.sceneEl)}function r(){this.lastScene=this.el.sceneEl,o(this.lastScene),this.el.addEventListener("componentchanged",n)}function i(){o(this.lastScene)}function a(){o(this.lastScene),this.lastScene=null,this.el.removeEventListener("componentchanged",n)}AFRAME.registerSystem("building",{reexamineBuilding:function(){function e(e){for(var t=0;t<e.faces.length;t++){var o=e.faces[t],n=o.c;o.c=o.b,o.b=n}}function t(e,t){for(var o=["a","b","c"],n=0;n<e.faces.length;n++){var r=e.faces[n];e.faceVertexUvs[0][n]||(e.faceVertexUvs[0][n]=[]);for(var i=e.faceVertexUvs[0][n],a=0;a<o.length;a++){var s=r[o[a]],l=e.vertices[s];i[a]||(i[a]=new THREE.Vector2);var m=i[a];t(l,m,s)}}e.uvsNeedUpdate=!0}function o(e,o,n,r,i){t(e,function(e,t){t.set(e[o]*r,e[n]*i)})}function n(e){e.computeFaceNormals(),e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere()}function r(e){for(var t=[],o=0;o<e.children.length;o++){var n=e.children[o];n.components.wall&&t.push(n)}return t}function i(e){for(var t=e.components.room.data.outside,o=r(e),n=0,i=0;i<o.length;i++){var a=o[i],s=o[(i+1)%o.length],l=a.components.position.data,m=s.components.position.data;n+=(m.x-l.x)*(m.z+l.z)}var c=!1;return n>0&&(c=!c),t&&(c=!c),c&&o.reverse(),o}function a(e){var t=i(e.parentNode),o=t.indexOf(e);return t[(o+1)%t.length]}function s(e,t){var o=e.parentNode,n=a(o);if(n){var r=o.object3D.getWorldPosition(),i=n.object3D.getWorldPosition(),s=t.object3D.getWorldPosition(),l=s.x-r.x,m=s.z-r.z,c=i.x-r.x,d=i.z-r.z,h=Math.atan2(d,c),f=Math.sqrt(c*c+d*d),u=l*Math.cos(-h)-m*Math.sin(-h),g=t.components.doorlink.data.width/2;u=Math.max(u,g+p),u=Math.min(u,f-g-p),e.setAttribute("position",{x:u,y:0,z:0}),e.object3D.updateMatrixWorld()}}function l(e){for(var t=c.el.querySelectorAll("[doorlink]"),o=0;o<t.length;o++){var n=t[o];if(n.components.doorlink.data.from==e)return n;if(n.components.doorlink.data.to==e)return n}}function m(e){return e.components.wall.data.height?e.components.wall.data.height:e.parentNode.components.room.data.height}var c=this,p=1e-4;c.dirty||(c.dirty=!0,setTimeout(function(){function a(e){var t=new THREE.Vector3(B,e,0);M.object3D.localToWorld(t),P.myVerts.push(t)}function d(e){var t=e.clone();me.object3D.worldToLocal(t),he.vertices.push(t)}c.el.object3D.updateMatrixWorld();for(var h=0;h<c.el.children.length;h++){var f=c.el.children[h];if(f.components&&f.components.room){var u=f.components.room.data.width,g=f.components.room.data.length;if(u||g)if(u&&g){var v=r(f);v.length>=4?(v.length>4&&console.error("rooms with WIDTH and LENGTH should only have four walls!"),v[0].setAttribute("position",{x:0,y:0,z:0}),v[1].setAttribute("position",{x:u,y:0,z:0}),v[2].setAttribute("position",{x:u,y:0,z:g}),v[3].setAttribute("position",{x:0,y:0,z:g})):console.error("rooms with WIDTH and LENGTH must have four walls!")}else console.error("rooms with WIDTH must also have LENGTH (and vice versa)");var y=i(f);if(y.length>2)for(var E=0;E<y.length;E++){var M=y[E],w=y[(E+1)%y.length],x=w.components.position.data.x-M.components.position.data.x,A=w.components.position.data.z-M.components.position.data.z,b=Math.atan2(A,x);M.setAttribute("rotation",{x:0,y:-b/Math.PI*180,z:0}),M.object3D.updateMatrixWorld()}}}for(var T=c.el.querySelectorAll("[doorlink]"),R=0;R<T.length;R++){var F=T[R],H=F.components.doorlink;if(!H)return;s(H.data.from,H.el),s(H.data.to,H.el)}for(var h=0;h<c.el.children.length;h++){var f=c.el.children[h];if(f.components&&f.components.room){var k=f.components.room.data.outside,y=i(f);if(y.length>2){for(var E=0;E<y.length;E++){for(var M=y[E],w=y[(E+1)%y.length],x=w.components.position.data.x-M.components.position.data.x,A=w.components.position.data.z-M.components.position.data.z,z=Math.sqrt(x*x+A*A),b=Math.atan2(A,x),j=w.components.position.data.y-M.components.position.data.y,C=m(w)-m(M),D=[],N=0;N<M.children.length;N++){var V=M.children[N];V.components&&V.components.doorhole&&D.push(V)}D.sort(function(e,t){return e.components.position.data.x-t.components.position.data.x});var S=new THREE.Shape;S.moveTo(0,m(M)),S.lineTo(0,0);for(var G=0;G<D.length;G++){var P=D[G];P.myVerts||(P.myVerts=[]),P.myVerts.length=0;var W=l(D[G]);if(W)for(var O=P.components,L=W.components,U=-1;U<=1;U+=2){var B=O.position.data.x+L.doorlink.data.width/2*U,q=B/z*j,I=q+L.doorlink.data.height,J=m(M)+B/z*C,K=q+J-p;I>K&&(I=K),a(q),a(I),U<0?(S.lineTo(B,q),S.lineTo(B,I)):(S.lineTo(B,I),S.lineTo(B,q))}}S.lineTo(z,w.components.position.data.y-M.components.position.data.y),S.lineTo(z,w.components.position.data.y-M.components.position.data.y+m(w));var Q=new THREE.ShapeGeometry(S);o(Q,"x","y",1,1),n(Q);var X=M.components.material?M.components.material.material:M.parentNode.components.material.material;M.myMesh?(M.myMesh.geometry=Q,M.myMesh.material=X):(M.myMesh=new THREE.Mesh(Q,X),M.setObject3D("wallMesh",M.myMesh))}for(var Y=[],Z=0;Z<f.children.length;Z++){var $=f.children[Z];$.components&&($.components.floor||$.components.ceiling)&&Y.push($)}for(var _=0;_<Y.length;_++){for(var ee=Y[_],te=ee.components.ceiling,oe=new THREE.Shape,E=0;E<y.length;E++){var M=y[E],B=M.components.position.data.x,ne=M.components.position.data.z;E?oe.lineTo(B,ne):oe.moveTo(B,ne)}for(var re=new THREE.ShapeGeometry(oe),E=0;E<y.length;E++){var M=y[E],ie=re.vertices[E];ie.set(ie.x,M.components.position.data.y,ie.y),te&&(ie.y+=m(M))}var ae=!1;te||(ae=!ae),k&&(ae=!ae),ae&&e(re),o(re,"x","z",te?1:-1,1),n(re),ee.myMeshes||(ee.myMeshes=[]);var se=te?"ceiling":"floor",X=ee.components.material?ee.components.material.material:ee.parentNode.components.material.material;ee.myMeshes[se]?(ee.myMeshes[se].geometry=re,ee.myMeshes[se].material=X):(ee.myMeshes[se]=new THREE.Mesh(re,X),ee.setObject3D(se,ee.myMeshes[se]))}}}}for(var R=0;R<T.length;R++){var F=T[R],H=F.components.doorlink;if(H.data.from&&H.data.to){if(!H.data.from.myVerts)return;if(!H.data.to.myVerts)return;for(var le=0;le<F.children.length;le++){var me=F.children[le];if(me.components)for(var ce=["sides","floor","ceiling"],pe=0;pe<ce.length;pe++){var de=ce[pe];if(me.components[de]){var X=me.components.material?me.components.material.material:me.parentNode.components.material.material;if(me.myGeoms||(me.myGeoms=[]),!me.myGeoms[de]){var he=new THREE.Geometry;me.myGeoms[de]=he;var fe=new THREE.Mesh(he,X);he.meshRef=fe,me.setObject3D(de,fe),he.faces.push(new THREE.Face3(0,1,2),new THREE.Face3(1,3,2)),"sides"==de&&he.faces.push(new THREE.Face3(4,5,6),new THREE.Face3(5,7,6))}var he=me.myGeoms[de];he.meshRef.material=X,he.vertices.length=0;var ue=H.data.from.myVerts,ge=H.data.to.myVerts;switch(de){case"floor":d(ge[0]),d(ge[2]),d(ue[2]),d(ue[0]),t(he,function(e,t,o){t.set(1-o%2,1-Math.floor(o/2))});break;case"ceiling":d(ge[3]),d(ge[1]),d(ue[1]),d(ue[3]),t(he,function(e,t,o){t.set(o%2,1-Math.floor(o/2))});break;case"sides":d(ge[2]),d(ge[3]),d(ue[0]),d(ue[1]),d(ue[2]),d(ue[3]),d(ge[0]),d(ge[1]),t(he,function(e,t,o){t.set(Math.floor(o/2),o%2),o<4&&(t.x=1-t.x)})}he.verticesNeedUpdate=!0,he.elementsNeedUpdate=!0,n(he)}}}}}c.dirty=!1}))}});var s={init:r,update:i,remove:a};AFRAME.registerComponent("room",Object.assign({schema:{outside:{type:"boolean"},height:{type:"number",default:2.4},width:{type:"number"},length:{type:"number"}}},s)),AFRAME.registerComponent("wall",Object.assign({schema:{height:{type:"number"}}},s)),AFRAME.registerComponent("floor",s),AFRAME.registerComponent("ceiling",s),AFRAME.registerComponent("doorhole",s),AFRAME.registerComponent("doorlink",Object.assign({schema:{from:{type:"selector"},to:{type:"selector"},height:{type:"number",default:2},width:{type:"number",default:.8}}},s)),AFRAME.registerComponent("sides",s),AFRAME.registerPrimitive("rw-room",{defaultComponents:{room:{}},mappings:{outside:"room.outside",height:"room.height",width:"room.width",length:"room.length"}}),AFRAME.registerPrimitive("rw-wall",{defaultComponents:{wall:{}},mappings:{height:"wall.height"}}),AFRAME.registerPrimitive("rw-floor",{defaultComponents:{floor:{}},mappings:{}}),AFRAME.registerPrimitive("rw-ceiling",{defaultComponents:{ceiling:{}},mappings:{}}),AFRAME.registerPrimitive("rw-doorhole",{defaultComponents:{doorhole:{}},mappings:{}}),AFRAME.registerPrimitive("rw-doorlink",{defaultComponents:{doorlink:{}},mappings:{from:"doorlink.from",to:"doorlink.to",height:"doorlink.height",width:"doorlink.width"}}),AFRAME.registerPrimitive("rw-sides",{defaultComponents:{sides:{}},mappings:{}})}]);
