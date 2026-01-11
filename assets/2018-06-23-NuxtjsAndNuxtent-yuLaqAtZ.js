const n=`---
title: 使用Nuxt.js及Nuxtent建立Blog的心得\r
bgImageUrl: /images/05/05-0.jpg\r
slug: 2018-06-23-nuxtjs-and-nuxtent\r
description: Nuxt.js 是內建 SSR 的 vue.js 框架，我最感興趣的部份是可輸出靜態的 Html，如此就可以輕鬆的將程式部署至 GitHub Page 上，並且可以使用 module 來擴充功能。 當我看到了 Nuxtent 這個 module，它是可以取得 Markdown 內容的 module，
tags: ["javascript"]
---

<p>Nuxt.js 是內建 SSR 的 vue.js 框架，我最感興趣的部份是可輸出靜態的 Html，如此就可以輕鬆的將程式部署至 GitHub Page 上，並且可以使用 module 來擴充功能。</p><p>當我看到了 Nuxtent 這個 module，它是可以取得 Markdown 內容的 module，所以想將 Blog 用 Nuxt.js 重新翻寫。</p><h2 id="nuxtent-template-1">Nuxtent Template</h2>
<p>第一步快速建立的話，可使用<a href="https://github.com/nuxt-community/nuxtent-template">Nuxtent Template</a>建立一個基本的網站架構，需要事先安裝<a href="https://github.com/vuejs/vue-cli">vue-cli</a>。</p><pre><code>vue init nuxt<span class="token operator">-</span>community<span class="token operator">/</span>nuxtent<span class="token operator">-</span>template my<span class="token operator">-</span>site
</code></pre><h2 id="網站架構-1">網站架構</h2>
<img class="img-responsive" loading="lazy" src="/images/05/05-1.png">

<h3 id="page-1">page</h3>
<p>建立網站的路由，例如在目錄中建立 about.vue，網址會成為 localhost:3000/about。</p><h3 id="static-1">static</h3>
<p>靜態資源，例如：圖片，路徑會基於根目錄，例如/images/bg.png</p><h3 id="content-2">content</h3>
<p>Nuxtent module 特定的目錄，放置 Markdown 檔案的地方，也就是放入文章的地方</p><h3 id="layout-1">layout</h3>
<p>預設 layout 為 layout.vue，也可以自定 layout，之後使用 layout 屬性指定自定的 layout</p><pre><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">$content</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Thomas Blog'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">'customLayout'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h2 id="設定檔-1">設定檔</h2>
<p>nuxtent.config.js</p><pre><code class="language-javascript"><span class="token keyword">const</span> Prism <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'prismjs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">permalink</span><span class="token operator">:</span> <span class="token string">'/:slug'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">'/_content'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">generate</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// for static build</span>
      <span class="token string">'get'</span><span class="token punctuation">,</span>
      <span class="token string">'getAll'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isPost</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://localhost:3200'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parsers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">md</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function-variable function">highlight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;pre class="language-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lang<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">&lt;code class="language-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lang<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>
            code<span class="token punctuation">,</span>
            Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span> <span class="token operator">||</span> Prism<span class="token punctuation">.</span>languages<span class="token punctuation">.</span>markup
          <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/code>&lt;/pre></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="content-3">content</h3>
<ul>
<li><p>permalink：設定文章路徑的顯示方式。</p></li>
<li><p>page：指定顯示文章內容的檔案名稱，預設為_cotent，即指向_cotent.vue。按照文件可以設定為多個。</p></li>
<li><p>isPost:：查看<a href="https://nuxtent.now.sh/guide/writing">官方文件</a>的說明不是很了解這個屬性的用法，但當看了<a href="https://github.com/nuxt-community/nuxtent-module/blob/9423a753c43bbbe69395b400f90b1291ac935084/lib/content/page.js#L161">原始碼</a>後發現</p></li>
</ul>
<pre><code class="language-javascript">    <span class="token keyword">get</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isDev <span class="token operator">||</span> <span class="token operator">!</span>cached<span class="token punctuation">.</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> filePath<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> section <span class="token punctuation">}</span> <span class="token operator">=</span> meta
        <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>isPost<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> fileDate <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">!?(\\d{4}-\\d{2}-\\d{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// YYYY-MM-DD</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Post in "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>section<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" does not have a date!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          cached<span class="token punctuation">.</span>date <span class="token operator">=</span> fileDate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
          cached<span class="token punctuation">.</span>date <span class="token operator">=</span> dateFns<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span>ctime<span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> cached<span class="token punctuation">.</span>date
    <span class="token punctuation">}</span>
</code></pre><p>當 true 時，需要將 markdown 檔案名稱設成 2017-06-20-HelloWorld.md，即會取得檔名上的日期做為文章日期。</p><p>當 false，會使用檔案修改日期做為文章日期。</p><h3 id="parser-1">parser</h3>
<p>我是參考<a href="https://nuxtent.now.sh/guide/configuration">官方文件</a>，使用 prismjs 將 Mardown 的程式碼加上著色器功能。</p><h2 id="取得內容-1">取得內容</h2>
<p>可以參考_content.vue 的程式碼，使用<strong>get</strong>取得目前路徑的內容。</p><pre><code class="language-javascript"><span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">$content</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>如果是要取得所有文章的話，可以使用<strong>getAll</strong>這個方法。</p><pre><code class="language-javascript"><span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">$content</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="評論功能-1">評論功能</h2>
<p>想使用基於 GitHub issues 的評論功能，有發現<a href="https://github.com/imsun/gitment">gitment</a>這個套件剛好符合我的需要，安裝及設定都很簡單。</p><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>comments<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><pre><code class="language-javascript"><span class="token keyword">import</span> PostHeader <span class="token keyword">from</span> <span class="token string">'../components/PostHeader'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Gitment <span class="token keyword">from</span> <span class="token string">'gitment'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> route<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">$content</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> gitment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gitment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>post<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token comment">// optional</span>
      <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">'thomascsd'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'thomascsd.github.io'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">oauth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">client_id</span><span class="token operator">:</span> <span class="token string">'client_id'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">client_secret</span><span class="token operator">:</span> <span class="token string">'client_secret'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    gitment<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'comments'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    PostHeader<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>我是參考這篇<a href="https://ihtcboy.com/2018/02/25/2018-02-25_Gitment%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD%E6%8E%A5%E5%85%A5%E8%B8%A9%E5%9D%91%E6%95%99%E7%A8%8B/">文章</a>。</p><p>要注意的點是，第一次會顯示<strong>Error:Comments Not Initialized</strong>。</p><img class="img-responsive" loading="lazy" src="/images/05/05-5.png">

<p>需要登入自己的 Github 帳號後，啟動應用程式。</p><img class="img-responsive" loading="lazy" src="/images/05/05-6.png">

<p>成功之後，就會變成下圖</p><img class="img-responsive" loading="lazy" src="/images/05/05-7.png">

<h2 id="部署-1">部署</h2>
<p>將靜態檔案部署至 Github pages，我遇到了一些問題，按照範例設定會將 NODE_ENV=&#39;production&#39;及 baseUrl 會成為正式部署的路徑，例如我的 Blog 網址 thomascsd.github.io。</p><p>當使用 npm generate 時，卻會出現下列錯誤</p><img class="img-responsive" loading="lazy" src="/images/05/05-2.png">

<p>最後發現，使用下列步驟就 OK 了</p><ul>
<li>不需要加上 NODE_ENV</li>
<li>baseUrl 設定成預設的 localhost:3200，並執行 npm generate</li>
<li>再使用 VSCode 搜索 localhost:3200，即會發現 dist/api.js 內容有 baseURL:localhost:3200，然後將網址替換成正式環境，如我的 Blog 網址 thomascsd.github.io</li>
</ul>
<img class="img-responsive" loading="lazy" src="/images/05/05-3.png">

<ul>
<li>最後就可以部署至 GitHub page</li>
</ul>
<img class="img-responsive" loading="lazy" src="/images/05/05-4.png">

<h2 id="結論-36">結論</h2>
<p>很方便將一個 Blog 建立起來，但是缺乏一些功能，例如標籤、Archive 功能，這些都要自己實作出來。原始碼可以參考<a href="https://github.com/thomascsd/thomascsd-blog">這裡</a>。</p>`;export{n as default};
