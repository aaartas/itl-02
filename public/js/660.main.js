"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[660],{660:(e,t,l)=>{l.r(t),l.d(t,{setUserData:()=>n,setView:()=>o});var s=l(436);const n=e=>{const t=document.getElementById("my-title"),l=document.getElementById("my-title-text"),s=document.getElementById("my-bio-textarea"),n=document.getElementById("my-bio-text");null!=e?(document.getElementById("my-name").innerHTML=e.user_name,t.value=e.list_title,t.readOnly=!0,document.getElementById("my-icon").src=e.user_icon,n.style.display="none",s.style.display="block",s.value=e.user_bio,s.offsetHeight<s.scrollHeight&&(s.style.height=s.scrollHeight+"px")):(l.style.display="block",t.style.display="none",s.style.display="none",n.style.display="block")},o=()=>{const e=document.getElementById("my-bio-textarea"),t=document.getElementById("my-title"),l=document.getElementsByClassName("my-edit-mode"),n=l.length,o=document.getElementsByClassName("my-view-mode"),y=o.length,d=document.getElementsByClassName("my-input-mode"),m=d.length,a=document.getElementById("my-add-submit-button"),i=document.getElementById("my-rename-submit-button"),c=document.getElementsByClassName("my-editable"),r=c.length,u=document.getElementsByClassName("list-wrapper"),g=u.length,p=document.getElementsByClassName("list-delete-button"),b=p.length;if("view"===s.mode){for(let e=0;e<n;e++)l[e].style.display="none";for(let e=0;e<y;e++)o[e].style.display="block";for(let e=0;e<m;e++)d[e].style.display="none";for(let e=0;e<r;e++)c[e].style.color="#000";for(let e=0;e<b;e++)p[e].style.display="none";for(let e=0;e<g;e++)u[e].style.position="static";document.getElementById("my-page").style.backgroundColor="#EEB706",document.getElementById("my-sticky-container").style.backgroundColor="#EEB706",e.readOnly=!0,t.readOnly=!0}else if("edit"===s.mode){for(let e=0;e<n;e++)l[e].style.display="block";for(let e=0;e<y;e++)o[e].style.display="none";for(let e=0;e<m;e++)d[e].style.display="none";for(let e=0;e<r;e++)c[e].style.color="#F37504";for(let e=0;e<b;e++)p[e].style.display="block";for(let e=0;e<g;e++)u[e].style.position="absolute";document.getElementById("my-page").style.backgroundColor="#F37504",document.getElementById("my-sticky-container").style.backgroundColor="#F37504",e.readOnly=!1,t.readOnly=!1}else if("add"===s.mode)for(let e=0;e<m;e++)d[e].style.display="block",a.style.display="block",i.style.display="none";else if("rename"===s.mode)for(let e=0;e<m;e++)d[e].style.display="block",a.style.display="none",i.style.display="block"}}}]);