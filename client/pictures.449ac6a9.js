import{S as s,i as t,s as a,e as l,a as e,c as r,b as c,g as o,f as n,h as g,j as i,k as f,n as h,m as p,o as m,p as u,r as j,u as d,v,x as $}from"./client.b15e23bd.js";import{a as E}from"./utils.ef383f8c.js";import{P as I}from"./PageTitle.046c9ec4.js";function b(s,t,a){const l=s.slice();return l[1]=t[a],l}function x(s){let t,a,p,m;return{c(){t=l("div"),a=l("img"),m=e(),this.h()},l(s){t=r(s,"DIV",{class:!0});var l=c(t);a=r(l,"IMG",{src:!0,alt:!0,class:!0}),m=o(l),l.forEach(n),this.h()},h(){a.src!==(p=s[1])&&g(a,"src",p),g(a,"alt","♥"),g(a,"class","img-fluid card"),g(t,"class","col-12 col-lg-6 p-2")},m(s,l){i(s,t,l),f(t,a),f(t,m)},p:h,d(s){s&&n(t)}}}function w(s){let t,a,h,E,w;const P=new I({props:{title:"Photos"}});let T=s[0],k=[];for(let t=0;t<T.length;t+=1)k[t]=x(b(s,T,t));return{c(){t=l("article"),p(P.$$.fragment),a=e(),h=l("section"),E=l("div");for(let s=0;s<k.length;s+=1)k[s].c();this.h()},l(s){t=r(s,"ARTICLE",{class:!0});var l=c(t);m(P.$$.fragment,l),a=o(l),h=r(l,"SECTION",{class:!0});var e=c(h);E=r(e,"DIV",{class:!0});var g=c(E);for(let s=0;s<k.length;s+=1)k[s].l(g);g.forEach(n),e.forEach(n),l.forEach(n),this.h()},h(){g(E,"class","row"),g(h,"class","container"),g(t,"class","overflow-auto py-2 bg-dark text-light svelte-1eem146")},m(s,l){i(s,t,l),u(P,t,null),f(t,a),f(t,h),f(h,E);for(let s=0;s<k.length;s+=1)k[s].m(E,null);w=!0},p(s,[t]){if(1&t){let a;for(T=s[0],a=0;a<T.length;a+=1){const l=b(s,T,a);k[a]?k[a].p(l,t):(k[a]=x(l),k[a].c(),k[a].m(E,null))}for(;a<k.length;a+=1)k[a].d(1);k.length=T.length}},i(s){w||(j(P.$$.fragment,s),w=!0)},o(s){d(P.$$.fragment,s),w=!1},d(s){s&&n(t),v(P),$(k,s)}}}function P(s){return[[E("1.jpg"),E("10.jpg"),E("26.jpg"),E("34.jpg"),E("42.jpg"),E("63.jpg"),E("69.jpg"),E("70.jpg"),E("73.jpg"),E("78.jpg")]]}export default class extends s{constructor(s){super(),t(this,s,P,w,a,{})}}