const n=`---
title: Ts.ED 設定 middleware\r
bgImageUrl: /images/34/34-00.png\r
description: 之前的文章介紹過 Ts.ED，它是一個建構在 express.js 或是 koa.js 之上，並添加許多便利功能的 TypeScript 框架。最近在設定自訂 middleware 時，我發現了一個不錯的作法，特此記錄下來。 根據官方文件，middleware 分為 Global middlewar\r
slug: 2025-11-17-tsed-middleware
tags: ["typescript"]
---

<p>之前的文章介紹過 Ts.ED，它是一個建構在 express.js 或是 koa.js 之上，並添加許多便利功能的 TypeScript 框架。最近在設定自訂 middleware 時，我發現了一個不錯的作法，特此記錄下來。</p><p>根據<a href="https://tsed.dev/docs/middlewares.html">官方文件</a>，middleware 分為 Global middleware 和 Endpoint middleware 兩種。而 Gobal middleware 需在 <code>Server</code>上的 <code>@Configuration</code>  中透過 <code>middlewares</code> 屬性設定。然而，我按照文件範例將自訂 middleware 加入 <code>middlewares</code> 後，發現 middleware 並未如預期般觸發。</p><p>另一種是 Endpoint middleware，它使用 <code>@UseBefore</code> 裝飾器(decorator)設定在 Controller 上。我認為這種方式更符合我當前的專案需求。</p><p>這是因為我的專案採用了類似 sub-controller 的架構：先建立一個基礎 <code>ApiController</code>（路由設為 <code>/api</code>），而其他 <code>Controller</code> 都設定）在它之下。</p><p>因此，解決方案是直接在 <code>ApiController</code> 上使用 <code>@UseBefore</code>，並傳入自訂的 middleware。這樣一來，所有使用 <code>/api</code> 路徑的子路由都能自動套用此 middleware。</p><pre><code class="language-typescript"><span class="token decorator"><span class="token at operator">@</span><span class="token function">UseBefore</span></span><span class="token punctuation">(</span>ApiKeyMiddleware<span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    ImageFileController<span class="token punctuation">,</span>
    ForecastController<span class="token punctuation">,</span>
    CountyController<span class="token punctuation">,</span>
    MemberController<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ApiController</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre>`;export{n as default};
