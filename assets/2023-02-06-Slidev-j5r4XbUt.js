const n=`---
title: 建立簡報的工具 - Slidev 的介紹\r
bgImageUrl: /images/26/26-0.jpg\r
description: 去年(2022 年) 11 月的時候，需要建立簡報向同事介紹 Angular 基礎，之前都是使用 Google 簡報或是 PowerPoint 來製作，但是發現有個缺點，對程式碼不夠有善。接著我想起在 GitHub Stars 中儲存一些簡報用的專案，其中發現 Slidev ，覺得簡單易用，就決定採\r
slug: 2023-02-06-slidev
tags: []
---

<p>去年(2022 年) 11 月的時候，需要建立簡報向同事介紹 Angular 基礎，之前都是使用 Google 簡報或是 PowerPoint 來製作，但是發現有個缺點，對程式碼不夠有善。接著我想起在 GitHub Stars 中儲存一些簡報用的專案，其中發現 <a href="https://sli.dev">Slidev</a> ，覺得簡單易用，就決定採用了，現在分享給大家參考看看。</p><h2 id="安裝-5">安裝</h2>
<pre><code>npm init slidev
</code></pre><p>可以參考<a href="https://sli.dev/guide/">官方網站</a>，輸入上列的指令建立初始樣版。</p><img class="img-responsive" loading="lazy" src="/images/26/26-01.png">

<p>如上圖，輸入簡報名稱後，即會安裝相依的套件。</p><img class="img-responsive" loading="lazy" src="/images/26/26-02.png">
<img class="img-responsive" loading="lazy" src="/images/26/26-03.png">

<p>之後會開啟範例網站 <a href="http://localhost:3030">http://localhost:3030</a> 。可以確認一下 Slidev 的功能有那些。</p><h2 id="建立簡報-1">建立簡報</h2>
<img class="img-responsive" loading="lazy" src="/images/26/26-04.png">

<p>根據<a href="https://sli.dev/guide/#markdown-syntax">文件</a>，進入點是 slides.md，一切的簡報這邊即可。</p><pre><code># Slidev

Hello World

<span class="token operator">--</span><span class="token operator">-</span>

# Page <span class="token number">2</span>

Directly use code blocks <span class="token keyword">for</span> highlighting


<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> ts
console.log('Hello, World!')
</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>

<span class="token operator">--</span><span class="token operator">-</span>

# Page <span class="token number">3</span>
</code></pre><p>而內容格式如上，看起來一目了然，都是很基本的 <a href="https://sli.dev/guide/syntax.html">markdown 語法</a>就可以建立簡報了。</p><img class="img-responsive" loading="lazy" src="/images/26/26-05.png">

<p>另外為了便於建立簡報，可以安裝 <a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev">Slidev VSCode Extension</a>。</p><img class="img-responsive" loading="lazy" src="/images/26/26-06.png">

<p>這樣子就可以列表目前的簡報，及目前所選擇簡報的預覽圖</p><h2 id="程式碼-1">程式碼</h2>
<pre><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}
</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">function</span> <span class="token function">updateUser</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> update<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getUser</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">const</span> newUser <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token operator">...</span>update <span class="token punctuation">}</span>
  <span class="token function">saveUser</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> newUser<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>接著就是我選擇 Slidev 的原因之一，可以 Highlight 程式碼，如同上面的格式，參考<a href="https://sli.dev/guide/syntax.html#line-highlighting">文件</a>，在後方加上程式碼的行號 <code>{all|2|1-6|9|all}</code>，即可顯示 Highlight 的程式碼。</p><img class="img-responsive" loading="lazy" src="/images/26/26-07.gif">

<p>之後就像是上方的圖片，可以配合簡報強調特定行數的程式碼。</p><h2 id="pdf-1">PDF</h2>
<pre><code>npm i <span class="token operator">-</span><span class="token constant">D</span> playwright<span class="token operator">-</span>chromium
</code></pre><p>另外還可以匯出成 PDF，就需要安裝 <code>playwright-chromium</code> ，可以參考<a href="https://sli.dev/guide/exporting.html#pdf">文件</a> 。</p><pre><code>slidev <span class="token keyword">export</span>
</code></pre><p>接著輸入指令<code>export</code> 即可匯出 PDF。</p><h2 id="結論-52">結論</h2>
<p>Slidev 是很好使用的工具，搭配 VSCode Exntension ，能快速輕鬆建立起簡報。而簡報所需的功能都有具備，推薦給大家參考看看。</p>`;export{n as default};
