const n=`---
title: Netlify functions 初體驗記錄\r
bgImageUrl: /images/22/22-0.jpg\r
slug: 2021-09-20-netlify-function-tutorial\r
description: 一直以來斷斷續續接獨 Servless funcion 的服務，從 FireBase 到 Azure 都有，但是一些原因，而覺得沒有符合我的需求，直到前一陣子，我嘗試使用 Netlify functions ，發現簡單易用，並且也整合 CI/CD ，如果想整合至舊有專案也是挻方便的，就想寫篇文章做個
tags: []
---

<p>一直以來斷斷續續接獨 Servless funcion 的服務，從 FireBase 到 Azure 都有，但是一些原因，而覺得沒有符合我的需求，直到前一陣子，我嘗試使用 <a href="https://www.netlify.com/products/functions/">Netlify functions</a> ，發現簡單易用，並且也整合 CI/CD ，如果想整合至舊有專案也是挻方便的，就想寫篇文章做個記錄。</p><img class="img-responsive" loading="lazy" src="/images/22/22-08.png">

<p>查看了文件之後，發現是將 AWS Lambda 包裝起來，另外免費版的話，提供一個月 125,000 的 Request 數，總共可以執行 100 小時，以一個小專案或是 Side Project 算是足夠了。</p><h2 id="開始-1">開始</h2>
<p>這次是範例是將概有的 Side Project <a href="https://github.com/thomascsd/form-builder-demo">form-builder-demo</a> 整合進 Netlify function。</p><pre><code>npm install netlify<span class="token operator">-</span>cli <span class="token operator">-</span>g
</code></pre><p>首先安裝 Netlify CLI，後續可以在本機上除錯或是在本機上啟用網站。</p><pre><code>npm install <span class="token decorator"><span class="token at operator">@</span><span class="token function">netlify</span></span><span class="token operator">/</span>functions
</code></pre><p>之後會用 TypeScript 來開發，所以需要安裝 <code>@netlify/functions</code>。</p><pre><code>netlify init
</code></pre><p>之後為了要和 GitHub 的專案整合，整合至 CI/CD，所以執行 <code>netlify init</code>。</p><img class="img-responsive" loading="lazy" src="/images/22/22-01.png">

<pre><code><span class="token punctuation">[</span>build<span class="token punctuation">]</span>
  functions <span class="token operator">=</span> <span class="token string">"functions"</span>
  publish <span class="token operator">=</span> <span class="token string">"dist"</span>
</code></pre><p>執行完後，會一起建立 netlify.toml ，設定值就是剛剛執行<code>Netlify init</code>  所詢問問題的答案，用來設定 Netlify functions 的。</p><ul>
<li>functions：設定存放 Netlify function 的目錄，預設是在 /netlify/functions。</li>
<li>command：設定建置時，要執行的指令，我是設定 &#39;npm run build&#39; 。</li>
<li>publish：設定建置後檔案的位置，我是用預設的 dist。</li>
</ul>
<h2 id="開發-1">開發</h2>
<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Handler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@netlify/functions'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token function-variable function">Handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello World'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>可以參考<a href="https://docs.netlify.com/functions/build-with-typescript/">文件</a>，程式格式如上所示，但是關於用去沒有說明很清楚，所以來彙整一下。</p><img class="img-responsive" loading="lazy" src="/images/22/22-02.png">

<ul>
<li><p>event：定義如上圖所示，可以從 node_modules@netlify\\functions\\src\\function\\event.d.ts 中找到，如同了包裝 Request 類似。</p></li>
<li><p>boby：與 Express 一樣使用 body 取得 post 來的資訊。</p></li>
<li><p>queryStringParameters：使用此屬性取得 QueryString 資訊。</p></li>
<li><p>response：如同程式自我描述般的，回傳 <code>statusCode</code> 及 <code>body</code>，應 <code>body</code>需為字串，所使用 <code>JSON.stringify</code> 將物件轉成字串。</p></li>
</ul>
<img class="img-responsive" loading="lazy" src="/images/22/22-03.png">

<p>如果有開發過 Serverless function 程式的人，應該都知道，都是會一支 Api 一支檔案，這邊另外有些共用的程式，我再建立 Services 的目錄。</p><h2 id="netlify-dev-1">Netlify dev</h2>
<img class="img-responsive" loading="lazy" src="/images/22/22-04.png">

<p>執行 <code>netlify dev</code>，就可以在本機除錯或是在本機啟動，如上圖啟動 Port 為 8888 的本機 Server ，並且判斷到前端是用 Angular 來開發，跟著執行 ng serve，也同時啟動 Angular Live Development Server，一整個開發的爽快感。</p><h2 id="etlify-站台設定-1">etlify 站台設定</h2>
<img class="img-responsive" loading="lazy" src="/images/22/22-05.png">

<p>一開始的<code>netlify init</code> 的設定，就會與 GitHub 連結，當程式 push 至 GitHub 後，即會自動部署至 Netlify。</p><img class="img-responsive" loading="lazy" src="/images/22/22-06.png">

<p>另外我將資料寫入至 AirTable，所以需要設定環境變數。</p><img class="img-responsive" loading="lazy" src="/images/22/22-07.png">

<p>最後可以在 Functions 頁籤，看到這次所設定的 function 的清單。</p><h2 id="結論-48">結論</h2>
<p>除了可以將 SPA 的站台部署至 Netlify 上，並且後端功能使用 Netlify function，加上搭配 Netlify CI/CD 之後，覺得開發及部署一氣合成。</p>`;export{n as default};
