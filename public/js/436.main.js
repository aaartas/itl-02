"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[436],{436:(e,t,n)=>{n.r(t),n.d(t,{showMypage:()=>i});const i=()=>{const e=new XMLHttpRequest;e.open("GET","/template/mypage.html",!0),e.onload=()=>{if(e.status>=200&&e.status<400){const t=e.responseText;document.getElementById("main").innerHTML=t,y()}},e.send()};let l,o,d=[],s=[],c=[],a=[],m=[],r=[];const y=async()=>{l="view";const{getAuth:e,onAuthStateChanged:t}=await Promise.all([n.e(238),n.e(167)]).then(n.bind(n,167)),{routing:i}=await Promise.resolve().then(n.bind(n,653));t(e(),(async e=>{if(e&&"/mypage"===location.pathname){o=e.uid;const{getUserData:t}=await n.e(938).then(n.bind(n,938));d=await t(e.uid),document.getElementById("my-icon").src=d.user_icon,document.getElementById("my-name").innerHTML=d.user_name,document.getElementById("my-title").value=d.list_title,document.getElementById("my-title").readOnly=!0;const i=document.getElementById("my-bio-textarea");i.value=d.user_bio,u("view"),i.offsetHeight<i.scrollHeight&&(i.style.height=i.scrollHeight+"px");const{getLists:l}=await n.e(561).then(n.bind(n,561));c=await l(e.uid),0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",a=JSON.stringify(c),a=JSON.parse(a),s=JSON.stringify(d),s=JSON.parse(s),p(),g()}else i("")}))},u=async e=>{const{setView:t}=await n.e(391).then(n.bind(n,391));l=e,t(e)},p=async()=>{document.getElementById("yet-list-container").innerHTML="",document.getElementById("done-list-container").innerHTML="",m=c.filter((e=>!e.check&&!e.remove)),m.sort(((e,t)=>e.order-t.order)),m.forEach(((e,t)=>{e.order=t,h(e.iid,e.name,e.check)})),r=c.filter((e=>e.check&&!e.remove)),r.sort(((e,t)=>e.check_date-t.check_date)),r.forEach((e=>{h(e.iid,e.name,e.check)}))},g=async()=>{document.getElementById("my-share-button-img").onclick=async()=>{document.getElementById("my-popup").style.display="flex"},document.getElementById("my-edit-button-img").onclick=()=>{u("edit")},document.getElementById("my-title"),document.getElementById("my-title").oninput=e=>{d.list_title=e.target.value},document.getElementById("my-bio-text"),document.getElementById("my-bio-textarea").oninput=e=>{e.target.offsetHeight<e.target.scrollHeight&&(e.target.style.height=e.target.scrollHeight+"px"),d.user_bio=e.target.value},document.getElementById("add-list-wrapper").onclick=()=>{document.getElementById("my-text-edit-area").value="",u("add")};let e=0;document.getElementById("my-add-submit-button").onclick=async()=>{let t=document.getElementById("my-text-edit-area").value;t&&(m.push({iid:e.toString(),name:t,check:!1,remove:!1,order:m.length}),h(e.toString(),t,!1),e++),u("edit")},document.getElementById("my-rename-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area");e.value&&(m.find((t=>t.iid===e.name)).name=e.value,document.querySelector("#id-"+e.name+" .list-text-box").innerHTML=e.value),u("edit")},document.getElementById("my-input-cancel").onclick=async()=>{u("edit")},document.getElementById("my-edit-cancel-button-img").onclick=async()=>{c=JSON.stringify(a),c=JSON.parse(c),p(),u("view")},document.getElementById("my-save-button-img").onclick=async()=>{const{saveData:e}=await n.e(561).then(n.bind(n,561));await e(o,m,r),c=m.concat(r);const{checkUserData:t,updateUserData:i}=await n.e(938).then(n.bind(n,938));t(s,d)&&i(d),document.getElementById("my-popup").style.display="flex",0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",p(),u("view")},document.getElementById("my-popup-twitter").onclick=()=>{document.getElementById("my-popup").style.display="none";const e="https://campa-room.web.app/show/"+o;location.href="http://twitter.com/share?url="+e+"&text=行きたいとこリストを更新しました!&hashtags=行きたいとこリスト"},document.getElementById("my-popup-copylink").onclick=()=>{document.getElementById("my-popup").style.display="none",navigator.clipboard.writeText("https://campa-room.web.app/show/"+o)},document.getElementById("my-popup-close").onclick=()=>{document.getElementById("my-popup").style.display="none"}},h=async(e,t,n)=>{let i=document.createElement("div");i.setAttribute("class","list-parent"),i.setAttribute("id","id-"+e);let o=document.createElement("div");o.setAttribute("class","list-delete-button"),i.appendChild(o);let d=document.createElement("div");d.setAttribute("class","list-wrapper"),i.appendChild(d);let s=document.createElement("img");n?(s.setAttribute("src","/data/done.svg"),s.setAttribute("class","list-check-box-done")):(s.setAttribute("src","/data/yet.svg"),s.setAttribute("class","list-check-box-yet"),s.onclick=()=>{if("edit"==l){const t=m.find((t=>t.iid===e));t.check?(s.setAttribute("src","/data/yet.svg"),t.check=!1):(s.setAttribute("src","/data/done.svg"),t.check=!0)}}),d.appendChild(s);let c=document.createElement("div");n?c.setAttribute("class","list-text-box"):c.setAttribute("class","list-text-box my-editable");let a,y=document.createTextNode(t);c.appendChild(y),c.style.color=n?"#C3C3C3":"#000",d.appendChild(c),n||(c.onclick=()=>{if("edit"===l){const t=m.find((t=>t.iid===e));document.getElementById("my-text-edit-area").value=t.name,document.getElementById("my-text-edit-area").name=e,u("rename")}}),d.ontouchstart=e=>{d.style.background="#EEEEEE";let t=e.touches[0].clientX,n=e.touches[0].clientY,i=!0;d.ontouchmove=e=>{if("edit"===l&&(50<Math.abs(e.touches[0].clientY-n)&&(i=!1),i)){let n=e.touches[0].clientX-t;n<0&&(d.style.left=n+"px")}},d.ontouchend=()=>{let e=60;if(d.style.background="#FFFFFF","edit"===l&&d.offsetLeft<0){const t=()=>{if(Math.abs(d.offsetLeft)<3)d.style.left="0px";else if(-document.body.clientWidth/2<d.offsetLeft){requestAnimationFrame(t);let e=d.offsetLeft+5;d.style.left=e+"px"}else if(-document.body.clientWidth<d.offsetLeft){requestAnimationFrame(t);let e=d.offsetLeft-10;d.style.left=e+"px"}else if(d.offsetLeft<=-document.body.clientWidth){0<e?requestAnimationFrame(t):o.parentElement.style.display="none";const n=m.find((e=>e.iid===o.parentElement.id.substr(3)));void 0!==n?n.remove=!0:r.find((e=>e.iid===o.parentElement.id.substr(3))).remove=!0,e-=4,o.parentElement.style.height=e+"px"}};t()}}},a=n?document.getElementById("done-list-container"):document.getElementById("yet-list-container"),a.prepend(i)}}}]);