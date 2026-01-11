const n=`---
title: Uppy - 最方便的上傳套件\r
bgImageUrl: /images/11/11-0.jpg\r
slug: 2019-06-16-tutorial-of-uppy\r
description: 一直以來，我都覺得上傳檔案的程式開發，是表單處理中的痛點，一般的&lt;input type="file" />的功能比較簡略，介面不甚美觀。之前有發現 Uppy 這個套件，就對它感興趣，現在已經出了 1.0 版，想寫篇文章記錄一下心得。 這篇的文章的原始碼在這邊ngx-uppy-demo 安裝 \`
tags: []
---

<p>一直以來，我都覺得上傳檔案的程式開發，是表單處理中的痛點，一般的&lt;input type=&quot;file&quot; /&gt;的功能比較簡略，介面不甚美觀。之前有發現 Uppy 這個套件，就對它感興趣，現在已經出了 1.0 版，想寫篇文章記錄一下心得。</p><p>這篇的文章的原始碼在這邊<a href="https://github.com/thomascsd/ngx-uppy-demo">ngx-uppy-demo</a></p><h2 id="安裝-4">安裝</h2>
<pre><code>npm install uppy
</code></pre><p>當執行 npm install uppy 時，是安裝 Uppy 的全部功能，這當然會使得安裝的檔案容量變大。</p><pre><code>npm install <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>core <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>dashboard <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>xhr<span class="token operator">-</span>upload
</code></pre><p>一般的作法，就是安裝所需的套件，如果想要使用 Dashboard，可以只安裝@uppy/dashboard 及@uppy/xhr-upload。</p><pre><code>npm install <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>file<span class="token operator">-</span>input <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>progress<span class="token operator">-</span>bar <span class="token decorator"><span class="token at operator">@</span><span class="token function">uppy</span></span><span class="token operator">/</span>xhr<span class="token operator">-</span>upload
</code></pre><p>如果只想要使用一般的 FileUpload，可以只安裝@uppy/file-input @uppy/progress-bar @uppy/xhr-upload</p><h2 id="實作-1">實作</h2>
<h3 id="angular-1">Angular</h3>
<pre><code class="language-javascript">@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-uppy'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./uppy.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./uppy.component.scss'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UppyComponent</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span>
  <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// Create Uppy object</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>因為擅長的是 Angular，所以這個範例，想將 Angular 和 Uppy 整合，所以首先實作 AfterViewInit，確認頁面的 DOM 都戴入完成後，才能建立 Uppy 的物件。</p><h3 id="dashboard-1">Dashboard</h3>
<pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uploadContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Uppy <span class="token keyword">from</span> <span class="token string">'@uppy/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Dashboard <span class="token keyword">from</span> <span class="token string">'@uppy/dashboard'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> XHRUpload <span class="token keyword">from</span> <span class="token string">'@uppy/xhr-upload'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> uppy <span class="token operator">=</span> <span class="token function">Uppy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">autoProceed</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uppy<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Dashboard<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'.uploadContainer'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
uppy<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>XHRUpload<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'/api/file'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldName</span><span class="token operator">:</span> <span class="token string">'fileData'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uppy<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'upload-success'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> <span class="token literal-property property">response</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imageDataService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body <span class="token keyword">as</span> ImageDatum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>使用 use 戴入所需的套件，這裡戴入 Dashboard 及 XHRUpload。</p><pre><code class="language-javascript">uppy<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Dashboard<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'.uploadContainer'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Dashboard 的參數可以參考<a href="https://uppy.io/docs/dashboard/">官方文件</a>。</p><ul>
<li>inline(true)：直接將 Dashoboard 顯示在頁面上。</li>
<li>target(&#39;.uploadContainer&#39;)：Dashboard 顯示在 uploadContainer 上。</li>
</ul>
<pre><code class="language-javascript">uppy<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>XHRUpload<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'/api/file'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldName</span><span class="token operator">:</span> <span class="token string">'fileData'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uppy<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'upload-success'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> <span class="token literal-property property">response</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imageDataService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body <span class="token keyword">as</span> ImageDatum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>XHRUpload 的參數可以參考<a href="https://uppy.io/docs/xhr-upload/">文件</a>，<code>endpoint</code>指定 Server 端的 API 位置，並且是用監聽事件 upload-success 來判斷是否上傳成功。如此檔案或是圖片上傳的功能就完成。</p><img class="img-responsive" loading="lazy" src="/images/11/11-1.png">

<p>Dashboard 的畫面如上，因為 Uppy 是上傳套件，無法戴入圖片，所以這邊有使用另一個套件<a href="https://github.com/MurhafSousli/ngx-gallery">ngx-gallery</a>。</p><h3 id="file-input-1">File Input</h3>
<pre><code class="language-javascript">uppy
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FileInput<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pretty</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'.uploadContainer'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inputName</span><span class="token operator">:</span> <span class="token string">'fileData'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Processbar<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'body'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hideAfterFinish</span><span class="token operator">:</span> <span class="token boolean">true</span>
l
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uppy<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>XHRUpload<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'/api/file'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldName</span><span class="token operator">:</span> <span class="token string">'fileData'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

uppy<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'upload-success'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> <span class="token literal-property property">response</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>imageDataService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body <span class="token keyword">as</span> ImageDatum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>程式碼與 Dashboard 的很相似，戴入 FileInput 的套件及設定參數，可以參考<a href="https://uppy.io/docs/file-input/">文件</a>。</p><ul>
<li>target(&#39;.uploadContainer&#39;)：FileInput 顯示在 uploadContainer 上。</li>
<li>inputName(&#39;fileData&#39;)：傳送至 Server 的名稱為 fileData。</li>
</ul>
<img class="img-responsive" loading="lazy" src="/images/11/11-2.png">

<p>FileInput 的畫面如上。</p><h3 id="server-1">Server</h3>
<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fileUpload <span class="token keyword">from</span> <span class="token string">'express-fileupload'</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">fileUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Server 端是使用 express.js，而處理上傳檔案是用<a href="https://github.com/richardgirges/express-fileupload">express-fileupload</a>這個套件。</p><pre><code class="language-javascript"><span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> express<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> express<span class="token punctuation">.</span>Response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> fileData <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">[</span><span class="token string">'files'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> fileRes <span class="token operator">=</span> <span class="token keyword">await</span> service<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>fileData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>fileRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><p>只需用 req.files.fileData 就可以存取到所上傳的物件，而 fileData 就是在<strong>XHRUpload</strong>套件上所設定 fieldName 的值。</p><h2 id="結綸-1">結綸</h2>
<p>Uppy 是目前我覺得很方便的上傳套件，簡單幾段程式就可以實作檔案上傳。</p>`;export{n as default};
