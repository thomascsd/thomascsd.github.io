const s=`---
title: 談談JavaScript Module part2\r
bgImageUrl: /images/08/08-0.jpg\r
slug: 2018-12-23-module-pattern-part2\r
description: '這篇會繼續上篇的主題：Module，這篇會講述 ES6（ES2015）Module 寫法，而上一篇是談談 JavaScript Module part1。 Module 建立 \`\`\`javascript export const message = ''Hello''; export function '
tags: []
---

<p>這篇會繼續上篇的主題：Module，這篇會講述 ES6（ES2015）Module 寫法，而上一篇是<a href="https://thomascsd.github.io/blog/2018-10-31-ModulePattern">談談 JavaScript Module part1</a>。</p><h2 id="module-建立-1">Module 建立</h2>
<pre><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> doSomeThing <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><p>ES2015 Module 是以檔案為基礎，也就是 1 個檔案視為 1 個 Module，在檔案內需要被外面引用的 function、class 還是變數，使用<strong>export</strong>關鍵字輸出，</p><h2 id="module-戴入-1">Module 戴入</h2>
<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">]</span> <span class="token keyword">from</span> <span class="token string">'./util.js'</span><span class="token punctuation">;</span>
</code></pre><p>有 export 就有 import，使用<strong>import</strong>關鍵字戴入剛剛所定義的 function、class 或是變數，之後用 from 指定所戴入的檔案是那一個，路徑是相對路徑。</p><pre><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">const</span> message  <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> message <span class="token keyword">from</span> <span class="token string">'./util.js'</span><span class="token punctuation">;</span>
</code></pre><p>如果在 export 的地方，加上 default 關鍵字時，import 不需加上大括號。</p><pre><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">const</span> message  <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>

expot <span class="token keyword">function</span> <span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> message<span class="token punctuation">,</span> <span class="token punctuation">{</span> doSomeThing<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./util.js'</span><span class="token punctuation">;</span>
</code></pre><p>也可以兩者混用。</p><h2 id="dynamic-import-1">Dynamic import</h2>
<pre><code class="language-javascript"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./my-module.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something with the module.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>有時候會希望動能戴入 Module，這時 import 變成了 function，而回傳值是 Promise。</p><pre><code class="language-javascript"><span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./my-module.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>因回傳值是 Promise，所以支援 await 關鍵字。</p><h2 id="程式實作-1">程式實作</h2>
<h3 id="瀏覽器的支援-1">瀏覽器的支援</h3>
<img class="img-responsive" loading="lazy" src="/images/09/09-1.png">

<p>根據 caniuse 的結果，現在全部的瀏覽器都有支援 ES2015 Module，可以不用使用 Webpack、Parcel 之類的 Module loader，直接使用原生語法就好了，但實務上還是需要 Webpack 之類的工具，幫忙將 js 打包、壓縮。</p><h3 id="原生的寫法-1">原生的寫法</h3>
<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><p>跟一般戴入 script 不同的地方在於，需指定 type=&quot;module&quot;來告訴瀏覽器用 Module 的形式戴入 script。範例原始碼在<a href="https://github.com/thomascsd/es-module-import">這裡</a>。</p><h3 id="戴入第三方套件需注意的地方-1">戴入第三方套件需注意的地方</h3>
<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./scripts/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><pre><code class="language-javascript"><span class="token keyword">const</span> $ <span class="token operator">=</span> window<span class="token punctuation">.</span>jQuery<span class="token punctuation">;</span>
</code></pre><p>是用 CDN 的方式將 jQuery 戴入，在 index.js 中需指派$ = window.jQuery，因為在 Module 中無法取得全域變數，所以換個方式，用 window.jQuery 取得 jQuery 物件。</p><h2 id="結論-39">結論</h2>
<p>現在幾乎每個瀏覽器都支援原生戴入 Module，說不定未來不用任何工具，就可以開發 Web Application。</p>`;export{s as default};
