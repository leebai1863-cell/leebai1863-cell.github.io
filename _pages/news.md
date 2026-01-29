---
layout: page
title: News
permalink: /news/
description: "Latest news and announcements"
nav: true
nav_order: 2
---

# News Archive

Here are all my recent news, announcements, and updates, sorted by date (newest first).

{% assign sorted_news = site.data.news | sort: 'date' | reverse %}

<div class="news-archive">
  {% for item in sorted_news %}
  
  <div class="news-item mb-5">
    
    <!-- 日期和分类标签 -->
    <div class="news-header mb-3">
      <span class="news-date badge bg-secondary">
        <i class="fas fa-calendar-alt me-1"></i>
        {{ item.date | date: "%B %d, %Y" }}
      </span>
      
      {% if item.category %}
        <span class="news-category badge bg-primary ms-2">
          {{ item.category }}
        </span>
      {% endif %}
    </div>
    
    <!-- 标题 -->
    <h2 class="news-title">
      {% if item.link and item.link != "" %}
        <a href="{{ item.link }}" target="_blank" class="text-decoration-none">
          {{ item.title }}
          <i class="fas fa-external-link-alt fa-xs ms-1"></i>
        </a>
      {% else %}
        {{ item.title }}
      {% endif %}
    </h2>
    
    <!-- 描述 -->
    <p class="news-description lead">
      {{ item.description }}
    </p>
    
    <!-- 详细内容（如果有） -->
    {% if item.content and item.content != "" %}
      <div class="news-content mt-3">
        {{ item.content | markdownify }}
      </div>
    {% endif %}
    
    <!-- 图片（如果有） -->
    {% if item.image and item.image != "" %}
      <div class="news-image mt-3">
        <img src="{{ item.image | relative_url }}" 
             class="img-fluid rounded" 
             alt="{{ item.title }}"
             style="max-height: 400px; object-fit: cover; width: 100%;">
      </div>
    {% endif %}
    
    <!-- 标签 -->
    {% if item.tags and item.tags.size > 0 %}
      <div class="news-tags mt-3">
        {% for tag in item.tags %}
          <span class="badge bg-light text-dark border me-1 mb-1">
            <i class="fas fa-hashtag fa-xs me-1"></i>{{ tag }}
          </span>
        {% endfor %}
      </div>
    {% endif %}
    
    <!-- 额外链接 -->
    {% if item.link or item.pdf or item.slides or item.video %}
      <div class="news-links mt-3">
        {% if item.link and item.link != "" %}
          <a href="{{ item.link }}" class="btn btn-outline-primary btn-sm me-2" target="_blank">
            <i class="fas fa-external-link-alt me-1"></i> Read More
          </a>
        {% endif %}
        
        {% if item.pdf and item.pdf != "" %}
          <a href="{{ item.pdf | relative_url }}" class="btn btn-outline-secondary btn-sm me-2">
            <i class="fas fa-file-pdf me-1"></i> PDF
          </a>
        {% endif %}
        
        {% if item.slides and item.slides != "" %}
          <a href="{{ item.slides | relative_url }}" class="btn btn-outline-secondary btn-sm me-2">
            <i class="fas fa-chalkboard me-1"></i> Slides
          </a>
        {% endif %}
        
        {% if item.video and item.video != "" %}
          <a href="{{ item.video }}" class="btn btn-outline-secondary btn-sm me-2" target="_blank">
            <i class="fas fa-video me-1"></i> Video
          </a>
        {% endif %}
      </div>
    {% endif %}
    
  </div>
  
  <!-- 分隔线（除最后一条外） -->
  {% unless forloop.last %}
    <hr class="my-5">
  {% endunless %}
  
  {% endfor %}
</div>

<!-- 如果没有任何 News -->
{% if sorted_news.size == 0 %}
  <div class="text-center py-5">
    <i class="fas fa-newspaper fa-3x text-muted mb-3"></i>
    <h3>No news yet</h3>
    <p class="text-muted">Check back later for updates.</p>
  </div>
{% endif %}

<style>
/* 自定义样式 */
.news-item {
  transition: all 0.3s ease;
}

.news-item:hover {
  background-color: rgba(0,0,0,0.01);
  padding: 10px;
  border-radius: 8px;
}

.news-title {
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.news-description {
  color: #555;
  font-size: 1.1rem;
}

.news-content {
  color: #444;
  line-height: 1.6;
}

.news-image img {
  transition: transform 0.3s ease;
}

.news-image img:hover {
  transform: scale(1.01);
}
</style>