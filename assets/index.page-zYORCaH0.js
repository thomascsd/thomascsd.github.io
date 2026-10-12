import{i as p,d,ɵ as m,R as g,e as i,b as a,f as r,g as u,h as s,j as b,k as f,l as h,m as C,n as c}from"./index-Dr1Y_KIi.js";import{S as x}from"./seo.service-Cq7IKurQ.js";const v=o=>["/blog",o],y=(o,e)=>e.attributes.slug;function k(o,e){if(o&1&&(i(0,"article")(1,"h2",3)(2,"a",4),a(3),r()(),i(4,"div",5),a(5),r(),i(6,"p",6),a(7),r()()),o&2){const t=e.$implicit,l=f();s(2),h("routerLink",C(4,v,t.attributes.slug)),s(),c(t.attributes.title),s(2),c(l.getDateFromSlug(t.attributes.slug)),s(2),c(t.attributes.description)}}const n=class n{constructor(){this.seo=p(x),this.posts=d(),this.seo.update({title:"Blog 文章｜Thomas Blog",description:"瀏覽 Thomas Blog 的全部技術文章與開發心得。",path:"/blog"})}getDateFromSlug(e){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};n.ɵfac=function(t){return new(t||n)},n.ɵcmp=m({type:n,selectors:[["app-blog"]],decls:6,vars:0,consts:[["aria-labelledby","blog-title"],["id","blog-title"],[1,"list"],[1,"post__title"],[3,"routerLink"],[1,"post__date"],[1,"post__desc"]],template:function(t,l){t&1&&(i(0,"section",0)(1,"h1",1),a(2,"Blog"),r(),i(3,"div",2),u(4,k,8,6,"article",null,y),r()()),t&2&&(s(4),b(l.posts))},dependencies:[g],styles:[`[_nghost-%COMP%] { display: block; }
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
    .post__desc[_ngcontent-%COMP%] { margin: 0; color: var(--muted); }`]});let _=n;export{_ as default};
