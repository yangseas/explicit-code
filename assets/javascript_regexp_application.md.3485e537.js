import{_ as s,r as a,o as n,c as l,a as p,b as o,d as e,e as c}from"./app.070707c9.js";const r=JSON.parse('{"title":"应用","description":"","frontmatter":{},"headers":[{"level":2,"title":"数据转换","slug":"数据转换","link":"#数据转换","children":[]}],"relativePath":"javascript/regexp/application.md"}'),t={name:"javascript/regexp/application.md"},D=o("h1",{id:"应用",tabindex:"-1"},[e("应用 "),o("a",{class:"header-anchor",href:"#应用","aria-hidden":"true"},"#")],-1),F=c('<h2 id="数据转换" tabindex="-1">数据转换 <a class="header-anchor" href="#数据转换" aria-hidden="true">#</a></h2><p>将&#39;10000000000&#39;形式的字符串，以每3位进行分隔展示&#39;10.000.000.000&#39;,多种实现方式</p><ol><li>找到到空隙加 <code>.</code></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10000000000</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">\\B</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})+(?!</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">))/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p><code>\\B</code> 指定非单词边界；<code>(\\d{3})+</code> 需要匹配由 3 个数字组成 1 组或多组；<code>(?!\\d)</code> 负先行断言，后面不能再跟数字；<code>(?=(\\d{3})+(?!\\d))</code> 正先行断言，后面需要跟随由 3 个数字组成的 1 组或 多组。</p><p>所以这里匹配到了 <code>10 000 000 000</code> 三个空位，把它们替换成 <code>.</code></p><ol start="2"><li>找到数字并在后面加 <code>.</code></li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10000000000</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">)(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})+</span><span style="color:#89DDFF;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">// 或者</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10000000000</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})+</span><span style="color:#89DDFF;">\\b</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$&amp;.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>',8);const y=s(t,[["render",function(s,o,e,c,r,t){const y=a("VueJobs");return n(),l("div",null,[D,p(y),F])}]]);export{r as __pageData,y as default};