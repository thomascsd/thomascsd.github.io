const n=`---
title: VSCode Extension的開發心得\r
bgImageUrl: /images/12/12-0.jpg\r
slug: 2019-09-01-tutorial-of-vscode-extension\r
description: '[2020/08/29 更新：加上 package.json 的設定] 前一陣子，開發了產生 README.md 的 VSCode Readme Pattern，如何大家還沒安裝的話，可以試試看。在開發中，有遇到一些問題，以及累積了一些心得，分享給的大家。 初始 首先按照官方文件，需要先安裝Yeom'
tags: ["vscode"]
---

<p>[2020/08/29 更新：加上 package.json 的設定]</p><p>前一陣子，開發了產生 README.md 的 VSCode - <a href="https://marketplace.visualstudio.com/items?itemName=thomascsd.vscode-readme-pattern">Readme Pattern</a>，如何大家還沒安裝的話，可以試試看。在開發中，有遇到一些問題，以及累積了一些心得，分享給的大家。</p><h2 id="初始-1">初始</h2>
<p>首先按照<a href="https://code.visualstudio.com/api/get-started/your-first-extension">官方文件</a>，需要先安裝<a href="https://yeoman.io/">Yeoman</a>以及 VS Code Extension Generator。</p><pre><code>npm install <span class="token operator">-</span>g yo generator<span class="token operator">-</span>code
</code></pre><p>輸入<code>yo code</code>，來初始化 VSCode extesion 專案，接著輸入一些參數，這邊我是用 TypeScript 開發的，接著輸入一些參數後，就可以很輕易的建立一個樣板。</p><img class="img-responsive" loading="lazy" src="/images/12/12-1.png">

<img class="img-responsive" loading="lazy" src="/images/12/12-2.png">

<h2 id="packagejson-的設定-1">package.json 的設定</h2>
<pre><code><span class="token punctuation">{</span>
   <span class="token string-property property">"activationEvents"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">"onCommand:extension.readme"</span><span class="token punctuation">,</span>
     <span class="token string">"onCommand:extension.readmeOnExplorer"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"contributes"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"commands"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"command"</span><span class="token operator">:</span> <span class="token string">"extension.readme"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"readme: Generates README.md"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"command"</span><span class="token operator">:</span> <span class="token string">"extension.readmeOnExplorer"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"readme: Generates README.md on here"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><p>需要在<code>activationEvents</code>及<code>contributes.commands</code>這 2 個地方都需加上需執行的 command，有多少的 command 就加上多少，不然 command 不會有作用。</p><h2 id="建立-2">建立</h2>
<p>因為 VSCode 是使用 Electron 來開發的，代表使用 Node.js 的模組是沒有問題的，所以這邊有使用到<code>path</code>及<code>fs</code>。</p><blockquote>
<p>在 1.37 版之後，VSCode Extension API 有增加 vscode.workspace.fs 來取代 fs，是由於需要遠端存取檔案，可參考<a href="https://code.visualstudio.com/updates/v1_37#_extension-authoring">VSCode 更新記錄 1.37</a>， 並且要注意的是，vscode 套件被拆分為@types/vscode 及 vscode-test。</p></blockquote>
<h3 id="取得檔案的路徑-1">取得檔案的路徑</h3>
<p>一開始遇到的第一個問題是不知道專案內的檔案路徑是什麼?因為需要戴入 Markdown 檔案。</p><p>查看範例及文件後，發現使用下列方法即可：</p><blockquote>
<p>ExtensionContext.asAbsolutePath(&#39;relative path&#39;);</p></blockquote>
<pre><code class="language-javascript"><span class="token keyword">const</span> tempPath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">asAbsolutePath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'templates'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>selectedItem<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.md</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>可以將相對路徑轉換成目前檔案的路徑，另外為了跨平台的相容性，相對路徑應該使用<code>path.join</code>來連結各個目錄及檔案。</p><h3 id="工作區workspace-1">工作區(Workspace)</h3>
<p>接著要將處理過後的內容，寫入至工作區，而取得工作區路徑的方式：</p><blockquote>
<p>vscode.workspace.workspaceFolders</p></blockquote>
<pre><code class="language-javascript"><span class="token keyword">const</span> folders <span class="token operator">=</span> vscode<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span>workspaceFolders<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>folders<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> folders<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>uri<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>這邊取得第 1 個的路徑，最後用<code>writeFile</code>將檔案寫入。</p><h3 id="建立項目清單-1">建立項目清單</h3>
<img class="img-responsive" loading="lazy" src="/images/12/12-3.png">

<p>如上圖，有時會需要讓人選擇，可以使用下列 API 來顯示選項：</p><blockquote>
<p>vscode.window.showQuickPick</p></blockquote>
<pre><code class="language-javascript"><span class="token keyword">const</span> <span class="token literal-property property">items</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Bot'</span><span class="token punctuation">,</span> <span class="token string">'Hackathon'</span><span class="token punctuation">,</span> <span class="token string">'Minimal'</span><span class="token punctuation">,</span> <span class="token string">'Standard'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> selectedItem <span class="token operator">=</span> <span class="token keyword">await</span> vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showQuickPick</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">placeHolder</span><span class="token operator">:</span> <span class="token string">'Select readme pattern that you want'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>這邊是傳入所顯示的字串陣例，並且<code>showQuickPick</code>是非同步的，所以使用 async/await 的方式，取得回傳所選擇的值。</p><h2 id="readme-的注意事項-1">README 的注意事項</h2>
<p>如果 extension 有截圖，截圖的完整路徑必須為<a href="https://raw.githubusercontent.com/%7Buser%7D/%7Brepository%7D/%7Bbranch%7D/%7Bpath%7D%E7%9A%84%E5%BD%A2%E5%BC%8F%EF%BC%8C%E4%B8%8D%E7%84%B6%E5%9C%A8VSCode">https://raw.githubusercontent.com/{user}/{repository}/{branch}/{path}的形式，不然在VSCode</a> marketplace 會因為安全名單的關係，會看不到截圖。</p><h2 id="結論-41">結論</h2>
<p>這是我第一次建立 VSCode extension，只要按照官方文件及 Yeoman 就可以快速建立一個樣板，但是最花時間是查看範例及文件。老實說，<a href="https://github.com/microsoft/vscode-extension-samples">官方範例</a>不是很清楚，要花些時間來查看。除些之外開發這個 extension 也是很有趣的經驗，分享給大家。</p>`;export{n as default};
