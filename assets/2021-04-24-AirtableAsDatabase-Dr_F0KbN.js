const n=`---
title: 將AirTable做為資料庫的心得\r
bgImageUrl: /images/19/19-0.jpg\r
description: 當開始寫自已的 Side Project 時，常常遇到問題是，不知道要將資料寫入至那裡?最初是使用restdb，優點：很好串接，有 UI 介面很好設定，但是只能有 2 個免費的資料庫。 之後尋找了一些解決方案，發現AirTable符合我的需求。 優點： 有 UI 介面，可以很方便設定欄位。 欄位支援\r
slug: 2021-04-24-airtable-as-database
tags: []
---

<p>當開始寫自已的 Side Project 時，常常遇到問題是，不知道要將資料寫入至那裡?最初是使用<a href="https://restdb.io/">restdb</a>，優點：很好串接，有 UI 介面很好設定，但是只能有 2 個免費的資料庫。
之後尋找了一些解決方案，發現<a href="https://airtable.com/">AirTable</a>符合我的需求。</p><ul>
<li>優點：<ul>
<li>有 UI 介面，可以很方便設定欄位。</li>
<li>欄位支援很多的類型，連自動編號的類型也有。</li>
<li>使用 CSV，可以直接匯入資料。</li>
</ul>
</li>
<li>缺點：<ul>
<li>每秒可接受的 Request 數有限制，現在每秒最多是 5 個 Request，如果是一般小的 Side Project，這個限制還可以接受。</li>
</ul>
</li>
</ul>
<h2 id="串接方式-1">串接方式</h2>
<p>首先要串接至 AirTable 需要 ApiKey ，可以參考<a href="https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-">文件</a>，接著取得 Base ID，如下圖所示，點選 Help &gt; API documetation。</p><img class="img-responsive" loading="lazy" src="/images/19/19-01.png">

<p>在文件中就可以找到呼叫 API 時，需要的 Base ID。並且也可以看到官方的 JavaScript API client，但是我覺得官方的不好用，會使用其他的 Libary 來串接。</p><img class="img-responsive" loading="lazy" src="/images/19/19-02.png">

<h3 id="使用-api-client-1">使用 API Client</h3>
<p>尋找及測試 2 個套件後，最後我選擇了<a href="https://github.com/GV14982/async-airtable">async-airtable</a>，這個套件最主要是 Wrapper Libary，將 AirTable API 包裝成容易呼叫的形式，並因為是使用 TypeScript 開發的，而且到最近都有更新，所有決定採用了。</p><pre><code class="language-javascript"><span class="token keyword">import</span> AsyncAirtable <span class="token keyword">from</span> <span class="token string">'asyncairtable'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AirtableRecord<span class="token punctuation">,</span> SelectOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'asyncairtable/lib/@types'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Service<span class="token punctuation">,</span> Inject<span class="token punctuation">,</span> Token <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'typedi'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../models/BaseModel'</span><span class="token punctuation">;</span>

@<span class="token function">Service</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> getDatas<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>
    baseId<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tableName<span class="token operator">:</span> string<span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> SelectOptions
  <span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
     <span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> saveData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>baseId<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">tableName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> updateData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>baseId<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">tableName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">}</span>

<span class="token keyword">async</span> deleteData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>baseId<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">tableName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><p>另外有寫一個泛型類別將這些包裝起來，定義了新增、修改、刪除及查詢的方法，希望所有的 Model 都是使用相同的方式來存取資料。</p><h2 id="取得資料-2">取得資料</h2>
<pre><code class="language-javascript"><span class="token comment">// BaseModel.ts</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BaseObj</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> unknown<span class="token operator">></span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BaseModel</span> <span class="token keyword">implements</span> <span class="token class-name">BaseObj</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>x<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> unknown<span class="token punctuation">;</span>
  id<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>接著再建立 BaseModel class，將做為所有 Model 的基礎類別，<code>T extends BaseModel</code>，以及繼承<code>Record<string, unknown></code>來做為轉換成<code>AirTableRecord</code>的準備。</p><blockquote>
<p>Recored&lt;key, value&gt;是 TypeScript 內建的 Helper，它的定義如下：</p></blockquote>
<pre><code class="language-javascript">type Record<span class="token operator">&lt;</span><span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> any<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><blockquote>
<p>就是可以快速宣告 key/value 組合的型別，之前可能需要這樣宣告：</p></blockquote>
<pre><code class="language-javascript"><span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><blockquote>
<p>現在只要這麼寫</p></blockquote>
<pre><code class="language-javascript">type Options <span class="token operator">=</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">></span><span class="token punctuation">.</span>
</code></pre><pre><code><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">'recYFjxxUF7EWAhH5'</span><span class="token punctuation">,</span>
  fields<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'thomas123'</span><span class="token punctuation">,</span>
    email<span class="token operator">:</span> <span class="token string">'t@sample.com'</span><span class="token punctuation">,</span>
    mobile<span class="token operator">:</span> <span class="token string">'0999123456'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  createdTime<span class="token operator">:</span> <span class="token string">'2021-04-17T10:18:47.000Z'</span>
<span class="token punctuation">}</span>
</code></pre><p>AirtTable 回傳的資料格式如上，id 是自動建立的唯一 key 值，而<code>fields</code>就是所定義的欄位，而我的目標就是將<code>fields</code>這塊抽出來。</p><pre><code class="language-javascript"><span class="token keyword">async</span> getDatas<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>
    baseId<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tableName<span class="token operator">:</span> string<span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> SelectOptions
  <span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> airtable <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAirTableClient</span><span class="token punctuation">(</span>baseId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">records</span><span class="token operator">:</span> AirtableRecord<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> airtable<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> body <span class="token operator">=</span> records
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">o</span><span class="token operator">:</span> AirtableRecord</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fields <span class="token operator">=</span> o<span class="token punctuation">.</span>fields<span class="token punctuation">;</span>
        fields<span class="token punctuation">.</span>id <span class="token operator">=</span> o<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token keyword">return</span> fields<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fields</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> unknown<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>fields <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> body<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>綄合上述的程式，取得資料的地方，使用 2 個<code>Map</code>來轉換<code>T[]</code>：</p><ul>
<li>第 1 個<code>Map</code>是要將 fields 屬性抽出，並將唯一值指派至<code>fields</code>上。</li>
<li>第 2 個<code>Map</code>是為了轉成<code>T[]</code>，建立一個物件，使用 <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread operator</a> 複製<code>fields</code>至物件中，最後轉型成<code>T[]</code>。</li>
</ul>
<h2 id="新增資料-2">新增資料</h2>
<pre><code class="language-javascript"><span class="token keyword">async</span> saveData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>baseId<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">tableName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> airtable <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAirTableClient</span><span class="token punctuation">(</span>baseId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> airtable<span class="token punctuation">.</span><span class="token function">createRecord</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> model<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> body<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>新增就很單純，將 Model 物件傳入 <code>createRecord</code>方法即可在 AirtTable 新增一筆資料。</p><h2 id="更新資料-1">更新資料</h2>
<pre><code class="language-javascript"><span class="token keyword">async</span> updateData<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span><span class="token operator">></span><span class="token punctuation">(</span>baseId<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">tableName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> airtable <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAirTableClient</span><span class="token punctuation">(</span>baseId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> tmpModel <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>model <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> tmpModel<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">delete</span> tmpModel<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> airtable<span class="token punctuation">.</span><span class="token function">updateRecord</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span> id <span class="token keyword">as</span> string<span class="token punctuation">,</span>
      fields<span class="token operator">:</span> tmpModel<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> body<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>更新和新增類似，會多傳入唯一鍵值 id ，執行<code>updateRecord</code>即可完成，而這邊<code>delete tmpModel.id</code>的目的是，id 是自動產生的，所以不需要傳入至 AirTable。</p><h2 id="結論-46">結論</h2>
<p>雖然還有其他的儲存資料的解決方案，比如使用 Google sheets，或是使用其它的雲端免費方案，但使用 AirTable 一陣子後，有符合我的期待，目前使用蠻滿意的。
有將這些程式包成 <a href="https://www.npmjs.com/package/@thomascsd/stools">npm package</a>，大家可以參考看看。</p><p>原始碼的位置：<a href="https://github.com/thomascsd/stools">https://github.com/thomascsd/stools</a></p>`;export{n as default};
