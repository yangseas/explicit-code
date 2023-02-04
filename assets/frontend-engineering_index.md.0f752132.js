import{_ as e,r as i,o as l,c as a,a as r,b as n,d as t,e as o}from"./app.070707c9.js";const d=JSON.parse('{"title":"前端工程化","description":"","frontmatter":{},"headers":[{"level":2,"title":"规范","slug":"规范","link":"#规范","children":[]},{"level":2,"title":"模块化","slug":"模块化","link":"#模块化","children":[]},{"level":2,"title":"组件化","slug":"组件化","link":"#组件化","children":[]},{"level":2,"title":"自动化","slug":"自动化","link":"#自动化","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"frontend-engineering/index.md"}'),h={name:"frontend-engineering/index.md"},s=n("h1",{id:"前端工程化",tabindex:"-1"},[t("前端工程化 "),n("a",{class:"header-anchor",href:"#前端工程化","aria-hidden":"true"},"#")],-1),p=o('<p>Web 技术和业务日益复杂和多元，相比以前的时候简单拼接几个页面，工程的复杂带了更多的问题：</p><ol><li>如何保证代码的可维护性</li><li>如何提高开发质量</li><li>如何提升协作开发的效率</li></ol><p>前端工程化主要就是帮助我们解决这些复杂问题的，本质是软件工程化的一种，我们应该从软件工程化的角度来看前端的工程化。</p><blockquote><p>前端工程化是根据具体的业务特点，将前端的开发流程、技术、工具、经验等规范化、标准化。它的目的是让前端开发能够“自成体系”，最大程度地提高前端工程师的开发效率，降低技术选型、前后端联调等带来的协调沟通成本。</p></blockquote><p>结合我们开发工作，可以这样去划分工程化包含的内容</p><h2 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-hidden="true">#</a></h2><p>代码规范是指程序员在编码时要遵守的规则，规范的目的就是为了让程序员编写易于阅读、可维护的代码。</p><p>主要有以下一些内容：</p><ul><li>目录结构的制定</li><li>编码规范</li><li>前后端接口规范</li><li>文档规范</li><li>组件管理</li><li>Git 分支管理</li><li>Commit 描述规范</li><li>定期 CodeReview</li><li>视觉图标规范</li></ul><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-hidden="true">#</a></h2><p>模块化就是将一个大文件拆分成相互依赖的小文件，再进行统一的拼装和加载。一个模块就是一个功能，它们可以被多次复用。另外，模块化的设计也体现了分治的思想。什么是分治？</p><blockquote><p>字面上的解释是“分而治之”，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。</p></blockquote><p>从前端的角度来看，我们可以</p><ul><li>Js 模块化</li><li>Css 模块化</li></ul><p>在模块中，我们可以通过 Webpack、Rollup、Vite 等构建工具来帮组我们对这些资源进行打包构建。</p><h2 id="组件化" tabindex="-1">组件化 <a class="header-anchor" href="#组件化" aria-hidden="true">#</a></h2><p>那什么是组件化呢？模块化只是在文件层面上，对代码或资源的拆分；而组件化是在设计层面上，对UI（用户界面）的拆分。</p><p>我们可以认为组件就是页面里的 UI 组件，一个页面可以由很多组件构成。例如一个后台管理系统页面，可能包含了 Header、Sidebar、Main 等各种组件。</p><p><strong>组件化也是一种分治思想</strong>。</p><p>页面是个大型组件，可以拆成若干个中型组件，然后中型组件还可以再拆，拆成若干个小型组件，小型组件也可以再拆，直到拆成 DOM 元素为止。DOM 元素可以看成是浏览器自身的组件，作为组件的基本单元。</p><p>目前的前端框架 React、Vue、Angular 都是组件化的框架，几乎任意类型的应用界面都可以抽象为一个组件树：</p><p><img src="/fe-tutorial/assets/fee-components.e5f47a78.png" alt="components"></p><h2 id="自动化" tabindex="-1">自动化 <a class="header-anchor" href="#自动化" aria-hidden="true">#</a></h2><p>我们可以把一些脏活累过交给自动化的工具完成，而更专注到开发中。</p><ol><li>自动化测试：测试的作用是为了提高代码质量和可维护性</li><li>打包和部署：减少我们的等待</li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/woai3c/introduction-to-front-end-engineering" target="_blank" rel="noreferrer">introduction-to-front-end-engineering</a></li><li><a href="https://www.zhihu.com/question/24558375/answer/139920107" target="_blank" rel="noreferrer">什么是 web 前端工程化-知乎</a></li></ul>',27);const c=e(h,[["render",function(e,n,t,o,d,h){const c=i("VueJobs");return l(),a("div",null,[s,r(c),p])}]]);export{d as __pageData,c as default};