import{o as f,i as d,D as v,t as y,ɵ as C,A as P,p as w,q as M,r as x,s as O,e as s,u as c,f as r,b as m,k as S,h as l,l as p,n as _,v as D}from"./index-CnnJ-1De.js";import{g as h,a as $,b as T,c as u,d as b,S as A}from"./seo.service-7k95O-2N.js";import{A as k}from"./_common_module-chunk-BWz430hy.js";function U(n){const e=h(n),t=n.dateModified?.trim()||e;return{"@context":"https://schema.org","@type":"BlogPosting",headline:n.title,description:u(n),datePublished:e,dateModified:t,author:{"@type":"Person",name:n.author?.trim()||"Thomas"},mainEntityOfPage:{"@type":"WebPage","@id":T(`/blog/${n.slug}`)},image:$(b(n))}}function j(n,e){if(n&1&&(s(0,"div",0),c(1,"img",1),r(),s(2,"article")(3,"header",2)(4,"div",3),m(5),r(),s(6,"h1",4),m(7),r()(),s(8,"div",5),c(9,"analog-markdown",6),r()()),n&2){const t=e,i=S();l(),p("src",t.attributes.bgImageUrl,D)("alt",t.attributes.title),l(4),_(i.getDateFromSlug(t.attributes.slug)),l(2),_(t.attributes.title),l(2),p("content",t.content)}}const o=class o{constructor(){this.post$=f("slug"),this.seo=d(A),this.document=d(v),this.post$.pipe(y()).subscribe(e=>{const t=e.attributes,i=h(t),a=t.dateModified?.trim()||i;this.seo.update({title:`${t.title}｜Thomas Blog`,description:u(t),path:`/blog/${t.slug}`,type:"article",image:b(t),publishedTime:i||void 0,modifiedTime:a||void 0,author:t.author||"Thomas"}),this.setStructuredData(U(t))})}setStructuredData(e){this.document.head.querySelector('script[type="application/ld+json"][data-seo="blog-posting"]')?.remove();const t=this.document.createElement("script");t.type="application/ld+json",t.setAttribute("data-seo","blog-posting"),t.textContent=JSON.stringify(e).replaceAll("<","\\u003c"),this.document.head.appendChild(t)}getDateFromSlug(e){const t=e.match(/^(\d{4})-(\d{2})-(\d{2})/);return t?`${t[1]}-${t[2]}-${t[3]}`:""}};o.ɵfac=function(t){return new(t||o)},o.ɵcmp=C({type:o,selectors:[["app-blog-post"]],decls:2,vars:3,consts:[[1,"post__image-fullwidth"],[1,"post__image",3,"src","alt"],[1,"post__header"],[1,"post__date"],[1,"post__title"],[1,"post__content"],[3,"content"]],template:function(t,i){if(t&1&&(w(0,j,10,5),M(1,"async")),t&2){let a;x((a=O(1,1,i.post$))?0:-1,a)}},dependencies:[P,k],styles:[`[_nghost-%COMP%] { display: block; }

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
    }`]});let g=o;export{g as default};
