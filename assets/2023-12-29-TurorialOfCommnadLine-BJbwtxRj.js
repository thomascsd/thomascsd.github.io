const n=`---
title: .NET 好用套件 - commandline\r
bgImageUrl: /images/29/29-0.jpeg\r
description: 在.NET Framework 的時候，沒有內建的 CLI 指令參數解析，再到.NET Core 時，雖然有個套件System.CommandLine，但覺得沒有很好使用，之前有發現一個套件 commandline，設定及讀取參考很簡單易用，寫篇心得文分享一下。 設定 \`\`\`csharp publi\r
slug: 2023-12-29-turorial-of-commnad-line
tags: []
---

<p>在.NET Framework 的時候，沒有內建的 CLI 指令參數解析，再到.NET Core 時，雖然有個套件<a href="https://www.nuget.org/packages/System.CommandLine">System.CommandLine</a>，但覺得沒有很好使用，之前有發現一個套件 <a href="https://github.com/commandlineparser/commandline">commandline</a>，設定及讀取參考很簡單易用，寫篇心得文分享一下。</p><h2 id="設定-3">設定</h2>
<pre><code class="language-csharp">public class DefaultOptions
    {

        [Option(&#39;n&#39;, &quot;name&quot;, Required = true, HelpText = &quot;名稱&quot;)]
        public string Name { get; set; }

        [Option(&#39;r&#39;, &quot;retry&quot;, HelpText = &quot;是否要重新執行&quot;)]
        public bool Retry { get; set; }

        [Option(&#39;d&#39;, &quot;date&quot;, HelpText = &quot;要執行的日期&quot;)]
        public string Date { get; set; }
    }
</code></pre><p>首先建立 Options 類別，<code>Commandline</code>會透過 <code>Attribute</code>將屬性和 CLI 參數對應，可以參考<a href="https://github.com/commandlineparser/commandline/wiki/Option-Attribute">文件</a>，所以第一個參數設定簡短名稱，第二個參數設定完整名稱，看起來很淺顯易懂。</p><h2 id="解析參數-1">解析參數</h2>
<pre><code class="language-csharp">await Parser.Default.ParseArguments&lt;DefaultOptions&gt;(args).WithParsedAsync(RunJob);

 async Task RunJob(DefaultOptions options)
{
    //do something
    Console.WriteLine($&quot;name:{options.Name}&quot;);
}
</code></pre><p>使用<code>ParseArguments</code> 及 <code>WithParsedAsync</code>來解析參數，並取得 options 物件，也是很淺顯易懂的。</p><img class="img-responsive" loading="lazy" src="/images/29/29-1.png">

<p>接著就可以使用熟悉的 <a href="https://github.com/commandlineparser/commandline/wiki/CommandLine-Grammar">unix style</a> 方式設定參數來執行。</p><h2 id="另一種方式-1">另一種方式</h2>
<img class="img-responsive" loading="lazy" src="/images/29/29-2.png">

<p>有時會需要根據不同的參數，取得不同的 Options 物件。看了一下原始檔，發現 <code>ParseArguments</code> 還有另一個多戴方法，可傳入 factory 工廠方式，來決定傳出的 Options 物件。</p><pre><code class="language-csharp">public class ActionAOptions: DefaultOptions
 {
        [Option(&#39;a&#39;, &quot;action&quot;)]
        public string Action { get; set; }
  }

await Parser.Default.ParseArguments&lt;DefaultOptions&gt;(SelectOptions(args), args)
.WithParsedAsync(RunJob2);

async Task RunJob2(DefaultOptions options)
{
    var actionOptions = (ActionAOptions)options;

    //do something
    Console.WriteLine($&quot;name:{actionOptions.Name}, action:{actionOptions.Action}&quot;);
}

Func&lt;DefaultOptions&gt; SelectOptions(string[] args)
{
    return () =&gt;
    {
        var isAction = args[1]?.IndexOf(&quot;action&quot;) != -1;
        if (isAction)
        {
            return new ActionAOptions();
        }
        return new DefaultOptions();
    };
}
</code></pre><img class="img-responsive" loading="lazy" src="/images/29/29-3.png">

<p>如同上面的程式碼，可以根據不同名稱，取回不同的 options 物件，例如名稱(-n/--name)為 action 時，可以多傳入參數 action。</p><h2 id="結論-54">結論</h2>
<p>總結來說，使用命令列參數解析工具可以讓我們更輕鬆地處理參數，這不僅讓程式碼更易讀，也讓程式開發更加輕鬆。藉由簡單的設定和解析過程，我們能夠更專注於實際的工作。這種方式不僅提高了效率，同時也增加了程式碼的整體易讀性。</p>`;export{n as default};
