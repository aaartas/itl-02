"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[323],{323:(e,t,n)=>{n.r(t),n.d(t,{loadView:()=>o,drawCanvas:()=>r,showAnimation:()=>c,hideAnimation:()=>d,clickButton:()=>g,show:()=>y,hide:()=>w});const o=async()=>{const e=location.pathname;let t;"/"===e||"/mypage"===e?t="/template/mypage.html":/show/.test(e)?t="/template/show.html":"/how"===e?t="/template/how.html":history.back();const n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=()=>{n.status>=200&&n.status<400&&(document.getElementById("main").innerHTML=n.responseText)},n.send()};let i,l,a,s=!1,h=0,m=0;const r=()=>{const e=document.getElementById("canvas-area");if(e.getContext){e.width=e.clientWidth,e.height=e.clientHeight;let t=e.getContext("2d");document.body.addEventListener("mousemove",(e=>{l=e.pageX,a=e.pageY}));let n=e.clientWidth,o=e.clientHeight,r=n-30,c=25,d=0,g=0,p=0,u=0,y="#F37504";window.onresize=()=>{e.width=e.clientWidth,e.height=e.clientHeight,t=e.getContext("2d"),n=e.clientWidth,o=e.clientHeight,r=n-30};const w=()=>{i?d*d<n*n+o*o?(y="#FFFFFF",d+=30,p+=7.5,u+=10.5):(p=45,u=135):d>0?(d-=30,p-=7.5,u-=10.5):(p=0,u=0,y="#F37504"),s&&(g*g<n*n+o*o?g+=30:(s=!1,i=!1,d=0,g=0))},k=()=>{t.globalCompositeOperation="source-over",t.beginPath(),t.arc(r,c,d,0,2*Math.PI,!0),t.fillStyle="#F37504",t.fill(),t.save(),t.translate(n-35,25),t.beginPath(),t.moveTo(-10,-7),t.lineTo(10,-7),t.strokeStyle="#F37504",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(-10,7),t.lineTo(10,7),t.strokeStyle="#F37504",t.lineWidth=2,t.stroke(),t.save(),t.beginPath(),t.rotate(p*Math.PI/180),t.moveTo(-10,0),t.lineTo(10,0),t.strokeStyle=y,t.lineWidth=2,t.stroke(),t.restore(),t.save(),t.beginPath(),t.rotate(u*Math.PI/180),t.moveTo(-10,0),t.lineTo(10,0),t.strokeStyle=y,t.lineWidth=2,t.stroke(),t.restore(),t.restore(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(h,m,g,0,2*Math.PI,!0),t.fill()},b=()=>{requestAnimationFrame(b),t.clearRect(0,0,e.width,e.height),w(),k()};b()}},c=()=>{i=!0},d=()=>{i=!1},g=()=>{s=!0,h=l,m=a},p=document.getElementsByClassName("menu-button"),u=p.length,y=()=>{c(),document.getElementById("menu").style.display="block";let e=0;const t=()=>{for(let t=0;t<u;t++)p[t].style.opacity=e/20;e++,e<=20&&requestAnimationFrame(t)};t()},w=()=>{d();let e=0;const t=()=>{for(let t=0;t<u;t++)p[t].style.opacity=1-e/20;e++,e<=20?requestAnimationFrame(t):document.getElementById("menu").style.display="none"};t()}}}]);