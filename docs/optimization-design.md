# NovaPOS 网站全面优化设计文档

日期: 2026-05-27

## 一、问题诊断

### 高优先级问题
1. next.config.ts 缺少静态导出配置（output: 'export'）
2. 8 处 CTA 按钮使用空链接 href="#"
3. 缺少自定义 404 页面
4. 首页/产品列表页缺少 SEO metadata
5. 产品分类页未正确返回 404 状态码

### 中优先级问题
6. 7 个页面重复 Hero Section 代码
7. 4 个页面重复 CTA Section 代码
8. 产品分类数据在 3 处重复且不一致
9. 8 个组件重复 useInView + motion 动画模式
10. Product 接口在 2 个文件重复定义
11. fontFamily 内联样式重复 10 处
12. Container 组件已定义但未被使用

### 低优先级问题
13. Logo/WhatsApp SVG 重复
14. "箭头链接" 模式重复 4 处
15. 部分响应式细节可优化
16. 缺少 OpenGraph/Twitter 社交媒体元数据

## 二、优化方案

### 模块 1：基础设施修复
- 修复 next.config.ts 静态导出配置
- 创建自定义 not-found.tsx 404 页面
- 安装配置 Vitest + React Testing Library

### 模块 2：SEO 全面优化
- 为首页、产品列表页补充 metadata
- 为 news/downloads/contact 补充 description
- 添加 OpenGraph/Twitter 社交媒体元数据
- 修复产品分类页的 404 处理

### 模块 3：链接与导航修复
- 8 处 href="#" 替换为实际路由
- 统一 <a> 为 Next.js <Link>

### 模块 4：组件重构
- 提取 PageHero 共享组件
- 提取 CTABanner 共享组件
- 提取 AnimatedSection 组件
- 提取 ArrowLink 组件
- 提取 Logo 组件
- 统一使用 Container 组件
- 修复 fontFamily 内联样式

### 模块 5：数据层统一
- 统一产品分类数据源
- 抽取硬编码数据到 data/ 目录
- 统一 Product 类型定义

### 模块 6：TDD 测试覆盖
- 数据查询函数单元测试
- 共享组件渲染测试
- 关键页面快照测试
