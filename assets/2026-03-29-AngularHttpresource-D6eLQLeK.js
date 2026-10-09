const n=`---
title: Angular HttpResource\r
bgImageUrl: /images/35/35-00.jpg\r
description: Angular 在19之後推出的新功能，基於 Signal 的新功能：httpResource，它將原本的 HttpClient 進行了封裝，並內建了三種核心狀態：isLoading、asValue 與 error，之前版本需要另外實作的功能，目前已成為內建標準\r
slug: 2026-03-29-angular-Httpresource\r
tags: ['Angular']
---

<p>Angular 在19之後推出的新功能，基於 Signal 的新功能：<code>httpResource</code>，它將原本的 <code>HttpClient</code> 進行了封裝，並內建了三種核心狀態：<code>isLoading</code>、<code>hasValue</code> 與 <code>error</code>，之前版本需要另外實作的功能，目前已成為內建標準，所以記錄一下到目前為止的使用心得。</p><h2 id="http-get">HTTP GET</h2>
<h3 id="defaultvalue">defaultValue</h3>
<pre><code class="language-typescript"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'.netlify/functions/member/list'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token generic-function"><span class="token function">httpResource</span><span class="token generic class-name"><span class="token operator">&lt;</span>Member<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  defaultValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>使用 httpResource 最簡單的方式是傳入一個回傳 URL 的 Arrow Function。我習慣在 <code>HttpResourceOptions</code> 中設定 <code>defaultValue</code>。</p><p>設定 <code>defaultValue: []</code> 的好處在於能確保回傳型別始終為 <code>Member[]</code>，而非 <code>Member[] | undefined</code>。這讓我們在處理資料時不需要反覆判斷 undefined，程式碼會簡潔許多。</p><h3 id="isloading-errorhasvalue">isLoading, error,hasValue</h3>
<pre><code class="language-html">@if (forecastData.isLoading()) {
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lodingContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mat-spinner</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mat-spinner</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
} @else if (forecastData.hasValue()) {
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>columns is-multiline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  @for (data of forecastData.value(); track data.country_code) {
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column is-one-quarter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-forecast-item</span> <span class="token attr-name">[forecastDatum]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-forecast-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
} @else {
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>errorContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>errorMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>An error occurred while fetching the forecast data.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
}
</code></pre><p>過去使用<code>HttpClient</code>時還會需要另外寫一些重覆程式碼來判斷是否是載入中，現在使用<code>httpResourceRequest</code>內建的方法 loading, hasValue，來判斷是否載入中，或是是否有資料。最後使用<code>Value</code>，由於 value 本身也是個 Signal，讀取資料時記得加上括號 value()。</p><h3 id="parse">parse</h3>
<pre><code class="language-typescript"><span class="token generic-function"><span class="token function">httpResource</span> <span class="token generic class-name"><span class="token operator">&lt;</span>ForecastDatum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'/.netlify/functions/proxy'</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>forecast <span class="token operator">/</span> location <span class="token operator">?</span> city <span class="token operator">=</span> $ <span class="token punctuation">{</span>
        cityValue
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">parse</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toForecastDatums</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
    defaultValue<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token function">toForecastDatums</span><span class="token punctuation">(</span>forecast<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> ForecastDatum<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> forecast<span class="token punctuation">.</span>data <span class="token keyword">as</span> ForecastDatum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> newData <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>m<span class="token punctuation">,</span>
      id<span class="token operator">:</span> index<span class="token operator">++</span><span class="token punctuation">,</span>
      city_name<span class="token operator">:</span> forecast<span class="token punctuation">.</span>city_name<span class="token punctuation">,</span>
      lon<span class="token operator">:</span> forecast<span class="token punctuation">.</span>lon<span class="token punctuation">,</span>
      timezone<span class="token operator">:</span> forecast<span class="token punctuation">.</span>timezone<span class="token punctuation">,</span>
      lat<span class="token operator">:</span> forecast<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>
      country_code<span class="token operator">:</span> forecast<span class="token punctuation">.</span>country_code<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">as</span> ForecastDatum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> newData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>有時當後端回傳的格式與前端定義的 Model 不一致時，如範例，要回傳的物件為<code>forecast.data</code>，這時可以使用<code>HttpResourceOptions</code>的其中一個屬性<code>parse</code>進行轉換。</p><h2 id="http-post">HTTP POST</h2>
<pre><code class="language-typescript"><span class="token comment">//MemberService</span>
<span class="token function">saveMember</span><span class="token punctuation">(</span>member<span class="token operator">:</span> Member<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/contact/save'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">httpResource</span> <span class="token generic class-name"><span class="token operator">&lt;</span> Member <span class="token operator">></span></span></span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token constant">API_BASE_URL</span><span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> member<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">//MemberComponent</span>
<span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>memberService<span class="token punctuation">.</span><span class="token function">saveMember</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span>value <span class="token keyword">as</span> Member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>使用 HTTP POST 時，還會需另外設定 <code>method</code> 與 <code>body</code> 參數，這樣就能使用 POST 的方式呼叫 API。
一般來說，都會習慣將呼叫其他API的程式封裝成方法，讓component呼叫。</p><p>但是會出現下列錯誤：</p><blockquote>
<p>httpResource2() can only be used within an injection context such as a constructor</p></blockquote>
<p>原因是因為 httpResouce 只能在 component 或是 Service 初始化階段（例如建構子或屬性宣告時）定義，不能在一般方法（如 onSubmit）中動態觸發。</p><pre><code class="language-typescript"><span class="token comment">//MemberService</span>
<span class="token function">saveMember</span><span class="token punctuation">(</span><span class="token function-variable function">memberReq</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Member <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpResource</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> member <span class="token operator">=</span> <span class="token function">memberReq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>member<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token constant">API_BASE_URL</span><span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/contact/save'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      body<span class="token operator">:</span> member<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">//MemberComponent</span>
member <span class="token operator">=</span> <span class="token generic-function"><span class="token function">signal</span> <span class="token generic class-name"><span class="token operator">&lt;</span> Member <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">></span></span></span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
saveResource <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>memberService<span class="token punctuation">.</span><span class="token function">saveMember</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>group<span class="token punctuation">.</span>value <span class="token keyword">as</span> Member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>要修改這個錯誤，就需要使用<em>signal</em>，當在 onSubmit 中，signal 被設定新值時，.就會觸發 <code>saveMember(() => this.member())</code> ，接著會重新執行 <code>httpResource</code>，如此可避免這種錯誤。</p><h2 id="結論-28">結論</h2>
<p>httpResource 是以 signal 為基礎，Angular 逐漸將 signal 整合到各個功能中，讓我們在使用 Angular 時能更方便的使用 signal 來管理狀態。</p><p>另外這次使用 AI 來學習 HttpResouce，及當 Http POST 時出錯時，也是使用 AI 讓我知道解決錯誤及出錯的原因。</p>`;export{n as default};
