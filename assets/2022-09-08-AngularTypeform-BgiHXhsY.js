const n=`---
title: Angular TypeForm - 強型別Form的心得\r
bgImageUrl: /images/25/25-0.jpg\r
description: 2024-11-10 更新：增加 FormBuild.group 和 class-validator 的程式說明 <hr 在 Angular v14 中最重要的 2 個功能，除了 Single Component 之外，就是 Typeform 了，而 Typeform 也就是在建立 Form 功能時\r
slug: 2022-09-08-angular-typeform
tags: ["angular"]
---

<p>2024-11-10 更新：增加 FormBuild.group 和 class-validator 的程式說明</p><hr>

<p>在 Angular v14 中最重要的 2 個功能，除了 Single Component 之外，就是 Typeform 了，而 Typeform 也就是在建立 Form 功能時，終於可以套用型別，方便開發及除錯，是期待很久的功能。
查詢<a href="https://angular.tw/guide/typed-forms">官方文件</a>可以發現，範列都是使用從建立 <code>FormGroup</code>，再建立 &#39;FormControl&#39; 的方式。</p><img class="img-responsive" loading="lazy" src="/images/25/25-01.png">

<p>本人還是比較偏好用 <code>FormBuilder</code> 來建立 FormGroup，所以分享一下用 <code>FromBuilder</code> 建立的心得。</p><h2 id="使用方式-1">使用方式</h2>
<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UntypedFormGroup<span class="token punctuation">,</span> NgForm<span class="token punctuation">,</span> Validators<span class="token punctuation">,</span> UntypedFormBuilder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>
</code></pre><p>首先使用 Angular CLI 來將之前建立的小專案升級至 V.14，如上，升級後原本的程式會自動轉換成 <code>UntypedFormGroup</code> 、 <code>UntypedFormBuilder</code>。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormGroup<span class="token punctuation">,</span> NgForm<span class="token punctuation">,</span> Validators<span class="token punctuation">,</span> FormBuilder<span class="token punctuation">,</span> FormControl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MemberForm</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">mobile</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">birthday</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">account</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>接著替換成 <code>FormGroup</code>、 <code>FormBuilder</code>，並且建立使用於 <code>FormBuilder</code> 上的 interface。</p><pre><code class="language-javascript"><span class="token literal-property property">group</span><span class="token operator">:</span> FormGroup<span class="token operator">&lt;</span>MemberForm<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><p>接著在 <code>FormGroup</code> 中使用已建立的 <code>MemberForm</code>。</p><pre><code class="language-javascript">  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">fb</span><span class="token operator">:</span> FormBuilder<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>group <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span>nonNullable<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
</code></pre><p>之後像之前 v.13 的一樣寫法，使用 &#39;group&#39; 方式來建立 <code>FormGroup</code> ，因為每個屬性都是必填，所以設定 <code>Validators.required</code> 。</p><pre><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Member</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  email <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  mobile <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  birthday <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  password <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MemberForm</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">mobile</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">birthday</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">account</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>一般說來，每個 Form 都會有相對應的 Model，也就是類型，比如上面程式碼中的 <code>Member</code>。而 <code>FormGroup</code> 也會建立都是相同屬性的類型，比如上面程式碼的 <code>MemberForm</code> ，如此就會重覆建立。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormArray<span class="token punctuation">,</span> FormControl<span class="token punctuation">,</span> FormGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type Unpacked<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span>infer <span class="token constant">U</span><span class="token operator">></span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ToForm<span class="token operator">&lt;</span>OriginalType<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key <span class="token keyword">in</span> keyof OriginalType<span class="token punctuation">]</span><span class="token operator">:</span> OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span>any<span class="token operator">></span>
    <span class="token operator">?</span> FormArray<span class="token operator">&lt;</span>
        Unpacked<span class="token operator">&lt;</span>OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">></span> <span class="token keyword">extends</span> <span class="token class-name">object</span>
          <span class="token operator">?</span> FormGroup<span class="token operator">&lt;</span>ToForm<span class="token operator">&lt;</span>Unpacked<span class="token operator">&lt;</span>OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">>>></span>
          <span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>Unpacked<span class="token operator">&lt;</span>OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span>
      <span class="token operator">></span>
    <span class="token operator">:</span> OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name">object</span>
    <span class="token operator">?</span> FormGroup<span class="token operator">&lt;</span>ToForm<span class="token operator">&lt;</span>OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">>></span>
    <span class="token operator">:</span> FormControl<span class="token operator">&lt;</span>OriginalType<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>可以參考文章<a href="https://fullstackladder.dev/blog/2022/05/15/angular-14-strict-typed-reactive-forms/">搶先體驗強型別表單（Strict Typed Reactive Forms）</a>，就可以方便轉換。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ToForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/toForm'</span><span class="token punctuation">;</span>

<span class="token literal-property property">group</span><span class="token operator">:</span> FormGroup<span class="token operator">&lt;</span>ToForm<span class="token operator">&lt;</span>Member<span class="token operator">>></span><span class="token punctuation">;</span>
</code></pre><p>只需改成 <code>FormGroup<ToForm<Member>></code> 即可。</p><h2 id="class-validator-3"><a href="https://github.com/typestack/class-validator">class-validator</a></h2>
<p>因為驗證是每個 Form 都是必須會需要做的行為，所以會使用 <code>class-validator</code> 來共同驗證，之前有接觸過 <code>class-validator</code> 這個套件，是用 decorator 的方式，在物件的屬性上設定所要驗證的格式，之前都是在 Node.js 上來使用，不過 Angular 上使用的話，需要整合一下。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span>
  IsNotEmpty<span class="token punctuation">,</span>
  IsEmail<span class="token punctuation">,</span>
  IsMobilePhone<span class="token punctuation">,</span>
  ValidationOptions<span class="token punctuation">,</span>
  Matches<span class="token punctuation">,</span>
  MinLength<span class="token punctuation">,</span>
  MaxLength<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'class-validator'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> plainToClassFromExist <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'class-transformer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./baseModel'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">options</span><span class="token operator">:</span> ValidationOptions <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'填寫正式資料'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Member</span> <span class="token keyword">extends</span> <span class="token class-name">BaseModel</span> <span class="token punctuation">{</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'姓名需填寫'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Email需填寫'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  @<span class="token function">IsEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  email <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'手機需填寫'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  @<span class="token function">IsMobilePhone</span><span class="token punctuation">(</span>
    <span class="token string">'zh-TW'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">strictMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'手機需填寫'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  mobile <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  <span class="token literal-property property">birthday</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  @<span class="token function">MinLength</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  @<span class="token function">MaxLength</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  @<span class="token function">Matches</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z\\d]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  account <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  @<span class="token function">MinLength</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  @<span class="token function">MaxLength</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  @<span class="token function">Matches</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-zA-Z\\d]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  password <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">plainToClassFromExist</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p><code>class-validator</code> 預設已經定義一些常用的驗證方式，例如是否必填、Email 或是手機驗證，直接套用在類別上的屬性即可，可以參考<a href="https://github.com/typestack/class-validator#validation-decorators">文件</a>。</p><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ValidationErrors<span class="token punctuation">,</span> ValidatorFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> validateSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'class-validator'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> utilValidator<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prop</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ValidatorFn <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>control<span class="token punctuation">)</span><span class="token operator">:</span> ValidationErrors <span class="token operator">|</span> <span class="token parameter"><span class="token keyword">null</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> invalid <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token punctuation">(</span>model <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> control<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

    <span class="token keyword">const</span> errors <span class="token operator">=</span> <span class="token function">validateSync</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">skipMissingProperties</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>errors <span class="token operator">&amp;&amp;</span> errors<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> propError <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>property <span class="token operator">==</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>propError<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> message <span class="token operator">=</span> propError<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> constraints <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>constraints <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        invalid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">hasError</span><span class="token operator">:</span> invalid <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>control<span class="token punctuation">.</span>dirty <span class="token operator">||</span> control<span class="token punctuation">.</span>touched<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> message<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>為了要將 <code>class-validator</code> 和 <code>FormGroup</code> 、<code>FormControl</code> 整合，建立了共同方法 <code>utilValidator</code>，使用<code>class-validator</code>中的方法 <code>validateSync</code> 來驗證 model，並且取得特定屬性的錯誤訊息。</p><pre><code class="language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>group <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'mobile'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'birthday'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'account'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token function">utilValidator</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Member</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>接著在 <code>FormBuilder</code> 的 <code>Group</code> 方法中，使用剛剛建立的 <code>utilValidator</code>，傳入 model 及屬性，即可將<code>class-validator</code> 及 <code>FormGroup</code> 整合在一起。</p><pre><code class="language-html">@if (group.controls.name.errors?.["hasError"]) {
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>help is-danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ group.controls.name.errors?.["message"] }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
}
</code></pre><p>而如果有錯誤的話，固定回傳格式為 <code>{ hasError: true, message }</code>，所以頁面上只需判斷 <code>hasError === true</code>即可。</p><img class="img-responsive" loading="lazy" src="/images/25/25-02.png">

<p>並且因為是強型別的關系，在 html 上也有程式碼提示的幫助。</p><h2 id="結論-51">結論</h2>
<p>一直以來，TypeForm 就是榜上有名的希望實作的功能，對於開發及除錯的幫助很大，我將以前的小專案改為 TypeForm 的方式嘗試看看，這是小小的心得分享。</p>`;export{n as default};
