---
# Jekyll 页面前置配置
layout: page
title: Scholarly Seminars
permalink: /scholarly seminars
description: 实验室例会与学术报告
nav: true
nav_order: 4
display_categories: [Presentations, Conferences]
horizontal: false
---

<!-- 强制导航栏文本单行显示 + 项目卡片样式 -->
<style>
  /* 导航栏文本不换行 */
  nav a[href="/scholarly seminars"] {
    white-space: nowrap !important;
  }

  /* 项目卡片整体样式 */
  .project-card {
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: box-shadow 0.2s ease;
  }

  /* 卡片hover效果（可选，提升交互） */
  .project-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  /* 图片样式：3列宽度，固定高度，不拉伸 */
  .project-img {
    width: 100%;
    height: 180px;
    object-fit: cover; /* 等比裁剪，不拉伸 */
  }

  /* 内容区域内边距 */
  .project-content {
    padding: 15px;
  }

  /* 标题样式 */
  .project-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }

  /* 描述文本样式 */
  .project-desc {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }
</style>

<!-- 页面主体：3列图片 + 9列内容的项目展示 -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 有分类的场景：按分类展示项目 -->
  {% for category in page.display_categories %}
  <!-- 分类标题锚点 -->
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  <!-- 筛选当前分类的项目并按重要性排序 -->
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- 3:9布局的项目列表 -->
  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4"> <!-- 每个项目占整行 -->
      <div class="project-card row g-0"> <!-- 内部3:9分栏，消除列间距 -->
        <!-- 左侧3列：图片区域（移动端自动占整行） -->
        <div class="col-md-3">
          <img 
            src="{{ project.image | default: '/assets/images/default-seminar.jpg' }}" 
            class="project-img" 
            alt="{{ project.title }}"
            <!-- 图片加载失败时自动替换为默认图 -->
            onerror="this.src='/assets/images/default-seminar.jpg'"
          >
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
  <!-- 无分类的场景：展示所有项目 -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4">
      <div class="project-card row g-0">
        <div class="col-md-3">
          <img 
            src="{{ project.image | default: '/assets/images/default-seminar.jpg' }}" 
            class="project-img" 
            alt="{{ project.title }}"
            onerror="this.src='/assets/images/default-seminar.jpg'"
          >
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