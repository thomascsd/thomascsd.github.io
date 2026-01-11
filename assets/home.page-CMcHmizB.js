import{i as C,ɵ as f,N as P,R as M,d as o,s as O,e as r,b as s,f as h,g as i,h as b,o as v,j as d,k as l,l as g,m as _,q as x,u as k}from"./index-CwsdFOqf.js";const p=e=>["/blog",e],w=e=>["/tags",e],y=(e,n)=>n.attributes.slug;function F(e,n){if(e&1&&(o(0,"a",16),s(1),r()),e&2){const t=n.$implicit,a=d(3);l("routerLink",g(2,w,t)),i(),_(a.formatTag(t))}}function T(e,n){if(e&1&&(o(0,"div",14),h(1,F,2,4,"a",16,k),r()),e&2){const t=d().$implicit;i(),b(t.attributes.tags)}}function L(e,n){if(e&1&&(o(0,"article")(1,"h2",10)(2,"a",11),s(3),r()(),o(4,"div",12),s(5),r(),o(6,"p",13),s(7),r(),v(8,T,3,0,"div",14),o(9,"a",15),s(10,"Read More →"),r()()),e&2){const t=n.$implicit,a=d();i(2),l("routerLink",g(6,p,t.attributes.slug)),i(),_(t.attributes.title),i(2),_(a.getDateFromSlug(t.attributes.slug)),i(2),_(t.attributes.description),i(),x(t.attributes.tags!=null&&t.attributes.tags.length?8:-1),i(),l("routerLink",g(8,p,t.attributes.slug))}}const c=class c{constructor(){this.posts=C().slice().sort((n,t)=>{const a=n.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/),m=t.attributes.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);return!a||!m?0:m[0].localeCompare(a[0])})}getDateFromSlug(n){const t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}formatTag(n){return n.charAt(0).toUpperCase()+n.slice(1).replace(/-/g," ")}};c.ɵfac=function(t){return new(t||c)},c.ɵcmp=f({type:c,selectors:[["app-home"]],decls:15,vars:0,consts:[[1,"hero-fullwidth"],["aria-labelledby","hero-title",1,"hero"],[1,"hero__media"],["ngSrc","/images/bgBlog.png","width","1200","height","400","alt","Blog banner image","priority",""],[1,"hero__content"],["id","hero-title"],[1,"muted"],["aria-labelledby","articles-title"],["id","articles-title"],[1,"list"],[1,"post__title"],[3,"routerLink"],[1,"post__date"],[1,"post__desc"],[1,"post__tags"],[1,"read-more",3,"routerLink"],[1,"tag",3,"routerLink"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"section",1)(2,"div",2),O(3,"img",3),r()()(),o(4,"div",4)(5,"h1",5),s(6,"Thomas Blog"),r(),o(7,"p",6),s(8,"分享程式設計、工具與開發心得，保持持續學習。"),r()(),o(9,"section",7)(10,"h2",8),s(11,"全部文章"),r(),o(12,"div",9),h(13,L,11,10,"article",null,y),r()()),t&2&&(i(13),b(a.posts))},dependencies:[P,M],styles:[`[_nghost-%COMP%] { display: block; }

    .muted[_ngcontent-%COMP%] { color: var(--muted); }

    .hero-fullwidth[_ngcontent-%COMP%] {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: 2rem;
    }

    .hero[_ngcontent-%COMP%] {
      width: 100%;
    }

    .hero__media[_ngcontent-%COMP%] {
      width: 100%;
      display: flex;
    }

    .hero__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
      width: 100%;
      height: auto;
      aspect-ratio: 16/5;
      object-fit: cover;
      display: block;
    }

    .hero__content[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 2.5rem;
      padding: 0 1rem;
    }

    .hero__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      margin: 0 0 0.5rem;
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
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 1.18;
    }
    .post__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
      color: var(--text);
      text-decoration: none;
      transition: color 0.2s;
    }
    .post__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
      color: var(--link);
    }
    .post__date[_ngcontent-%COMP%] {
      color: var(--muted);
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      margin-left: 0.1em;
    }
    .post__desc[_ngcontent-%COMP%] { margin: 0; color: var(--muted); }
    .post__tags[_ngcontent-%COMP%] {
      margin-top: 1rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .tag[_ngcontent-%COMP%] {
      font-size: 0.9rem;
      padding: 0.2rem 0.6rem;
      background-color: var(--border);
      border-radius: 4px;
      text-decoration: none;
      color: var(--text);
      transition: background-color 0.2s;
    }
    .tag[_ngcontent-%COMP%]:hover {
      background-color: var(--muted);
      color: white;
    }

    .read-more[_ngcontent-%COMP%] {
      display: inline-block;
      margin-top: 1rem;
      color: var(--link);
      font-weight: 500;
      text-decoration: none;
    }
    .read-more[_ngcontent-%COMP%]:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      .hero__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        aspect-ratio: 16/5;
      }
    }

    @media (max-width: 600px) {
      .hero__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
        aspect-ratio: 16/7;
      }
    }`]});let u=c;export{u as default};
