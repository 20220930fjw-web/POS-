# NovaPOS 外贸独立站 - 部署工作流

## 项目信息

| 项目 | 说明 |
|------|------|
| 框架 | Next.js 16 + TypeScript + Tailwind CSS 4 |
| 动画 | Framer Motion |
| 部署平台 | GitHub Pages |
| 网站地址 | https://20220930fjw-web.github.io/POS-/ |
| 代码仓库 | https://github.com/20220930fjw-web/POS- |
| 本地路径 | F:\standalone site\pos-website |

---

## 一键部署

双击项目根目录下的 `deploy.bat` 即可自动完成：安装依赖 → 构建 → 部署到 GitHub Pages。

---

## 手动部署步骤

### 第 1 步：修改代码

用 VS Code 或其他编辑器打开项目，修改代码后保存。

**项目结构：**

```
pos-website/
├── src/
│   ├── app/                  # 页面文件（Next.js App Router）
│   │   ├── page.tsx          # 首页
│   │   ├── about/            # 关于我们
│   │   ├── products/         # 产品中心
│   │   │   └── [category]/   # 产品分类页
│   │   │       └── [slug]/   # 产品详情页
│   │   ├── solutions/        # 解决方案
│   │   ├── news/             # 新闻动态
│   │   ├── oem-odm/          # OEM/ODM
│   │   ├── downloads/        # 下载中心
│   │   └── contact/          # 联系我们
│   ├── components/           # 组件
│   │   ├── home/             # 首页组件
│   │   └── shared/           # 公共组件
│   ├── data/
│   │   └── products.ts       # 产品数据（修改产品信息在这里）
│   └── app/
│       └── globals.css       # 全局样式
├── next.config.ts            # Next.js 配置
├── deploy.bat                # 一键部署脚本
└── package.json
```

### 第 2 步：确保 next.config.ts 配置正确

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // 静态导出（GitHub Pages 必须）
  distDir: 'dist',           // 输出到 dist 目录
  images: { unoptimized: true }, // 静态导出不支持图片优化
  assetPrefix: '.',          // 相对路径（GitHub Pages 子目录部署必须）
  trailingSlash: true,       // URL 末尾加斜杠
};

export default nextConfig;
```

### 第 3 步：本地预览

```bash
cd "F:\standalone site\pos-website"
npm install
npm run dev
```

浏览器打开 http://localhost:3000 预览效果。

### 第 4 步：构建

```bash
npm run build
```

构建产物输出到 dist/ 目录。

### 第 5 步：部署到 GitHub Pages

```bash
cd dist

# 确保 .nojekyll 文件存在（防止 Jekyll 忽略 _next 文件夹）
type nul > .nojekyll

# 初始化 git（仅首次）
git init
git checkout -b gh-pages
git remote add origin https://github.com/20220930fjw-web/POS-.git

# 提交并推送
git add -A
git commit -m "Deploy: 更新网站"
git push origin gh-pages --force
```

### 第 6 步：等待生效

GitHub Pages 需要 1-3 分钟生效，访问 https://20220930fjw-web.github.io/POS-/ 查看结果。

---

## 常见问题

### Q: 修改了产品信息，如何更新？

编辑 `src/data/products.ts` 文件，修改对应产品的名称、描述、规格等信息，然后重新运行 deploy.bat。

### Q: 修改了样式，如何更新？

- 全局样式：编辑 `src/app/globals.css`
- 组件样式：编辑对应组件文件中的 Tailwind 类名
- 修改后重新运行 deploy.bat

### Q: 网站显示空白或样式丢失？

1. 检查 dist/ 目录下是否有 .nojekyll 文件
2. 检查 next.config.ts 中是否有 `assetPrefix: '.'`
3. 清除浏览器缓存后重试

### Q: 推送到 GitHub 失败？

1. 检查网络连接（可能需要科学上网）
2. 确认已登录 GitHub 账号
3. 确认仓库地址正确

### Q: 如何添加新页面？

在 `src/app/` 下创建新文件夹，添加 `page.tsx` 文件，然后在导航组件中添加链接。

### Q: 如何修改联系信息？

编辑以下文件中的联系信息：
- `src/components/shared/Footer.tsx`（页脚）
- `src/app/contact/page.tsx`（联系页面）
- `src/components/home/CTASection.tsx`（首页 CTA 区域）

---

## 技术栈详情

- **Next.js 16** - React 全栈框架，使用 App Router
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 原子化 CSS 框架
- **Framer Motion** - 动画库
- **静态导出** - output: 'export' 生成纯 HTML/CSS/JS
- **GitHub Pages** - 免费静态网站托管