import{i as p,ɵ as l,R as _,d as o,b as i,e as s,f as d,g as c,h as u,j as f,k as x,l as h,m}from"./index-CwsdFOqf.js";const C=r=>["/tags",r],b=(r,n)=>n.name;function k(r,n){if(r&1&&(o(0,"a",2)(1,"span",3),i(2),s(),o(3,"span",4),i(4),s()()),r&2){const t=n.$implicit,e=f();x("routerLink",h(3,C,t.name)),c(2),m(e.formatTag(t.name)),c(2),m(t.count)}}const a=class a{constructor(){this.posts=p()}get tags(){const n=new Map;return this.posts.forEach(t=>{t.attributes.tags&&t.attributes.tags.forEach(e=>{n.set(e,(n.get(e)||0)+1)})}),Array.from(n.entries()).map(([t,e])=>({name:t,count:e})).sort((t,e)=>e.count-t.count||t.name.localeCompare(e.name))}formatTag(n){return n.charAt(0).toUpperCase()+n.slice(1).replace(/-/g," ")}};a.ɵfac=function(t){return new(t||a)},a.ɵcmp=l({type:a,selectors:[["app-tags-index"]],decls:6,vars:0,consts:[[1,"container"],[1,"tags-list"],[1,"tag-item",3,"routerLink"],[1,"tag-name"],[1,"tag-count"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"h1"),i(2,"Tags"),s(),o(3,"div",1),d(4,k,5,5,"a",2,b),s()()),t&2&&(c(4),u(e.tags))},dependencies:[_],styles:[`.container[_ngcontent-%COMP%] {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    h1[_ngcontent-%COMP%] {
      margin-bottom: 2rem;
      text-align: center;
    }
    .tags-list[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .tag-item[_ngcontent-%COMP%] {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--border);
      border-radius: 9999px;
      text-decoration: none;
      color: var(--text);
      transition: all 0.2s;
    }
    .tag-item[_ngcontent-%COMP%]:hover {
      background-color: var(--muted);
      color: white;
      transform: translateY(-2px);
    }
    .tag-count[_ngcontent-%COMP%] {
      background-color: rgba(0,0,0,0.1);
      padding: 0.1rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.85rem;
    }`]});let g=a;export{g as default};
