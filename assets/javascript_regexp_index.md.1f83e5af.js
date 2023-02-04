import{_ as e,r as t,o as r,c as a,a as o,b as d,d as c,e as n}from"./app.070707c9.js";const s=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本匹配","slug":"基本匹配","link":"#基本匹配","children":[]},{"level":2,"title":"元字符","slug":"元字符","link":"#元字符","children":[{"level":3,"title":"点运算符 .","slug":"点运算符","link":"#点运算符","children":[]},{"level":3,"title":"字符集","slug":"字符集","link":"#字符集","children":[]},{"level":3,"title":"否定字符集","slug":"否定字符集","link":"#否定字符集","children":[]},{"level":3,"title":"重复次数","slug":"重复次数","link":"#重复次数","children":[]},{"level":3,"title":"{} 号","slug":"号-3","link":"#号-3","children":[]},{"level":3,"title":"(...) 特征标群","slug":"特征标群","link":"#特征标群","children":[]},{"level":3,"title":"| 或运算符","slug":"或运算符","link":"#或运算符","children":[]},{"level":3,"title":"转码特殊字符","slug":"转码特殊字符","link":"#转码特殊字符","children":[]},{"level":3,"title":"锚点","slug":"锚点","link":"#锚点","children":[]}]},{"level":2,"title":"简写字符集","slug":"简写字符集","link":"#简写字符集","children":[]},{"level":2,"title":"零宽断言（前后预查）","slug":"零宽断言-前后预查","link":"#零宽断言-前后预查","children":[{"level":3,"title":"?=... 正先行断言","slug":"正先行断言","link":"#正先行断言","children":[]},{"level":3,"title":"?!... 负先行断言","slug":"负先行断言","link":"#负先行断言","children":[]},{"level":3,"title":"?<= ... 正后发断言","slug":"正后发断言","link":"#正后发断言","children":[]},{"level":3,"title":"?<!... 负后发断言","slug":"负后发断言","link":"#负后发断言","children":[]}]},{"level":2,"title":"标志","slug":"标志","link":"#标志","children":[{"level":3,"title":"忽略大小写（Case Insensitive）","slug":"忽略大小写-case-insensitive","link":"#忽略大小写-case-insensitive","children":[]},{"level":3,"title":"全局搜索（Global search）","slug":"全局搜索-global-search","link":"#全局搜索-global-search","children":[]},{"level":3,"title":"多行修饰符（Multiline）","slug":"多行修饰符-multiline","link":"#多行修饰符-multiline","children":[]},{"level":3,"title":"贪婪匹配与惰性匹配（Greedy vs lazy matching）","slug":"贪婪匹配与惰性匹配-greedy-vs-lazy-matching","link":"#贪婪匹配与惰性匹配-greedy-vs-lazy-matching","children":[]}]}],"relativePath":"javascript/regexp/index.md"}'),l={name:"javascript/regexp/index.md"},h=d("h1",{id:"正则表达式",tabindex:"-1"},[c("正则表达式 "),d("a",{class:"header-anchor",href:"#正则表达式","aria-hidden":"true"},"#")],-1),g=n('<p>这部分的原文 <a href="https://github.com/ziishaned/learn-regex" target="_blank" rel="noreferrer">learn-regex</a>，作者 <a href="https://twitter.com/ziishaned" target="_blank" rel="noreferrer">Zeeshan Ahmad</a>。以下做了一点修改和补充。</p><p>测试正则表达式可以使用 <a href="https://regex101.com" target="_blank" rel="noreferrer">regex101</a>。</p><blockquote><p>正在表达式是由字母和符号组成的特殊文本，它可以用来从文中找出满足你想要的格式的句子。</p></blockquote><p>一个正则表达式是一种从左到右匹配主体字符串的模式。 “Regular expression”这个词比较拗口，我们常使用缩写的术语“regex”或“regexp”。 正则表达式可以从一个基础字符串中根据一定的匹配模式替换文本中的字符串、验证表单、提取字符串等等。</p><p>想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符，以及显示字符串的个数，好让名字看起来没那么丑。</p><p><img src="/fe-tutorial/assets/javascript-regexp-eg.96bd6de5.png" alt="regexp"></p><p>以上正则表达式可以接受 <code>john_doe</code>、<code>jo-hn_doe</code>、<code>john12_as</code>。 但不匹配 <code>Jo</code>，因为它包含了大写的字母而且太短了。</p><h2 id="基本匹配" tabindex="-1">基本匹配 <a class="header-anchor" href="#基本匹配" aria-hidden="true">#</a></h2><p>正则表达式其实就是在执行搜索时的格式，它由一些字母和数字组合而成。例如：一个正则表达式 <code>the</code>，它表示一个规则：由字母 <code>t</code> 开始，接着是 <code>h</code>，再接着是 <code>e</code>。</p><pre class="nx-pre">&quot;the&quot; =&gt; The fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.\n</pre><p>正则表达式 <code>123</code> 匹配字符串 <code>123</code> 。它逐个字符的与输入的正则表达式做比较。</p><p>正则表达式是大小写敏感的，所以 <code>The</code> 不会匹配 <code>the</code>。</p><pre class="nx-pre">&quot;The&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.\n</pre><h2 id="元字符" tabindex="-1">元字符 <a class="header-anchor" href="#元字符" aria-hidden="true">#</a></h2><p>正则表达式主要依赖于元字符。元字符不代表它们本身的意思，它们都具有特殊的含义。一些元字符写在方括号中有着特殊的意思。一下是一些元字符的介绍：</p><table><thead><tr><th style="text-align:center;">元字符</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">.</td><td>句号匹配任意单个字符除了换行符。</td></tr><tr><td style="text-align:center;">[ ]</td><td>字符种类。匹配方括号内的任意字符。</td></tr><tr><td style="text-align:center;">[^ ]</td><td>否定的字符种类。匹配除了方括号里的任意字符</td></tr><tr><td style="text-align:center;">*</td><td>匹配&gt;=0个重复的在*号之前的字符。</td></tr><tr><td style="text-align:center;">+</td><td>匹配&gt;=1个重复的+号前的字符。</td></tr><tr><td style="text-align:center;">?</td><td>标记?之前的字符为可选.</td></tr><tr><td style="text-align:center;"><code>{n,m}</code></td><td>匹配num个大括号之前的字符 (n &lt;= num &lt;= m).</td></tr><tr><td style="text-align:center;">(xyz)</td><td>字符集，匹配与 xyz 完全相等的字符串.</td></tr><tr><td style="text-align:center;">|</td><td>或运算符，匹配符号前或后的字符.</td></tr><tr><td style="text-align:center;">\\</td><td>转义字符,用于匹配一些保留的字符 <code>[ ] ( ) { } . * + ? ^ $ \\ |</code></td></tr><tr><td style="text-align:center;">^</td><td>从开始行开始匹配.</td></tr><tr><td style="text-align:center;">$</td><td>从末端开始匹配.</td></tr></tbody></table><h3 id="点运算符" tabindex="-1">点运算符 <code>.</code> <a class="header-anchor" href="#点运算符" aria-hidden="true">#</a></h3><p><code>.</code> 是元字符中最简单的例子。<code>.</code> 匹配任意单个字符，但不匹配换行符。例如，表达式 <code>.ar</code> 匹配一个任意字符后面跟着是 <code>a</code> 和 <code>r</code> 的字符串。</p><pre class="nx-pre">&quot;.ar&quot; =&gt; The <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.\n</pre><h3 id="字符集" tabindex="-1">字符集 <a class="header-anchor" href="#字符集" aria-hidden="true">#</a></h3><p>字符集也叫做字符类。方括号用来指定一个字符集，在方括号中使用连字符来指定字符集的范围，在方括号中的字符集不关心顺序。例如，表达式<code>[Tt]he</code> 匹配 <code>the</code> 和 <code>The</code>。</p><pre class="nx-pre">&quot;[Tt]he&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> car parked in <a href="#learn-regex"><strong>the</strong></a> garage.\n</pre><p>值得注意的是：方括号的句号就表示句号。表达式 <code>ar[.]</code> 匹配 <code>ar.</code> 字符串。</p><pre class="nx-pre">&quot;ar[.]&quot; =&gt; A garage is a good place to park a c<a href="#learn-regex"><strong>ar.</strong></a>\n</pre><h3 id="否定字符集" tabindex="-1">否定字符集 <a class="header-anchor" href="#否定字符集" aria-hidden="true">#</a></h3><p>一般来说 <code>^</code> 表示一个字符串的开头，但它用在一个方括号的开头的时候，它表示这个字符集是否定的。例如，表达式 <code>[^c]ar</code> 匹配一个后面跟着 <code>ar</code> 的除了<code>c</code>的任意字符。</p><pre class="nx-pre">&quot;[^c]ar&quot; =&gt; The car <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.\n</pre><h3 id="重复次数" tabindex="-1">重复次数 <a class="header-anchor" href="#重复次数" aria-hidden="true">#</a></h3><p>后面跟着元字符 <code>+</code>，<code>*</code> or <code>?</code> 的，用来指定匹配子模式的次数。 这些元字符在不同的情况下有着不同的意思。</p><h4 id="号" tabindex="-1"><code>*</code> 号 <a class="header-anchor" href="#号" aria-hidden="true">#</a></h4><p><code>*</code> 号匹配 在 <code>*</code> 之前的字符出现 <code>大于等于0</code> 次。例如，表达式 <code>a*</code> 匹配0或更多个以a开头的字符。表达式 <code>[a-z]*</code> 匹配一个行中所有以小写字母开头的字符串。</p><pre class="nx-pre">&quot;[a-z]*&quot; =&gt; T<a href="#learn-regex"><strong>he</strong></a> <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>parked</strong></a> <a href="#learn-regex"><strong>in</strong></a> <a href="#learn-regex"><strong>the</strong></a> <a href="#learn-regex"><strong>garage</strong></a> #21.\n</pre><p><code>*</code> 字符和 <code>.</code> 字符搭配可以匹配所有的字符 <code>.*</code>。<code>*</code> 和表示匹配空格的符号 <code>\\s</code> 连起来用，如表达式 <code>\\s*cat\\s*</code> 匹配 0 或更多个空格开头和 0 或更多个空格结尾的 cat 字符串。</p><pre class="nx-pre">&quot;\\s*cat\\s*&quot; =&gt; The fat<a href="#learn-regex"><strong> cat </strong></a>sat on the con<a href="#learn-regex"><strong>cat</strong></a>enation.\n</pre><h4 id="号-1" tabindex="-1"><code>+</code> 号 <a class="header-anchor" href="#号-1" aria-hidden="true">#</a></h4><p><code>+</code> 号匹配 <code>+</code> 号之前的字符出现 &gt;=1 次。例如表达式 <code>c.+t</code> 匹配以首字母 <code>c</code> 开头以 <code>t</code> 结尾，中间跟着至少一个字符的字符串。</p><pre class="nx-pre">&quot;c.+t&quot; =&gt; The fat <a href="#learn-regex"><strong>cat sat on the mat</strong></a>.\n</pre><h4 id="号-2" tabindex="-1"><code>?</code> 号 <a class="header-anchor" href="#号-2" aria-hidden="true">#</a></h4><p>在正则表达式中元字符 <code>?</code> 标记在符号前面的字符为可选，即出现 0 或 1 次。例如，表达式 <code>[T]?he</code> 匹配字符串 <code>he</code> 和 <code>The</code>。</p><pre class="nx-pre">&quot;[T]he&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.\n</pre><pre class="nx-pre">&quot;[T]?he&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> car is parked in t<a href="#learn-regex"><strong>he</strong></a> garage.\n</pre><h3 id="号-3" tabindex="-1"><code>{}</code> 号 <a class="header-anchor" href="#号-3" aria-hidden="true">#</a></h3><p>在正则表达式中 <code>{}</code> 是一个量词，常用来一个或一组字符可以重复出现的次数。例如， 表达式 <code>[0-9]{2,3}</code> 匹配最少 2 位最多 3 位 0~9 的数字。</p><pre class="nx-pre">&quot;[0-9]{2,3}&quot; =&gt; The number was 9.<a href="#learn-regex"><strong>999</strong></a>7 but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.\n</pre><p>我们可以省略第二个参数。例如，<code>[0-9]{2,}</code> 匹配至少两位 0~9 的数字。</p><pre class="nx-pre">&quot;[0-9]{2,}&quot; =&gt; The number was 9.<a href="#learn-regex"><strong>9997</strong></a> but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.\n</pre><p>如果逗号也省略掉则表示重复固定的次数。例如，<code>[0-9]{3}</code> 匹配3位数字</p><pre class="nx-pre">&quot;[0-9]{2,}&quot; =&gt; The number was 9.<a href="#learn-regex"><strong>9997</strong></a> but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.\n</pre><p>如果逗号也省略掉则表示重复固定的次数。例如，<code>[0-9]{3}</code> 匹配3位数字</p><pre class="nx-pre">&quot;[0-9]{3}&quot; =&gt; The number was 9.<a href="#learn-regex"><strong>999</strong></a>7 but we rounded it off to 10.0.\n</pre><h3 id="特征标群" tabindex="-1"><code>(...)</code> 特征标群 <a class="header-anchor" href="#特征标群" aria-hidden="true">#</a></h3><p>特征标群是一组写在 <code>(...)</code> 中的子模式。例如之前说的 <code>{}</code> 是用来表示前面一个字符出现指定次数。但如果在特征标群之后放一个量词，则表示整个标群内的字符重复 N 次。例如，表达式 <code>(ab)*</code> 匹配连续出现 0 或更多个 <code>ab</code>。</p><p>我们还可以在 <code>()</code> 中用或字符 <code>|</code> 表示或。例如，<code>(c|g|p)ar</code> 匹配 <code>car</code> 或 <code>gar</code> 或 <code>par</code>.</p><pre class="nx-pre">&quot;(c|g|p)ar&quot; =&gt; The <a href="#learn-regex"><strong>car</strong></a> is <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.\n</pre><h3 id="或运算符" tabindex="-1"><code>|</code> 或运算符 <a class="header-anchor" href="#或运算符" aria-hidden="true">#</a></h3><p>或运算符就表示或，用作判断条件。例如 <code>(T|t)he|car</code> 匹配 <code>(T|t)he</code> 或 <code>car</code>。</p><pre class="nx-pre">&quot;(T|t)he|car&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> <a href="#learn-regex"><strong>car</strong></a> is parked in <a href="#learn-regex"><strong>the</strong></a> garage.\n</pre><h3 id="转码特殊字符" tabindex="-1">转码特殊字符 <a class="header-anchor" href="#转码特殊字符" aria-hidden="true">#</a></h3><p>反斜线 <code>\\</code> 在表达式中用于转码紧跟其后的字符。用于指定 <code>{ } [ ] / \\ + * . $ ^ | ?</code> 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 <code>\\</code>。例如 <code>.</code> 是用来匹配除换行符外的所有字符的。如果想要匹配句子中的 <code>.</code> 则要写成 <code>\\.</code> 以下这个例子 <code>\\.?</code>是选择性匹配<code>.</code></p><pre class="nx-pre">&quot;(f|c|m)at\\.?&quot; =&gt; The <a href="#learn-regex"><strong>fat</strong></a> <a href="#learn-regex"><strong>cat</strong></a> sat on the <a href="#learn-regex"><strong>mat.</strong></a>\n</pre><h3 id="锚点" tabindex="-1">锚点 <a class="header-anchor" href="#锚点" aria-hidden="true">#</a></h3><p>在正则表达式中，想要匹配指定开头或结尾的字符串就要使用到锚点。<code>^</code> 指定开头，<code>$</code> 指定结尾。</p><h4 id="号-4" tabindex="-1"><code>^</code> 号 <a class="header-anchor" href="#号-4" aria-hidden="true">#</a></h4><p><code>^</code> 用来检查匹配的字符串是否在所匹配字符串的开头。例如，在 <code>abc</code> 中使用表达式 <code>^a</code> 会得到结果 <code>a</code>。但如果使用 <code>^b</code> 将匹配不到任何结果。因为在字符串 <code>abc</code> 中并不是以 <code>b</code> 开头。</p><p>例如，<code>^(T|t)he</code> 匹配以 <code>The</code> 或 <code>the</code> 开头的字符串。</p><pre class="nx-pre">&quot;(T|t)he&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> car is parked in <a href="#learn-regex"><strong>the</strong></a> garage.\n</pre><pre class="nx-pre">&quot;^(T|t)he&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.\n</pre><h4 id="号-5" tabindex="-1"><code>$</code> 号 <a class="header-anchor" href="#号-5" aria-hidden="true">#</a></h4><p>同理于 <code>^</code> 号，<code>$</code> 号用来匹配字符是否是最后一个。例如，<code>(at\\.)$</code> 匹配以 <code>at.</code> 结尾的字符串。</p><pre class="nx-pre">&quot;(at\\.)&quot; =&gt; The fat c<a href="#learn-regex"><strong>at.</strong></a> s<a href="#learn-regex"><strong>at.</strong></a> on the m<a href="#learn-regex"><strong>at.</strong></a>\n</pre><pre class="nx-pre">&quot;(at\\.)$&quot; =&gt; The fat cat. sat. on the m<a href="#learn-regex"><strong>at.</strong></a>\n</pre><h2 id="简写字符集" tabindex="-1">简写字符集 <a class="header-anchor" href="#简写字符集" aria-hidden="true">#</a></h2><p>正则表达式提供一些常用的字符集简写。如下:</p><table><thead><tr><th style="text-align:center;">简写</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">.</td><td>除换行符外的所有字符</td></tr><tr><td style="text-align:center;">\\w</td><td>匹配所有字母数字，等同于 <code>[a-zA-Z0-9_]</code></td></tr><tr><td style="text-align:center;">\\W</td><td>匹配所有非字母数字，即符号，等同于： <code>[^\\w]</code></td></tr><tr><td style="text-align:center;">\\d</td><td>匹配数字： <code>[0-9]</code></td></tr><tr><td style="text-align:center;">\\D</td><td>匹配非数字： <code>[^\\d]</code></td></tr><tr><td style="text-align:center;">\\s</td><td>匹配所有空格字符，等同于： <code>[\\t\\n\\f\\r\\p{Z}]</code></td></tr><tr><td style="text-align:center;">\\S</td><td>匹配所有非空格字符： <code>[^\\s]</code></td></tr><tr><td style="text-align:center;">\\f</td><td>匹配一个换页符</td></tr><tr><td style="text-align:center;">\\n</td><td>匹配一个换行符</td></tr><tr><td style="text-align:center;">\\r</td><td>匹配一个回车符</td></tr><tr><td style="text-align:center;">\\t</td><td>匹配一个制表符</td></tr><tr><td style="text-align:center;">\\v</td><td>匹配一个垂直制表符</td></tr><tr><td style="text-align:center;">\\p</td><td>匹配 CR/LF（等同于 <code>\\r\\n</code>），用来匹配 DOS 行终止符</td></tr></tbody></table><p>其中 <code>\\w</code> 和 <code>\\W</code>、<code>\\d</code> 和 <code>\\D</code>、<code>\\s</code> 和 <code>\\S</code> 表示的意思相反，<strong>自己为了方便记忆，小写表示某种模式，大写表示非某种模式</strong>。</p><h2 id="零宽断言-前后预查" tabindex="-1">零宽断言（前后预查） <a class="header-anchor" href="#零宽断言-前后预查" aria-hidden="true">#</a></h2><p>先行断言和后发断言（也称为 lookaround）都属于<strong>非捕获组</strong>（用于匹配模式，但不包括在匹配列表中）。当我们需要一个模式的前面或后面有另一个特定的模式时，就可以使用它们。例如，我们希望从下面的输入字符串 <code>$4.44</code> 和 <code>$10.88</code> 中获得所有以 <code>$</code> 字符开头的数字，我们将使用以下的正则表达式 <code>(?&lt;=\\$)[0-9\\.]*</code>。意思是：获取所有包含 <code>.</code> 并且前面是 <code>$</code> 的数字。</p><p>下面是正则表达式中使用的零宽断言：</p><table><thead><tr><th style="text-align:center;">符号</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">?=</td><td>正先行断言-存在</td></tr><tr><td style="text-align:center;">?!</td><td>负先行断言-排除</td></tr><tr><td style="text-align:center;">?&lt;=</td><td>正后发断言-存在</td></tr><tr><td style="text-align:center;">?&lt;!</td><td>负后发断言-排除</td></tr></tbody></table><h3 id="正先行断言" tabindex="-1"><code>?=...</code> 正先行断言 <a class="header-anchor" href="#正先行断言" aria-hidden="true">#</a></h3><p><code>?=...</code> 正先行断言，表示第一部分表达式之后必须跟着 <code>?=...</code> 定义的表达式。</p><p>返回结果只包含满足匹配条件的第一部分表达式。定义一个正先行断言要使用 <code>()</code>，在括号内部使用一个问号和等号： <code>(?=...)</code>。</p><p>正先行断言的内容写在括号中的等号后面。例如，表达式 <code>(T|t)he(?=\\sfat)</code> 匹配 <code>The</code> 和 <code>the</code>，在括号中我们又定义了正先行断言 <code>(?=\\sfat)</code> ，即 <code>The</code> 和 <code>the</code> 后面紧跟着 <code>(空格)fat</code>。</p><pre class="nx-pre">&quot;(T|t)he(?=\\sfat)&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.\n</pre><h3 id="负先行断言" tabindex="-1"><code>?!...</code> 负先行断言 <a class="header-anchor" href="#负先行断言" aria-hidden="true">#</a></h3><p>负先行断言 <code>?!</code> 用于筛选所有匹配结果，筛选条件为：其后不跟随着断言中定义的格式。</p><p><code>正先行断言</code> 定义和 <code>负先行断言</code> 一样，区别就是 <code>=</code> 替换成 <code>!</code> 也就是 <code>(?!...)</code>。</p><p>例如，表达式 <code>(T|t)he(?!\\sfat)</code> 匹配 <code>The</code> 和 <code>the</code>，且其后不跟着 <code>(空格)fat</code>。</p><pre class="nx-pre">&quot;(T|t)he(?!\\sfat)&quot; =&gt; The fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.\n</pre><h3 id="正后发断言" tabindex="-1"><code>?&lt;= ...</code> 正后发断言 <a class="header-anchor" href="#正后发断言" aria-hidden="true">#</a></h3><p>正后发断言 记作<code>(?&lt;=...)</code> 用于筛选所有匹配结果，筛选条件为：其前跟随着断言中定义的格式。</p><p>例如，表达式 <code>(?&lt;=(T|t)he\\s)(fat|mat)</code> 匹配 <code>fat</code> 和 <code>mat</code>，且其前跟着 <code>The</code> 或 <code>the</code>。</p><pre class="nx-pre">&quot;(?&lt;=(T|t)he\\s)(fat|mat)&quot; =&gt; The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the <a href="#learn-regex"><strong>mat</strong></a>.\n</pre><h3 id="负后发断言" tabindex="-1"><code>?&lt;!...</code> 负后发断言 <a class="header-anchor" href="#负后发断言" aria-hidden="true">#</a></h3><p>负后发断言 记作 <code>(?&lt;!...)</code> 用于筛选所有匹配结果，筛选条件为 其前不跟随着断言中定义的格式。</p><p>例如，表达式 <code>(?&lt;!(T|t)he\\s)(cat)</code> 匹配 <code>cat</code>，且其前不跟着 <code>The</code> 或 <code>the</code>。</p><pre class="nx-pre">&quot;(?&lt;!(T|t)he\\s)(cat)&quot; =&gt; The cat sat on <a href="#learn-regex"><strong>cat</strong></a>.\n</pre><h2 id="标志" tabindex="-1">标志 <a class="header-anchor" href="#标志" aria-hidden="true">#</a></h2><p>标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。这些标志可以任意的组合使用，它也是整个正则表达式的一部分。</p><table><thead><tr><th style="text-align:center;">标志</th><th>描述</th></tr></thead><tbody><tr><td style="text-align:center;">i</td><td>忽略大小写</td></tr><tr><td style="text-align:center;">g</td><td>全局搜索</td></tr><tr><td style="text-align:center;">m</td><td>多行修饰符：锚点元字符 <code>^</code> <code>$</code> 工作范围在每行的起始</td></tr></tbody></table><h3 id="忽略大小写-case-insensitive" tabindex="-1">忽略大小写（Case Insensitive） <a class="header-anchor" href="#忽略大小写-case-insensitive" aria-hidden="true">#</a></h3><p>修饰语 <code>i</code> 用于忽略大小写。</p><p>例如，表达式 <code>/The/gi</code> 表示在全局搜索 <code>The</code>，在后面的 <code>i</code> 将其条件修改为忽略大小写，则变成搜索 <code>the</code> 和 <code>The</code>，<code>g</code> 表示全局搜索。</p><pre class="nx-pre">&quot;The&quot; =&gt; <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.\n</pre><h3 id="全局搜索-global-search" tabindex="-1">全局搜索（Global search） <a class="header-anchor" href="#全局搜索-global-search" aria-hidden="true">#</a></h3><p>修饰符 <code>g</code> 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。</p><p>例如，表达式 <code>/.(at)/g</code> 表示搜索 任意字符（除了换行）+ <code>at</code>，并返回全部结果。</p><pre class="nx-pre">&quot;/.(at)/&quot; =&gt; The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the mat.\n</pre><h3 id="多行修饰符-multiline" tabindex="-1">多行修饰符（Multiline） <a class="header-anchor" href="#多行修饰符-multiline" aria-hidden="true">#</a></h3><p>多行修饰符 <code>m</code> 常用于执行一个多行匹配。</p><p>像之前介绍的 <code>(^,$)</code> 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 <code>m</code>。</p><p>例如，表达式 <code>/at(.)?$/gm</code> 表示小写字符 <code>a</code> 后跟小写字符 <code>t</code> ，末尾可选除换行符外任意字符。根据 <code>m</code> 修饰符，现在表达式匹配每行的结尾。</p><pre class="nx-pre">&quot;/.at(.)?$/&quot; =&gt; The fat\n                cat sat\n                on the <a href="#learn-regex"><strong>mat.</strong></a>\n</pre><pre class="nx-pre">&quot;/.at(.)?$/gm&quot; =&gt; The <a href="#learn-regex"><strong>fat</strong></a>\n                  cat <a href="#learn-regex"><strong>sat</strong></a>\n                  on the <a href="#learn-regex"><strong>mat.</strong></a>\n</pre><p>自己可以通过换行符输入来测试：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> reg </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.at</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">)?</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">gm</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The fat </span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#C3E88D;"> cat sat </span><span style="color:#A6ACCD;">\\r\\n</span><span style="color:#C3E88D;"> on the mat.</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(reg)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="贪婪匹配与惰性匹配-greedy-vs-lazy-matching" tabindex="-1">贪婪匹配与惰性匹配（Greedy vs lazy matching） <a class="header-anchor" href="#贪婪匹配与惰性匹配-greedy-vs-lazy-matching" aria-hidden="true">#</a></h3><p>正则表达式默认采用贪婪匹配模式，在该模式下意味着会匹配尽可能长的子串。我们可以使用 <code>?</code> 将贪婪匹配模式转化为惰性匹配模式。</p><pre class="nx-pre">&quot;/(.*at)/&quot; =&gt; <a href="#learn-regex"><strong>The fat cat sat on the mat</strong></a>.\n</pre><pre class="nx-pre">&quot;/(.*?at)/&quot; =&gt; <a href="#learn-regex"><strong>The fat</strong></a> cat sat on the mat.\n</pre>',120);const p=e(l,[["render",function(e,d,c,n,s,l){const p=t("VueJobs");return r(),a("div",null,[h,o(p),g])}]]);export{s as __pageData,p as default};