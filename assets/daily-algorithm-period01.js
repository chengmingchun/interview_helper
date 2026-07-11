window.DAILY_PROBLEMS=[
    {
      day:"day1", dayName:"Day 1 · 2026-07-08", theme:"排序贪心 + 快慢指针启动",
      level:"required", levelName:"必做", id:1846, title:"减小和重新排列数组后的最大元素", difficulty:"中等",
      link:"https://leetcode.cn/problems/maximum-element-after-decreasing-and-rearranging/",
      description:"数组可以任意重排，且每个元素只能减小为正整数。要求最终首元素为 1、相邻差不超过 1，返回最大可能元素。",
      tags:"排序 · 贪心 · 可达边界", goal:"学会维护当前能够构造出的最大合法值 cur。",
      why:"它是“排序后逐步扩展可达状态”的标准入门题。",
      idea:["排序后从小到大使用资源。","当前已能构造到 cur；只要 x > cur，就能把 x 降成 cur + 1。","否则 x 不足以继续抬高台阶。"],
      migration:"看到可重排、只能降低、要求连续或相邻约束时，尝试排序后维护可达边界。"
    },
    {
      day:"day1", dayName:"Day 1 · 2026-07-08", theme:"排序贪心 + 快慢指针启动",
      level:"required", levelName:"必做", id:455, title:"分发饼干", difficulty:"简单",
      link:"https://leetcode.cn/problems/assign-cookies/",
      description:"每个孩子有最低胃口，每块饼干有尺寸。一块饼干最多给一个孩子，求最多能满足多少孩子。",
      tags:"排序 · 双指针 · 资源匹配", goal:"理解小资源优先匹配小需求的安全性。",
      why:"它把排序贪心从“构造数值”迁移到“需求与资源匹配”。",
      idea:["胃口和饼干都升序排序。","当前饼干若能满足最小未满足胃口，就立刻匹配。","若不能满足，饼干太小，只能丢弃并看下一块。"],
      migration:"凡是资源和需求可比较、目标是最大匹配数，都先考虑排序后双指针。"
    },
    {
      day:"day1", dayName:"Day 1 · 2026-07-08", theme:"排序贪心 + 快慢指针启动",
      level:"required", levelName:"必做", id:27, title:"移除元素", difficulty:"简单",
      link:"https://leetcode.cn/problems/remove-element/",
      description:"原地删除数组中所有等于 val 的元素，返回保留下来的长度；新长度之后的内容不用处理。",
      tags:"数组 · 快慢指针 · 原地覆盖", goal:"掌握 fast 扫描、slow 写入的最基础模板。",
      why:"它是后续数组去重、移动零和条件压缩的地基。",
      idea:["fast 检查每个旧元素。","slow 指向下一个合法元素的写入位置。","遇到非 val 元素就覆盖到 slow。"],
      migration:"把“保留条件”替换掉，就能迁移到大量原地过滤题。"
    },
    {
      day:"day1", dayName:"Day 1 · 2026-07-08", theme:"排序贪心 + 快慢指针启动",
      level:"optional", levelName:"选做", id:26, title:"删除有序数组中的重复项", difficulty:"简单",
      link:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array/",
      description:"给定升序数组，原地去重，使每种数字只保留一次，返回新长度。",
      tags:"有序数组 · 快慢指针 · 去重", goal:"理解根据已构造答案的末尾决定是否写入。",
      why:"它把固定值过滤升级成状态过滤。",
      idea:["有序性保证重复值相邻。","slow 表示答案长度，nums[slow - 1] 是答案末尾。","当前值不同于答案末尾时才写入。"],
      migration:"继续把保留次数从 1 改成 k，就是 LeetCode 80。"
    },
    {
      day:"day1", dayName:"Day 1 · 2026-07-08", theme:"排序贪心 + 快慢指针启动",
      level:"challenge", levelName:"挑战", id:80, title:"删除有序数组中的重复项 II", difficulty:"中等",
      link:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/",
      description:"给定升序数组，原地处理后让每个数字最多出现两次，返回新长度。",
      tags:"有序数组 · 快慢指针 · 通用 k 模板", goal:"掌握每种元素最多保留 k 个的统一判断。",
      why:"这是从具体题抽象出可复用模板的第一步。",
      idea:["前 k 个元素总可以保留。","slow >= k 时只需比较 nums[slow - k]。","不同则说明当前值在答案里不足 k 个。"],
      migration:"通用条件：slow < k || nums[fast] != nums[slow - k]。"
    },
    {
      day:"day2", dayName:"Day 2 · 2026-07-09", theme:"快慢指针与原地处理",
      level:"required", levelName:"必做", id:27, title:"移除元素", difficulty:"简单", repeated:true,
      link:"https://leetcode.cn/problems/remove-element/",
      description:"再次手写原地移除指定值，要求先说清 slow、fast 的含义，再开始写代码。",
      tags:"间隔复习 · 快慢指针 · 原地覆盖", goal:"把模板从看懂变成无提示手写。",
      why:"同一基础题隔天重做，能暴露你记住的是代码还是状态语义。",
      idea:["先口述不变量：nums[0..slow) 均为保留元素。","fast 扫描尚未处理区域。","合法元素写入 slow 后再推进。"],
      migration:"重做时尝试把条件改成“保留偶数”或“移除小于 x 的值”。"
    },
    {
      day:"day2", dayName:"Day 2 · 2026-07-09", theme:"快慢指针与原地处理",
      level:"required", levelName:"必做", id:26, title:"删除有序数组中的重复项", difficulty:"简单", repeated:true,
      link:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array/",
      description:"再次实现有序数组原地去重，并解释为什么只需比较最后一个已保留元素。",
      tags:"间隔复习 · 有序数组 · 去重", goal:"强化“答案前缀”这一不变量。",
      why:"它是从元素过滤迈向状态过滤的关键模板。",
      idea:["相同值在排序数组中连续出现。","答案前缀始终无重复。","新值与答案末尾不同才写入。"],
      migration:"把允许次数参数化，立即得到最多保留 k 次。"
    },
    {
      day:"day2", dayName:"Day 2 · 2026-07-09", theme:"快慢指针与原地处理",
      level:"required", levelName:"必做", id:283, title:"移动零", difficulty:"简单",
      link:"https://leetcode.cn/problems/move-zeroes/",
      description:"把所有 0 稳定移动到数组末尾，保持非零元素相对顺序，并原地完成。",
      tags:"快慢指针 · 稳定覆盖 · 尾部回填", goal:"掌握先压缩合法元素、再填充剩余区域。",
      why:"它让原地覆盖模板开始处理完整数组结果。",
      idea:["第一遍把非零元素稳定写到前面。","slow 之后都是空出来的位置。","第二遍把剩余位置统一写成 0。"],
      migration:"稳定移动某类元素到末尾时，可保留另一类元素再统一回填。"
    },
    {
      day:"day2", dayName:"Day 2 · 2026-07-09", theme:"快慢指针与原地处理",
      level:"optional", levelName:"选做", id:80, title:"删除有序数组中的重复项 II", difficulty:"中等", repeated:true,
      link:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/",
      description:"再次实现每个数字最多保留两次，并写出最多保留 k 次的通用判断。",
      tags:"间隔复习 · 通用 k 模板", goal:"把 LeetCode 80 固化成可迁移模板。",
      why:"重复练习的目标不是再过一次，而是能直接泛化。",
      idea:["slow < k 时直接保留。","否则与 nums[slow - k] 比较。","把 k 设为 1、2、3 验证模板。"],
      migration:"将 k 作为参数，即可处理任意最大重复次数。"
    },
    {
      day:"day2", dayName:"Day 2 · 2026-07-09", theme:"快慢指针与原地处理",
      level:"challenge", levelName:"挑战", id:75, title:"颜色分类", difficulty:"中等",
      link:"https://leetcode.cn/problems/sort-colors/",
      description:"数组只含 0、1、2，要求一次遍历内原地排序，使 0 在左、1 在中、2 在右。",
      tags:"三指针 · 荷兰国旗 · 原地分区", goal:"建立左区、未知区、右区三个区间不变量。",
      why:"它把单个写入边界升级为多路 partition。",
      idea:["[0,left) 全是 0，[right,n) 全是 2。","遇到 0 与 left 交换，left、i 同时前进。","遇到 2 与右侧交换后 i 不动，因为换回值尚未检查。"],
      migration:"快速排序 partition、奇偶分区和多条件分组都来自相同区间不变量。"
    },
    {
      day:"day3", dayName:"Day 3 · 2026-07-10", theme:"左右指针与搜索区间",
      level:"required", levelName:"必做", id:167, title:"两数之和 II - 输入有序数组", difficulty:"中等",
      link:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/",
      description:"在升序数组中找到两个数，使它们之和等于 target，返回从 1 开始的下标。",
      tags:"有序数组 · 左右夹逼 · 单调性", goal:"理解 sum 小时为什么只能移动 left。",
      why:"它是左右双指针最标准的单调搜索模型。",
      idea:["left、right 表示当前候选区间两端。","sum < target 时，移动 right 只会更小，因此必须 left++。","sum > target 时同理 right--。"],
      migration:"排序后目标值随端点单调变化时，考虑左右夹逼。"
    },
    {
      day:"day3", dayName:"Day 3 · 2026-07-10", theme:"左右指针与搜索区间",
      level:"required", levelName:"必做", id:11, title:"盛最多水的容器", difficulty:"中等",
      link:"https://leetcode.cn/problems/container-with-most-water/",
      description:"选择两条竖线组成容器，面积等于较短高度乘两线距离，求最大面积。",
      tags:"左右指针 · 贪心 · 上界证明", goal:"学会用上界证明安全地丢弃短板。",
      why:"这是双指针里最经典的正确性证明题。",
      idea:["面积由宽度和短板共同决定。","移动长板时宽度变小、短板不变，面积不可能增大。","只有移动短板才可能提高高度上界。"],
      migration:"答案受两端较弱者限制时，尝试移动弱侧并证明排除安全。"
    },
    {
      day:"day3", dayName:"Day 3 · 2026-07-10", theme:"左右指针与搜索区间",
      level:"required", levelName:"必做", id:125, title:"验证回文串", difficulty:"简单",
      link:"https://leetcode.cn/problems/valid-palindrome/",
      description:"忽略非字母数字字符与大小写，判断字符串是否为回文。",
      tags:"字符串 · 左右指针 · 跳过无效字符", goal:"掌握两端扫描和条件跳过。",
      why:"它是字符串左右指针的基础题型。",
      idea:["左右指针分别寻找下一个有效字符。","统一大小写后比较。","不等立即返回 false，相等则同时向中间移动。"],
      migration:"回文判断、近似回文和两端字符约束都可从该模板扩展。"
    },
    {
      day:"day3", dayName:"Day 3 · 2026-07-10", theme:"左右指针与搜索区间",
      level:"optional", levelName:"选做", id:344, title:"反转字符串", difficulty:"简单",
      link:"https://leetcode.cn/problems/reverse-string/",
      description:"给定字符数组，要求原地反转，不能额外创建同等规模数组。",
      tags:"左右指针 · 原地交换", goal:"熟练两端交换模板和边界条件。",
      why:"它是数组反转、区间反转和 partition 操作的基本动作。",
      idea:["left、right 指向尚未反转区间两端。","交换后同时向中间移动。","left >= right 时结束。"],
      migration:"反转整个数组、局部区间、单词顺序都可复用两端交换。"
    },
    {
      day:"day3", dayName:"Day 3 · 2026-07-10", theme:"左右指针与搜索区间",
      level:"challenge", levelName:"挑战", id:15, title:"三数之和", difficulty:"中等",
      link:"https://leetcode.cn/problems/3sum/",
      description:"找出数组中所有和为 0 的不重复三元组，结果中不能出现重复组合。",
      tags:"排序 · 固定一个数 · 双指针 · 去重", goal:"掌握三数之和以及 K-Sum 的基础降维思路。",
      why:"它把排序、双指针、去重和剪枝组合在一起。",
      idea:["先排序，固定 nums[i]。","剩余区间转化成目标为 -nums[i] 的两数之和。","固定值、left 值和 right 值都要正确去重。"],
      migration:"四数之和、最接近三数之和和一般 K-Sum 都从固定一层、递归降维展开。"
    },
    {
      day:"day4", dayName:"Day 4 · 2026-07-11", theme:"字符串与滑动窗口入门",
      level:"required", levelName:"必做", id:344, title:"反转字符串", difficulty:"简单", repeated:true,
      link:"https://leetcode.cn/problems/reverse-string/",
      description:"原地反转字符数组，不额外创建同等规模数组；这次重点是用字符串场景复习左右边界。",
      tags:"间隔复习 · 字符串 · 左右指针", goal:"把静态左右指针写成无需思考的基础动作。",
      why:"它是从普通双指针过渡到字符串滑动窗口的最轻量热身。",
      idea:["left、right 表示尚未反转区间的两端。","交换后两端同时收缩。","Rust 用右开区间可自然兼容空数组。"],
      migration:"区间反转、回文判断、单词翻转和原地 partition 都依赖相同的边界意识。"
    },
    {
      day:"day4", dayName:"Day 4 · 2026-07-11", theme:"字符串与滑动窗口入门",
      level:"required", levelName:"必做", id:3, title:"无重复字符的最长子串", difficulty:"中等",
      link:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",
      description:"给定字符串，求不包含重复字符的最长连续子串长度；注意是连续子串，不是子序列。",
      tags:"字符串 · 滑动窗口 · 最后出现位置", goal:"建立 right 扩张、left 单调前进、窗口始终合法的模型。",
      why:"它是滑动窗口最经典的入口，也是后续最小覆盖、至多 K 种字符等题的母题。",
      idea:["right 把新字符加入窗口。","若字符在当前窗口中出现过，left 跳到其上次位置之后。","每次窗口恢复合法后更新最大长度。"],
      migration:"把“无重复”替换为至多 K 种字符、某字符最多出现 K 次，就得到一整类最长窗口题。"
    },
    {
      day:"day4", dayName:"Day 4 · 2026-07-11", theme:"字符串与滑动窗口入门",
      level:"required", levelName:"必做", id:209, title:"长度最小的子数组", difficulty:"中等",
      link:"https://leetcode.cn/problems/minimum-size-subarray-sum/",
      description:"给定正整数数组和 target，求和至少为 target 的最短连续子数组长度；不存在返回 0。",
      tags:"数组 · 滑动窗口 · 最短区间", goal:"掌握满足条件后持续收缩，并在收缩过程中更新最短答案。",
      why:"它与 LeetCode 3 分别代表滑动窗口的两种基本收缩时机。",
      idea:["right 扩张并累加窗口和。","sum >= target 后，当前窗口合法。","合法时持续移动 left，寻找更短窗口。"],
      migration:"该写法依赖元素全为正数；存在负数时窗口和不再单调，需要前缀和、单调队列等工具。"
    },
    {
      day:"day4", dayName:"Day 4 · 2026-07-11", theme:"字符串与滑动窗口入门",
      level:"optional", levelName:"选做", id:567, title:"字符串的排列", difficulty:"中等",
      link:"https://leetcode.cn/problems/permutation-in-string/",
      description:"判断 s2 中是否存在一个连续子串，其字符频次与 s1 完全相同，也就是 s1 的某种排列。",
      tags:"固定长度窗口 · 字符频次 · 异位词", goal:"识别排列题的固定窗口信号，并熟练用 26 长度数组维护频次。",
      why:"它把可变窗口升级为固定长度窗口，是异位词系列的标准模板。",
      idea:["目标排列长度固定为 s1.length。","right 加入字符，窗口过长时移出 right-k 的字符。","窗口达到固定长度后比较频次数组。"],
      migration:"找到所有异位词、DNA 重复序列和固定尺寸统计题，都可以复用固定窗口模型。"
    },
    {
      day:"day4", dayName:"Day 4 · 2026-07-11", theme:"字符串与滑动窗口入门",
      level:"challenge", levelName:"挑战", id:76, title:"最小覆盖子串", difficulty:"困难",
      link:"https://leetcode.cn/problems/minimum-window-substring/",
      description:"在 s 中寻找最短连续子串，使其包含 t 的全部字符及对应重复次数；不存在返回空串。",
      tags:"滑动窗口 · 频次约束 · 最小覆盖", goal:"掌握 need、window、valid 三组状态及合法窗口的收缩过程。",
      why:"它综合了动态窗口、最短区间和频次匹配，是滑动窗口专题的代表题。",
      idea:["need 记录目标频次，window 记录当前窗口频次。","valid 只统计已经达到目标频次的字符种类。","valid == required 后持续收缩，并保存最短窗口起点和长度。"],
      migration:"多数覆盖型窗口题都可抽象为：扩张更新状态，满足约束后收缩，并在恰当时机记录答案。"
    }
  ];
window.DAILY_DAY_ORDER=["day1","day2","day3","day4"];
