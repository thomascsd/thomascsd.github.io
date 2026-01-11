import{v as h,w as P,i as v,x as k,ɵ as M,R as O,o as m,p as T,q as u,r as y,d as i,b as c,e as r,f as b,j as d,g as o,y as w,h as f,k as x,l as C,m as l,u as F}from"./index-CwsdFOqf.js";import{A as $}from"./_common_module-chunk-XEAJNLnz.js";const L=e=>["/blog",e],A=e=>["/tags",e],D=(e,n)=>n.attributes.slug;function j(e,n){if(e&1&&(i(0,"a",8),c(1),r()),e&2){const t=n.$implicit,a=d(4);x("routerLink",C(2,A,t)),o(),l(a.formatTag(t))}}function z(e,n){if(e&1&&(i(0,"div",7),b(1,j,2,4,"a",8,F),r()),e&2){const t=d().$implicit;o(),f(t.attributes.tags)}}function B(e,n){if(e&1&&(i(0,"article")(1,"h2",3)(2,"a",4),c(3),r()(),i(4,"div",5),c(5),r(),i(6,"p",6),c(7),r(),m(8,z,3,0,"div",7),r()),e&2){const t=n.$implicit,a=d(2);o(2),x("routerLink",C(5,L,t.attributes.slug)),o(),l(t.attributes.title),o(2),l(a.getDateFromSlug(t.attributes.slug)),o(2),l(t.attributes.description),o(),u(t.attributes.tags!=null&&t.attributes.tags.length?8:-1)}}function I(e,n){if(e&1&&(i(0,"div",0)(1,"header")(2,"h1"),c(3),r(),i(4,"a",1),c(5,"← All Tags"),r()(),i(6,"div",2),b(7,B,9,7,"article",null,D),r()()),e&2){const t=n,a=d();o(3),w("Tag: ",a.formatTag(t)),o(4),f(a.getPostsByTag(t))}}const s=class s{constructor(){this.route=h(P),this.allPosts=v(),this.tag$=this.route.paramMap.pipe(k(n=>n.get("slug")))}getPostsByTag(n){return this.allPosts.filter(t=>t.attributes.tags?.includes(n)).sort((t,a)=>{const _=t.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/),g=a.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);return!_||!g?0:g[0].localeCompare(_[0])})}formatTag(n){return n?n.charAt(0).toUpperCase()+n.slice(1).replace(/-/g," "):""}getDateFromSlug(n){const t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};s.ɵfac=function(t){return new(t||s)},s.ɵcmp=M({type:s,selectors:[["app-tag-detail"]],decls:2,vars:3,consts:[[1,"container"],["routerLink","/tags",1,"back-link"],[1,"list"],[1,"post__title"],[3,"routerLink"],[1,"post__date"],[1,"post__desc"],[1,"post__tags"],[1,"tag",3,"routerLink"]],template:function(t,a){if(t&1&&(m(0,I,9,1,"div",0),T(1,"async")),t&2){let _;u((_=y(1,1,a.tag$))?0:-1,_)}},dependencies:[O,$],styles:[`.container[_ngcontent-%COMP%] {
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
    }`]});let p=s;export{p as default};
