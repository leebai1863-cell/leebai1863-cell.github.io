---
layout: page
title: Scholarly Seminars
permalink: /scholarly-seminars  # 优化URL空格问题（建议保留）
description: 实验室例会与学术报告
nav: true
nav_order: 4
display_categories: [Presentations, Conferences]
horizontal: false
---

<!-- 自定义字体样式 -->
<style>
  /* 1. 页面标题样式：汉字黑体，英文Times New Roman */
  .page-header h1 {
    font-family: "Times New Roman", 黑体, sans-serif !important;
  }

  /* 2. 页面描述样式：汉字楷体，英文Times New Roman */
  .page-description {
    font-family: "Times New Roman", 楷体, sans-serif !important;
    font-size: 16px !important; /* 基础字号，可按需调整 */
  }

  /* 3. 正文内容样式：汉字宋体，英文Times New Roman，字号略大于描述 */
  .projects {
    font-family: "Times New Roman", 宋体, sans-serif !important;
    font-size: 17px !important; /* 比描述的16px大1px，可按需调整 */
  }

  /* 分类标题（Presentations/Conferences）也应用正文样式 */
  .projects .category {
    font-family: "Times New Roman", 宋体, sans-serif !important;
    font-size: 17px !important;
  }

  /* 项目卡片内文字统一应用正文样式 */
  .card-body {
    font-family: "Times New Roman", 宋体, sans-serif !important;
    font-size: 17px !important;
  }

  /* 图片说明文字也适配正文样式 */
  .caption {
    font-family: "Times New Roman", 宋体, sans-serif !important;
    font-size: 17px !important;
  }
</style>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
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

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

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