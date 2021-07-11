(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{610:function(t,s,a){"use strict";a.r(s);var n=a(54),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[t._v("#")]),t._v(" 二分查找")]),t._v(" "),a("p",[t._v("二分查找算法也叫折半查找算法。")]),t._v(" "),a("p",[t._v("猜字游戏都应该玩过，随机写一个 0 到 99 之间的数字，然后猜一下是什么？猜的过程中，每猜一次会告诉你大了还是小了，知道猜中为止。如何快速猜中写的数字？")]),t._v(" "),a("p",[t._v("通过二分查找，最多 7 次就可以猜中。")]),t._v(" "),a("h2",{attrs:{id:"二分查找的核心思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找的核心思想"}},[t._v("#")]),t._v(" 二分查找的核心思想")]),t._v(" "),a("p",[t._v("二分查找针对的是一个"),a("strong",[t._v("有序的数据集合")]),t._v("，查找思想类似分支思想。每次都通过跟区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。")]),t._v(" "),a("h2",{attrs:{id:"极快的查找速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#极快的查找速度"}},[t._v("#")]),t._v(" 极快的查找速度")]),t._v(" "),a("p",[t._v("二分查找每次将数据范围缩小为原来的一半，现在假设数据量大小为 n，最坏情况下，知道查找区间被缩小为空，才停止：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 查找区间的变化\nn，n/2，n/4，...，n/2^k，...\n")])])]),a("p",[t._v("当 n/2^k = 1 时，就是最后一次查找，此时 k 的值就是查找的次数。时间复杂度为 O(k)，而 k = log2n，所以时间复杂度就是 O(logn)。这是一个"),a("strong",[t._v("对数时间复杂度")]),t._v("，它极其高效。")]),t._v(" "),a("p",[t._v("比如，n 等于 2^32，如果在这么多的数据中用二分查找一个数据，最多需要比较 32 次。")]),t._v(" "),a("p",[t._v("用大 O 表示法的时候，省略了常数、系数和低阶。所以对于一个常量级的算法来说，O(1) 可能是一个非常大的常量值，比如 O(100)、O(1000)，这个时候，它们可能还没有 O(logn) 执行效率高。")]),t._v(" "),a("h2",{attrs:{id:"实现二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现二分查找"}},[t._v("#")]),t._v(" 实现二分查找")]),t._v(" "),a("p",[t._v("二分查找其实也有好几种，先写一个"),a("strong",[t._v("简单")]),t._v("的二分查找。")]),t._v(" "),a("h3",{attrs:{id:"最简单的二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最简单的二分查找"}},[t._v("#")]),t._v(" 最简单的二分查找")]),t._v(" "),a("p",[t._v("最简单的情况就是"),a("strong",[t._v("有序数组中不存在重复的元素")]),t._v("，用二分查找值等于给定值的元素。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("binarySearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("容易出错的 3 个地方")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("循环的退出条件")])]),t._v(" "),a("p",[t._v("注意是 "),a("code",[t._v("low <= high")]),t._v("，而不是 "),a("code",[t._v("low < high")]),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("mid 的取值")])]),t._v(" "),a("p",[t._v("实际上，"),a("code",[t._v("mid = (low + high) / 2")]),t._v(" 可能会溢出，因为如果 low 和 hight 都比较大的话，两者之和就可能溢出，改进方法是写成 "),a("code",[t._v("low + (high - low) / 2")]),t._v("。或者更追求性能的话，可以写成位运算 "),a("code",[t._v("low + ((high - low) >> 1)")]),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("low 和 high 的更新")])]),t._v(" "),a("p",[a("code",[t._v("low = mid + 1")]),t._v("，"),a("code",[t._v("high = mid - 1")]),t._v("。这一这里需要 +1 和 -1，而不能直接写成 "),a("code",[t._v("low = mid")]),t._v(" 和 "),a("code",[t._v("high = mid")]),t._v("，否则可能会造成死循环。比如 "),a("code",[t._v("high = 3")]),t._v("，"),a("code",[t._v("low = 3")]),t._v("，如果 "),a("code",[t._v("arr[3]")]),t._v(" 不等于 "),a("code",[t._v("target")]),t._v(" 就会死循环了。")]),t._v(" "),a("h3",{attrs:{id:"二分查找的局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找的局限性"}},[t._v("#")]),t._v(" 二分查找的局限性")]),t._v(" "),a("p",[t._v("虽然二分查找效率很高，但是应用场景有很多的局限性。")]),t._v(" "),a("p",[a("strong",[t._v("1. 依赖数组这种顺序表结构")])]),t._v(" "),a("p",[t._v("二分查找需要按照下标随机访问元素，数组按照下标随机访问数据的时间复杂度是 O(1)。它不能依赖于其它数据结构，比如链表，链表的随机访问时间复杂度是 O(n)，如果使用链表来存储，二分查找的复杂度会高很多。")]),t._v(" "),a("p",[a("strong",[t._v("2. 二分查找针对的是有序数据")])]),t._v(" "),a("p",[t._v("二分查找对这一点比较苛刻，数据必须是有序的。如果数据没有序，需要先排序。如果针对的是一组静态的数据，没有频繁的插入和删除，那就可以进行一次排序，然后多次查找。而对于频繁插入和删除的，需要每次插入、删除的时候保证数据仍然有序，或者每次二分查找之前都进行排序。这种动态的数据，无论什么方法，效率都不高了。")]),t._v(" "),a("p",[t._v("所以二分查找还只能用在不频繁插入、删除，可以一次排序多次查找的场景。而频繁插入、删除就应该使用二叉树了。")]),t._v(" "),a("p",[a("strong",[t._v("3. 数据量太小不适合二分查找")])]),t._v(" "),a("p",[t._v("数据量太小完全没有必要，直接遍历就好。不管有个例外，如果数据之间的比较很耗时，这个时候，不管数据量大小都推荐二分查找，可以减少比较次数。例如，从数组中找出值等于给定值的时候，每一个元素都是长度超过 300 的字符串，如此长的字符串之间比较很耗时，推荐二分查找，减少比较次数。")]),t._v(" "),a("p",[a("strong",[t._v("4. 数据量太大也不适合二分查找")])]),t._v(" "),a("p",[t._v("因为二分查找依赖数组，而数组需要的是连续的内存空间。如果有 1 GB 的数据，那也就意味着需要 1GB 的连续空间，如果此时剩余 2 GB 空间，但是没有连续的 1 GB，那就无法使用二分查找了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);