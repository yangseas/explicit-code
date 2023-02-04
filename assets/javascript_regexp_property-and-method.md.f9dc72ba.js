import{_ as s,r as a,o as n,c as l,a as p,b as o,d as e,e as t}from"./app.070707c9.js";const c=JSON.parse('{"title":"RegExp 的属性和方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"定义方式","slug":"定义方式","link":"#定义方式","children":[]},{"level":2,"title":"RegExp 实例属性","slug":"regexp-实例属性","link":"#regexp-实例属性","children":[]},{"level":2,"title":"RegExp 实例方法","slug":"regexp-实例方法","link":"#regexp-实例方法","children":[{"level":3,"title":"exec","slug":"exec","link":"#exec","children":[]},{"level":3,"title":"exec 和 match 的区别","slug":"exec-和-match-的区别","link":"#exec-和-match-的区别","children":[]},{"level":3,"title":"test","slug":"test","link":"#test","children":[]}]},{"level":2,"title":"RegExp 构造函数属性","slug":"regexp-构造函数属性","link":"#regexp-构造函数属性","children":[]}],"relativePath":"javascript/regexp/property-and-method.md"}'),r={name:"javascript/regexp/property-and-method.md"},y=o("h1",{id:"regexp-的属性和方法",tabindex:"-1"},[e("RegExp 的属性和方法 "),o("a",{class:"header-anchor",href:"#regexp-的属性和方法","aria-hidden":"true"},"#")],-1),D=t('<p>知道正则表达式的一些概念和使用，接下来看看 RegExp 相关的属性和方法。</p><h2 id="定义方式" tabindex="-1">定义方式 <a class="header-anchor" href="#定义方式" aria-hidden="true">#</a></h2><p>有两种形式定义正则表达式，前面都是以字面量的方式来定义正则表达式。另一种是创建正则表达式的方式是使用 RegExp 构造函数。</p><p>RegExp 接受 2 个参数：一个是要匹配的字符串模式，另一个是可选的标识字符。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> type1 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#C3E88D;">bc</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">at</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> type2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[bc]at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>这两个正则表达式是等价的，但是<strong>注意</strong>的是，传递给 RegExp 的 2 个参数都是字符串。由于参数模式参数是字符串，所以一些情况下需要进行双重转义。<strong>所有的元字符都需要双重转义，那些已经转义过的也需要这样</strong>。</p><table><thead><tr><th style="text-align:left;">字面量模式</th><th style="text-align:left;">等价的字符串</th></tr></thead><tbody><tr><td style="text-align:left;">/[bc]at/</td><td style="text-align:left;">/\\\\[bc\\\\]at/</td></tr><tr><td style="text-align:left;">/.at/</td><td style="text-align:left;">/\\.at/</td></tr></tbody></table><h2 id="regexp-实例属性" tabindex="-1">RegExp 实例属性 <a class="header-anchor" href="#regexp-实例属性" aria-hidden="true">#</a></h2><p>RegExp 的每个实例都具有下列属性，通过这些属性可以取得有关模式的各种信息。</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">global</td><td style="text-align:left;">布尔值，表示是否设置了 g 标志</td></tr><tr><td style="text-align:left;">ignoreCase</td><td style="text-align:left;">布尔值，表示是否设置了 i 标志</td></tr><tr><td style="text-align:left;">multiline</td><td style="text-align:left;">布尔值，表示是否设置了 m 标志</td></tr><tr><td style="text-align:left;">lastIndex</td><td style="text-align:left;">整数，<strong>表示开始搜索下一个匹配项的字符位置</strong>，从 0 开始</td></tr><tr><td style="text-align:left;">source</td><td style="text-align:left;">正则表达式的字符串表示，<strong>按照字面量形式</strong>而非传入构造函数的字符串模式返回</td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\[</span><span style="color:#C3E88D;">ab</span><span style="color:#A6ACCD;">\\]</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">i</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">global</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// false;</span></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ignoreCase</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true;</span></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">multiline</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// false;</span></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// 0;</span></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;">// /\\[ab\\]c/i;</span></span>\n<span class="line"></span></code></pre></div><p>这里说明一下 <code>lastIndex</code>，表示开始搜索下一个匹配项的字符位置。也就是说<strong>只有正则表达式使用了表示全局检索的 <code>g</code> 标志时，该属性才会起作用</strong>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern1 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">/</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern2 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is a large black ball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#676E95;">// true</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#676E95;">// true</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#676E95;">// true</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 17</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#676E95;">// true</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 23</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#676E95;">// false</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"></span></code></pre></div><h2 id="regexp-实例方法" tabindex="-1">RegExp 实例方法 <a class="header-anchor" href="#regexp-实例方法" aria-hidden="true">#</a></h2><p>主要的方法有两个 <code>exec()</code> 和 <code>test()</code>。</p><h3 id="exec" tabindex="-1">exec <a class="header-anchor" href="#exec" aria-hidden="true">#</a></h3><p><code>exec()</code> 专门为<strong>捕获组</strong>而设计的。</p><p><code>exec</code> 接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组，没有任何匹配项时返回 <code>null</code>。</p><p>返回的虽然是个数组，但是包含两个额外的属性：<code>index</code> 和 <code>input</code>。</p><ol><li><code>index</code>：表示匹配项在字符串中的位置。</li><li><code>input</code>：表示正在应用正则表达式的字符串。</li></ol><p><strong>在数组中，第一项是整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果没有捕获组，则数组只包含一项）</strong>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mom and dad and bady</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">mom</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;"> and dad</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;"> and bady</span><span style="color:#89DDFF;">)?)?/</span><span style="color:#F78C6C;">gi</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">input) </span><span style="color:#676E95;">// &quot;mom and dad and bady&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])    </span><span style="color:#676E95;">// &quot;mom and dad and bady&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])    </span><span style="color:#676E95;">// &quot; and dad and bady&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])    </span><span style="color:#676E95;">// &quot; and bady&quot;</span></span>\n<span class="line"></span></code></pre></div><p><strong>注意</strong>：<strong>对于 <code>exec</code> 而言，即使子啊模式中设置了全局标志 <code>g</code>，它每次只返回一个匹配项，每次调用 <code>exec</code> 都会在字符串中继续查找新的匹配项。直至字符串的末尾</strong>在不设置全局标志的情况下，在同一个字符串上多次调用 <code>exec</code> 始终返回第一个匹配项的信息。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat,bat,eat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern1 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index)       </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])          </span><span style="color:#676E95;">// cat</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index)       </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])          </span><span style="color:#676E95;">// cat</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat,bat,eat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern2 </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index)       </span><span style="color:#676E95;">// 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])          </span><span style="color:#676E95;">// cat</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 3</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index)       </span><span style="color:#676E95;">// 4</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])          </span><span style="color:#676E95;">// bat</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pattern2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lastIndex) </span><span style="color:#676E95;">// 7</span></span>\n<span class="line"></span></code></pre></div><h3 id="exec-和-match-的区别" tabindex="-1">exec 和 match 的区别 <a class="header-anchor" href="#exec-和-match-的区别" aria-hidden="true">#</a></h3><p>说到 <code>exec()</code> 很容易就想到字符串的一个方法 <code>match()</code>，它们之间有什么区别呢？</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat,bat,eat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(pattern)</span></span>\n<span class="line"></span></code></pre></div><p><strong>它们的区别有 2 点：首先这两个方法属于不同的类，另外重要的一点是跟 <code>g</code> 有关</strong>。</p><ul><li>没有 <code>g</code> 的情况下，它们返回的结果是一致的</li><li>设置了 <code>g</code> 之后，<code>exec</code> 只返回第一个匹配项，而 <code>match</code> 会所有匹配项组成的一个数组，同时，返回的数组不再带有 <code>index</code> 和 <code>input</code> 属性。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat,bat,eat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)  </span><span style="color:#676E95;">// [&#39;cat&#39;]</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(pattern) </span><span style="color:#676E95;">// [&#39;cat&#39;]</span></span>\n<span class="line"></span></code></pre></div><p><img src="/fe-tutorial/assets/javascript-regexp-exec1.41ff4e29.png" alt="regexp-exec1"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat,bat,eat</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(str)  </span><span style="color:#676E95;">// [&#39;cat&#39;]</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(pattern) </span><span style="color:#676E95;">// [&#39;cat&#39;,&#39;bat,&#39;eat&#39;]</span></span>\n<span class="line"></span></code></pre></div><p><img src="/fe-tutorial/assets/javascript-regexp-exec2.36d0de34.png" alt="regexp-exec2"></p><h3 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-hidden="true">#</a></h3><p><code>test</code> 方法接受一个字符串参数，在模式与该参数匹配的情况下返回 <code>true</code>；否则返回 <code>false</code>。</p><p>如果只想知道目标字符串与某个模式是否皮撇，但是不需要知道其文本内容的情况下，使用这个方法很方便。因此 <code>test</code> 常用来做判断。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0933-2331-9732</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#C3E88D;">-\\d</span><span style="color:#89DDFF;">{4}</span><span style="color:#C3E88D;">-\\d</span><span style="color:#89DDFF;">{4}/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">号码格式正确</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="regexp-构造函数属性" tabindex="-1">RegExp 构造函数属性 <a class="header-anchor" href="#regexp-构造函数属性" aria-hidden="true">#</a></h2><p>构造函数也包含一些属性，<strong>这些属性使用与作用域内的所有正则表达式，并且基于所执行的最近一次正则表达式操作而变化</strong>。</p><p>可以通过两种方式访问这些属性：长属性名和短属性名（Opera 不支持）。</p><table><thead><tr><th style="text-align:left;">长属性名</th><th style="text-align:left;">短属性名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">input</td><td style="text-align:left;">$_</td><td style="text-align:left;">最近一次要匹配的字符串</td></tr><tr><td style="text-align:left;">lastMatch</td><td style="text-align:left;">$&amp;</td><td style="text-align:left;">最近一次匹配项</td></tr><tr><td style="text-align:left;">lastParen</td><td style="text-align:left;">$+</td><td style="text-align:left;">最近一次匹配的捕获组</td></tr><tr><td style="text-align:left;">leftContext</td><td style="text-align:left;">$`</td><td style="text-align:left;">input 字符串中 lastMatch 前面的文本</td></tr><tr><td style="text-align:left;">rightContext</td><td style="text-align:left;">$&#39;</td><td style="text-align:left;">input 字符串中 lastMatch 后面的文本</td></tr><tr><td style="text-align:left;">multiline</td><td style="text-align:left;">$*</td><td style="text-align:left;">布尔值，表示是否所有表达式都是用多行模式。 Chrome 和 IE 都不支持呀...</td></tr></tbody></table><p>除了这些属性，还有 9 个用于存储捕获组的构造函数属性：<code>$1</code>、<code>$2</code>、...、<code>$9</code>，分别用于存储第一、第二、...、第九个匹配的捕获组。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this has been a short summer</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> pattern </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">)(</span><span style="color:#C3E88D;">h</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">ort</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (pattern</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(str)) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// this has been a short summer</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$&amp;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// short</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$+</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// h</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$`</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// this has been a </span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// summer</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">RegExp</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// undefined</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',43);const F=s(r,[["render",function(s,o,e,t,c,r){const F=a("VueJobs");return n(),l("div",null,[y,p(F),D])}]]);export{c as __pageData,F as default};