# Interview Helper

一个本地可直接打开的面试复习 HTML 项目。根目录 `index.html` 是专题选择入口，每个专题都是独立页面，互不覆盖。

## 使用方式

直接用浏览器打开：

```text
index.html
```

然后在入口页选择要复习的专题。

## 当前专题

- `pages/python-core-interview.html`
  - Python 八股速成
  - 覆盖对象模型、可变/不可变、深浅拷贝、装饰器、迭代器/生成器、GIL、内存管理、并发、性能和 Web 高频点。

- `pages/java-algorithm-core.html`
  - Java / 算法 / DB 核心题
  - 覆盖线程安全单例、最大子数组和、反转链表、二叉树对称/反转/层序、LRU、JVM 内存区域 + GC Roots、索引失效 + Explain、Redis 缓存一致性。

- `pages/senior-java-spring-architecture.html`
  - Java / Spring 中高级冲刺专题
  - 覆盖高阶自我介绍、常用设计模式、Spring 源码模式映射、线程安全单例多种手写、策略/工厂/观察者业务落地、Spring Bean 生命周期、后置处理器与自定义扩展、事务传播底层、REQUIRES_NEW 挂起事务、NESTED 保存点、Nacos 注册发现与心跳、用户在线时长与每日在线峰值系统设计、高并发限流熔断降级、多级兜底、高可用/高并发/可扩展性取舍，以及旋转数组找最小值 Java/Rust 手撕。

- `pages/greedy-algorithm.html`
  - 贪心算法专题
  - 覆盖贪心证明套路、区间贪心、射气球、跳跃游戏、买卖股票 II、分发饼干、加油站、划分字母区间、柠檬水找零和常见反例。

- `pages/monotonic-stack-queue.html`
  - 单调栈 / 单调队列专题
  - 覆盖单调栈与单调队列的区别、下一个更大元素、每日温度、柱状图最大矩形、滑动窗口最大值、前缀和 + 单调队列，以及 Java/Rust 简洁实现。

- `pages/resume-order-deep-dive.html`
  - 订单项目描述深挖专题
  - 基于订单模块与性能优化经历做面试深挖，覆盖订单链路、高并发场景、幂等、重复入库、缓存一致性、状态机、异步下发、慢 SQL 优化和项目话术。

- `pages/ai-assisted-dev-deep-dive.html`
  - AI 辅助研发项目深挖专题
  - 覆盖需求理解、规格生成、SubAgent 任务拆解、RAG/向量检索、AI Coding、Skill/MCP 工具化、SDD/TDD、迁移模式、当前瓶颈和面试追问防守。

- `pages/sql-optimization-cases.html`
  - SQL 优化案例复盘专题
  - 基于经验贴口述做匿名化整理，覆盖左模糊索引失效、WHERE/ORDER BY 索引选择误判、Hint 与稳定排序、OFFSET 深分页回表、覆盖索引子查询和延迟关联。

- `pages/java-fullgc-jvm.html`
  - Java Full GC / JVM 面试知识页
  - 覆盖 JVM 内存区域、GC Roots、分代假说、Full GC 触发原因、GC 日志解读、线上排查命令、根因模式和 60 秒面试表达模板。

- `pages/data-agent-ai-coding.html`
  - Data Agent / AI Coding
  - 覆盖 Data Agent 架构、Text-to-SQL、语义层、数据评估、AI Coding 面试打法。

- `pages/rag-masterclass.html`
  - RAG 完全掌握
  - 覆盖 RAG 工具选型、工程步骤、评估指标、生产问题和增强型 RAG。

- `pages/mq-architecture-rag.html`
  - MQ / 架构设计 / RAG
  - 覆盖消息队列可靠性、系统架构设计、企业知识库 RAG 场景。

- `pages/one-interview-gap.html`
  - 一面查漏补缺
  - 覆盖 Redis、MySQL 主从、B+ 树、复杂度和经典后端场景题。

## 建议练习方式

1. 先看专题页的结论和代码。
2. 用右侧追问区遮答案自测。
3. 再用口述训练台写 60 秒回答。
4. 最后做自测题，错题回到对应知识卡。
