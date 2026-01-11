import{i as p,ɵ as d,R as m,d as o,b as a,e as i,f as g,g as r,h as u,j as b,k as f,l as h,m as _}from"./index-CwsdFOqf.js";const C=s=>["/blog",s],x=(s,e)=>e.attributes.slug;function v(s,e){if(s&1&&(o(0,"article")(1,"h2",3)(2,"a",4),a(3),i()(),o(4,"div",5),a(5),i(),o(6,"p",6),a(7),i()()),s&2){const t=e.$implicit,l=b();r(2),f("routerLink",h(4,C,t.attributes.slug)),r(),_(t.attributes.title),r(2),_(l.getDateFromSlug(t.attributes.slug)),r(2),_(t.attributes.description)}}const n=class n{constructor(){this.posts=p()}getDateFromSlug(e){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};n.ɵfac=function(t){return new(t||n)},n.ɵcmp=d({type:n,selectors:[["app-blog"]],decls:6,vars:0,consts:[["aria-labelledby","blog-title"],["id","blog-title"],[1,"list"],[1,"post__title"],[3,"routerLink"],[1,"post__date"],[1,"post__desc"]],template:function(t,l){t&1&&(o(0,"section",0)(1,"h1",1),a(2,"Blog"),i(),o(3,"div",2),g(4,v,8,6,"article",null,x),i()()),t&2&&(r(4),u(l.posts))},dependencies:[m],styles:[`[_nghost-%COMP%] { display: block; }
    .list[_ngcontent-%COMP%] { display: grid; gap: 1.5rem; }
    article[_ngcontent-%COMP%] { padding: 1.2rem; border: 1px solid var(--border); border-radius: 10px; }
    .post__title[_ngcontent-%COMP%] {
      margin: 0 0 0.25rem;
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 1.18;
    }
    .post__date[_ngcontent-%COMP%] {
      color: var(--muted);
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      margin-left: 0.1em;
    }
    .post__desc[_ngcontent-%COMP%] { margin: 0; color: var(--muted); }`]});let c=n;export{c as default};
