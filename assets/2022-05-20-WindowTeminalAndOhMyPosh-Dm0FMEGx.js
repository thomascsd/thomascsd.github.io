const s=`---
title: 我的Terminal 設定方式 - Windows Terminal & ohmyposh\r
bgImageUrl: /images/24/24-0.jpg\r
description: 一直以來都是使用 IDE 來開發程式，自從進入前端世界後，開始很常使用 CLI ，而 Windows 的 terminal 一直不是很好使用，直到 Windows Terminal 的出現。 Windows Terminal 整合 cmd、PowerShell，並可 以自定樣式，但是還是希望和 oh\r
slug: 2022-05-20-window-teminal-and-oh-my-posh
tags: []
---

<p>一直以來都是使用 IDE 來開發程式，自從進入前端世界後，開始很常使用 CLI ，而 Windows 的 terminal 一直不是很好使用，直到 Windows Terminal 的出現。
Windows Terminal 整合 cmd、PowerShell，並可 以自定樣式，但是還是希望和 <a href="https://ohmyz.sh/">oh my zsh</a>一樣，可以顯示更多資訊，直到最近發現 <a href="https://github.com/jandedobbeleer/oh-my-posh">ohmyposh</a>可以讓 PowerShell 更好用。</p><h2 id="windows-terminal-設定-1">Windows terminal 設定</h2>
<pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">"background"</span><span class="token operator">:</span> <span class="token string">"#336699"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"backgroundImage"</span><span class="token operator">:</span> <span class="token string">"d:\\\\Path.png"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"commandline"</span><span class="token operator">:</span> <span class="token string">"%SystemRoot%\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"guid"</span><span class="token operator">:</span> <span class="token string">"{61c54bbd-c2c6-5271-96e7-009a87ff44bf}"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Windows PowerShell"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"opacity"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token string-property property">"startingDirectory"</span><span class="token operator">:</span> <span class="token string">"d:\\\\projects"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"useAcrylic"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><p>我習慣的設定如上，主要是設定啟起目錄，以及設定背景色和圖片。</p><h2 id="ohmyposh-安裝-1">ohmyposh 安裝</h2>
<p>ohmyposh 是跨平台的套件，而我是使用 Windows ，所以是選擇 scoop 來進行安裝，可以參考官方的<a href="https://ohmyposh.dev/docs/installation/windows">文件</a>來進行。</p><p>在 PowerShell 輸入下列指令，即可安裝完成。</p><pre><code>scoop install https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>JanDeDobbeleer<span class="token operator">/</span>oh<span class="token operator">-</span>my<span class="token operator">-</span>posh<span class="token operator">/</span>releases<span class="token operator">/</span>latest<span class="token operator">/</span>download<span class="token operator">/</span>oh<span class="token operator">-</span>my<span class="token operator">-</span>posh<span class="token punctuation">.</span>json
</code></pre><img class="img-responsive" loading="lazy" src="/images/24/24-01.png">

<p>接下來需要進行<a href="https://ohmyposh.dev/docs/installation/prompt">設定</a>，當啟動 Windows Terminal 時，自動戴入 ohmyposh。</p><p>首先在 Documents 建立目錄，命名為 WindowsPowerShell。</p><blockquote>
<p>C:\\Users{user name}\\Documents\\WindowsPowerShell</p></blockquote>
<p>接下來輸入指令<code>note $PROFILE</code>，如下圖，在 Microsoft.PowerShell_profile.ps1 裡 加上指令 oh-my-posh init pwsh | Invoke-Expression。</p><img class="img-responsive" loading="lazy" src="/images/24/24-02.png">

<p>存檔後重啟即可。</p><h2 id="字型-1">字型</h2>
<p>因為預設的字型是 Nerd Fonts，所以會發現一些圖示沒有顯示正常，需下戴<a href="https://ohmyposh.dev/docs/configuration/fonts">字型</a>來安裝 。</p><img class="img-responsive" loading="lazy" src="/images/24/24-03.png">

<p>Windows terminal 還需將字型設為 MesloLGM NF。</p><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">"profiles"</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">"defaults"</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">"font"</span><span class="token operator">:</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">"face"</span><span class="token operator">:</span> <span class="token string">"MesloLGM NF"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>可以顯示正確的字型。</p><img class="img-responsive" loading="lazy" src="/images/24/24-04.png">

<h2 id="主題-1">主題</h2>
<p>預設的主題比較單調，可以自定樣式或是戴入其他人建立好的<a href="https://ohmyposh.dev/docs/themes">主題</a>，第一步輸入<code>Get-PoshThemes</code> 如果初次使用沒有指定目錄的話，會決定主題要存放的位置，不然會顯示目前已下戴的主題。</p><img class="img-responsive" loading="lazy" src="/images/24/24-05.png">

<p>目前選擇的主題是<a href="https://ohmyposh.dev/docs/themes#slim">slim</a>，這個主題有包含 Node.js 的版本，和顯示 GIT 的狀態，都是開發上所必要的資訊。之此之外，調整 Profile，加上<code>--config</code>參數指定主題，之後重新戴入即可。</p><pre><code>oh<span class="token operator">-</span>my<span class="token operator">-</span>posh init pwsh <span class="token operator">--</span>config <span class="token constant">D</span><span class="token operator">:</span>\\themes\\slim<span class="token punctuation">.</span>omp<span class="token punctuation">.</span>json <span class="token operator">|</span> Invoke<span class="token operator">-</span>Expression
</code></pre><img class="img-responsive" loading="lazy" src="/images/24/24-06.png">

<h2 id="結論-50">結論</h2>
<p>使用過的 terminal 從最早的 cmd ，再到 cmder，再到最近的 Windows Terminal，再搭配 ohmyposh，這是目前我覺得很搭配的組合。</p>`;export{s as default};
