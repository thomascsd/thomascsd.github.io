import{n as d,ɵ as h,A as u,o as f,p as w,q as C,r as b,d as o,s as l,e as a,b as c,j as v,g as i,k as m,m as p,t as x}from"./index-CwsdFOqf.js";import{A as M}from"./_common_module-chunk-XEAJNLnz.js";function P(_,e){if(_&1&&(o(0,"div",0),l(1,"img",1),a(),o(2,"article")(3,"header",2)(4,"div",3),c(5),a(),o(6,"h1",4),c(7),a()(),o(8,"div",5),l(9,"analog-markdown",6),a()()),_&2){const t=e,s=v();i(),m("src",t.attributes.bgImageUrl,x)("alt",t.attributes.title),i(4),p(s.getDateFromSlug(t.attributes.slug)),i(2),p(t.attributes.title),i(2),m("content",t.content)}}const n=class n{constructor(){this.post$=d("slug")}getDateFromSlug(e){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};n.ɵfac=function(t){return new(t||n)},n.ɵcmp=h({type:n,selectors:[["app-blog-post"]],decls:2,vars:3,consts:[[1,"post__image-fullwidth"],[1,"post__image",3,"src","alt"],[1,"post__header"],[1,"post__date"],[1,"post__title"],[1,"post__content"],[3,"content"]],template:function(t,s){if(t&1&&(f(0,P,10,5),w(1,"async")),t&2){let r;C((r=b(1,1,s.post$))?0:-1,r)}},dependencies:[u,M],styles:[`[_nghost-%COMP%] { display: block; }

    .post__image-fullwidth[_ngcontent-%COMP%] {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: 2.5rem;
      overflow: hidden;
    }

    .post__image[_ngcontent-%COMP%] {
      width: 100%;
      height: auto;
      max-height: 50vh;
      object-fit: cover;
      display: block;
    }

    article[_ngcontent-%COMP%] {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .post__header[_ngcontent-%COMP%] {
      margin-bottom: 2rem;
    }

    .post__date[_ngcontent-%COMP%] {
      color: var(--muted);
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
    }

    .post__title[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
    }

    .post__content[_ngcontent-%COMP%] {
      line-height: 1.7;
    }`]});let g=n;export{g as default};
