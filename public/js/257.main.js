"use strict";(self.webpackChunklistapp=self.webpackChunklistapp||[]).push([[257],{257:(t,e,i)=>{i.r(e),i.d(e,{login:()=>n,linkAccount:()=>a,checkLoginRedirect:()=>s,logout:()=>c});const n=async()=>{const{getAuth:t,TwitterAuthProvider:e,signInWithRedirect:n}=await Promise.all([i.e(238),i.e(930)]).then(i.bind(i,930));n(t(),new e)},a=async()=>{const{getAuth:t,TwitterAuthProvider:e,linkWithRedirect:n}=await Promise.all([i.e(238),i.e(930)]).then(i.bind(i,930)),a=t(),s=new e;n(a.currentUser,s)},s=async()=>{const{getAuth:t,getRedirectResult:e}=await Promise.all([i.e(238),i.e(930)]).then(i.bind(i,930));e(t()).then((async t=>{if(null!=t){const{getUserData:e}=await i.e(938).then(i.bind(i,938));if(!await e(t.user.uid)){const{createUserData:e}=await i.e(938).then(i.bind(i,938));await e(t.user);const{routing:n}=await i.e(779).then(i.bind(i,779));n("")}}})).catch((async()=>{const{addNotice:t}=await i.e(779).then(i.bind(i,779));t("このTwitterアカウントは既に使用されています。",!0)}))},c=async()=>{const{getAuth:t,signOut:e}=await Promise.all([i.e(238),i.e(930)]).then(i.bind(i,930));e(t())}}}]);