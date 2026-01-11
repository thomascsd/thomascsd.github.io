const n=`---
title: 於Angular中，建立Library的心得\r
bgImageUrl: /images/10/10-0.jpg\r
slug: 2019-02-20-create-library-with-angular\r
description: 在 Angular CLI 6.0 以上就可以直接建立 Library，而 Library 的用途可以將自已建立的元件發佈至 NPM，或是專案一些共同的元件拆分出去。 建立 Library \`\`\` ng new ngx-lib-demo ng g library shared-comp \`\`\` 先使
tags: ["angular"]
---

<p>在 Angular CLI 6.0 以上就可以直接建立 Library，而 Library 的用途可以將自已建立的元件發佈至 NPM，或是專案一些共同的元件拆分出去。</p><h2 id="建立-library-1">建立 Library</h2>
<pre><code>ng <span class="token keyword">new</span> <span class="token class-name">ngx</span><span class="token operator">-</span>lib<span class="token operator">-</span>demo
ng g library shared<span class="token operator">-</span>comp
</code></pre><p>先使用 Angular CLI 建立範例專案，再來用上列的指令，建立 Library。有時會覺得記住 CLI 的參數很麻煩，會使用<a href="https://angularconsole.com/">Angular Console</a>幫忙建立。</p><img class="img-responsive" loading="lazy" src="/images/10/10-01.gif">

<pre><code>ng g c header <span class="token operator">--</span>project<span class="token operator">=</span>shared<span class="token operator">-</span>comp
</code></pre><p>接下來，在 Library 中建立 component，這邊是建立 header component，也可以使用 Angular Console 建立。</p><img class="img-responsive" loading="lazy" src="/images/10/10-2.png">

<p>如上圖，我們所建立 library 會在目錄 projects 下，例如這次我建立的 shared-comp，並且與一般的 Angular 專案不同，component 位於 lib 目錄下。</p><pre><code class="language-javascript"><span class="token comment">//public_api.ts</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./lib/header/header.component'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./lib/shared-comp.module'</span><span class="token punctuation">;</span>
</code></pre><p>接著，在 public_api.ts 中 export 我們所建立的 header component。</p><img class="img-responsive" loading="lazy" src="/images/10/10-3.png">

<pre><code class="language-javascript"><span class="token comment">//app.module.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/platform-browser'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./app.component'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SharedCompModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'shared-comp'</span><span class="token punctuation">;</span>
@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>BrowserModule<span class="token punctuation">,</span> SharedCompModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><pre><code class="language-html"><span class="token comment">&lt;!--app.component.html--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lib-header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lib-header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><p>使用指令<code>ng build shared-comp</code>建置完 library 後，再來就可以在 Angular 應用程式中，匯入我們建立在 library 中的 component。</p><h2 id="發佈至-npm-1">發佈至 npm</h2>
<pre><code>ng build shared<span class="token operator">-</span>comp <span class="token operator">--</span>prod
cd dist<span class="token operator">/</span>shared<span class="token operator">-</span>comp
npm publish
</code></pre><p>要如何將我們建立的 conpont 部署至 npm 呢?輸入上列指令即可，最後輸入 npm publish，即可完成發佈的程序。</p><pre><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">"build:lib"</span><span class="token operator">:</span> <span class="token string">"ng build shared-comp --prod"</span><span class="token punctuation">,</span>
<span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"cd dist/shared-comp &amp;&amp; npm publish"</span>
<span class="token punctuation">}</span>
</code></pre><p>但是每次都這樣打也很麻煩，所以就將這些指令寫成上面的 npm script。</p><h2 id="升級需注意的心得-1">升級需注意的心得</h2>
<p>我發現從 Angular 5 升級至 Angular6/7 時，除了輸入<code>ng update</code>外，還需另外調整一些設定才行，也可以參考這篇官方的<a href="https://github.com/angular/angular-cli/wiki/stories-create-library#note-for-upgraded-projects">文章</a></p><ul>
<li><p>tsconfig.json：需調整 paths 的路徑，路徑調整至 dist/project-name，不然會發現找不到 package 的錯誤。</p></li>
<li><p>tsconfig.app.json：需要移除 baseUrl。</p></li>
</ul>
<h2 id="結論-40">結論</h2>
<p>Angular CLI 是很強大的工具，輸入一些命令，即可產生 Application 或是 Library，現在還可以搭配 Angular Console，程式開發變得很方便，</p>`;export{n as default};
