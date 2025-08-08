<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# MeetingUnion Blog

一个基于 Jekyll + GitHub Pages 的个人博客，当前使用远程主题 `pages-themes/cayman`，并在前端提供多风格预设和暗色模式切换。

## 在线地址
- 站点：<你的站点 URL>（请在 `_config.yml` 中设置 `url`/`baseurl` 后替换）
- RSS：`/feed.xml`

## 功能
- 远程主题：`pages-themes/cayman@v0.2.0`
- 顶部导航：Home / About / Posts / RSS
- 风格预设：Cayman / Slate / Hacker（可扩展）
- 暗色模式：手动切换或跟随系统（可手动覆盖）
- SEO 与分发：`jekyll-seo-tag`、`jekyll-sitemap`、`jekyll-feed`

## 预览与切换
- 顶部导航右侧可直接切换 Style 与 Dark 按钮，偏好会保存在浏览器。
- URL 参数直达预览：
  - `?theme=slate&dark=1`（Slate + 暗色）
  - `?theme=hacker`（Hacker 预设）
  - `?dark=0`（关闭暗色覆盖）

如需“真正更换主题”，在 `_config.yml` 中修改：
```
remote_theme: pages-themes/slate@v0.2.0
# or
remote_theme: pages-themes/hacker@v0.2.0
# or
remote_theme: pages-themes/minimal@v0.2.0
```

## 写作
- 文章放在 `_posts/`，文件名：`YYYY-MM-DD-title.md`
- 示例 front matter：
```
---
layout: default
title: "文章标题"
date: 2025-03-10 00:00:00 +0800
categories: blog
---

正文内容...
```

首页 `index.md` 会自动列出 `site.posts`。

## 自定义
- 顶部导航与切换逻辑：`assets/js/site.js`
- 风格变量与暗色覆盖：`assets/css/custom.css`
- 站点信息与插件：`_config.yml`
- 站点图标：在 `assets/` 放置 `favicon.ico`

要新增风格预设：
1) 在 `assets/css/custom.css` 新增 `html.theme-xxx { ...变量... }`
2) 在 `assets/js/site.js` 的下拉中加入 `xxx`

## 部署
- 直接推送到 `main`，GitHub Pages 将自动构建发布。
- 若是“项目页”部署，请设置 `_config.yml` 的 `baseurl` 为仓库名；“用户/组织页”保持空。
- 请设置正确的 `url`，以便站点地图与 RSS 输出绝对链接。

## 本地预览（可选）
若需要本地预览，可在仓库添加 `Gemfile` 并安装：
```
gem "github-pages", group: :jekyll_plugins
```
然后执行：
```
bundle install
bundle exec jekyll serve
```
访问 `http://localhost:4000` 预览（如配置了 `baseurl`，路径为 `/baseurl`）。

## 许可证
见 `LICENSE`。
