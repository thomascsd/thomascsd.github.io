const s=`---
title: 使用VSCode偵錯Node.js及Angular的小技巧\r
slug: 2017-12-23-vscode-debug-for-nodejs-andn-agular\r
description: 使用 Angular 後就迷上了 TypeScript，我有建立一個小專案叫做angular-express-starter，Server 及 Client 端都是使用 TypeScript 建立的，而 Client 端是使用 Angular CLI，然後 Server 端是使用 Express.j
tags: ["vscode", "javascript", "nodejs"]
---

<p>使用 Angular 後就迷上了 TypeScript，我有建立一個小專案叫做<a href="https://github.com/thomascsd/angular-express-starter">angular-express-starter</a>，Server 及 Client 端都是使用 TypeScript 建立的，而 Client 端是使用 Angular CLI，然後 Server 端是使用 Express.js。</p><p>因為 Node.js 在&gt;8.0 以上原生支援 async/await，並且專案中
也會使用 sequelize.js，所以新增 tsconfig.server.json，並且 target 會指定為<strong>ES6</strong>：</p><pre><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"../tsconfig.json"</span><span class="token punctuation">,</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"../out-tsc/server"</span><span class="token punctuation">,</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es6"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>而 Client 端是由 Angular CLI 建立的，並且 tsconfig.json 的 tartget 是指定<strong>ES5</strong>：</p><pre><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"compileOnSave"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist/out-tsc"</span><span class="token punctuation">,</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"src"</span><span class="token punctuation">,</span>
    <span class="token property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
    <span class="token property">"emitDecoratorMetadata"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"experimentalDecorators"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>
    <span class="token property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules/@types"</span><span class="token punctuation">,</span> <span class="token string">"node_modules/typescript/lib"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"es2016"</span><span class="token punctuation">,</span> <span class="token string">"dom"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>偵錯時需要使用 ts-node 來啟用 Node.js，而 ts-node 有個參數<strong>project</strong>可以指定 tsconfig.json 的路徑，在 npm script 可以這樣設定：</p><pre><code><span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"ts-node --project server ./server/app.ts"</span>
</code></pre><h2 id="nodejs-的除錯-1">Node.js 的除錯</h2>
<p>其實 VSCode 已經內建 Node.js 偵錯</p><img class="img-responsive" src="/images/03/03-1.png" loading="lazy" alt="nodejs debug">

<p>如上圖示所示，選擇「偵錯」&gt;「新增組態」，再選擇「Node.js: 啟動程式」即可。</p><p>因為我是使用 ts-node 來啟用 Node.js，需要傳入額外參數來指定 tscofig.json 的路徑，但是下列設定會發生錯誤，因為不支援二階參數：</p><pre><code class="language-json">   <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ts-node"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>
      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"\${workspaceRoot}/server/index.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"--nolazy"</span><span class="token punctuation">,</span> <span class="token string">"-r"</span><span class="token punctuation">,</span> <span class="token string">"ts-node/register"</span><span class="token punctuation">,</span> <span class="token string">"-p server"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"sourceMaps"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>y
      <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"\${workspaceRoot}"</span><span class="token punctuation">,</span>
      <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"inspector"</span><span class="token punctuation">,</span>
      <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"NODE_ENV"</span><span class="token operator">:</span> <span class="token string">"dev"</span>
      <span class="token punctuation">}</span>
</code></pre><p>所以需要換個方式改寫，先建立一個命名為 tshook.js 的 js 檔，內容如下：</p><pre><code class="language-javascript"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'ts-node'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">project</span><span class="token operator">:</span> <span class="token string">'server/tsconfig.json'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>直接在 tshook.js 中執行 ts-node，然後再指定 tsconfig.json 的路徑。lauch.json 改為下列：</p><pre><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ts-node"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
  <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"\${workspaceRoot}/server/index.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"runtimeArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"--nolazy"</span><span class="token punctuation">,</span> <span class="token string">"-r"</span><span class="token punctuation">,</span> <span class="token string">"\${workspaceRoot}/tshook.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"sourceMaps"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"\${workspaceRoot}"</span><span class="token punctuation">,</span>
  <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"inspector"</span><span class="token punctuation">,</span>
  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"NODE_ENV"</span><span class="token operator">:</span> <span class="token string">"dev"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>按下 F5 或是綠色播放鍵即可進入偵錯模式，就很像 Visual Studio 偵錯.Net 的程式一樣。</p><img class="img-responsive" src="/images/03/03-2.png" loading="lazy" alt="ng debug">

<h2 id="angular-偵錯-1">Angular 偵錯</h2>
<p>參考官方文件<a href="https://github.com/Microsoft/vscode-recipes/tree/master/Angular-CLI">Chrome Debugging with Angular CLI</a>，有幾點需要注意：</p><p>1.Angular CLI 需要<strong>1.3</strong>以上。</p><p>2.<a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome">Debugger for Chrome</a>套件需要<strong>3.1.4</strong>以上。</p><blockquote>
<p>需注意的是要偵錯時需先用<code>npm start</code>啟用 Angular 應用程式，之後就可以按 F5 或是綠色播放鍵進入偵錯模式。</p></blockquote>
<h2 id="結論-35">結論</h2>
<p>1.使用 VSCode 偵錯 Node.js 就很像 Visual Studio 偵錯 .Net 程式一樣，按下 F5 就會啟動應用程式。</p><p>2.偵錯 Angular 應用程式，需要執行 ng serve 啟動 Angular，然後 VSCode 偵錯程式。</p>`;export{s as default};
