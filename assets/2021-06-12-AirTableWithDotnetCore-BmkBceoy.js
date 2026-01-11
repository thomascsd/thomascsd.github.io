const n=`---
title: 將AirTable做為資料庫的心得 - .NET Core 篇\r
bgImageUrl: /images/20/20-0.jpg\r
description: 我在上一篇的文章將 AirTable 做為資料庫的心得，有寫到：我為什麼使用 AirTable 當作資料庫，以及優、缺點，並且環境是 Node.js ，語言是 TypeScript ，而這次想要使用 .NET Core 、 C來改寫。 串接 AirTable <img class="img-resp\r
slug: 2021-06-12-air-table-with-dotnet-core
tags: ["dotnet"]
---

<p>我在上一篇的文章<a href="https://thomascsd.github.io/blog/2021-04-24-AirtableAsDatabase">將 AirTable 做為資料庫的心得</a>，有寫到：我為什麼使用 <a href="https://airtable.com/">AirTable</a> 當作資料庫，以及優、缺點，並且環境是 Node.js ，語言是 TypeScript ，而這次想要使用 .NET Core 、 C# 來改寫。</p><h2 id="串接-airtable-1">串接 AirTable</h2>
<img class="img-responsive" loading="lazy" src="/images/20/20-01.png">

<p>串接 AirTable 所需要的 APIKey、BaseID，可以參考的上一篇的文章，而連結 AirtTable 使用的套件是 <a href="https://github.com/ngocnicholas/airtable.net">airtable.net</a> ，並且使用 Nuget 安裝即可。</p><h2 id="建立泛型類別-1">建立泛型類別</h2>
<p>仿造原本 TypeScript 的寫法，寫一個泛型類別，將取得資料、新增、修改及刪除都封裝起來。</p><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token operator">:</span> IDataService
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token builtin">string</span> m_ApiKey<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token function">DataService</span><span class="token punctuation">(</span>IConfiguration configuration<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>m_ApiKey <span class="token operator">=</span> configuration<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">GetValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"AirTable:ApiKey"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>IEnumerable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span> <span class="token generic-function"><span class="token function">GetDatas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
           <span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>AirtableCreateUpdateReplaceRecordResponse<span class="token operator">></span> <span class="token generic-function"><span class="token function">SaveData</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">,</span> <span class="token constant">T</span> model<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>AirtableCreateUpdateReplaceRecordResponse<span class="token operator">></span> <span class="token generic-function"><span class="token function">UpdateData</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">,</span> <span class="token constant">T</span> model<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
         <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>AirtableDeleteRecordResponse<span class="token operator">></span> <span class="token function">DeleteData</span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">,</span> <span class="token builtin">string</span> id<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span> 
        <span class="token punctuation">}</span>
</code></pre><h2 id="取得資料-3">取得資料</h2>
<pre><code><span class="token comment">// BaseModel.cs</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseModel</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token builtin">string</span> Id <span class="token punctuation">{</span> get<span class="token punctuation">;</span> set<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><pre><code><span class="token comment">// DataService.cs</span>
<span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>IEnumerable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span> <span class="token generic-function"><span class="token function">GetDatas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
            <span class="token builtin">string</span> offset <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            List<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> models <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            List<span class="token operator">&lt;</span>AirtableRecord<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span> records <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List<span class="token operator">&lt;</span>AirtableRecord<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            AirtableListRecordsResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> res<span class="token punctuation">;</span>

            <span class="token function">using</span> <span class="token punctuation">(</span>AirtableBase airtable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AirtableBase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>m_ApiKey<span class="token punctuation">,</span> baseId<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">do</span>
                <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> <span class="token keyword">await</span> airtable<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">ListRecords</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    records<span class="token punctuation">.</span><span class="token function">AddRange</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>Records<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    offset <span class="token operator">=</span> res<span class="token punctuation">.</span>Offset<span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>offset <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            models <span class="token operator">=</span> records
                <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>m <span class="token operator">=></span>
                <span class="token punctuation">{</span>
                    m<span class="token punctuation">.</span>Fields<span class="token punctuation">.</span>Id <span class="token operator">=</span> m<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
                    <span class="token keyword">return</span> m<span class="token punctuation">.</span>Fields<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> models<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><p>可以先參考 <a href="https://github.com/ngocnicholas/airtable.net">airtable.net</a> 的 GitHub，建立 <code>AirtableBase</code> 的實體，之後用 <code>ListRecords<T></code> 泛型方法，讀取 AirTable 中的資料。</p><p>再來使用 <code>Select</code> 方法轉換物件，取得屬性 <code>Fields</code> ，並且將由 AirTable 自動產生的 <code>Id</code> 鍵值保存下來。</p><img class="img-responsive" loading="lazy" src="/images/20/20-02.png">

<p>最後使用 Postman 測試，Response 的結果如上圖所示，而 <code>id</code> 就是 AirtTable 自動產生的 <code>Id</code> 鍵值。</p><h2 id="新增資料-3">新增資料</h2>
<pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>AirtableCreateUpdateReplaceRecordResponse<span class="token operator">></span> <span class="token generic-function"><span class="token function">SaveData</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">,</span> <span class="token constant">T</span> model<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> fields <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-function"><span class="token function">GetFields</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
            AirtableCreateUpdateReplaceRecordResponse res<span class="token punctuation">;</span>

            <span class="token function">using</span> <span class="token punctuation">(</span>AirtableBase airTable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AirtableBase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>m_ApiKey<span class="token punctuation">,</span> baseId<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token keyword">await</span> airTable<span class="token punctuation">.</span><span class="token function">CreateRecord</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> fields<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token keyword">private</span> Fields <span class="token generic-function"><span class="token function">GetFields</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token constant">T</span> model<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dictionary<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> object<span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> props <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token function">foreach</span> <span class="token punctuation">(</span><span class="token keyword">var</span> prop <span class="token keyword">in</span> props<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                object value <span class="token operator">=</span> prop<span class="token punctuation">.</span><span class="token function">GetValue</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
                dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>prop<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">var</span> fields <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fields</span>
            <span class="token punctuation">{</span>
                FieldsCollection <span class="token operator">=</span> dic
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> fields<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><p>在寫入資料前需要進行處理，建立方法 <code>GetFields<T></code> 來處理，因為<code>Fields</code>內部是使用<code>Dctionary<Tkey, TValue></code>來保存資料，所以採用反射的方式，將<code>T </code>輔換成<code>Dctionary<Tkey, TValue></code>。
之後新增資料使用<code>CreateRecord</code>方法，將<code>Fields</code>物件傳入。</p><h2 id="修改資料-1">修改資料</h2>
<pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> Task<span class="token operator">&lt;</span>AirtableCreateUpdateReplaceRecordResponse<span class="token operator">></span> <span class="token generic-function"><span class="token function">UpdateData</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token builtin">string</span> baseId<span class="token punctuation">,</span> <span class="token builtin">string</span> tableName<span class="token punctuation">,</span> <span class="token constant">T</span> model<span class="token punctuation">)</span> where <span class="token constant">T</span> <span class="token operator">:</span> BaseModel
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> fields <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-function"><span class="token function">GetFields</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
            AirtableCreateUpdateReplaceRecordResponse res<span class="token punctuation">;</span>

            <span class="token function">using</span> <span class="token punctuation">(</span>AirtableBase airTable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AirtableBase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>m_ApiKey<span class="token punctuation">,</span> baseId<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token keyword">await</span> airTable<span class="token punctuation">.</span><span class="token function">UpdateRecord</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> fields<span class="token punctuation">,</span> model<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><p>修改資料是呼叫 <code>UpdateRecord</code> 方法，和新增資料類似，只差別在 <code>UpdateRecord</code> 會多傳唯一 <code>Id</code> 鍵值。</p><h2 id="結論-47">結論</h2>
<p>目前覺得 <a href="https://airtable.com/">AirTable</a> 寫 Side Project 的好幫手，除了上次的 TypeScript 的版本外，而這次想轉成 .NET Core 的版本，之後我在將這些程式包裝成 Nuget 的版本，請大家參考看看。</p><p>原始碼位置：<a href="https://github.com/thomascsd/BookApi">https://github.com/thomascsd/BookApi</a></p>`;export{n as default};
