"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[436],{436:(e,t,n)=>{n.r(t),n.d(t,{showMypage:()=>i,mode:()=>o});const i=()=>{const e=new XMLHttpRequest;e.open("GET","/template/mypage.html",!0),e.onload=()=>{if(e.status>=200&&e.status<400){const t=e.responseText;document.getElementById("main").innerHTML=t,m()}},e.send()};let o,a=[],s=[],d=[],l=[],c=[],r=[];const m=async()=>{u("view");const{getAuth:e,onAuthStateChanged:t}=await Promise.all([n.e(238),n.e(167)]).then(n.bind(n,167)),{routing:i}=await Promise.resolve().then(n.bind(n,779));t(e(),(e=>{e&&"/mypage"===location.pathname?((async()=>{const{getUserData:t}=await n.e(938).then(n.bind(n,938));a=await t(e.uid),s=JSON.stringify(a),s=JSON.parse(s);const i=e.reloadUserInfo.providerUserInfo[0];a.user_name=i.displayName,a.user_icon=i.photoUrl,a.twitter_disp_id=i.screenName;const{setUserData:o}=await n.e(660).then(n.bind(n,660));o(a)})(),(async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));d=await t(e.uid),y(),0==d.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",l=JSON.stringify(d),l=JSON.parse(l)})(),p(e.uid)):i("")}))},u=async e=>{const{setView:t}=await n.e(660).then(n.bind(n,660));o=e,t(e)},y=async()=>{document.getElementById("yet-list-container").innerHTML="",document.getElementById("done-list-container").innerHTML="",c=d.filter((e=>!e.check&&!e.remove)),c.sort(((e,t)=>e.order-t.order)),c.forEach(((e,t)=>{e.order=t,g(e.iid,e.name,e.check)})),r=d.filter((e=>e.check&&!e.remove));const{Timestamp:e}=await Promise.all([n.e(238),n.e(591)]).then(n.bind(n,591));r=r.map((t=>null==t.check_date?(t.check_date=e.now(),t):t)),r.sort(((e,t)=>e.check_date-t.check_date)),r.forEach((e=>{g(e.iid,e.name,e.check)}))},p=async e=>{document.getElementById("my-share-button-img").onclick=async()=>{document.getElementById("my-popup").style.display="flex"},document.getElementById("my-edit-button-img").onclick=()=>{u("edit")},document.getElementById("my-title"),document.getElementById("my-title").oninput=e=>{a.list_title=e.target.value},document.getElementById("my-bio-text"),document.getElementById("my-bio-textarea").oninput=e=>{e.target.offsetHeight<e.target.scrollHeight&&(e.target.style.height=e.target.scrollHeight+"px"),a.user_bio=e.target.value},document.getElementById("add-list-wrapper").onclick=()=>{document.getElementById("my-text-edit-area").value="",u("add")};let t=0;document.getElementById("my-add-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area").value;e&&(c.push({iid:t.toString(),name:e,check:!1,remove:!1,order:c.length}),g(t.toString(),e,!1),t++),u("edit")},document.getElementById("my-rename-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area");e.value&&(c.find((t=>t.iid===e.name)).name=e.value,document.querySelector("#iid-"+e.name+" .list-text-box").innerHTML=e.value),u("edit")},document.getElementById("my-input-cancel").onclick=async()=>{u("edit")},document.getElementById("my-edit-cancel-button-img").onclick=async()=>{d=JSON.stringify(l),d=JSON.parse(d),y(),u("view")},document.getElementById("my-save-button-img").onclick=async()=>{const t=document.getElementById("yet-list-container").children,i=t.length;for(let e=0;e<i;e++)c.find((({iid:n})=>n===t[e].id.substr(4))).order=i-e-1;const{saveData:o}=await n.e(561).then(n.bind(n,561));await o(e,c,r),d=c.concat(r);const{checkUserData:l,updateUserData:m}=await n.e(938).then(n.bind(n,938));l(s,a)&&m(a),document.getElementById("my-popup").style.display="flex",0==d.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",y(),u("view"),setTimeout((async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));d=await t(e),c=d.filter((e=>!e.check&&!e.remove))}),1e3)},document.getElementById("my-popup-twitter").onclick=()=>{document.getElementById("my-popup").style.display="none";const t="https://campa-room.web.app/show/"+e;location.href="http://twitter.com/share?url="+t+"&text=行きたいとこリストを更新しました!&hashtags=行きたいとこリスト"},document.getElementById("my-popup-copylink").onclick=()=>{document.getElementById("my-popup").style.display="none",navigator.clipboard.writeText("https://campa-room.web.app/show/"+e)},document.getElementById("my-popup-close").onclick=()=>{document.getElementById("my-popup").style.display="none"}},g=async(e,t,n)=>{const i=document.getElementById("yet-list-container"),a=document.getElementById("done-list-container"),s=document.createElement("div");s.setAttribute("class","list-parent"),s.setAttribute("id","iid-"+e);const d=document.createElement("div");d.setAttribute("class","list-delete-button"),s.appendChild(d);const l=document.createTextNode("削除");d.appendChild(l);const m=document.createElement("div");m.setAttribute("class","list-wrapper"),s.appendChild(m);const y=document.createElement("img");n?(y.setAttribute("src","/data/done.svg"),y.setAttribute("class","list-check-box-done")):(y.setAttribute("src","/data/yet.svg"),y.setAttribute("class","list-check-box-yet"),y.onclick=()=>{if("edit"==o){const t=c.find((t=>t.iid===e));t.check?(y.setAttribute("src","/data/yet.svg"),t.check=!1):(y.setAttribute("src","/data/done.svg"),t.check=!0)}}),m.appendChild(y);const p=document.createElement("div");n?p.setAttribute("class","list-text-box"):p.setAttribute("class","list-text-box my-editable");const g=document.createTextNode(t);let h;p.appendChild(g),p.style.color=n?"#C3C3C3":"#000",m.appendChild(p);const f=document.createElement("img");if(!n){let e,t,n,o;f.setAttribute("src","/data/sort.svg"),f.setAttribute("class","list-sort-button my-edit-mode"),m.appendChild(f),f.ontouchstart=i=>{e=i.touches[0].pageY,t=0,n=0,h=!1,o=setTimeout((()=>{h=!0,s.style.boxShadow="0 3px 30px #aaa",s.style.zIndex=1,window.navigator.vibrate?window.navigator.vibrate([60]):window.navigator.mozVibrate?window.navigator.mozVibrate([60]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([60])}),300)},f.ontouchmove=a=>{if(clearTimeout(o),h){if(t=a.touches[0].pageY-e+n,s==i.firstChild&&t<0)t=0;else if(s==i.lastChild&&0<t)t=0;else if(t<-60){n+=60;const e=s.previousElementSibling;let t=-60;e.style.top=t+"px";const o=()=>{-10<t?t=0:(requestAnimationFrame(o),t+=10),e.style.top=t+"px"};o(),i.insertBefore(s,e),window.navigator.vibrate?window.navigator.vibrate([30]):window.navigator.mozVibrate?window.navigator.mozVibrate([30]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([30])}else if(60<t){n-=60;const e=s.nextElementSibling;let t=60;e.style.top=t+"px";const o=()=>{t<10?t=0:(requestAnimationFrame(o),t-=10),e.style.top=t+"px"};o(),i.insertBefore(s,e.nextSibling),window.navigator.vibrate?window.navigator.vibrate([30]):window.navigator.mozVibrate?window.navigator.mozVibrate([30]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([30])}t=a.touches[0].pageY-e+n,(s==i.firstChild&&t<0||s==i.lastChild&&0<t)&&(t=0),s.style.top=t+"px"}},f.ontouchend=()=>{clearTimeout(o),h&&(s.style.top=0,s.style.zIndex=0,s.style.boxShadow="none",h=!1)}}let b,w,v=!1;p.onclick=()=>{if("view"===o)v=p.offsetWidth<p.scrollWidth,v?(p.style.whiteSpace="normal",m.style.height="auto"):(p.style.whiteSpace="nowrap",m.style.height="60px");else if(!n&&"edit"===o){const t=c.find((t=>t.iid===e));document.getElementById("my-text-edit-area").value=t.name,document.getElementById("my-text-edit-area").name=e,u("rename")}},m.ontouchstart=e=>{m.style.background="#EEE","edit"===o&&(b=m.offsetLeft,w=e.touches[0].clientX)},m.ontouchmove=e=>{if("edit"===o)if(h)m.style.left="0px";else{let t=b+e.touches[0].clientX-w;e.cancelable&&t<0&&(e.preventDefault(),-100<t&&(m.style.left=t+"px"))}},m.ontouchend=()=>{if(m.style.background="#FFF","edit"===o&&m.offsetLeft<0){const e=()=>{-3<m.offsetLeft?m.style.left="0px":-50<m.offsetLeft?(requestAnimationFrame(e),m.style.left=m.offsetLeft+5+"px"):-100<m.offsetLeft?(requestAnimationFrame(e),m.style.left=m.offsetLeft-5+"px"):m.style.left="-100px"};e()}},d.onclick=()=>{const e=c.find((e=>e.iid===s.id.substr(4)));void 0!==e?e.remove=!0:r.find((e=>e.iid===s.id.substr(4))).remove=!0;let t=60,n=m.offsetLeft;const i=()=>{0<t?requestAnimationFrame(i):s.style.display="none",n-=20,m.style.left=n+"px",t-=5,s.style.height=t+"px"};i()},document.addEventListener("touchstart",(e=>{if(e.target!==d&&e.target!==m&&e.target!==p&&e.target!==f&&m.offsetLeft<0){const e=()=>{-3<m.offsetLeft?m.style.left="0px":(requestAnimationFrame(e),m.style.left=m.offsetLeft+10+"px")};e()}})),n?a.insertBefore(s,a.firstChild):i.insertBefore(s,i.firstChild)}}}]);