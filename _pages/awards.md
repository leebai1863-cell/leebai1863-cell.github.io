---
layout: default
permalink: /awards/
title: 奖项与荣誉
nav: true
nav_order: 6
---

# 奖项与荣誉

<div class="container py-4">
  
  <!-- 统计信息 -->
  <div class="row mb-5">
    <div class="col-md-12">
      <div class="alert alert-info">
        <div class="row text-center">
          <div class="col">
            <h3 class="mb-1">{{ site.data.awards.size }}</h3>
            <p class="mb-0 text-muted">总奖项数</p>
          </div>
          <div class="col border-start">
            <h3 class="mb-1">{{ site.data.awards | where: "level", 1 | size }}</h3>
            <p class="mb-0 text-muted">国家级一等奖</p>
          </div>
          <div class="col border-start">
            <h3 class="mb-1">{{ site.data.awards | where: "level", 2 | size }}</h3>
            <p class="mb-0 text-muted">国家级二等奖</p>
          </div>
          <div class="col border-start">
            <h3 class="mb-1">{{ site.data.awards | where: "level", 4 | size }}</h3>
            <p class="mb-0 text-muted">省级一等奖</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 按等级分组显示，等级从高到低 -->
  {% assign awards_by_level = site.data.awards | group_by: "level" %}
  {% assign sorted_levels = awards_by_level | sort: "name" %}
  
  <!-- 先显示国家级奖项 -->
  <div class="national-awards mb-5">
    <h2 class="section-title mb-4">🏛️ 国家级奖项</h2>
    
    <!-- 国家级一等奖 -->
    {% assign national_first = site.data.awards | where: "level", 1 %}
    {% if national_first.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-primary">
        <i class="fas fa-trophy text-warning"></i> 国家级一等奖
        <span class="badge bg-primary ms-2">{{ national_first.size }}</span>
      </h3>
      {% assign sorted_awards = national_first | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
    
    <!-- 国家级二等奖 -->
    {% assign national_second = site.data.awards | where: "level", 2 %}
    {% if national_second.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-primary">
        <i class="fas fa-medal text-secondary"></i> 国家级二等奖
        <span class="badge bg-primary ms-2">{{ national_second.size }}</span>
      </h3>
      {% assign sorted_awards = national_second | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
    
    <!-- 国家级三等奖 -->
    {% assign national_third = site.data.awards | where: "level", 3 %}
    {% if national_third.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-primary">
        <i class="fas fa-award text-info"></i> 国家级三等奖
        <span class="badge bg-primary ms-2">{{ national_third.size }}</span>
      </h3>
      {% assign sorted_awards = national_third | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
  </div>
  
  <!-- 再显示省级奖项 -->
  <div class="provincial-awards">
    <h2 class="section-title mb-4">🏙️ 省部级奖项</h2>
    
    <!-- 省级一等奖 -->
    {% assign provincial_first = site.data.awards | where: "level", 4 %}
    {% if provincial_first.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-success">
        <i class="fas fa-trophy text-warning"></i> 省级一等奖
        <span class="badge bg-success ms-2">{{ provincial_first.size }}</span>
      </h3>
      {% assign sorted_awards = provincial_first | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
    
    <!-- 省级二等奖 -->
    {% assign provincial_second = site.data.awards | where: "level", 5 %}
    {% if provincial_second.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-success">
        <i class="fas fa-medal text-secondary"></i> 省级二等奖
        <span class="badge bg-success ms-2">{{ provincial_second.size }}</span>
      </h3>
      {% assign sorted_awards = provincial_second | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
    
    <!-- 省级三等奖 -->
    {% assign provincial_third = site.data.awards | where: "level", 6 %}
    {% if provincial_third.size > 0 %}
    <div class="award-level-section mb-4">
      <h3 class="level-title text-success">
        <i class="fas fa-award text-info"></i> 省级三等奖
        <span class="badge bg-success ms-2">{{ provincial_third.size }}</span>
      </h3>
      {% assign sorted_awards = provincial_third | sort: "date" | reverse %}
      <div class="award-items">
        {% for award in sorted_awards %}
        {% include award_item.html award=award %}
        {% endfor %}
      </div>
    </div>
    {% endif %}
  </div>
  
</div>

<style>
.section-title {
  border-bottom: 3px solid;
  padding-bottom: 10px;
  font-weight: 600;
}

.national-awards .section-title {
  border-color: #0d6efd;
  color: #0d6efd;
}

.provincial-awards .section-title {
  border-color: #198754;
  color: #198754;
}

.level-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(0,0,0,0.1);
}

.award-items {
  padding-left: 1.5rem;
}

.award-item {
  position: relative;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-left: 4px solid #0d6efd;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.award-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

.award-item.national-first {
  border-left-color: #ffc107;
}

.award-item.national-second {
  border-left-color: #6c757d;
}

.award-item.national-third {
  border-left-color: #0dcaf0;
}

.award-item.provincial-first {
  border-left-color: #198754;
}

.award-item.provincial-second {
  border-left-color: #20c997;
}

.award-item.provincial-third {
  border-left-color: #6f42c1;
}

.award-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.award-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.award-year {
  background: #f8f9fa;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.award-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.meta-item {
  font-size: 0.9rem;
  color: #6c757d;
}

.meta-item i {
  width: 16px;
  text-align: center;
  margin-right: 4px;
}

.award-description {
  color: #495057;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.award-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-award {
  padding: 0.375rem 0.75rem;
  font-size: 0.85rem;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.btn-award:hover {
  text-decoration: none;
}

@media (max-width: 768px) {
  .award-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .award-year {
    margin-top: 0.5rem;
  }
  
  .award-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>