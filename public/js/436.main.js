"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[436],{436:(e,t,n)=>{n.r(t),n.d(t,{showMypage:()=>i,mode:()=>s});const i=()=>{const e=new XMLHttpRequest;e.open("GET","/template/mypage.html",!0),e.onload=()=>{if(e.status>=200&&e.status<400){const t=e.responseText;document.getElementById("main").innerHTML=t,r()}},e.send()};let s,o=[],a=[],c=[],l=[],d=[],m=[];const r=async()=>{u("view");const{getAuth:e,onAuthStateChanged:t}=await Promise.all([n.e(238),n.e(167)]).then(n.bind(n,167)),{routing:i}=await Promise.resolve().then(n.bind(n,779));t(e(),(e=>{e&&"/mypage"===location.pathname?((async()=>{const{getUserData:t}=await n.e(938).then(n.bind(n,938));o=await t(e.uid),a=JSON.stringify(o),a=JSON.parse(a);const i=e.reloadUserInfo.providerUserInfo[0];o.user_name=i.displayName,o.user_icon=i.photoUrl,o.twitter_disp_id=i.screenName;const{setUserData:s}=await n.e(660).then(n.bind(n,660));s(o)})(),(async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));c=await t(e.uid),y(),0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",l=JSON.stringify(c),l=JSON.parse(l)})(),p(e.uid)):i("")}))},u=async e=>{const{setView:t}=await n.e(660).then(n.bind(n,660));s=e,t(e)},y=async()=>{document.getElementById("yet-list-container").innerHTML="",document.getElementById("done-list-container").innerHTML="",d=c.filter((e=>!e.check&&!e.remove)),d.sort(((e,t)=>e.order-t.order)),d.forEach(((e,t)=>{e.order=t,g(e.iid,e.name,e.check)})),m=c.filter((e=>e.check&&!e.remove));const{Timestamp:e}=await Promise.all([n.e(238),n.e(591)]).then(n.bind(n,591));m=m.map((t=>null==t.check_date?(t.check_date=e.now(),t):t)),m.sort(((e,t)=>e.check_date-t.check_date)),m.forEach((e=>{g(e.iid,e.name,e.check)}))},p=async e=>{document.getElementById("my-share-button-img").onclick=async()=>{document.getElementById("my-popup").style.display="flex"},document.getElementById("my-edit-button-img").onclick=()=>{u("edit")},document.getElementById("my-title"),document.getElementById("my-title").oninput=e=>{o.list_title=e.target.value},document.getElementById("my-bio-text"),document.getElementById("my-bio-textarea").oninput=e=>{e.target.offsetHeight<e.target.scrollHeight&&(e.target.style.height=e.target.scrollHeight+"px"),o.user_bio=e.target.value},document.getElementById("add-list-wrapper").onclick=()=>{document.getElementById("my-text-edit-area").value="",u("add")};let t=0;document.getElementById("my-add-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area").value;e&&(d.push({iid:t.toString(),name:e,check:!1,remove:!1,order:d.length}),g(t.toString(),e,!1),t++),u("edit")},document.getElementById("my-rename-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area");e.value&&(d.find((t=>t.iid===e.name)).name=e.value,document.querySelector("#iid-"+e.name+" .list-text-box").innerHTML=e.value),u("edit")},document.getElementById("my-input-cancel").onclick=async()=>{u("edit")},document.getElementById("my-edit-cancel-button-img").onclick=async()=>{c=JSON.stringify(l),c=JSON.parse(c),y(),u("view")},document.getElementById("my-save-button-img").onclick=async()=>{const t=document.getElementById("yet-list-container").children,i=t.length;for(let e=0;e<i;e++)d.find((({iid:n})=>n===t[e].id.substr(4))).order=i-e-1;const{saveData:s}=await n.e(561).then(n.bind(n,561));await s(e,d,m),c=d.concat(m);const{checkUserData:l,updateUserData:r}=await n.e(938).then(n.bind(n,938));l(a,o)&&r(o),document.getElementById("my-popup").style.display="flex",0==c.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",y(),u("view"),setTimeout((async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));c=await t(e),d=c.filter((e=>!e.check&&!e.remove))}),1e3)},document.getElementById("my-popup-twitter").onclick=()=>{document.getElementById("my-popup").style.display="none";const t="https://campa-room.web.app/show/"+e;location.href="http://twitter.com/share?url="+t+"&text=行きたいとこリストを更新しました!&hashtags=行きたいとこリスト"},document.getElementById("my-popup-copylink").onclick=()=>{document.getElementById("my-popup").style.display="none",navigator.clipboard.writeText("https://campa-room.web.app/show/"+e)},document.getElementById("my-popup-close").onclick=()=>{document.getElementById("my-popup").style.display="none"}},g=async(e,t,n)=>{const i=document.getElementById("yet-list-container"),o=document.getElementById("done-list-container"),a=document.createElement("div");a.setAttribute("class","list-parent"),a.setAttribute("id","iid-"+e);const c=document.createElement("div");c.setAttribute("class","list-delete-button"),a.appendChild(c);const l=document.createTextNode("削除");c.appendChild(l);const r=document.createElement("div");r.setAttribute("class","list-wrapper"),a.appendChild(r);const y=document.createElement("img");n?(y.setAttribute("src","/data/done.svg"),y.setAttribute("class","list-check-box-done")):(y.setAttribute("src","/data/yet.svg"),y.setAttribute("class","list-check-box-yet"),y.onclick=()=>{if("edit"==s){const t=d.find((t=>t.iid===e));t.check?(y.setAttribute("src","/data/yet.svg"),t.check=!1):(y.setAttribute("src","/data/done.svg"),t.check=!0)}}),r.appendChild(y);const p=document.createElement("div");n?p.setAttribute("class","list-text-box"):p.setAttribute("class","list-text-box my-editable");const g=document.createTextNode(t);if(p.appendChild(g),p.style.color=n?"#C3C3C3":"#000",r.appendChild(p),!n){const e=document.createElement("img");let t,n,s,o,c;e.setAttribute("src","/data/sort.svg"),e.setAttribute("class","list-sort-button my-edit-mode"),r.appendChild(e),window.onresize=()=>{s=!1},e.ontouchstart=e=>{t=e.touches[0].clientX,n=e.touches[0].pageY,s=!0,o=0,c=0},e.ontouchmove=e=>{if(e.preventDefault(),s){if(a.style.zIndex=1,o=e.touches[0].pageY-n+c,a==i.firstChild&&o<0)o=0;else if(a==i.lastChild&&0<o)o=0;else if(o<-60){c+=60;const e=a.previousElementSibling;let t=-60;const n=()=>{-10<t?t=0:(requestAnimationFrame(n),t+=10),e.style.top=t+"px"};n(),i.insertBefore(a,e)}else if(60<o){c-=60;const e=a.nextElementSibling;let t=60;const n=()=>{t<10?t=0:(requestAnimationFrame(n),t-=10),e.style.top=t+"px"};n(),i.insertBefore(a,e.nextSibling)}a.style.top=o+"px"}},e.ontouchend=()=>{a.style.top=0,a.style.zIndex=0}}n||(p.onclick=()=>{if("edit"===s){const t=d.find((t=>t.iid===e));document.getElementById("my-text-edit-area").value=t.name,document.getElementById("my-text-edit-area").name=e,u("rename")}}),r.ontouchstart=e=>{r.style.background="#EEE";const t=r.offsetLeft,n=e.touches[0].clientX,i=e.touches[0].pageY;let o=!0;r.ontouchmove=e=>{if("edit"===s&&(50<Math.abs(e.touches[0].pageY-i)&&(o=!1,r.style.left="0px"),o)){let i=t+e.touches[0].clientX-n;-100<i&&i<0&&(r.style.left=i+"px")}},r.ontouchend=()=>{if(r.style.background="#FFF","edit"===s&&r.offsetLeft<0){const e=()=>{-3<r.offsetLeft?r.style.left="0px":-50<r.offsetLeft?(requestAnimationFrame(e),r.style.left=r.offsetLeft+5+"px"):-100<r.offsetLeft?(requestAnimationFrame(e),r.style.left=r.offsetLeft-5+"px"):r.style.left="-100px"};e()}}},c.onclick=()=>{const e=d.find((e=>e.iid===c.parentElement.id.substr(4)));void 0!==e?e.remove=!0:m.find((e=>e.iid===c.parentElement.id.substr(4))).remove=!0;let t=60;const n=()=>{0<t?requestAnimationFrame(n):c.parentElement.style.display="none",r.style.left=r.offsetLeft-20+"px",t-=5,c.parentElement.style.height=t+"px"};n()},document.addEventListener("touchstart",(e=>{if(e.target!==c&&e.target!==r){const e=()=>{-3<r.offsetLeft?r.style.left="0px":(requestAnimationFrame(e),r.style.left=r.offsetLeft+10+"px")};e()}})),n?o.insertBefore(a,o.firstChild):i.insertBefore(a,i.firstChild)}}}]);