(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{620:function(v,_,t){"use strict";t.r(_);var s=t(54),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"堆的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆的应用"}},[v._v("#")]),v._v(" 堆的应用")]),v._v(" "),t("p",[v._v("搜索引擎的热门排行榜是都见过吧，这个功能是怎么实现的？搜索引擎每天会收集大量用户的搜索请求，它会把这些用户输入的关键词记录下来，然后再离线统计分析，得到热门的 Top 10 搜索关键词。")]),v._v(" "),t("p",[v._v("现在假设，有一个包含 10 亿个关键词的日志文件，如何快速获取到热门棒 Top 10 搜索关键词？")]),v._v(" "),t("p",[v._v("这个问题可以用堆来解决。看看堆这种数据结构几个非常重要的应用：优先级队列、求 Top K 和中位数。")]),v._v(" "),t("h2",{attrs:{id:"应用一-优先队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用一-优先队列"}},[v._v("#")]),v._v(" 应用一：优先队列")]),v._v(" "),t("p",[v._v("优先级队列，顾名思义，首先它是一个队列。队列的最大特性就是先进先出。不过，在优先级队列中，"),t("strong",[v._v("数据的出队顺序并不是先进先出，而是按照优先级来，优先级最高的，最先出队")]),v._v("。")]),v._v(" "),t("p",[v._v("如何实现一个优先级队列呢？方法有很多，但是用堆来实现是最直接、最高效的。这是因为，堆和优先级队列非常相似。一个堆就可以看作一个优先级队列。很多时候，它们只是概念上的区分而已。")]),v._v(" "),t("p",[v._v("往优先级队列中插入一个元素，就相当于往堆中插入一个元素；从优先级队列中取出优先级最高的元素，就相当于取出堆顶元素。")]),v._v(" "),t("p",[v._v("优先级队列的应用场景很多，通过例子看一下它的具体使用。")]),v._v(" "),t("h3",{attrs:{id:"合并有序的小文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并有序的小文件"}},[v._v("#")]),v._v(" 合并有序的小文件")]),v._v(" "),t("p",[v._v("假设有 100 个小文件，每个文件的大小是 100MB，每个文件中存储的都是有序的字符串。希望将这些 100 个小文件合并成一个有序的大文件。")]),v._v(" "),t("p",[v._v("从这 100 个文件中，各取第一个字符串，放入数组中，然后比较大小，把最小的那个字符串放入合并后的大文件中，并从数组中删除。")]),v._v(" "),t("p",[v._v("假设，这个最小的字符串来自于 13.txt 这个小文件，我们就再从这个小文件取下一个字符串，放到数组中，重新比较大小，并且选择最小的放入合并后的大文件，将它从数组中删除。依次类推，直到所有的文件中的数据都放入到大文件为止。")]),v._v(" "),t("p",[v._v("这里用数组这种数据结构，来存储从小文件中取出来的字符串。"),t("strong",[v._v("每次从数组中取最小字符串，都需要循环遍历整个数组")]),v._v("，显然，这不是很高效。有没有更加高效方法呢？")]),v._v(" "),t("p",[v._v("这里就可以用到优先级队列，也可以说是堆。")]),v._v(" "),t("p",[t("strong",[v._v("将从小文件中取出来的字符串放入到小顶堆中，那堆顶的元素，也就是优先级队列队首的元素，就是最小的字符串")]),v._v("。将这个字符串放入到大文件中，并将其从堆中删除。然后再从小文件中取出下一个字符串，放入到堆中。循环这个过程，就可以将 100 个小文件中的数据依次放入到大文件中。")]),v._v(" "),t("p",[v._v("删除堆顶数据和往堆中插入数据的时间复杂度都是 "),t("code",[v._v("O(logn)")]),v._v("，n 表示堆中的数据个数，这里就是 100。这不数组的遍历高效很多！")]),v._v(" "),t("h2",{attrs:{id:"应用二-求-top-k"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用二-求-top-k"}},[v._v("#")]),v._v(" 应用二：求 Top K")]),v._v(" "),t("p",[v._v("堆的另外一个非常重要的应用场景，那就是“求 Top K 问题”。")]),v._v(" "),t("p",[v._v("把这种求 Top K 的问题"),t("strong",[v._v("抽象成两类")]),v._v("：一类是针对静态数据集合，也就是说数据集合事先确定，不会再变。另一类是针对动态数据集合，也就是说数据集合事先并不确定，有数据动态地加入到集合中。")]),v._v(" "),t("ol",[t("li",[v._v("针对静态数据")])]),v._v(" "),t("p",[v._v("针对静态数据，如何在一个包含 n 个数据的数组中，查找前 K 大数据呢？")]),v._v(" "),t("p",[t("strong",[v._v("可以维护一个大小为 K 的小顶堆")]),v._v("。顺序遍历数组，从数组中取出数据与堆顶元素比较。"),t("strong",[v._v("如果比堆顶元素大，我们就把堆顶元素删除，并且将这个元素插入到堆中；如果比堆顶元素小，则不做处理，继续遍历数组")]),v._v("。")]),v._v(" "),t("p",[v._v("这样等数组中的数据都遍历完之后，堆中的数据就是前 K 大数据了。")]),v._v(" "),t("p",[v._v("遍历数组需要 O(n) 的时间复杂度，一次堆化操作需要 O(logK) 的时间复杂度，所以最坏情况下，n 个元素都入堆一次，时间复杂度就是 O(nlogK)。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("针对动态数据")])]),v._v(" "),t("p",[v._v("针对动态数据求得 Top K 就是"),t("strong",[v._v("实时 Top K")]),v._v("。")]),v._v(" "),t("p",[v._v("怎么理解呢？举一个例子。一个数据集合中有两个操作，一个是添加数据，另一个询问当前的前 K 大数据。")]),v._v(" "),t("p",[v._v("如果每次询问前 K 大数据，我们都基于当前的数据重新计算的话，那时间复杂度就是 O(nlogK)，n 表示当前的数据的大小。")]),v._v(" "),t("p",[v._v("实际上，"),t("strong",[v._v("可以一直都维护一个 K 大小的小顶堆")]),v._v("，当有数据被添加到集合中时，我们就拿它与堆顶的元素对比。如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；如果比堆顶元素小，则不做处理。这样，无论任何时候需要查询当前的前 K 大数据，我们都可以立刻返回给他。")]),v._v(" "),t("h2",{attrs:{id:"应用三-求中位数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用三-求中位数"}},[v._v("#")]),v._v(" 应用三：求中位数")]),v._v(" "),t("p",[v._v("如何求动态数据集合中的中位数？")]),v._v(" "),t("p",[v._v("中位数，顾名思义，就是处在中间位置的那个数。如果数据的个数是奇数，把数据从小到大排列，那第 n/2 ​+ 1 个数据就是中位数（注意：假设数据是从 0 开始编号的）；如果数据的个数是偶数的话，那处于中间位置的数据有两个，第 n/2 个和第 n/2 ​+ 1 个数据，这个时候，我们可以随意取一个作为中位数，比如取两个数中靠前的那个，就是第 n/2 个数据。")]),v._v(" "),t("p",[v._v("对于一"),t("strong",[v._v("组静态数据")]),v._v("，中位数是固定的，我们可以先排序，第 n/2 个数据就是中位数。每次询问中位数的时候，直接返回这个固定的值就好了。所以，尽管排序的代价比较大，但是边际成本会很小。")]),v._v(" "),t("p",[v._v("但是，如果我们面对的是"),t("strong",[v._v("动态数据集合")]),v._v("，中位数在不停地变动，如果再用先排序的方法，每次询问中位数的时候，都要先进行排序，那效率就不高了。")]),v._v(" "),t("p",[v._v("借助堆这种数据结构，我们不用排序，就可以非常高效地实现求中位数操作。看一下它是如何做到的？")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("需要维护两个堆，一个大顶堆，一个小顶堆。大顶堆中存储前半部分数据，小顶堆中存储后半部分数据，"),t("strong",[v._v("且小顶堆中的数据都大于大顶堆中的数据")]),v._v("。也就是说，如果有 n 个数据，"),t("strong",[v._v("n 是偶数")]),v._v("，我们"),t("strong",[v._v("从小到大排序")]),v._v("，那前 n/2 个数据存储在大顶堆中，后 n/2 个数据存储在小顶堆中。这样，大顶堆中的堆顶元素就是我们要找的中位数。"),t("strong",[v._v("如果 n 是奇数")]),v._v("，情况是类似的，大顶堆就存储 n/2​+1 个数据，小顶堆中就存储 n/2 个数据。")])]),v._v(" "),t("li",[t("p",[v._v("新添加数据，如果新加入的数据"),t("strong",[v._v("小于等于大顶堆的堆顶元素")]),v._v("，我们就将这个新数据插入到大顶堆；否则，我们就将这个新数据插入到小顶堆。")])]),v._v(" "),t("li",[t("p",[v._v("调整堆，让大顶堆中的堆顶元素继续是中位数。添加数据之后，就肯出现两个堆中的数据个数不满足前面约定的情况。这个时候，我们可以从一个堆中不停地"),t("strong",[v._v("将堆顶元素移动到另一个堆")]),v._v("，通过这样的调整，来让两个堆中的数据满足上面的约定。")])])]),v._v(" "),t("p",[v._v("于是，就可以利用两个堆，一个大顶堆、一个小顶堆，实现在动态数据集合中求中位数的操作。")]),v._v(" "),t("p",[v._v("插入数据因为需要涉及堆化，所以时间复杂度变成了 O(logn)，但是求中位数只需要返回大顶堆的堆顶元素就可以了，所以时间复杂度就是 O(1)。")]),v._v(" "),t("p",[v._v("这种方法还可以用来快速求接口的 99% 响应时间。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("再看看开头的问题，假设现在我们有一个包含 10 亿个搜索关键词的日志文件，如何快速获取到 Top 10 最热门的搜索关键词呢？")]),v._v(" "),t("p",[v._v("因为用户搜索的关键词，有很多可能都是重复的，所以"),t("strong",[v._v("首先要统计每个搜索关键词出现的频率")]),v._v("。我们可以通过散列表、平衡二叉查找树或者其他一些支持快速查找、插入的数据结构，来记录关键词及其出现的次数。")]),v._v(" "),t("p",[v._v("然后，再根据前面讲的用堆求 Top K 的方法，建立一个大小为 10 的小顶堆，遍历散列表，依次取出每个搜索关键词及对应出现的次数，然后与堆顶的搜索关键词对比。"),t("strong",[v._v("如果出现次数比堆顶搜索关键词的次数多，那就删除堆顶的关键词，将这个出现次数更多的关键词加入到堆中")]),v._v("。")]),v._v(" "),t("p",[v._v("以此类推，当遍历完整个散列表中的搜索关键词之后，堆中的搜索关键词就是出现次数最多的 Top 10 搜索关键词了。")])])}),[],!1,null,null,null);_.default=r.exports}}]);