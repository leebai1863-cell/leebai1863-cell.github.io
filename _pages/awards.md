---
layout: default
permalink: /student-competitions/
title: 学生竞赛获奖
nav: true
nav_order: 7
---

# 学生竞赛获奖

<div class="container mt-4">

<!-- 统计信息 -->
<div class="row mb-4">
  <div class="col-md-12">
    <div class="alert alert-success">
      <div class="row text-center">
        <div class="col">
          <h3 class="mb-1">{{ site.data.competitions.size }}</h3>
          <p class="mb-0 text-muted">获奖总数</p>
        </div>
        <div class="col border-start">
          <h3 class="mb-1">{{ site.data.competitions | where: "level", 1 | size }}</h3>
          <p class="mb-0 text-muted">国家级一等奖</p>
        </div>
        <div class="col border-start">
          <h3 class="mb-1">{{ site.data.competitions | where: "level", 2 | size }}</h3>
          <p class="mb-0 text-muted">国家级二等奖</p>
        </div>
        <div class="col border-start">
          <h3 class="mb-1">{{ site.data.competitions | where: "level", 3 | size }}</h3>
          <p class="mb-0 text-muted">国家级三等奖</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 特殊成就 -->
<div class="row mb-5">
  <div class="col-md-12">
    <div class="card border-warning">
      <div class="card-body">
        <h5 class="card-title">🎉 团队荣誉</h5>
        <p class="card-text">
          硕士研究生<strong>张梦影</strong>带队的"基于果枝状态与力杠杆分离的猕猴桃疏果机器人"项目，连续三年入围"中国研究生机器人创新设计大赛"全国总决赛，<strong>全校唯一</strong>！
        </p>
      </div>
    </div>
  </div>
</div>

<!-- 按时间排序，新的在前 -->
{% assign sorted_competitions = site.data.competitions | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}

{% assign current_year = 0 %}
{% assign current_month = 0 %}

{% for comp in sorted_competitions %}
  {% if comp.year != current_year %}
    {% if current_year != 0 %}</div>{% endif %}
    <h2 class="mt-5 mb-3">{{ comp.year }}年</h2>
    <div class="ms-3">
    {% assign current_year = comp.year %}
    {% assign current_month = 0 %}
  {% endif %}
  
  {% if comp.month != current_month %}
    {% if current_month != 0 %}</div>{% endif %}
    <h4 class="mt-4 mb-3">{{ comp.month }}月</h4>
    <div class="ms-3">
    {% assign current_month = comp.month %}
  {% endif %}
  
  <div class="competition-item mb-3">
    <div class="d-flex justify-content-between align-items-start mb-1">
      <div>
        <strong>{{ comp.competition }}</strong>
        {% if comp.name != comp.competition %}
        <div class="text-muted small">项目：{{ comp.name }}</div>
        {% endif %}
      </div>
      <span class="badge 
        {% if comp.level == 0 %}bg-warning text-dark
        {% elsif comp.level == 1 %}bg-danger
        {% elsif comp.level == 2 %}bg-warning text-dark
        {% elsif comp.level == 3 %}bg-info
        {% elsif comp.level == 4 %}bg-success
        {% elsif comp.level == 5 %}bg-primary
        {% else %}bg-secondary
        {% endif %}">
        {{ comp.level_name }}
      </span>
    </div>
    
    <div class="mb-1">
      <span class="badge bg-light text-dark me-2">
        <i class="fas fa-user-graduate"></i> {{ comp.team_leader }}
      </span>
      <span class="text-muted small">{{ comp.note }}</span>
    </div>
    
    {% if comp.achievement != "" %}
    <div class="alert alert-light p-2 mt-2 mb-0">
      <i class="fas fa-trophy text-warning"></i> {{ comp.achievement }}
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

</div>

<style>
.competition-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #28a745;
  margin-bottom: 1rem;
}

.competition-item:hover {
  background: #e9ecef;
  transition: background-color 0.2s ease;
}

.competition-item .badge {
  font-size: 0.85em;
  padding: 0.35em 0.65em;
}

.alert-light {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #28a745;
  padding-bottom: 10px;
}

h4 {
  color: #495057;
  font-weight: 600;
}
</style>