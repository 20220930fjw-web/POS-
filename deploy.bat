@echo off
chcp 65001 >nul
title NovaPOS 网站部署工具

echo ============================================
echo   NovaPOS 外贸独立站 - 一键部署到 GitHub Pages
echo ============================================
echo.

:: ==========================================
::   配置区域（按需修改）
:: ==========================================
set PROJECT_DIR=F:\standalone site\pos-website
set REPO_URL=https://github.com/20220930fjw-web/POS-.git
set DEPLOY_BRANCH=gh-pages

:: 进入项目目录
cd /d "%PROJECT_DIR%"
if %errorlevel% neq 0 (
    echo [错误] 找不到项目目录: %PROJECT_DIR%
    pause
    exit /b 1
)

echo [1/6] 检查 next.config.ts 静态导出配置...
findstr /C:"output:" next.config.ts >nul 2>&1
if %errorlevel% neq 0 (
    echo [提示] next.config.ts 缺少静态导出配置，正在自动添加...
    (
        echo import type { NextConfig } from "next";
        echo.
        echo const nextConfig: NextConfig = {
        echo   output: 'export',
        echo   distDir: 'dist',
        echo   images: { unoptimized: true },
        echo   assetPrefix: '.',
        echo   trailingSlash: true,
        echo };
        echo.
        echo export default nextConfig;
    ) > next.config.ts
    echo [完成] 静态导出配置已添加
) else (
    echo [完成] 静态导出配置已存在
)

echo.
echo [2/6] 安装依赖...
call npm install
if %errorlevel% neq 0 (
    echo [错误] 依赖安装失败
    pause
    exit /b 1
)
echo [完成] 依赖安装成功

echo.
echo [3/6] 构建静态网站...
call npm run build
if %errorlevel% neq 0 (
    echo [错误] 构建失败，请检查代码
    pause
    exit /b 1
)
echo [完成] 构建成功，输出到 dist/ 目录

echo.
echo [4/6] 确保 .nojekyll 文件存在...
if not exist "dist\.nojekyll" (
    type nul > "dist\.nojekyll"
    echo [完成] 已创建 .nojekyll 文件
) else (
    echo [完成] .nojekyll 文件已存在
)

echo.
echo [5/6] 部署到 GitHub Pages...
cd /d "%PROJECT_DIR%\dist"

:: 初始化 git（如果尚未初始化）
if not exist ".git" (
    git init
    git checkout -b %DEPLOY_BRANCH%
    git remote add origin %REPO_URL%
    echo [完成] Git 仓库已初始化
) else (
    echo [完成] Git 仓库已存在
)

:: 强制推送到 gh-pages 分支
git add -A
git commit -m "Deploy: %date% %time:~0,8%" --allow-empty
git push origin %DEPLOY_BRANCH% --force

if %errorlevel% neq 0 (
    echo [错误] 推送到 GitHub 失败，请检查网络连接
    pause
    exit /b 1
)

echo.
echo ============================================
echo   部署成功！
echo   网站地址: https://20220930fjw-web.github.io/POS-/
echo   注意: GitHub Pages 需要 1-3 分钟生效
echo ============================================
echo.
pause