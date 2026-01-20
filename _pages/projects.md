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

<!-- 仅新增：强制Scholarly Seminars在导航栏单行显示 -->
<style>
  nav a[href="/scholarly seminars"] {
    white-space: nowrap !important;
  }
  
  /* 新增：确保项目卡片完全占据整行 */
  .projects .container,
  .projects .container-fluid {
    padding-left: 0 !important;
    padding-right: 0 !important;
    max-width: 100% !important;
  }
  
  .projects .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  .projects .col-12 {
    padding-left: 0 !important;
    padding-right: 0 !important;
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
  {% assign sorted_projects = categorized_projects | sort: "importance" | reverse %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container-fluid px-0">
    <div class="row no-gutters">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="container-fluid px-0">
    <div class="row no-gutters">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" | reverse %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container-fluid px-0">
    <div class="row no-gutters">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="container-fluid px-0">
    <div class="row no-gutters">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
    </div>
  </div>
  {% endif %}
{% endif %}
</div>