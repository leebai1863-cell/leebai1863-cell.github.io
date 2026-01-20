---
# Jekyll 页面前置配置
layout: page
title: Scholarly Seminars
permalink: /scholarly-seminars  # 关键：URL 无空格，匹配导航栏 href
description: 实验室例会与学术报告
nav: true
nav_order: 4
display_categories: [Presentations, Conferences]
horizontal: false
---

<!-- 样式：导航栏+卡片+图片 -->
<style>
  /* 导航栏文本不换行（匹配新的permalink） */
  nav a[href="/scholarly-seminars"] {
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
    display: flex; /* 确保卡片布局稳定 */
    flex-direction: row;
  }
  .project-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  /* 核心：图片样式（适配180px高度） */
  .project-img {
    width: 100%;
    height: 180px;
    object-fit: cover; /* 保证图片不变形 */
    display: block; /* 消除图片底部空白 */
    border: none;
  }

  /* 内容区域样式 */
  .project-content {
    padding: 15px;
    height: 100%; /* 与图片高度匹配 */
    display: flex;
    flex-direction: column;
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
    flex: 1; /* 文本垂直对齐 */
  }
  .card-link {
    text-decoration: none;
    display: block; /* 链接覆盖整个卡片 */
  }

  /* 响应式适配：小屏幕卡片堆叠 */
  @media (max-width: 768px) {
    .project-card {
      flex-direction: column;
    }
    .project-img {
      height: 200px; /* 小屏幕图片更高 */
    }
  }
</style>

<!-- 页面主体：读取_projects目录下的项目图片 -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- 有分类场景（匹配你的Conferences/Presentations分类） -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <div class="row gy-4"> <!-- 统一垂直间距 -->
    {% for project in sorted_projects %}
    <div class="col-12">
      <!-- 卡片链接 -->
      <a href="{{ project.url | relative_url }}" class="card-link">
        <div class="project-card">
          <!-- 左侧图片区域（3列） -->
          <div class="col-md-3 p-0"> <!-- 移除默认padding，图片占满容器 -->
            {% comment %} 核心修复：适配你的img路径（assets/img/xxx.jpg） {% endcomment %}
            {% assign raw_img_path = project.img | default: "assets/images/default-seminar.jpg" %}
            {% assign clean_img_path = raw_img_path | remove_first: "/" %} <!-- 移除开头多余的/ -->
            {% assign final_img_path = "/" | append: clean_img_path %} <!-- 拼接为 /assets/img/xxx.jpg -->
            
            <img 
              src="{{ final_img_path | absolute_url }}"  <!-- 生成绝对URL -->
              class="project-img" 
              alt="{{ project.title | escape }}"
              <!-- 兜底：图片加载失败显示默认图 -->
              onerror="this.onerror=null; this.src='{{ '/assets/images/default-seminar.jpg' | absolute_url }}'"
            >
          </div>
          <!-- 右侧内容区域（9列） -->
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
  {% endfor %}

{% else %}
  <!-- 无分类场景（备用） -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row gy-4">
    {% for project in sorted_projects %}
    <div class="col-12">
      <a href="{{ project.url | relative_url }}" class="card-link">
        <div class="project-card">
          <div class="col-md-3 p-0">
            {% assign raw_img_path = project.img | default: "assets/images/default-seminar.jpg" %}
            {% assign clean_img_path = raw_img_path | remove_first: "/" %}
            {% assign final_img_path = "/" | append: clean_img_path %}
            
            <img 
              src="{{ final_img_path | absolute_url }}"
              class="project-img" 
              alt="{{ project.title | escape }}"
              onerror="this.onerror=null; this.src='{{ '/assets/images/default-seminar.jpg' | absolute_url }}'"
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