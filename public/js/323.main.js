"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[323],{323:(e,t,o)=>{o.r(t),o.d(t,{drawCanvas:()=>h,showAnimation:()=>c,hideAnimation:()=>m,clickButton:()=>d,show:()=>y,hide:()=>p});let n,i,a,l=!1,s=0,r=0;const h=()=>{const e=document.getElementById("canvas-area");if(e.getContext){e.width=e.clientWidth,e.height=e.clientHeight;var t=e.getContext("2d");document.body.addEventListener("mousemove",(e=>{i=e.pageX,a=e.pageY}));const o=e.clientWidth,h=e.clientHeight;let c=o-30,m=25,d=0,g=0,u=0,y=0,p="#F37504";const k=()=>{n?d*d<o*o+h*h?(p="#FFFFFF",d+=30,u+=7.5,y+=10.5):(u=45,y=135):d>0?(d-=30,u-=7.5,y-=10.5):(u=0,y=0,p="#F37504"),l&&(g*g<o*o+h*h?g+=30:(l=!1,n=!1,d=0,g=0))},F=()=>{t.globalCompositeOperation="source-over",t.beginPath(),t.arc(c,m,d,0,2*Math.PI,!0),t.fillStyle="#F37504",t.fill(),t.save(),t.translate(o-35,25),t.beginPath(),t.moveTo(-10,-7),t.lineTo(10,-7),t.strokeStyle="#F37504",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(-10,7),t.lineTo(10,7),t.strokeStyle="#F37504",t.lineWidth=2,t.stroke(),t.save(),t.beginPath(),t.rotate(u*Math.PI/180),t.moveTo(-10,0),t.lineTo(10,0),t.strokeStyle=p,t.lineWidth=2,t.stroke(),t.restore(),t.save(),t.beginPath(),t.rotate(y*Math.PI/180),t.moveTo(-10,0),t.lineTo(10,0),t.strokeStyle=p,t.lineWidth=2,t.stroke(),t.restore(),t.restore(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(s,r,g,0,2*Math.PI,!0),t.fill()},b=()=>{requestAnimationFrame(b),t.clearRect(0,0,e.width,e.height),k(),F()};b()}},c=()=>{n=!0},m=()=>{n=!1},d=()=>{l=!0,s=i,r=a},g=document.getElementsByClassName("menu-button"),u=g.length,y=()=>{c(),document.getElementById("menu").style.display="block";let e=0;const t=()=>{for(let t=0;t<u;t++)g[t].style.opacity=e/20;e++,e<=20&&requestAnimationFrame(t)};t()},p=()=>{m();let e=0;const t=()=>{for(let t=0;t<u;t++)g[t].style.opacity=1-e/20;e++,e<=20?requestAnimationFrame(t):document.getElementById("menu").style.display="none"};t()}}}]);