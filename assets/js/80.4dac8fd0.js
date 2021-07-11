(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{660:function(t,a,s){"use strict";s.r(a);var n=s(54),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),s("p",[t._v("前面已经知道基本类型存储在栈空间中，引用类型存储在堆空间中。通过这种方式，解决了数据的存储问题。")]),t._v(" "),s("p",[t._v("不过数据使用之后，如果不需要了（垃圾数据），但是还保留在内存中，那就会导致占用内存越来越大，所以需要对这些垃圾数据进行回收，释放内存空间。")]),t._v(" "),s("h2",{attrs:{id:"垃圾回收的必要性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收的必要性"}},[t._v("#")]),t._v(" 垃圾回收的必要性")]),t._v(" "),s("p",[t._v("下面这段话引自《JavaScript权威指南（第四版）》")]),t._v(" "),s("blockquote",[s("p",[t._v("由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。")])]),t._v(" "),s("p",[t._v("这段话解释了为什么需要系统需要垃圾回收，JS 不像 C/C++，它有自己的一套垃圾回收机制（Garbage Collection）。JavaScrip t的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"before"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"override a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写a")]),t._v("\n")])])]),s("p",[t._v("这段代码运行之后，“before”这个字符串失去了引用（之前是被 a 引用），系统检测到这个事实之后，就会释放该字符串的存储空间以便这些空间可以被再利用。")]),t._v(" "),s("h2",{attrs:{id:"垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[t._v("#")]),t._v(" 垃圾回收机制")]),t._v(" "),s("p",[t._v("垃圾回收有两种方法：标记清除和引用计数。其中标记清除更为常用。")]),t._v(" "),s("h3",{attrs:{id:"标记清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),s("p",[t._v("这是 JavaScript 中"),s("strong",[t._v("最常见")]),t._v("的垃圾回收方式。")]),t._v(" "),s("p",[t._v("当变量进入执行环境是，就标记这个变量为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到他们。当变量离开环境时，则将其标记为“离开环境”。")]),t._v(" "),s("p",[t._v("可以使用任何方式来标记变量。如何标记其实并不重要，重要的是采取什么策略。")]),t._v(" "),s("p",[t._v("垃圾收集器在运行的时候会给存储在内存中的"),s("strong",[t._v("所有变量都加上标记")]),t._v("（当然，可以使用任何标记方式）。然后，它会"),s("strong",[t._v("去掉")]),t._v("环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。")]),t._v(" "),s("p",[t._v("简单说：就是垃圾回收器会每隔一段时间扫描一次内存，当然这个时间应该是很短，在扫描的过程中垃圾回收器会把所有的内存的变量全部加上标记，然后如果有你需要用到的内存，垃圾回收器就会把你需要用到的内存的标记删掉，意思就是说，这个内存我不清除，但是会把有标记的全部删掉，这就是垃圾回收器的一次清理工作。")]),t._v(" "),s("p",[t._v("举个例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 m, n, add() 标记为进入环境。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 a, b, c 标记为进入环境。")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a, b, c 标记为离开环境，等待垃圾回收。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"引用计数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数"}},[t._v("#")]),t._v(" 引用计数")]),t._v(" "),s("p",[t._v("另一种不太常见的垃圾回收策略是引用计数。")]),t._v(" "),s("p",[t._v("引用计数的含义是跟踪记录每个值被引用的次数。"),s("strong",[t._v("当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减 1。当这个引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其所占的内存空间给收回来")]),t._v("。这样，垃圾收集器下次再运行时，它就会释放那些引用次数为0的值所占的内存。")]),t._v(" "),s("p",[t._v("但是用这种方法存在着一个问题，下面来看看代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("problem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" objA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" objB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  objA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("someOtherObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  objB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anotherObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" objA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在这个例子中，"),s("code",[t._v("objA")]),t._v(" 和 "),s("code",[t._v("objB")]),t._v(" 通过各自的属性相互引用；也就是说这两个对象的引用次数都是2。在采用引用计数的策略中，由于函数执行之后，这两个对象都离开了作用域，函数执行完成之后，"),s("code",[t._v("objA")]),t._v(" 和 "),s("code",[t._v("objB")]),t._v(" 还将会继续存在，因为他们的引用次数永远不会是 0。这样的相互引用如果说很大量的存在就会导致大量的内存泄露。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5cb33660e51d456e811d2687",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript中的垃圾回收和内存泄漏"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/hustskyking/archive/2013/04/27/garbage-collection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript垃圾回收机制"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23992332",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 中的垃圾回收"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);