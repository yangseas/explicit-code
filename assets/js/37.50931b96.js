(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{180:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("h2",{attrs:{id:"数据转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据转换")]),t._v(" "),a("p",[t._v("将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式")]),t._v(" "),a("ol",[a("li",[t._v("找到到空隙加 "),a("code",[t._v(".")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000000000'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\B(?=(\\d{3})+(?!\\d))/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("\\B")]),t._v(" 指定非单词边界；"),a("code",[t._v("(\\d{3})+")]),t._v(" 需要匹配由 3 个数字组成 1 组或多组；"),a("code",[t._v("(?!\\d)")]),t._v(" 负先行断言，后面不能再跟数字；"),a("code",[t._v("(?=(\\d{3})+(?!\\d))")]),t._v(" 正先行断言，后面需要跟随由 3 个数字组成的 1 组或 多组。")]),t._v(" "),a("p",[t._v("所以这里匹配到了 "),a("code",[t._v("10 000 000 000")]),t._v(" 三个空位，把它们替换成 "),a("code",[t._v(".")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("找到数字并在后面加 "),a("code",[t._v(".")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000000000'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(\\d)(?=(\\d{3})+\\b)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$1.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000000000'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d(?=(\\d{3})+\\b)/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$&.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);