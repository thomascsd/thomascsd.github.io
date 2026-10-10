const n=`---
title: 使用 Analog.js 建立 Blog\r
bgImageUrl: /images/36/36-0.jpg\r
description: 選擇 Analog.js，主要是看中它的兩大核心特性：File-based Routing 與 Static Site Generation。對個人 Blog 來說，架構越單純俐落越好，因此開箱即用的 File-based Routing 非常合適；而在部署方面，我也希望如以往使用 Scully.js 時一樣，將網站預先打包為純靜態頁面，而 Analog.js 原生就對此提供極佳的支援\r
slug: 2026-09-26-analog-js-blog\r
tags: ['Angular']
---

<p>在先前的文章中，我曾介紹過如何使用 <code>Scully.js</code> 來建置自己的技術 Blog。然而沒想到自 2023 年起，<code>Scully.js</code> 突然停止了維護，導致它無法支援 Angular 15 之後的版本。我花了不少時間尋找替代方案，最終發現了專為 Angular 打造的 Meta-Framework —— <strong>Analog.js</strong>。這篇文章就來分享我將 Blog 遷移到 Analog.js 的心得。</p><h2 id="建立-blog-專案">建立 Blog 專案</h2>
<p>我之所以選擇 Analog.js，主要是看中它的兩大核心特性：<strong>File-based Routing（檔案系統路由）</strong> 與 <strong>Static Site Generation（SSG，靜態網站生成）</strong>。 對個人 Blog 來說，架構越單純俐落越好，因此開箱即用的 File-based Routing 非常合適；而在部署方面，我也希望如以往使用 <code>Scully.js</code> 時一樣，將網站預先打包為純靜態頁面，而 Analog.js 原生就對此提供極佳的支援。</p><p>建立專案非常簡單，參考官網的 <a href="https://analogjs.org/docs/getting-started">Getting Started</a> 指引，執行下列指令即可：</p><pre><code class="language-bash"><span class="token function">npm</span> create analog@latest
</code></pre><p>首先選擇 Blog 樣版</p><img class="img-responsive" loading="lazy" src="/images/36/36-1.png">


<p>接下來選擇 <code>prism.js</code> 來做為程式的著色器</p><img class="img-responsive" loading="lazy" src="/images/36/36-2.png">

<p>完成後，基礎的 Blog 骨架就建立就緒了。</p><img class="img-responsive" loading="lazy" src="/images/36/36-3.png">

<h2 id="架構">架構</h2>
<p><code>Analog.js</code> 採用 File-based Routing，所有的頁面組件都統一放置在 <code>src/app/pages</code> 目錄下。以文章詳情頁面為例，預設路由規則對應於 <code>/blog/</code>，其中 <code>[slug].page.ts</code> 負責解析路徑參數並呈現對應的文章內容：</p><img class="img-responsive" loading="lazy" src="/images/36/36-4.png">

<pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AsyncPipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> injectContent<span class="token punctuation">,</span> MarkdownComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@analogjs/content'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PostAttributes <span class="token keyword">from</span> <span class="token string">'../../post-attributes'</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-blog-post'</span><span class="token punctuation">,</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>AsyncPipe<span class="token punctuation">,</span> MarkdownComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    @if (post$ | async; as post) {
    &lt;article>
      &lt;img class="post__image" [src]="post.attributes.bgImageUrl" />
      &lt;analog-markdown [content]="post.content" />
    &lt;/article>
    }
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    .post__image {
      max-height: 40vh;
    }
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BlogPostComponent</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> post$ <span class="token operator">=</span> <span class="token generic-function"><span class="token function">injectContent</span><span class="token generic class-name"><span class="token operator">&lt;</span>PostAttributes<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'slug'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>所有的 Markdown 文章都統一存放在 <code>src/content</code> 目錄中。我們可以在文章開頭使用 YAML Frontmatter 來定義自訂欄位，例如封面圖片 <code>bgImageUrl</code>，在 <code>[slug].page.ts</code> 中，就能直接透過 <code>post.attributes.bgImageUrl</code> 取得 Frontmatter 定義的值。</p><pre><code class="language-yaml">
<span class="token key atrule">title</span><span class="token punctuation">:</span> 使用 Analog.js 建立 Blog
<span class="token key atrule">bgImageUrl</span><span class="token punctuation">:</span> /images/36/36<span class="token punctuation">-</span>00.jpg
<span class="token key atrule">description</span><span class="token punctuation">:</span> 選擇 Analog.js，主要是看中它的兩大核心特性：File<span class="token punctuation">-</span>based Routing<span class="token punctuation">...</span>
<span class="token key atrule">slug</span><span class="token punctuation">:</span> 2026<span class="token punctuation">-</span>09<span class="token punctuation">-</span>26<span class="token punctuation">-</span>analog<span class="token punctuation">-</span>js<span class="token punctuation">-</span>blog
<span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'Angular'</span><span class="token punctuation">]</span>
</code></pre><img class="img-responsive" loading="lazy" src="/images/36/36-5.png">


<p>文章內容則統一放在 <code>src/content</code> 目錄下。</p><h2 id="相關設定">相關設定</h2>
<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> analog<span class="token punctuation">,</span> <span class="token punctuation">{</span> type PrerenderContentFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@analogjs/platform'</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">analog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token keyword">static</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">highlighter</span><span class="token operator">:</span> <span class="token string">'prism'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">prismOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">additionalLangs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'csharp'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prerender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'/'</span><span class="token punctuation">,</span>
          <span class="token string">'/blog'</span><span class="token punctuation">,</span>
          <span class="token string">'/api/rss.xml'</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">contentDir</span><span class="token operator">:</span> <span class="token string">'src/content'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">transform</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> PrerenderContentFile</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> slug <span class="token operator">=</span> file<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token string">'slug'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'/about'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p><code>Analog.js</code> 的核心設定位於 <code>vite.config.ts</code> 中，透過 Vite Plugin 的方式進行無縫整合。目前我的專案主要配置了兩項重點：指定語法著色器使用 Prism.js（並擴充 C# 語法支援），以及設定靜態輸出時要預先產生的路由。</p><h2 id="使用ai">使用AI</h2>
<p>以前製作 Blog 網站時，我通常會尋找現成範本套用，缺點是自訂性比較有限。由於我本身是程式開發出身，對 CSS 並不熟悉，因此這次重新製作 Blog 時，改用 AI 協助調整整個網站的樣式，最後呈現出較簡單、現代的風格。</p><h2 id="結論-29">結論</h2>
<p>由於 Scully.js 停止維護，這算是我第 4 次為自己的 Blog「搬家」。藉由這次導入 Analog.js，不僅順利銜接至現代化的 Angular 生態系，也順便借助 AI 將整個部落格的介面與體驗全面翻新。</p>`;export{n as default};
