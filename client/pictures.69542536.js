import{S as s,i as t,s as a,e as l,k as e,c as r,a as c,m as n,d as o,f as i,g as f,h,n as g,v as u,w as m,x as p,y as d,z as v,A as $,B as E}from"./client.f71367be.js";import{P as w}from"./PageTitle.08c7fc24.js";import{a as I}from"./utils.dce419c3.js";function j(s,t,a){const l=s.slice();return l[1]=t[a],l}function x(s){let t,a,u,m;return{c(){t=l("div"),a=l("img"),m=e(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=c(t);a=r(l,"IMG",{src:!0,alt:!0,class:!0}),m=n(l),l.forEach(o),this.h()},h(){a.src!==(u=s[1])&&i(a,"src",u),i(a,"alt","♥"),i(a,"class","img-fluid card"),i(t,"class","col-12 col-lg-6 p-2")},m(s,l){f(s,t,l),h(t,a),h(t,m)},p:g,d(s){s&&o(t)}}}function P(s){let t,a,g,I,P;const T=new w({props:{title:"Photos"}});let b=s[0],k=[];for(let t=0;t<b.length;t+=1)k[t]=x(j(s,b,t));return{c(){t=l("article"),u(T.$$.fragment),a=e(),g=l("section"),I=l("div");for(let s=0;s<k.length;s+=1)k[s].c();this.h()},l(s){t=r(s,"ARTICLE",{class:!0});var l=c(t);m(T.$$.fragment,l),a=n(l),g=r(l,"SECTION",{class:!0});var e=c(g);I=r(e,"DIV",{class:!0});var i=c(I);for(let s=0;s<k.length;s+=1)k[s].l(i);i.forEach(o),e.forEach(o),l.forEach(o),this.h()},h(){i(I,"class","row"),i(g,"class","container"),i(t,"class","overflow-auto py-2 bg-dark text-light svelte-1eem146")},m(s,l){f(s,t,l),p(T,t,null),h(t,a),h(t,g),h(g,I);for(let s=0;s<k.length;s+=1)k[s].m(I,null);P=!0},p(s,[t]){if(1&t){let a;for(b=s[0],a=0;a<b.length;a+=1){const l=j(s,b,a);k[a]?k[a].p(l,t):(k[a]=x(l),k[a].c(),k[a].m(I,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=b.length}},i(s){P||(d(T.$$.fragment,s),P=!0)},o(s){v(T.$$.fragment,s),P=!1},d(s){s&&o(t),$(T),E(k,s)}}}function T(s){return[(()=>{const s=[];let t=1;do{s.push(I(`${t}.jpg`))}while(t++<10);return s})()]}export default class extends s{constructor(s){super(),t(this,s,T,P,a,{})}}
