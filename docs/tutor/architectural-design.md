---
title: 项目架构设计
group: Documents
category: Tutor
children:
  - ../tutor/auth.md
---

## 系统概述

Aiofc 是一个面向中小型集团企业的管理系统，专注于提供高效的企业管理解决方案。系统设计充分考虑了集团下属子公司的管理需求，支持灵活的权限控制和数据隔离。

### 核心功能

1. 组织架构管理
   - 集团与子公司组织架构
   - 部门管理
   - 员工档案管理
   - 岗位管理

2. 权限与访问控制
   - 统一身份认证
   - 基于角色的权限管理
   - 数据权限控制
   - 操作日志审计

3. 工作协同
   - 公告管理
   - 工作流程
   - 任务管理
   - 文档协作

4. 基础数据管理
   - 公共基础数据
   - 业务参数配置
   - 数据字典管理
   - 系统配置

### 系统架构

采用单体应用 + 模块化设计的架构方案：

1. 展现层
   - Web 前端（Remix + shadcn/ui）
   - RESTful API
   - WebSocket 实时通讯

2. 应用层
   - 业务模块（按功能领域划分）
   - 公共服务（认证、日志等）
   - 集成服务（外部系统对接）

3. 数据层
   - PostgreSQL 数据库
   - Redis 缓存
   - 文件存储

这种架构设计的优势：

- 部署维护简单
- 开发效率高
- 适度的系统解耦
- 合理的资源利用
- 便于后续扩展

## 技术选型

### 前端技术栈

- 框架：Remix
- UI 组件：shadcn/ui（基于 Radix UI）
- 构建工具：内置（基于 esbuild）
- 类型检查：TypeScript
- 样式方案：Tailwind CSS
- 状态管理：主要依赖 Remix 的 loader/action，复杂状态使用 Jotai

优势：

- 服务端渲染 (SSR) 提供更好的首屏加载性能
- 基于路由的数据加载策略
- 内置表单处理和数据突变
- 嵌套路由支持
- 错误边界处理
- 优秀的缓存策略

UI 组件优势：

- 基于 Radix UI 原语，确保可访问性
- 完全可定制的组件设计
- 使用 Tailwind CSS 实现样式
- 支持深色模式
- 组件代码可控，便于定制和维护
- 现代简约的设计风格

### 后端技术栈

- 框架：NestJS
- 数据库：PostgreSQL
- 缓存：Redis
- 消息队列：Kafka
- 监控：Prometheus
- 日志：Pino
- API 文档：Swagger
- ORM：Drizzle ORM

Drizzle ORM 的优势：

- TypeScript 优先，完美的类型推导
- 极致的性能表现
- SQL 优先的查询构建
- 零运行时开销
- 支持数据库迁移
- 简单直观的 API 设计
- 支持 PostgreSQL 高级特性

### 部署与运维

- 容器化：Docker
- 编排工具：Kubernetes
- CI/CD：GitLab CI
- 服务网格：Istio

## 安全设计

### 认证与授权

- JWT 基础认证
- RBAC 权限模型
- OAuth2.0 集成
- 多因素认证支持

### 数据安全

- 数据加密存储
- 传输加密 (TLS)
- 敏感数据脱敏
- 数据备份策略

## 可用性设计

### 高可用方案

- 应用双节点部署
- 数据库主从复制
- 缓存集群
- 负载均衡

### 灾备方案

- 多可用区部署
- 定期数据备份
- 故障自动转移
- 服务降级策略

## 扩展性设计

### 水平扩展

- 应用多节点部署
- 读写分离
- 缓存优化

### 垂直扩展

- 模块化设计
- 插件化架构
- 按需加载功能

## 监控告警

### 监控指标

- 系统性能指标
  - CPU、内存使用率
  - 请求响应时间
  - 数据库连接状态
- 业务指标
  - 并发用户数
  - 业务处理量
  - 错误率统计
- 安全事件
- 资源使用率

### 告警策略

- 多级告警
  - 普通告警（邮件）
  - 重要告警（短信）
  - 紧急告警（电话）
- 告警收敛
- 告警通知渠道
- 告警自动处理

### 消息队列方案

根据不同场景的需求，我们可以选择以下方案：

1. Redis Pub/Sub + List
   优势：
   - 部署简单，与现有 Redis 复用
   - 适合简单的消息通知场景
   - 维护成本低
   - 性能优秀
   缺点：
   - 不保证消息持久化
   - 不支持消息重试
   - 不支持消费组

2. BullMQ
   优势：
   - 基于 Redis 的可靠队列
   - 支持任务调度和延迟队列
   - 支持消息持久化
   - 提供重试机制
   - 支持任务优先级
   - 与 NestJS 集成良好
   适用场景：
   - 异步任务处理
   - 定时任务调度
   - 邮件发送队列
   - 报表生成等

3. RabbitMQ（如需要更复杂的消息路由）
   优势：
   - 成熟可靠的消息中间件
   - 支持多种消息模式
   - 完善的消息路由
   - 高可用性
   缺点：
   - 需要独立部署维护
   - 运维成本相对较高

推荐方案：

- 优先使用 BullMQ
  - 轻量级但功能完善
  - 基于 Redis，无需额外部署
  - 支持持久化和重试
  - 适合大多数异步任务场景
- 简单场景可使用 Redis Pub/Sub
- 特殊需求时考虑 RabbitMQ