const n=`---
title: 使用 Angular Static Generator - Scully 建立Blog的心得記錄\r
bgImageUrl: /images/15/15-0.jpg\r
slug: 2020-08-03-build-blog-using-scully\r
description: 2022/09/09 更新：程式碼著色，改為 \`prismjs\` 一直以來 Angular 缺 Static Site Generator，像是 Vue.js 有 Nuxt.js，而 React.js 也有 Gatsby.js，終於 Angular 也出了 Static Site Generator
tags: []
---

<p>2022/09/09 更新：程式碼著色，改為 <code>prismjs</code></p><p>一直以來 Angular 缺 Static Site Generator，像是 Vue.js 有 Nuxt.js，而 React.js 也有 Gatsby.js，終於 Angular 也出了 Static Site Generator - <a href="https://scully.io">Scully</a>，並且我的 Blog 從最早的 Jekyll，之後是用 Nuxt.js，現在要用 Scully 第三次改寫，因為我對 Angular 還是比較熟悉的原故，建立 Blog 的過程心程分享給大家參考看看</p><h2 id="起手式-2">起手式</h2>
<pre><code>ng <span class="token keyword">new</span> <span class="token class-name">blog</span><span class="token operator">-</span>demo
</code></pre><p>首先是用 Angular CLI 建立基本的版型。</p><pre><code>ng add <span class="token decorator"><span class="token at operator">@</span><span class="token function">scullyio</span></span><span class="token operator">/</span>init
</code></pre><img class="img-responsive" loading="lazy" src="/images/16/16-1.png">

<p>接著參考<a href="https://scully.io/docs/getting-started/">官方文件</a>，輸入上方指令，將 Scully 加入 Angular 專案，並產生 scully.{your project}.config.ts。</p><pre><code>ng generate <span class="token decorator"><span class="token at operator">@</span><span class="token function">scullyio</span></span><span class="token operator">/</span>init<span class="token operator">:</span>blog
</code></pre><p>再來就是建立 Blog 模組，輸入上列指命，就會產生基本的檔案。</p><img class="img-responsive" loading="lazy" src="/images/16/16-2.png">

<p>如上圖所示，主要會建立 Blog 目錄 - 存放 markdown 格式的文章，以及 BlogComponent - 顯示文章。這時再套上主題樣式就成為基本的 Blog 了。但是還要再加上下列的功能，才會是比較完整的 Blog。</p><h2 id="程式碼著色功能-1">程式碼著色功能</h2>
<p><a href="https://scully.io">Scully</a>是使用 Plugin 的機制來擴充功能，除了<a href="https://scully.io/docs/scully-provided-plugins/">內建</a>之外，也有其他人所寫的 Plugin，而程式碼著色功能使用內建的 Plugin - MD。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ScullyConfig<span class="token punctuation">,</span> setPluginConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@scullyio/scully'</span><span class="token punctuation">;</span>

<span class="token function">setPluginConfig</span><span class="token punctuation">(</span><span class="token string">'md'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">enableSyntaxHighlighting</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> ScullyConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><p>在 scully.{your project name}.config.ts 中加上以上的設定，設定<code>enableSyntaxHighlighting: true</code>啟用程式碼著色功能。</p><img class="img-responsive" loading="lazy" src="/images/16/16-3.png">

<p>但是只有設定到一半，因為 css 還沒戴入，所以程式碼就是預設的文字顏色。</p><pre><code>npm install prismjs
</code></pre><p>因為 Plugin - MD 是使用 <code>prismjs</code> 來著色程式碼，所以另外安裝 <code>prismjs</code>，接著再取得我們所需要的 css。</p><pre><code class="language-css"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~prismjs/themes/prism-coy.min.css'</span><span class="token punctuation">;</span></span>
</code></pre><p>接著在 <code>style.css</code> 戴入樣式。</p><img class="img-responsive" loading="lazy" src="/images/16/16-5.png">

<p>這樣就 OK 了，程式碼有顏色了。</p><h2 id="留言系統-1">留言系統</h2>
<p>一般說來，都希望在文章下方放置留言區塊，和讀者有互動，並且我想要比較簡單，可以與 GitHub issue 整合的，最後終於找到了<a href="https://utteranc.es/">utterances</a>。</p><img class="img-responsive" loading="lazy" src="/images/16/16-6.png">

<p>按照網站上的步驟設定後，能將產生的 Script 放在想要顯示的地方，但是 script 放到 Angular html template 的話，script 會被過瀘掉，所以要動態插入 script。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit<span class="token punctuation">,</span> Renderer2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DOCUMENT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-blog'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./blog.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./blog.component.css'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preserveWhitespaces</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BlogComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">renderer2</span><span class="token operator">:</span> Renderer2<span class="token punctuation">,</span>
    @<span class="token function">Inject</span><span class="token punctuation">(</span><span class="token constant">DOCUMENT</span><span class="token punctuation">)</span> <span class="token keyword">private</span> document</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderer2<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'text/javascript'</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://utteranc.es/client.js'</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'repo'</span><span class="token punctuation">,</span> <span class="token string">'thomascsd/thomascsd.github.io'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'issue-term'</span><span class="token punctuation">,</span> <span class="token string">'pathname'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token string">'github-light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'crossorigin'</span><span class="token punctuation">,</span> <span class="token string">'anonymous'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer2<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#comments'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>使用 renderer2 來動態產生 script 元素，最後插入想要顯示的地方。</p><img class="img-responsive" loading="lazy" src="/images/16/16-7.png">

<h2 id="分頁功能-1">分頁功能</h2>
<pre><code class="language-javascript">  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">scullyService</span><span class="token operator">:</span> ScullyRoutesService<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>links$ <span class="token operator">=</span> <span class="token function">zip</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scullyService<span class="token punctuation">.</span>available$<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>route<span class="token punctuation">.</span>queryParams<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>routes<span class="token punctuation">,</span> params<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>page <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取得QueryString的頁數</span>

        <span class="token keyword">const</span> items <span class="token operator">=</span> routes
          <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token operator">!</span>route<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">*</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用slice來切割Arrary</span>

        items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>date <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>blogService<span class="token punctuation">.</span><span class="token function">getPostDateFormRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>route<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>itemCount <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token keyword">return</span> items<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">previous</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pageNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pageNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">queryParams</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> pageNum <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">replaceUrl</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">queryParams</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">replaceUrl</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>隨著文章愈來愈多，所以就會想要有分頁的功能，運用 Scully 現成的 API，就可以輕鬆實現。如上列的程式碼，使用<code>ScullyRoutesService</code>的<code>available$</code>即可取得目前可使用的文章路由物件。</p><img class="img-responsive" loading="lazy" src="/images/16/16-8.png">

<p>而所謂的可使用就是文章 markdown 設定<code>published: true</code>。接著使用 Array 的<code>slice</code>，就可以根據 QueryString 所傳入頁數來切割 Array。</p><h2 id="cli-指令-1">CLI 指令</h2>
<p>完整的指令可以參考<a href="https://scully.io/docs/scully-cmd-line/">文件</a>，我這邊列出幾個常用的。</p><ul>
<li><p>scanRoutes：<code>npx scully --scan</code>，當新增路由時，例如：新增一篇文章，需要執行這個指令，來找到新的路由。</p></li>
<li><p>watch：<code>npx scully --watch</code>，啟用 watch 模式，在開發階段很有幫助，可以立即看到修改的成果。</p></li>
</ul>
<img class="img-responsive" loading="lazy" src="/images/16/16-9.png">

<ul>
<li><p>serve：<code>npx scully serve</code>，啟用 Scully Server，與<code>ng serve</code>相似，但不同點在於不會 build 專案。</p></li>
<li><p>scully: <code>scully</code>，如果不加上任何參數的話，Scully 根據路由就會產生靜態檔案，並將靜態檔案預設放在<code>dist/static</code>下，所以很適合與<code>ng build --prod</code>一併使用。</p></li>
</ul>
<pre><code>  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"ng"</span><span class="token operator">:</span> <span class="token string">"ng"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"ng serve -o"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"ng build --prod &amp;&amp; npm run scully"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"ng test"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"ng lint"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"e2e"</span><span class="token operator">:</span> <span class="token string">"ng e2e"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"deploy"</span><span class="token operator">:</span> <span class="token string">"node deploy.js"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scully"</span><span class="token operator">:</span> <span class="token string">"scully"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scully:scan"</span><span class="token operator">:</span> <span class="token string">"npx scully --scan"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scully:watch"</span><span class="token operator">:</span> <span class="token string">"npx scully --watch"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scully:serve"</span><span class="token operator">:</span> <span class="token string">"npx scully serve"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><p>並且為了方便，我將這些常用的指令放在 npm scripts 中。</p><h2 id="結論-44">結論</h2>
<p>靠著 cli 的幫助，可以很快地建立 Blog 樣板，但我覺得這個只是開始，有些功能都還需求調整。而 Scully 目前在 1.0Beta 版，應該很快就到 1.0 正式版，加上之後 Plugins 愈來愈多的話，以後可以值得期待。</p><p>原始碼：<a href="https://github.com/thomascsd/blog-new">https://github.com/thomascsd/blog-new</a></p>`;export{n as default};
