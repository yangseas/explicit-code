import{_ as t,r as e,o as l,c as a,a as r,b as i,d,e as n}from"./app.070707c9.js";const s=JSON.parse('{"title":"基本网络知识","description":"","frontmatter":{},"headers":[{"level":2,"title":"计算机网络概念","slug":"计算机网络概念","link":"#计算机网络概念","children":[]},{"level":2,"title":"网络模型的分层","slug":"网络模型的分层","link":"#网络模型的分层","children":[{"level":3,"title":"OSI 七层模型","slug":"osi-七层模型","link":"#osi-七层模型","children":[]},{"level":3,"title":"TCP/IP四层模型","slug":"tcp-ip四层模型","link":"#tcp-ip四层模型","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"network/index.md"}'),h={name:"network/index.md"},o=i("h1",{id:"基本网络知识",tabindex:"-1"},[d("基本网络知识 "),i("a",{class:"header-anchor",href:"#基本网络知识","aria-hidden":"true"},"#")],-1),f=n('<p>这里只是整理了一些前端可以了解的一些计算机网络基础知识。</p><h2 id="计算机网络概念" tabindex="-1">计算机网络概念 <a class="header-anchor" href="#计算机网络概念" aria-hidden="true">#</a></h2><blockquote><p>计算机网络（英语：computer network），通常也简称网络，是指容许节点分享资源的数字电信网络。在电脑网络，电脑设备会透过节点之间的连接（数据链路）互相交换数据。传输介质可分为有线及无线两类——有线的可用到双绞线、光纤电缆等介质；无线则可用到Wi-Fi、NFC:4-32。</p></blockquote><h2 id="网络模型的分层" tabindex="-1">网络模型的分层 <a class="header-anchor" href="#网络模型的分层" aria-hidden="true">#</a></h2><h3 id="osi-七层模型" tabindex="-1">OSI 七层模型 <a class="header-anchor" href="#osi-七层模型" aria-hidden="true">#</a></h3><p>OSI(Open System Interconnection，开放系统互连)七层网络模型称为开放式系统互联参考模型 ，是一个逻辑上的定义，一个规范，它把网络从逻辑上分为了7层。每一层都有相关、相对应的物理设备，比如路由器，交换机。</p><p>OSI 七层模型是一种框架性的设计方法 ，建立七层模型的主要目的是为解决异种网络互连时所遇到的兼容性问题，其主要的功能使就是帮助不同类型的主机实现数据传输。它的最大优点是将服务、接口和协议这三个概念明确地区分开来，通过七个层次化的结构模型使不同的系统不同的网络之间实现可靠的通讯</p><table><thead><tr><th style="text-align:left;">分层</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">应用层</td><td style="text-align:left;">为应用程序提供服务</td></tr><tr><td style="text-align:left;">表示层</td><td style="text-align:left;">数据格式转化、数据加密</td></tr><tr><td style="text-align:left;">会话层</td><td style="text-align:left;">建立、管理和维护通话</td></tr><tr><td style="text-align:left;">传输层</td><td style="text-align:left;">建立、管理和维护端到端的链接</td></tr><tr><td style="text-align:left;">网络层</td><td style="text-align:left;">IP选址及路由选址</td></tr><tr><td style="text-align:left;">数据链路层</td><td style="text-align:left;">提供介质访问和链路管理</td></tr><tr><td style="text-align:left;">物理层</td><td style="text-align:left;">物理层</td></tr></tbody></table><h3 id="tcp-ip四层模型" tabindex="-1">TCP/IP四层模型 <a class="header-anchor" href="#tcp-ip四层模型" aria-hidden="true">#</a></h3><p>TCP/IP分层模型（TCP/IP Layening Model）被称作因特网分层模型(Internet Layering Model)、因特网参考模型(Internet Reference Model)。</p><p>TCP/IP协议被组织成四个概念层，其中有三层对应于OSI参考模型中的相应层。TCP/IP协议族并不包含物理层和数据链路层，因此它不能独立完成整个计算机网络系统的功能，必须与许多其他的协议协同工作。</p><table><thead><tr><th style="text-align:left;">分层</th></tr></thead><tbody><tr><td style="text-align:left;">应用层</td></tr><tr><td style="text-align:left;">传输层</td></tr><tr><td style="text-align:left;">网络层</td></tr><tr><td style="text-align:left;">网络接口层</td></tr></tbody></table><p>OSI是一种理论下的模型，而TCP/IP已被广泛使用，成为网络互联事实上的标准。</p><p>区别：</p><ul><li>TCP/IP他是一个协议簇；而OSI（开放系统互联）则是一个模型，且TCP/IP的开发时间在OSI之前。</li><li>TCP/IP是由一些交互性的模块做成的分层次的协议，其中每个模块提供特定的功能；OSi则指定了哪个功能是属于哪一层的。</li><li>TCP/IP是四层结构，而OSI是七层结构。OSI的最高三层在TCP中用应用层表示。</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C" target="_blank" rel="noreferrer">维基百科</a></li><li><a href="https://juejin.cn/post/6844904079974465544" target="_blank" rel="noreferrer">前端需要了解的计算机网络知识</a></li><li><a href="https://www.jianshu.com/p/d39241fe956e" target="_blank" rel="noreferrer">计算机网络的性能衡量指标</a></li></ul>',17);const p=t(h,[["render",function(t,i,d,n,s,h){const p=e("VueJobs");return l(),a("div",null,[o,r(p),f])}]]);export{s as __pageData,p as default};