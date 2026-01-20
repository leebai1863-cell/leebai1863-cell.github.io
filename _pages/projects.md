---
# Jekyll 页面前置配置
layout: page
title: Scholarly Seminars
permalink: /scholarly seminars
description: 实验室例会与学术报告
nav: true
nav_order: 4
display_categories: [Presentations, Conferences]
horizontal: false  # 保持false，我们自定义3:9布局
---

<!-- 强制导航栏文本单行显示 -->
<style>
  nav a[href="/scholarly seminars"] {
    white-space: nowrap !important;
  }
  /* 新增：美化项目卡片，让3:9布局更协调 */
  .project-card {
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .project-img {
    width: 100%;
    height: 180px; /* 固定图片高度，保证统一 */
    object-fit: cover; /* 图片等比裁剪，不拉伸 */
  }
  .project-content {
    padding: 15px;
  }
  .project-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .project-desc {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
  }
</style>

<!-- 页面主体：3:9布局的项目展示 -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 有分类的情况 -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- 核心：3列图片 + 9列内容的网格布局 -->
  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4"> <!-- 每一个project占整行，内部再分3:9 -->
      <div class="project-card row g-0"> <!-- g-0 消除列间距 -->
        <!-- 左侧3列：图片区域（md及以上屏幕生效，小屏幕自动占整行） -->
        <div class="col-md-3">
          <!-- 读取project文件中的image字段作为图片路径 -->
          <img src="{{ project.image | relative_url }}" class="project-img" 
               alt="{{ project.title }}">
        </div>
        <!-- 右侧9列：标题+描述区域 -->
        <div class="col-md-9">
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  {% endfor %}
{% else %}
  <!-- 无分类的情况（展示所有project） -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4">
      <div class="project-card row g-0">
        <div class="col-md-3">
          <img src="{{ project.image | relative_url }}" class="project-img" 
               alt="{{ project.title }}">
        </div>
        <div class="col-md-9">
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
{% endif %}
</div>