# Interview Helper

一个本地可直接打开的面试复习 HTML 项目。根目录 `index.html` 是专题选择入口，每个专题都是独立页面，互不覆盖。

## 使用方式

直接用浏览器打开：

```text
index.html
```

然后在入口页选择要复习的专题。

## 当前专题

- `pages/backend-interview-recovery-roadmap.html`
  - 后端面试补齐路线
  - 基于近期面试反馈整理能力诊断、P0/P1 优先级、L0-L4 达标标准、六周补齐计划、每日闭环、能力评分和下一轮投递策略。

- `pages/redis-mq-interview-defense.html`
  - Redis / MQ 面试防线
  - 覆盖 Redis 与 MQ 高频主干、三轮追问、缓存与消息一致性、订单异步链路映射、故障场景、随机口述和本地进度。

- `pages/java-map-collections-defense.html`
  - Java Map 与集合基础防线
  - 覆盖 HashMap / TreeMap / LinkedHashMap / ConcurrentHashMap 对比、put 流程、红黑树与范围查询、并发 Map 追问、随机口述和自测。

- `pages/python-core-interview.html`
  - Python 八股速成
  - 覆盖对象模型、可变/不可变、深浅拷贝、装饰器、迭代器/生成器、GIL、内存管理、并发、性能和 Web 高频点。

- `pages/java-algorithm-core.html`
  - Java / 算法 / DB 核心题
  - 覆盖线程安全单例、最大子数组和、反转链表、二叉树对称/反转/层序、LRU、JVM 内存区域 + GC Roots、索引失效 + Explain、Redis 缓存一致性。

- `pages/daily-algorithm-drill.html`
  - 算法训练 · 第 1 期
  - 当前集成 Day 1–Day 4 共 20 条训练记录，包含 LeetCode 链接、简化题目描述、训练目标、核心推导、Java/Rust 双解、套路迁移、筛选与本地进度记录。
  - 采用五天一期的归档节奏：Day 1–Day 5 收齐后冻结本期，Day 6–Day 10 开启下一期；重复题按训练日期保留，作为间隔复习记录。

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

- `pages/mq-kafka-rocketmq-guide.html`
  - MQ / Kafka / RocketMQ 快速掌握专题
  - 覆盖 MQ 基础、Kafka 与 RocketMQ 原理对比、订单异步下发实战、可靠消息、事务消息 / Outbox、重复消费、消费幂等、顺序消息、延迟消息、堆积排查和面试追问。

- `pages/sql-optimization-cases.html`
  - SQL 优化案例复盘专题
  - 基于经验贴口述整理，覆盖左模糊索引失效、WHERE/ORDER BY 索引选择误判、Hint 与稳定排序、OFFSET 深分页回表、覆盖索引子查询和延迟关联。

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

- `pages/architect-growth-system-design.html`
  - 架构师成长 / 系统设计
  - 通过“边、量、模、链、险、演”六步法训练场景题，包含容量估算、架构演进、邮件迁移、在线时长、运价指标、随机追问、自评量表和 DeepSeek 严厉面试官。

- `pages/one-interview-gap.html`
  - 一面查漏补缺
  - 覆盖 Redis、MySQL 主从、B+ 树、复杂度和经典后端场景题。

## 建议练习方式

1. 先从“后端面试补齐路线”完成自评，按 P0/P1 顺序选择专题。
2. 先看专题页的结论和代码，再关闭答案口述。
3. 用 60 秒回答和三轮追问检验，不把“看懂”当作“会了”。
4. 最后做自测和错题记录，第二天先复测昨日失败点。
