const s=`---
title: tsdx - 快速建立 npm 套件樣板的CLI工具\r
bgImageUrl: /images/23/23-0.jpg\r
description: 之前的文章使用 TypeScript 建立 Express.js，需要快速建立 npm 套件，所以在 GitHub 上尋找有沒有方便的套件，結果發現到了 tsdx，這個方便的 CLI 工具。 建立 \`\`\` npx tsdx create mylib \`\`\` 按照文件的說明，直接執行\`npx tsdx\r
slug: 2021-12-09-tutorial-of-tsdx
tags: ["typescript"]
---

<p>之前的文章<a href="https://thomascsd.github.io/blog/2021-02-07-ExpressjssWithTypescript">使用 TypeScript 建立 Express.js</a>，需要快速建立 npm 套件，所以在 GitHub 上尋找有沒有方便的套件，結果發現到了 <a href="httptrs://github.com/jaredpalmer/tsdx">tsdx</a>，這個方便的 CLI 工具。</p><h2 id="建立-3">建立</h2>
<pre><code>npx tsdx create mylib
</code></pre><p>按照<a href="https://tsdx.io/">文件</a>的說明，直接執行<code>npx tsdx create <package name></code>，馬上建立好從開發、測試到部署全部都設定完成的樣版，節省了很多前期整合各種套件的時間。</p><img class="img-responsive" loading="lazy" src="/images/23/23-01.png">

<p>所選擇的樣板是 &#39;basic&#39;，會建立如下圖的目錄架構。</p><img class="img-responsive" loading="lazy" src="/images/23/23-02.png">

<h2 id="微調的項目-1">微調的項目</h2>
<p>但是實際開發後，發現還是需要一些調整才行，以下會介紹。</p><h3 id="tsconfigjson-3">tsconfig.json</h3>
<p>因為開發的套件<a href="https://www.npmjs.com/package/@thomascsd/stools">stools</a>有使用到 DI 的機制，而使用的套件是 <a href="https://github.com/typestack/typedi">typeDi</a> ，而且會用到 Decorator 的功能，因此需要在 tsconfig.json 加上以下設定。</p><pre><code><span class="token string-property property">"emitDecoratorMetadata"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token string-property property">"experimentalDecorators"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre><h2 id="測試-1">測試</h2>
<img class="img-responsive" loading="lazy" src="/images/23/23-03.png">

<p>測試方面是使用 Jest ，有 React 的背景的人，應該很多都有使用過，而這是我第一次使用 Jest 來進行測試。當測試執行完畢，會直接顯示詳細的測試資訊，如同上圖，這部份有讓我有點驚艷到，就連未測試的程式行數也會顯示。</p><pre><code class="language-javascript"><span class="token comment">// jest.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">testEnvironment</span><span class="token operator">:</span> <span class="token string">'node'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">collectCoverage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">coverageDirectory</span><span class="token operator">:</span> <span class="token string">'coverage'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">collectCoverageFrom</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'src/**/*.{js,ts}'</span><span class="token punctuation">,</span> <span class="token string">'!&lt;rootDir>/node_modules/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>但是還有需要調整的地方，預設是沒有加入 jest.config.js 的，而這次建立的套件<a href="https://www.npmjs.com/package/@thomascsd/stools">stools</a>是運行在 node.js 環境上的，所以執行測試時會發生錯誤，所以指定<code>testEnvironment</code>為 node 即可，並且參考其他專案的設定，也一併設定需顯示測試的覆蓋度。</p><h2 id="建置build-1">建置(build)</h2>
<p>建置是與 Rollup 整合，當執行<code>npm run build</code> ，也就會執行<code>tsdx build --target node</code>。</p><img class="img-responsive" loading="lazy" src="/images/23/23-05.png">

<p>這邊也是一段指令執行完，就會產生可以部署至 npm 的相關檔案，如大部份網站的慣列，預設是放在<em>dist</em>。</p><img class="img-responsive" loading="lazy" src="/images/23/23-04.png">

<h2 id="結論-49">結論</h2>
<p>如果想快速開發 npm package 時，使用 tsdx 已經整合各種建立套件所需的工具，所以只需將時間放在建立套件的程式上即可，減少很多前置的時間，請大家參考看看。</p>`;export{s as default};
