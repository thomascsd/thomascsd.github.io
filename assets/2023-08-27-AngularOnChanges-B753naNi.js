const e=`---
title: Angular判斷 DOM Render 是否完成\r
bgImageUrl: /images/28/28-0.jpg\r
description: 最近有遇到一個需求，是判斷頁面的捲軸是否到底，但有個不一様的點是會開啟 Dialog 後，才動態戴入內容再判斷捲軸是否到底，也就是需要判斷 DOM 是否 戴入完成，但碰到難題，Angular 並沒有像是 Vue.js 般有\` $trick\`方法，可以得知 Dom render 已完成。當查看 Sta\r
slug: 2023-08-27-angular-on-changes
tags: ["angular"]
---

<p>最近有遇到一個需求，是判斷頁面的捲軸是否到底，但有個不一様的點是會開啟 Dialog 後，才動態戴入內容再判斷捲軸是否到底，也就是需要判斷 DOM 是否 戴入完成，但碰到難題，Angular 並沒有像是 Vue.js 般有<code> $trick</code>方法，可以得知 Dom render 已完成。當查看 StackOverFlow 都是建議使用 <code>ngAfterViewChecked</code>，但經過測試後，覺得同時使用 <code>ngOnChanges</code> 及<code>ngAfterViewChecked</code>後會比較好，分享一下我的做法。</p><iframe width="100%" height="450" frameborder="0" src="https://stackblitz.com/edit/stackblitz-starters-l96j3d?embed=1&file=src%2Fchildren%2Fchildren.component.ts" ></iframe>

<p>如同程式範例，Component (app-childred) 屬性<code>content</code>，會於 <code>main.ts</code>點擊按鈕時，才會取得要顯示的內容。因為這時<code>ngAfterViewInit</code>已經執行了，而 div 的內容尚未截入，所以 div 的高度為零，也就是<code>scrollHeightInit</code> 為零。</p><p>程式寫法如下：</p><ul>
<li><p>於<code>ngOnChanges</code>判斷屬性<code>content</code>的值是否有改變，有改變的話，設定<code>Flag</code>為 <code>true</code>。</p></li>
<li><p>因為每次 Change Detection 都會執行<code>ngAfterViewChecked</code>，到這一步生命周期時代表 Dom render 已完成，也就是 div 的內容已截入完成，而如此可以取得 div 的高度。</p></li>
<li><p>取得 div 高度後，進行後續的處理，取得捲軸的高度，來判斷是否捲軸到底。</p></li>
</ul>
<h2 id="結論-10">結論</h2>
<p>使用 <code>ngOnChanges</code> 及<code>ngAfterViewChecked</code>這 2 個生命週期來判斷，經過測試後覺得很不錯，符合目前的需求，如果大家覺得可以調整的地方，可以提出來。</p>`;export{e as default};
