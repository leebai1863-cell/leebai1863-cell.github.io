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

<!-- 样式：导航栏+卡片+图片 -->
<style>
  /* 导航栏文本不换行 */
  nav a[href="/scholarly seminars"] {
    white-space: nowrap !important;
  }

  /* 项目卡片样式 */
  .project-card {
    margin-bottom: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: box-shadow 0.2s ease;
  }
  .project-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  /* 核心：图片样式（强制读取project第一张图） */
  .project-img {
    width: 100%;
    height: 180px;
    object-fit: cover; /* 保证图片不变形 */
    display: block; /* 消除图片底部空白 */
  }

  /* 内容区域样式 */
  .project-content {
    padding: 15px;
  }
  .project-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    text-decoration: none;
  }
  .project-title:hover {
    color: #007bff;
  }
  .project-desc {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }
  .card-link {
    text-decoration: none;
  }
</style>

<!-- 页面主体：强制读取project第一张图片 -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 有分类场景 -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4">
      <!-- 卡片链接 -->
      <a href="{{ project.url | relative_url }}" class="card-link">
        <div class="project-card row g-0">
          <!-- 左侧3列：强制读取project的第一张图片 -->
          <div class="col-md-3">
            {% comment %} 核心逻辑：优先用project的image字段（第一张图），无则用默认图 {% endcomment %}
            {% assign project_image = project.image | default: "/assets/images/default-seminar.jpg" %}
            <img 
              src="{{ project_image | absolute_url }}"  <!-- 强制解析为绝对路径，避免路径错误 -->
              class="project-img" 
              alt="{{ project.title | escape }}"  <!-- 转义特殊字符，避免alt属性出错 -->
              <!-- 图片加载失败时兜底 -->
              onerror="this.src='{{ '/assets/images/default-seminar.jpg' | absolute_url }}'"
            >
          </div>
          <!-- 右侧9列：标题+描述 -->
          <div class="col-md-9">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description | truncate: 200 }}</p> <!-- 描述过长时截断 -->
            </div>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
  {% endfor %}

{% else %}
  <!-- 无分类场景 -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row">
    {% for project in sorted_projects %}
    <div class="col-12 mb-4">
      <a href="{{ project.url | relative_url }}" class="card-link">
        <div class="project-card row g-0">
          <div class="col-md-3">
            {% assign project_image = project.image | default: "/assets/images/default-seminar.jpg" %}
            <img 
              src="{{ project_image | absolute_url }}"
              class="project-img" 
              alt="{{ project.title | escape }}"
              onerror="this.src='{{ '/assets/images/default-seminar.jpg' | absolute_url }}'"
            >
          </div>
          <div class="col-md-9">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description | truncate: 200 }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
{% endif %}
</div>