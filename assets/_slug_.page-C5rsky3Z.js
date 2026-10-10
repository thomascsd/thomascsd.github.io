import{i as p,x as v,d as k,y as T,ɵ as M,R as O,p as b,q as y,r as f,s as $,e as i,b as c,f as r,g as h,k as d,h as a,z as w,j as x,l as C,m as P,n as l,w as F}from"./index-CnnJ-1De.js";import{S as B,f as m}from"./seo.service-7k95O-2N.js";import{A as L}from"./_common_module-chunk-BWz430hy.js";const S=e=>["/blog",e],z=e=>["/tags",e],D=(e,n)=>n.attributes.slug;function j(e,n){if(e&1&&(i(0,"a",8),c(1),r()),e&2){const t=n.$implicit,o=d(4);C("routerLink",P(2,z,t)),a(),l(o.formatTag(t))}}function A(e,n){if(e&1&&(i(0,"div",7),h(1,j,2,4,"a",8,F),r()),e&2){const t=d().$implicit;a(),x(t.attributes.tags)}}function I(e,n){if(e&1&&(i(0,"article")(1,"h2",3)(2,"a",4),c(3),r()(),i(4,"div",5),c(5),r(),i(6,"p",6),c(7),r(),b(8,A,3,0,"div",7),r()),e&2){const t=n.$implicit,o=d(2);a(2),C("routerLink",P(5,S,t.attributes.slug)),a(),l(t.attributes.title),a(2),l(o.getDateFromSlug(t.attributes.slug)),a(2),l(t.attributes.description),a(),f(t.attributes.tags!=null&&t.attributes.tags.length?8:-1)}}function R(e,n){if(e&1&&(i(0,"div",0)(1,"header")(2,"h1"),c(3),r(),i(4,"a",1),c(5,"← All Tags"),r()(),i(6,"div",2),h(7,I,9,7,"article",null,D),r()()),e&2){const t=n,o=d();a(3),w("Tag: ",o.formatTag(t)),a(4),x(o.getPostsByTag(t))}}const s=class s{constructor(){this.route=p(v),this.seo=p(B),this.allPosts=k(),this.tag$=this.route.paramMap.pipe(T(n=>n.get("slug"))),this.tag$.subscribe(n=>{if(!n)return;const t=m(n);this.seo.update({title:`${t} 文章｜Thomas Blog`,description:`瀏覽 Thomas Blog 的「${t}」標籤文章列表，探索相關技術筆記與開發心得。`,path:`/tags/${n}`})})}getPostsByTag(n){return this.allPosts.filter(t=>t.attributes.tags?.includes(n)).sort((t,o)=>{const _=t.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/),g=o.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);return!_||!g?0:g[0].localeCompare(_[0])})}formatTag(n){return n&&n?m(n):""}getDateFromSlug(n){const t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};s.ɵfac=function(t){return new(t||s)},s.ɵcmp=M({type:s,selectors:[["app-tag-detail"]],decls:2,vars:3,consts:[[1,"container"],["routerLink","/tags",1,"back-link"],[1,"list"],[1,"post__title"],[3,"routerLink"],[1,"post__date"],[1,"post__desc"],[1,"post__tags"],[1,"tag",3,"routerLink"]],template:function(t,o){if(t&1&&(b(0,R,9,1,"div",0),y(1,"async")),t&2){let _;f((_=$(1,1,o.tag$))?0:-1,_)}},dependencies:[O,L],styles:[`.container[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    header[_ngcontent-%COMP%] {
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 1rem;
    }
    
    h1[_ngcontent-%COMP%] { margin: 0; }

    .back-link[_ngcontent-%COMP%] {
      color: var(--text);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 0.9rem;
    }
    .back-link[_ngcontent-%COMP%]:hover {
      background-color: var(--muted);
      color: white;
    }

    .list[_ngcontent-%COMP%] { display: grid; gap: 1.5rem; }
    
    article[_ngcontent-%COMP%] {
      padding: 1.2rem;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: color-mix(in oklab, var(--bg) 95%, transparent);
    }
    .post__title[_ngcontent-%COMP%] {
      margin: 0 0 0.25rem;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.18;
    }
    .post__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
        text-decoration: none;
        color: inherit;
    }
    .post__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
        text-decoration: underline;
    }
    .post__date[_ngcontent-%COMP%] {
      color: var(--muted);
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
    }
    .post__desc[_ngcontent-%COMP%] { margin: 0; color: var(--muted); }
    
    .post__tags[_ngcontent-%COMP%] {
      margin-top: 1rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .tag[_ngcontent-%COMP%] {
      font-size: 0.85rem;
      padding: 0.2rem 0.5rem;
      background-color: var(--border);
      border-radius: 4px;
      text-decoration: none;
      color: var(--text);
      transition: background-color 0.2s;
    }
    .tag[_ngcontent-%COMP%]:hover {
      background-color: var(--muted);
      color: white;
    }`]});let u=s;export{u as default};
