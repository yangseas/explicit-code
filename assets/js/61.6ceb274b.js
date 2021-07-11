(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{623:function(v,_,t){"use strict";t.r(_);var a=t(54),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"哈希算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法"}},[v._v("#")]),v._v(" 哈希算法")]),v._v(" "),t("p",[v._v("2011 年 CSDN 的“脱库”事件，CSDN 网站被黑客攻击，超过 600 万的用户注册邮箱和密码明文被泄露，很多网友对 CSDN 明文保存用户密码的行为产生了不满。")]),v._v(" "),t("p",[v._v("作为一个工程师，如何存储客户密码这么重要的数据呢？仅仅 MD5 加密存储就可以了吗？")]),v._v(" "),t("p",[v._v("在实际开发中，该如何使用哈希算法解决问题？")]),v._v(" "),t("h2",{attrs:{id:"什么是哈希算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是哈希算法"}},[v._v("#")]),v._v(" 什么是哈希算法")]),v._v(" "),t("p",[v._v("哈希和散列只是翻译上的区别，英文都是 “Hash”，所以哈希算法也叫作“Hash 算法”或者散列算法，那什么是哈希算法？")]),v._v(" "),t("h3",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[v._v("#")]),v._v(" 定义")]),v._v(" "),t("p",[v._v("将任意长度的二进制值串映射为固定长度的二进制值串，这个映射规则就是"),t("strong",[v._v("哈希算法")]),v._v("。而原始数据经过映射之后得到的二进制值串就是"),t("strong",[v._v("哈希值")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"如何设计一个优秀的哈希算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个优秀的哈希算法"}},[v._v("#")]),v._v(" 如何设计一个优秀的哈希算法")]),v._v(" "),t("p",[v._v("设计一个优秀的哈希算法并不容易，需要满足一下要求：")]),v._v(" "),t("ol",[t("li",[v._v("单向哈希：从哈希值不能反向推导出原始数据（所以哈希算法也叫单向哈希算法）；")]),v._v(" "),t("li",[v._v("数据敏感：对数据输入数据非常敏感，哪怕原始数据只修改了一个 Bit，最后得到的哈希值也大不相同；")]),v._v(" "),t("li",[v._v("散列冲突概率极小：散列冲突的概率要很小，对于不同的原始数据，哈希值相同的概率要非常小；")]),v._v(" "),t("li",[v._v("执行效率尽量高：哈希算法的执行效率要尽量高效，针对较长的文本，也能快速计算出哈希值。")])]),v._v(" "),t("h2",{attrs:{id:"哈希算法的常见应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法的常见应用"}},[v._v("#")]),v._v(" 哈希算法的常见应用")]),v._v(" "),t("p",[v._v("常见应用有 7 个：安全加密、唯一标识、数据校验、散列函数、负载均衡、数据分片、分布式存储。")]),v._v(" "),t("h3",{attrs:{id:"安全加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全加密"}},[v._v("#")]),v._v(" 安全加密")]),v._v(" "),t("p",[v._v("说到哈希算法，最常想到的应该就是安全加密。常见的用于加密的哈希算法有：")]),v._v(" "),t("ol",[t("li",[v._v("MD5：MD5 Message-Digest Algorithm，MD5 消息摘要算法。")]),v._v(" "),t("li",[v._v("SHA：Secure Hash Algorithm，安全散列算法。")]),v._v(" "),t("li",[v._v("DES：Data Encryption Standard，数据加密标准。")]),v._v(" "),t("li",[v._v("AES：Advanced Encryption Standard，高级加密标准。")])]),v._v(" "),t("p",[v._v("对于加密的哈希算法，前面的要求中"),t("strong",[v._v("有 2 点格外重要")]),v._v("：第一点是很难从哈希值反向推导出原始数据，第二点是散列冲突概率要很小。")]),v._v(" "),t("p",[v._v("第一点好理解，因为加密就是为了防止泄密，所以不应该可以简单的由哈希值推导出原始数据。")]),v._v(" "),t("p",[v._v("第二点，不管什么哈希算法都无法做到完全不冲突，只能尽量的减少碰撞冲突的概率。这里是基于数学中一个非常基础的理论，鸽巢原理（也叫抽屉原理）。这个原理本身很简单，它是说，如果有 10 个鸽巢，有 11 只鸽子，那肯定有 1 个鸽巢中的鸽子数量多于 1 只，换句话说，肯定有 2 只鸽子在 1 个鸽巢里。")]),v._v(" "),t("p",[v._v("以 MD5 为例，哈希值是 128 位，能表示的数据是有限的，最多 2^128 个数据。而需要哈希的数据是无穷的，知道数量超过这个值，根据鸽巢原理，必然会存在哈希值相同的情况。")]),v._v(" "),t("p",[v._v("但是，因为哈希范围很大，所以冲突概率极低，相对来说就很难被破解。没有绝对安全的加密。越复杂、越难破解的加密算法，需要的计算时间就越长。比如 SHA-256 比 SHA-1 更复杂、更安全，它的计算时间相对也比较长。")]),v._v(" "),t("h3",{attrs:{id:"唯一标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唯一标识"}},[v._v("#")]),v._v(" 唯一标识")]),v._v(" "),t("p",[v._v("通过哈希算法得到数据的哈希值，用这个作为数据的唯一标识，可以高效的检索数据。")]),v._v(" "),t("p",[v._v("例如在文件或者图片存储的时候，可能会存在两个问题：名字相同，但是内容不同；或者名字不同，但是内容相同。现在要查找一个文件，判断是否存在？")]),v._v(" "),t("p",[v._v("不能单纯的通过文件名字判断，因为存在很多名字相同的文件，或者存在名字虽然不同，但其实就是这个文件。文件在计算机中都可以表示成二进制码串，所以比较笨的方法是将要查找的文件的二进制码串和所有文件的二进制码串一一比对，相同的说明存在。但是这种方式效率很低，因为将文件转为二进制码另外还需要比对，非常耗时。")]),v._v(" "),t("p",[v._v("这个时候，需要对每个文件都找一个唯一标识，可以从文件的二进制码串的开头、中间、结尾分别取 100 个字节，然后将这 300 个字节放一起，通过哈希算法（例如 MD5），就可以得到一个哈希字符串，用它作为图片的唯一标识。通过这个唯一标识来判定图片是否存在图库中，这样可以减少工作量。")]),v._v(" "),t("h3",{attrs:{id:"数据校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据校验"}},[v._v("#")]),v._v(" 数据校验")]),v._v(" "),t("p",[v._v("哈希算法对数据很敏感，只要原始数据有一点改变，最后算出的哈希值就不一致。利用这个特点，可以先对文件数据取哈希值，最后再计算一遍哈希值，比对校验文件是否完整或者被篡改。")]),v._v(" "),t("h3",{attrs:{id:"散列函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列函数"}},[v._v("#")]),v._v(" 散列函数")]),v._v(" "),t("p",[v._v("散列函数也是哈希算法的一种应用。但是散列函数不关心散列值是否能反向解密，更关心的是散列后的值能否平均分配和执行效率。")]),v._v(" "),t("h3",{attrs:{id:"负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[v._v("#")]),v._v(" 负载均衡")]),v._v(" "),t("p",[v._v("负载均衡有很多，例如轮询、随机等，如何实现将同一个客户，在一次会话中的所有请求都路由到同一个服务器上（会话粘滞）？")]),v._v(" "),t("p",[v._v("可以通过哈希算法，对客户端 IP 地址或者会话 ID 计算哈希值，将取得的哈希值与服务器列表的大小进行"),t("strong",[v._v("取模运算")]),v._v("，最终得到的值就是应该被路由到的服务器编号。")]),v._v(" "),t("h3",{attrs:{id:"数据分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据分片"}},[v._v("#")]),v._v(" 数据分片")]),v._v(" "),t("p",[v._v("有 1T 的日志文件，记录用户的搜索关键词，如何亏快速统计每个关键词被搜索的次数？")]),v._v(" "),t("p",[v._v("这个问题的难点有 2 个：一个是日志文件很大，没办法放到一台机器的内存中；另一个是，如果只用一台机器处理这么多数据，时间会很长。")]),v._v(" "),t("p",[v._v("针对这个两个问题，可以先对数据分片，然后采用多台机器来处理，提高速度。具体思路是：用 n 台机器并行处理，从搜索的日志文件中，依次读出每个关键字，并通过哈希函数得到哈希值，再跟 n "),t("strong",[v._v("取模")]),v._v("，最终得到的值就是应该被分配到的机器编号。这样，哈希值相同的搜索关键词就被分配到同一台机器上，每个机器分别计算关键词出现的次数，最后合并起来就是最终的就过。")]),v._v(" "),t("h3",{attrs:{id:"分布式存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式存储"}},[v._v("#")]),v._v(" 分布式存储")]),v._v(" "),t("p",[v._v("现在互联网面对的都是海量的数据、海量的用户。为了提高数据的读取、写入能力，一般采用分布式的方式来存储数据，例如分布式缓存。这就使用了"),t("a",{attrs:{href:"https://www.jianshu.com/p/570dc8913c20",target:"_blank",rel:"noopener noreferrer"}},[v._v("一致性哈希算法"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("回答开头的问题，如何存储客户密码这么重要的数据呢？")]),v._v(" "),t("ol",[t("li",[v._v("选择相对安全的加密算法加密再存储：例如 SHA，MD5 等。")]),v._v(" "),t("li",[v._v("防止字典攻击，客户设置密码时要求增加复杂度：用户信息脱库之后，黑客拿到的是加密之后的密文，虽然不能直接反向推到出原始密码，但是可以维护一个常用密码的字典表，字典中每个密码用哈希算法计算哈希值，然后拿这个哈希值跟脱库的密文比较，如果相同，就可以认为未加密前的密码是一样的。所以能猜中一些简单的密码了。")]),v._v(" "),t("li",[v._v("引入盐（salt）：针对字典攻击，可以引入盐（salt），跟用户的密码组合，增加密码的复杂度，然后再将组合的字符串用哈希算法加密，将它存储到数据库中，增加解密难度。加盐的方式有很多种，例如，输入密码为 123456，加入盐之后变为 12aa34bb56cc。")])]),v._v(" "),t("p",[v._v("完全和攻击是一种博弈关系，不存在绝对的安全。所有的安全措施，只是增加攻击的成本而已。")])])}),[],!1,null,null,null);_.default=r.exports}}]);