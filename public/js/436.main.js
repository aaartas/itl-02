"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[436],{436:(e,t,n)=>{n.r(t),n.d(t,{showMypage:()=>o,mode:()=>s});var i=n(359);const o=()=>{const e=new XMLHttpRequest;e.open("GET","/template/mypage.html",!0),e.onload=()=>{if(e.status>=200&&e.status<400){const t=e.responseText;document.getElementById("main").innerHTML=t,y()}},e.send()};let s,a=[],l=[],d=[],c=[],r=[],m=[];const y=async()=>{u("view");const{getAuth:e,onAuthStateChanged:t,signInAnonymously:i}=await Promise.all([n.e(238),n.e(930)]).then(n.bind(n,930)),{setNotice:o}=await Promise.resolve().then(n.bind(n,779)),s=e();t(s,(e=>{document.getElementById("makelist-button").style.display="none",e?e.isAnonymous?(o([{message:"Twitterで行きたいとこリストを共有しよう",isError:!1}]),(async()=>{const{setUserData:e}=await n.e(660).then(n.bind(n,660));e()})(),(async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));d=await t(e.uid),p(),0==d.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",c=JSON.stringify(d),c=JSON.parse(c)})(),g(e.uid,e.isAnonymous)):(o(),(async()=>{const{getUserData:t}=await n.e(938).then(n.bind(n,938));a=await t(e.uid),l=JSON.stringify(a),l=JSON.parse(l);const i=e.reloadUserInfo.providerUserInfo[0];a.user_name=i.displayName,a.user_icon=i.photoUrl,a.twitter_disp_id=i.screenName;const{setUserData:o}=await n.e(660).then(n.bind(n,660));o(a)})(),(async()=>{const{getLists:t}=await n.e(561).then(n.bind(n,561));d=await t(e.uid),p(),null==d||0==d.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",c=JSON.stringify(d),c=JSON.parse(c)})(),g(e.uid,e.isAnonymous)):i(s)}))},u=async e=>{const{setView:t}=await n.e(660).then(n.bind(n,660));s=e,t(e)},p=async()=>{document.getElementById("yet-list-container").innerHTML="",document.getElementById("done-list-container").innerHTML="",r=d.filter((e=>!e.check&&!e.remove)),r.sort(((e,t)=>e.order-t.order)),r.forEach(((e,t)=>{e.order=t,h(e.iid,e.name,e.check)})),m=d.filter((e=>e.check&&!e.remove));const{Timestamp:e}=await Promise.all([n.e(238),n.e(591)]).then(n.bind(n,591));m=m.map((t=>null==t.check_date?(t.check_date=e.now(),t):t)),m.sort(((e,t)=>e.check_date-t.check_date)),m.forEach((e=>{h(e.iid,e.name,e.check)}))},g=async(e,t)=>{document.getElementById("my-share-button-img").onclick=async()=>{t?document.getElementById("my-popup-login").style.display="flex":document.getElementById("my-popup").style.display="flex"},document.getElementById("my-edit-button-img").onclick=()=>{u("edit")},document.getElementById("my-title"),document.getElementById("my-title").oninput=e=>{a.list_title=e.target.value},document.getElementById("my-bio-text"),document.getElementById("my-bio-textarea").oninput=e=>{e.target.offsetHeight<e.target.scrollHeight&&(e.target.style.height=e.target.scrollHeight+"px"),a.user_bio=e.target.value},document.getElementById("add-list-wrapper").onclick=()=>{document.getElementById("my-text-edit-area").value="",u("add")};let o=0;document.getElementById("my-add-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area").value;e&&(r.push({iid:o.toString(),name:e,check:!1,remove:!1,order:r.length}),h(o.toString(),e,!1),o++),u("edit")},document.getElementById("my-rename-submit-button").onclick=async()=>{let e=document.getElementById("my-text-edit-area");e.value&&(r.find((t=>t.iid===e.name)).name=e.value,document.querySelector("#iid-"+e.name+" .list-text-box").innerHTML=e.value),u("edit")},document.getElementById("my-input-cancel").onclick=async()=>{u("edit")},document.getElementById("my-edit-cancel-button-img").onclick=async()=>{d=JSON.stringify(c),d=JSON.parse(d),p(),u("view")},document.getElementById("my-save-button-img").onclick=async()=>{const i=document.getElementById("yet-list-container").children,o=i.length;for(let e=0;e<o;e++)r.find((({iid:t})=>t===i[e].id.substr(4))).order=o-e-1;const{saveData:s}=await n.e(561).then(n.bind(n,561));if(await s(e,r,m,c),d=r.concat(m),c=d,t)document.getElementById("my-popup-login").style.display="flex";else{const{checkUserData:e,updateUserData:t}=await n.e(938).then(n.bind(n,938));e(l,a)&&t(a),document.getElementById("my-popup").style.display="flex"}0==d.length?document.getElementById("my-list-unregistered").style.display="block":document.getElementById("my-list-unregistered").style.display="none",p(),u("view")},document.getElementById("my-popup-twitter").onclick=async()=>{document.getElementById("my-popup").style.display="none";const t="https://"+i.Z.domain+"/show/"+e;location.href="http://twitter.com/share?url="+t+"&text=行きたいとこリストを更新しました!%0A%20%23行きたいとこリスト%20"},document.getElementById("my-popup-copylink").onclick=()=>{document.getElementById("my-popup").style.display="none",navigator.clipboard.writeText("https://"+i.Z.domain+"/show/"+e)},document.getElementById("my-popup-close").onclick=()=>{document.getElementById("my-popup").style.display="none"},document.getElementById("my-popup-new-login").onclick=async()=>{const{linkAccount:e}=await n.e(257).then(n.bind(n,257));e()},document.getElementById("my-popup-old-login").onclick=async()=>{const{login:e}=await n.e(257).then(n.bind(n,257));e()},document.getElementById("my-popup-login-close").onclick=()=>{document.getElementById("my-popup-login").style.display="none"}},h=async(e,t,n)=>{const i=document.getElementById("yet-list-container"),o=document.getElementById("done-list-container"),a=document.createElement("div");a.setAttribute("class","list-parent"),a.setAttribute("id","iid-"+e);const l=document.createElement("div");l.setAttribute("class","list-delete-button"),a.appendChild(l);const d=document.createTextNode("削除");l.appendChild(d);const c=document.createElement("div");c.setAttribute("class","list-wrapper"),a.appendChild(c);const y=document.createElement("img");n?(y.setAttribute("src","/data/done.svg"),y.setAttribute("class","list-check-box-done")):(y.setAttribute("src","/data/yet.svg"),y.setAttribute("class","list-check-box-yet"),y.onclick=()=>{if("edit"==s){const t=r.find((t=>t.iid===e));t.check?(y.setAttribute("src","/data/yet.svg"),t.check=!1):(y.setAttribute("src","/data/done.svg"),t.check=!0)}}),c.appendChild(y);const p=document.createElement("div");n?p.setAttribute("class","list-text-box"):p.setAttribute("class","list-text-box my-editable");const g=document.createTextNode(t);let h;p.appendChild(g),p.style.color=n?"#C3C3C3":"#000",c.appendChild(p);const f=document.createElement("img");if(!n){let e,t,n,o;f.setAttribute("src","/data/sort.svg"),f.setAttribute("class","list-sort-button my-edit-mode"),c.appendChild(f),f.ontouchstart=i=>{e=i.touches[0].pageY,t=0,n=0,h=!1,o=setTimeout((()=>{h=!0,a.style.boxShadow="0 3px 30px #aaa",a.style.zIndex=1,window.navigator.vibrate?window.navigator.vibrate([60]):window.navigator.mozVibrate?window.navigator.mozVibrate([60]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([60])}),300)},f.ontouchmove=s=>{if(clearTimeout(o),h){if(t=s.touches[0].pageY-e+n,a==i.firstChild&&t<0)t=0;else if(a==i.lastChild&&0<t)t=0;else if(t<-60){n+=60;const e=a.previousElementSibling;let t=-60;e.style.top=t+"px";const o=()=>{-10<t?t=0:(requestAnimationFrame(o),t+=10),e.style.top=t+"px"};o(),i.insertBefore(a,e),window.navigator.vibrate?window.navigator.vibrate([30]):window.navigator.mozVibrate?window.navigator.mozVibrate([30]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([30])}else if(60<t){n-=60;const e=a.nextElementSibling;let t=60;e.style.top=t+"px";const o=()=>{t<10?t=0:(requestAnimationFrame(o),t-=10),e.style.top=t+"px"};o(),i.insertBefore(a,e.nextSibling),window.navigator.vibrate?window.navigator.vibrate([30]):window.navigator.mozVibrate?window.navigator.mozVibrate([30]):window.navigator.webkitVibrate&&window.navigator.webkitVibrate([30])}t=s.touches[0].pageY-e+n,(a==i.firstChild&&t<0||a==i.lastChild&&0<t)&&(t=0),a.style.top=t+"px"}},f.ontouchend=()=>{clearTimeout(o),h&&(a.style.top=0,a.style.zIndex=0,a.style.boxShadow="none",h=!1)}}let b,w,v=!1;p.onclick=()=>{if("view"===s)v=p.offsetWidth<p.scrollWidth,v?(p.style.whiteSpace="normal",c.style.height="auto"):(p.style.whiteSpace="nowrap",c.style.height="60px");else if(!n&&"edit"===s){const t=r.find((t=>t.iid===e));document.getElementById("my-text-edit-area").value=t.name,document.getElementById("my-text-edit-area").name=e,u("rename")}},c.ontouchstart=e=>{c.style.background="#EEE","edit"===s&&(b=c.offsetLeft,w=e.touches[0].clientX)},c.ontouchmove=e=>{if("edit"===s)if(h)c.style.left="0px";else{let t=b+e.touches[0].clientX-w;e.cancelable&&t<0&&(e.preventDefault(),-100<t&&(c.style.left=t+"px"))}},c.ontouchend=()=>{if(c.style.background="#FFF","edit"===s&&c.offsetLeft<0){const e=()=>{-3<c.offsetLeft?c.style.left="0px":-50<c.offsetLeft?(requestAnimationFrame(e),c.style.left=c.offsetLeft+5+"px"):-100<c.offsetLeft?(requestAnimationFrame(e),c.style.left=c.offsetLeft-5+"px"):c.style.left="-100px"};e()}},l.onclick=()=>{const e=r.find((e=>e.iid===a.id.substr(4)));void 0!==e?e.remove=!0:m.find((e=>e.iid===a.id.substr(4))).remove=!0;let t=60,n=c.offsetLeft;const i=()=>{0<t?requestAnimationFrame(i):a.style.display="none",n-=20,c.style.left=n+"px",t-=5,a.style.height=t+"px"};i()},document.addEventListener("touchstart",(e=>{if("edit"===s&&e.target!==l&&e.target!==c&&e.target!==p&&e.target!==f&&c.offsetLeft<0){const e=()=>{-3<c.offsetLeft?c.style.left="0px":(requestAnimationFrame(e),c.style.left=c.offsetLeft+10+"px")};e()}})),document.addEventListener("click",(e=>{"view"===s&&e.target!==a&&e.target!==l&&e.target!==c&&e.target!==p&&(v=!1,p.style.whiteSpace="nowrap",c.style.height="60px")})),n?o.insertBefore(a,o.firstChild):i.insertBefore(a,i.firstChild)}}}]);