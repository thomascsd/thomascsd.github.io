const n=`---
title: 6個推薦的Angular Library\r
bgImageUrl: /images/15/15-0.jpg\r
slug: 2020-07-05-angular-library\r
description: 除了一些有名的 Library 之外，例如：Angular material，還有一些不為人知的 Library，我平常都會對有興趣的 Angular Library，加上星星加以儲藏，其中有使用過，有些覺得很不錯的想推薦給大家。 1. ngx-loading <img class="img-res
tags: ["angular"]
---

<p>除了一些有名的 Library 之外，例如：Angular material，還有一些不為人知的 Library，我平常都會對有興趣的 Angular Library，加上星星加以儲藏，其中有使用過，有些覺得很不錯的想推薦給大家。</p><h2 id="1-ngx-loading-1">1. <a href="https://github.com/Zak-C/ngx-loading">ngx-loading</a></h2>
<img class="img-responsive" loading="lazy" src="/images/15/15-1.gif"/>

<p>一般常常會和後端用 Ajax 溝通，這時候為了向使用者顯示還在資料處理中，會需要用 Loading 呈現。
發現<a href="https://github.com/Zak-C/ngx-loading">ngx-loading</a>這個 library，方便設定及有各種的樣式。</p><iframe width="100%" height="450" frameborder="0" src="https://stackblitz.com/edit/ngx-loading-blog?embed=1&file=src/app/app.component.html" ></iframe>

<h2 id="2-ngx-sweetalert2-1">2. <a href="https://github.com/sweetalert2/ngx-sweetalert2">ngx-sweetalert2</a></h2>
<p>要顯示 alert 或是 confirm 時，會有蠻多人推薦使用 sweetalert2，在 Angular 中可以使用<a href="https://github.com/sweetalert2/ngx-sweetalert2">ngx-sweetalert2</a>，將 Angular 與 sweetalert2 整合。</p><iframe width="100%" height="450" frameborder="0" src="https://stackblitz.com/edit/ngx-sweetalert2-blog?embed=1&file=src/app/app.component.html" ></iframe>

<h2 id="3ng-select-1">3.<a href="https://github.com/ng-select/ng-select">ng-select</a></h2>
<p>我覺是目前最好用的取代 select 的 Libaray，有很多功能，例如：多選、自動完成、標韱的輸入。</p><iframe width="100%" height="450" frameborder="0" src="https://stackblitz.com/edit/ngx-select-blog?embed=1&file=src/app/app.component.html" ></iframe>

<h2 id="4-ngx-smart-modal-1">4. <a href="https://github.com/maximelafarie/ngx-smart-modal">ngx-smart-modal</a></h2>
<img class="img-responsive" loading="lazy" src="/images/15/15-2.png">

<p>說到 Dialog，除了使用 Angular component 的<a href="https://material.angular.io/components/dialog/overview">Dialog</a>之外，還可以使用<a href="https://github.com/maximelafarie/ngx-smart-modal">ngx-smart-modal</a>，除了一般的之外，還有巢狀 Dialog 的功能，有時候我們會需要開啟 Dialog 後，再開啟另一個 Dialog，除此之外，滿足了使用 Dialog 的各項功能需求。</p><iframe width="100%" height="450" frameborder="0" src="https://stackblitz.com/edit/ngx-smart-dialog-blog?embed=1&file=src/app/app.component.html" ></iframe>

<h2 id="5until-destroy-1">5.<a href="https://github.com/ngneat/until-destroy">until-destroy</a></h2>
<p>一般說來，在 component 中，有對 Observable 進行 subcribe 的話，都會需要在 ngOnDestroy 中執行 unsubscribe。如果有很多 component 的話，每個都要這麼寫，卻時很煩人，所以我有發現<a href="https://github.com/ngneat/until-destroy">until-destroy</a>，可以簡化需撰寫的程式碼。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> UntilDestroy<span class="token punctuation">,</span> untilDestroyed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ngneat/until-destroy"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CityService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../city.service"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> City <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../models/City"</span><span class="token punctuation">;</span>

@<span class="token function">UntilDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">"app-home"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">"./home.component.html"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./home.component.css"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HomeComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cities</span><span class="token operator">:</span> City<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">cityService</span><span class="token operator">:</span> CityService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cityService
      <span class="token punctuation">.</span><span class="token function">getCities</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">untilDestroyed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">d</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cities <span class="token operator">=</span> d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>如同上方的程式，只需引用 UntilDestroy、untilDestroyed，不需在另外加上 Subject 或是 ngOnDestroy 之類的程式。</p><blockquote>
<p><code>untilDestroyed</code>需要放在.pipe 的最後面才行，參考<a href="https://medium.com/angular-in-depth/rxjs-avoiding-takeuntil-leaks-fb5182d047ef">RxJS: Avoiding takeUntil Leaks</a></p></blockquote>
<h2 id="6ngx-dynamic-form-builder-1">6.<a href="https://github.com/EndyKaufman/ngx-dynamic-form-builder">ngx-dynamic-form-builder</a></h2>
<p><a href="https://github.com/EndyKaufman/ngx-dynamic-form-builder">ngx-dynamic-form-builder</a>是將 class-valdator 整合的 Angular library， 而 class-validator 則是驗證用的 Library，使用 decorator 設定資料驗證的規則。</p><p>我在上一篇的<a href="/blog/2020-03-13-classValidatorAndNgxDynamicFormBuilder">文章</a>有介紹過。</p><h2 id="結論-43">結論</h2>
<p>以上 6 個 Angular Library，除了<a href="https://github.com/ng-select/ng-select">ng-select</a>外，其他的星星數都不是很多，但是卻很實用，推薦給大家參考看看。</p>`;export{n as default};
