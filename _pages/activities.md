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
</div>---
# 页面Front Matter配置（Jekyll静态站点核心配置）
layout: page               # 指定页面使用的布局模板为page（对应_layouts/page.html）
title: Activities          # 页面标题，会显示在浏览器标签/页面头部
permalink: /activities/    # 页面的URL路径，访问域名/activities/即可打开此页面
description: 实验室集体活动 # 页面描述，用于SEO和页面元信息
nav: true                  # 是否在网站导航栏显示该页面（true=显示）
nav_order: 5               # 导航栏中的排序优先级，数字越小越靠前（此处为第5位）
horizontal: false          # 活动卡片的展示方式：false=垂直卡片，true=水平卡片
---

<!-- 
  自定义CSS样式：强制每个活动卡片独占整行显示
  覆盖默认的响应式列布局（原布局是移动端1列、桌面端2/3列）
-->
<style>
  /* 针对activities容器下的响应式布局类，强制改为块级显示（取消多列） */
  .activities .row-cols-1.row-cols-md-3 {
    display: block !important;  /* 覆盖默认flex布局，改为块级 */
  }
  
  /* 强制桌面端3列布局下的每个卡片占100%宽度（独占一行） */
  .activities .row-cols-1.row-cols-md-3 > * {
    width: 100% !important;     /* 宽度100% */
    max-width: 100% !important; /* 最大宽度限制为100%，防止溢出 */
    flex: 0 0 100% !important;  /* 取消flex弹性布局的列分配，强制占满整行 */
  }
  
  /* 针对桌面端2列布局的样式覆盖（逻辑同上） */
  .activities .row-cols-1.row-cols-md-2 {
    display: block !important;
  }
  
  /* 强制桌面端2列布局下的每个卡片占100%宽度（独占一行） */
  .activities .row-cols-1.row-cols-md-2 > * {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
</style>

<!-- 活动列表主容器：所有活动内容包裹在这个div中，方便样式统一控制 -->
<div class="activities">
{% if site.enable_activity_categories and page.display_categories %}
  <!-- 分支1：开启分类功能且页面指定了要显示的分类时，渲染分类式活动列表 -->
  {% for category in page.display_categories %}
  <!-- 关键修改：移除锚点链接<a>标签，仅保留分类标题（无跳转功能） -->
  <h2 class="category" id="{{ category }}">{{ category }}</h2>
  <!-- 筛选当前分类下的所有活动：从site.activities中筛选category字段匹配的活动 -->
  {% assign categorized_activities = site.activities | where: "category", category %}
  <!-- 对当前分类的活动排序：按importance字段降序（数值越大越靠前） -->
  {% assign sorted_activities = categorized_activities | sort: "importance" | reverse %}
  <!-- 生成每个活动的卡片 -->
  {% if page.horizontal %}
  <!-- 水平卡片布局：容器+2列响应式行 -->
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for activity in sorted_activities %}
      <!-- 引入水平卡片模板：activities_horizontal.liquid -->
      {% include activities_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <!-- 垂直卡片布局：3列响应式行（移动端1列，桌面端3列，已被CSS强制为1列） -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for activity in sorted_activities %}
      <!-- 引入垂直卡片模板：activities.liquid -->
      {% include activities.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}
<!-- 分支2：未开启分类功能或页面未指定分类时，渲染无分类的活动列表 -->
<!-- 对所有活动排序：按importance字段降序 -->
{% assign sorted_activities = site.activities | sort: "importance" | reverse %}
  {% if page.horizontal %}
  <!-- 水平卡片布局 -->
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for activity in sorted_activities %}
      {% include activities_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <!-- 垂直卡片布局 -->
  <div class="row row-cols-1 row-cols-md-3">
    {% for activity in sorted_activities %}
      {% include activities.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>