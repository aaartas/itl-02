"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[436],{436:(e,t,n)=>{n.r(t),n.d(t,{showMypage:()=>i,mode:()=>o});const i=()=>{const e=new XMLHttpRequest;e.open("GET","/template/mypage.html",!0),e.onload=()=>{if(e.status>=200&&e.status<400){const t=e.responseText;document.getElementById("main").innerHTML=t,r()}},e.send()};let o,s=[],l=[],c=[],d=[],a=[],m=[];const r=async()=>{u("view");const{getAuth:e,onAuthStateChanged:t}=await Promise.all([n.e(238),n.e(167)]).then(n.bind(n,167)),{routing:i}=await Promise.resolve().then(n.bind(n,779));t(e(),(e=>{e&&"/mypage"===location.pathname?((async()=>{const{getUserData:t}=await n.e(938).then(n.bind(n,938));s=await t(e.uid),l=JSON.stringify(s),l=JSON.parse(l);const i=e.reloadUserInfo.providerUserInfo[0];s.user_name=i.displayName,s.user_icon=i.photoUrl,s.twitter_disp_id=i.screenName;const{setUserData:o}=await n.e(660).then(n.bind(n,660));o(s)})(),(async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));c=await t(e.uid),y(),0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",d=JSON.stringify(c),d=JSON.parse(d)})(),p(e.uid)):i("")}))},u=async e=>{const{setView:t}=await n.e(660).then(n.bind(n,660));o=e,t(e)},y=async()=>{document.getElementById("yet-list-container").innerHTML="",document.getElementById("done-list-container").innerHTML="",a=c.filter((e=>!e.check&&!e.remove)),a.sort(((e,t)=>e.order-t.order)),a.forEach(((e,t)=>{e.order=t,g(e.iid,e.name,e.check)})),m=c.filter((e=>e.check&&!e.remove));const{Timestamp:e}=await Promise.all([n.e(238),n.e(591)]).then(n.bind(n,591));m=m.map((t=>null==t.check_date?(t.check_date=e.now(),t):t)),m.sort(((e,t)=>e.check_date-t.check_date)),m.forEach((e=>{g(e.iid,e.name,e.check)}))},p=async e=>{document.getElementById("my-share-button-img").onclick=async()=>{document.getElementById("my-popup").style.display="flex"},document.getElementById("my-edit-button-img").onclick=()=>{u("edit")},document.getElementById("my-title"),document.getElementById("my-title").oninput=e=>{s.list_title=e.target.value},document.getElementById("my-bio-text"),document.getElementById("my-bio-textarea").oninput=e=>{e.target.offsetHeight<e.target.scrollHeight&&(e.target.style.height=e.target.scrollHeight+"px"),s.user_bio=e.target.value},document.getElementById("add-list-wrapper").onclick=()=>{document.getElementById("my-text-edit-area").value="",u("add")};let t=0;document.getElementById("my-add-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area").value;e&&(a.push({iid:t.toString(),name:e,check:!1,remove:!1,order:a.length}),g(t.toString(),e,!1),t++),u("edit")},document.getElementById("my-rename-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area");e.value&&(a.find((t=>t.iid===e.name)).name=e.value,document.querySelector("#iid-"+e.name+" .list-text-box").innerHTML=e.value),u("edit")},document.getElementById("my-input-cancel").onclick=async()=>{u("edit")},document.getElementById("my-edit-cancel-button-img").onclick=async()=>{c=JSON.stringify(d),c=JSON.parse(c),y(),u("view")},document.getElementById("my-save-button-img").onclick=async()=>{const t=document.getElementById("yet-list-container").children,i=t.length;for(let e=0;e<i;e++)a.find((({iid:n})=>n===t[e].id.substr(4))).order=i-e-1;const{saveData:o}=await n.e(561).then(n.bind(n,561));await o(e,a,m),c=a.concat(m);const{checkUserData:d,updateUserData:r}=await n.e(938).then(n.bind(n,938));d(l,s)&&r(s),document.getElementById("my-popup").style.display="flex",0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",y(),u("view"),setTimeout((async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));c=await t(e),a=c.filter((e=>!e.check&&!e.remove))}),1e3)},document.getElementById("my-popup-twitter").onclick=()=>{document.getElementById("my-popup").style.display="none";const t="https://campa-room.web.app/show/"+e;location.href="http://twitter.com/share?url="+t+"&text=行きたいとこリストを更新しました!&hashtags=行きたいとこリスト"},document.getElementById("my-popup-copylink").onclick=()=>{document.getElementById("my-popup").style.display="none",navigator.clipboard.writeText("https://campa-room.web.app/show/"+e)},document.getElementById("my-popup-close").onclick=()=>{document.getElementById("my-popup").style.display="none"}},g=async(e,t,n)=>{const i=document.getElementById("yet-list-container"),s=document.getElementById("done-list-container"),l=document.createElement("div");l.setAttribute("class","list-parent"),l.setAttribute("id","iid-"+e);const c=document.createElement("div");c.setAttribute("class","list-delete-button"),l.appendChild(c);const d=document.createTextNode("削除");c.appendChild(d);const r=document.createElement("div");r.setAttribute("class","list-wrapper"),l.appendChild(r);const y=document.createElement("img");n?(y.setAttribute("src","/data/done.svg"),y.setAttribute("class","list-check-box-done")):(y.setAttribute("src","/data/yet.svg"),y.setAttribute("class","list-check-box-yet"),y.onclick=()=>{if("edit"==o){const t=a.find((t=>t.iid===e));t.check?(y.setAttribute("src","/data/yet.svg"),t.check=!1):(y.setAttribute("src","/data/done.svg"),t.check=!0)}}),r.appendChild(y);const p=document.createElement("div");n?p.setAttribute("class","list-text-box"):p.setAttribute("class","list-text-box my-editable");const g=document.createTextNode(t);if(p.appendChild(g),p.style.color=n?"#C3C3C3":"#000",r.appendChild(p),!n){const e=document.createElement("img");let t,n,s,c,d;e.setAttribute("src","/data/sort.svg"),e.setAttribute("class","list-sort-button my-edit-mode"),r.appendChild(e),window.onresize=()=>{s=!1},e.ontouchstart=e=>{t=e.touches[0].clientX,n=e.touches[0].pageY,s=!0,c=0,d=0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"},e.ontouchmove=e=>{if("edit"===o&&s){if(l.style.zIndex=1,c=e.touches[0].pageY-n+d,l==i.firstChild&&c<0)c=0;else if(l==i.lastChild&&0<c)c=0;else if(c<-60){d+=60;const e=l.previousElementSibling;let t=-60;const n=()=>{-10<t?t=0:(requestAnimationFrame(n),t+=10),e.style.top=t+"px"};n(),i.insertBefore(l,e)}else if(60<c){d-=60;const e=l.nextElementSibling;let t=60;const n=()=>{t<10?t=0:(requestAnimationFrame(n),t-=10),e.style.top=t+"px"};n(),i.insertBefore(l,e.nextSibling)}l.style.top=c+"px"}},e.ontouchend=()=>{document.documentElement.style.overflow="auto",document.body.style.overflow="auto",l.style.top=0,l.style.zIndex=0}}n||(p.onclick=()=>{if("edit"===o){const t=a.find((t=>t.iid===e));document.getElementById("my-text-edit-area").value=t.name,document.getElementById("my-text-edit-area").name=e,u("rename")}}),r.ontouchstart=e=>{r.style.background="#EEE";const t=r.offsetLeft,n=e.touches[0].clientX,i=e.touches[0].pageY;let s=!0;r.ontouchmove=e=>{if("edit"===o&&(50<Math.abs(e.touches[0].pageY-i)&&(s=!1,r.style.left="0px"),s)){let i=t+e.touches[0].clientX-n;-100<i&&i<0&&(r.style.left=i+"px")}},r.ontouchend=()=>{if(r.style.background="#FFF","edit"===o&&r.offsetLeft<0){const e=()=>{-3<r.offsetLeft?r.style.left="0px":-50<r.offsetLeft?(requestAnimationFrame(e),r.style.left=r.offsetLeft+5+"px"):-100<r.offsetLeft?(requestAnimationFrame(e),r.style.left=r.offsetLeft-5+"px"):r.style.left="-100px"};e()}}},c.onclick=()=>{const e=a.find((e=>e.iid===c.parentElement.id.substr(4)));void 0!==e?e.remove=!0:m.find((e=>e.iid===c.parentElement.id.substr(4))).remove=!0;let t=60;const n=()=>{0<t?requestAnimationFrame(n):c.parentElement.style.display="none",r.style.left=r.offsetLeft-20+"px",t-=5,c.parentElement.style.height=t+"px"};n()},document.addEventListener("touchstart",(e=>{if(e.target!==c&&e.target!==r){const e=()=>{-3<r.offsetLeft?r.style.left="0px":(requestAnimationFrame(e),r.style.left=r.offsetLeft+10+"px")};e()}})),n?s.insertBefore(l,s.firstChild):i.insertBefore(l,i.firstChild)}}}]);