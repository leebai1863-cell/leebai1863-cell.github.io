---
layout: page
title: Scholarly Seminars
permalink: /scholarly seminars
description: 实验室例会与学术报告
nav: true
nav_order: 4
display_categories: [Presentations, Conferences]
horizontal: false
---

<!-- 1. 导航栏单行显示样式 -->
<style>
  nav a[href="/scholarly seminars"] {
    white-space: nowrap !important; /* 导航栏标题单行 */
  }

  /* 2. 左侧图片+右侧标题简介 单行布局核心样式（无日期） */
  .single-line-item {
    display: flex !important;
    align-items: center !important; /* 垂直居中 */
    margin: 1.5em 0 !important;
    width: 100% !important;
    padding: 10px !important;
    border-bottom: 1px solid #eee !important; /* 分隔线（可选） */
  }
  .item-img {
    flex: 0 0 20% !important; /* 图片占20%宽度 */
    padding-right: 15px !important;
  }
  .item-img img {
    width: 100% !important;
    height: 80px !important; /* 固定图片高度 */
    object-fit: cover !important; /* 图片不变形 */
    border-radius: 6px !important;
  }
  .item-text {
    flex: 1 !important; /* 文本占剩余宽度 */
    white-space: nowrap !important; /* 强制单行 */
    overflow: hidden !important; /* 隐藏超出部分 */
    text-overflow: ellipsis !important; /* 省略号 */
  }
  .item-text h5 {
    margin: 0 !important;
    font-size: 16px !important;
    font-weight: 600 !important;
  }
  .item-text p {
    margin: 3px 0 0 !important;
    font-size: 14px !important;
    color: #6c757d !important; /* 简介灰色调 */
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
</style>

<!-- 页面标题下方的说明文本 -->
<h4>学术交流活动列表</h4>

<!-- 核心：自动遍历项目文件，读取元数据生成单行条目 -->
{% if site.enable_project_categories and page.display_categories %}
  <!-- 按分类遍历（匹配你原有配置的 Presentations/Conferences） -->
  {% for category in page.display_categories %}
    {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
    <!-- 遍历当前分类下的所有项目文件 -->
    {% for project in categorized_projects %}
      <div class="single-line-item">
        <!-- 左侧图片：自动读取项目文件的 img 配置 -->
        <div class="item-img">
          {% if project.img %}
            <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
          {% else %}
            <!-- 无图片时显示默认图（可替换为你的默认图路径） -->
            <img src="{{ 'assets/img/default.jpg' | relative_url }}" alt="默认图片">
          {% endif %}
        </div>
        <!-- 右侧标题+简介：自动读取项目文件的 title/description -->
        <div class="item-text">
          <h5>{{ project.title }}</h5>
          <p>{{ project.description }}</p> <!-- 自动读取简介，单行截断 -->
        </div>
      </div>
    {% endfor %}
  {% endfor %}
{% else %}
  <!-- 无分类时，遍历所有项目文件 -->
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    <div class="single-line-item">
      <div class="item-img">
        {% if project.img %}
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        {% else %}
          <img src="{{ 'assets/img/default.jpg' | relative_url }}" alt="默认图片">
        {% endif %}
      </div>
      <div class="item-text">
        <h5>{{ project.title }}</h5>
        <p>{{ project.description }}</p>
      </div>
    </div>
  {% endfor %}
{% endif %}

<!-- 原有项目展示模块（保留，可选删除） -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
{% assign sorted_projects = site.projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>