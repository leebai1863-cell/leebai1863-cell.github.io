---
layout: page
title: Activities
permalink: /activities/
description: 实验室集体活动
nav: true
nav_order: 5
horizontal: false
---

<style>
  /* 强制每个活动占据整行 */
  .activities .row-cols-1.row-cols-md-3 {
    display: block !important;
  }
  
  .activities .row-cols-1.row-cols-md-3 > * {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
  
  .activities .row-cols-1.row-cols-md-2 {
    display: block !important;
  }
  
  .activities .row-cols-1.row-cols-md-2 > * {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
</style>

<!-- pages/activities.md -->
<div class="activities">
{% if site.enable_activity_categories and page.display_categories %}
  <!-- Display categorized activities -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_activities = site.activities | where: "category", category %}
  {% assign sorted_activities = categorized_activities | sort: "importance" | reverse %}
  <!-- Generate cards for each activity -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for activity in sorted_activities %}
      {% include activities_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for activity in sorted_activities %}
      {% include activities.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- Display activities without categories -->
{% assign sorted_activities = site.activities | sort: "importance" | reverse %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for activity in sorted_activities %}
      {% include activities_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for activity in sorted_activities %}
      {% include activities.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>