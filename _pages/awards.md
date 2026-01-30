---
layout: default
permalink: /awards/
title: Awards
nav: true
nav_order: 6
---

<div class="awards-page container mt-5">

<!-- 页面标题 -->
<div class="page-header text-center mb-5">
  <h1 class="mb-4">Awards</h1>
  <p class="lead text-muted">Academic and competition achievements</p>
</div>

<!-- 按类型切换 -->
<div class="awards-type-tabs mb-4">
  <ul class="nav nav-tabs" id="awardsTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">
        All Awards
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="faculty-tab" data-bs-toggle="tab" data-bs-target="#faculty" type="button" role="tab">
        Faculty
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="student-tab" data-bs-toggle="tab" data-bs-target="#student" type="button" role="tab">
        Students
      </button>
    </li>
  </ul>
</div>

<!-- 统计概览 -->
<div class="stats-summary mb-5">
  <div class="row g-2">
    <div class="col-6 col-md-3">
      <div class="border p-3 text-center">
        <div class="h4 mb-1">{{ site.data.awards | size }}</div>
        <small class="text-muted">Total</small>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="border p-3 text-center">
        <div class="h4 mb-1">{{ site.data.awards | where: "type", "导师" | size }}</div>
        <small class="text-muted">Faculty</small>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="border p-3 text-center">
        <div class="h4 mb-1">{{ site.data.awards | where: "type", "学生" | size }}</div>
        <small class="text-muted">Students</small>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="border p-3 text-center">
        <div class="h4 mb-1">
          {% assign years = site.data.awards | map: "year" | uniq %}
          {{ years | size }}
        </div>
        <small class="text-muted">Years</small>
      </div>
    </div>
  </div>
</div>

<!-- 奖项内容 -->
<div class="tab-content" id="awardsTabContent">
  <!-- 全部奖项 -->
  <div class="tab-pane fade show active" id="all" role="tabpanel">
    {% assign sorted_awards = site.data.awards | sort: "year" | reverse %}
    {% for award in sorted_awards %}
    <div class="award-item border-bottom py-3">
      <div class="d-flex justify-content-between align-items-start">
        <div class="flex-grow-1">
          <h5 class="mb-1">{{ award.title }}</h5>
          <div class="text-muted mb-1">
            {{ award.competition | default: award.organization }}
            {% if award.participant %}
            • {{ award.participant }}
            {% endif %}
          </div>
          {% if award.description %}
          <p class="mb-2">{{ award.description }}</p>
          {% endif %}
        </div>
        <div class="text-end ms-3">
          <span class="badge bg-secondary">{{ award.year }}</span>
          <div class="mt-1">
            <span class="badge 
              {% if award.level == 0 or award.level == 1 %}bg-warning text-dark
              {% elsif award.level == 2 or award.level == 3 %}bg-danger
              {% else %}bg-info{% endif %}">
              {{ award.level_name }}
            </span>
          </div>
        </div>
      </div>
      {% if award.note %}
      <div class="alert alert-light py-1 px-2 mt-2 mb-0 small">
        <i>Note:</i> {{ award.note }}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>

  <!-- 导师奖项 -->
  <div class="tab-pane fade" id="faculty" role="tabpanel">
    {% assign faculty_awards = site.data.awards | where: "type", "导师" | sort: "year" | reverse %}
    {% for award in faculty_awards %}
    <div class="award-item border-bottom py-3">
      <div class="d-flex justify-content-between align-items-start">
        <div class="flex-grow-1">
          <h5 class="mb-1">{{ award.title }}</h5>
          <div class="text-muted mb-1">
            {{ award.organization | default: award.competition }}
          </div>
          {% if award.description %}
          <p class="mb-2">{{ award.description }}</p>
          {% endif %}
        </div>
        <div class="text-end ms-3">
          <span class="badge bg-secondary">{{ award.year }}</span>
          <div class="mt-1">
            <span class="badge 
              {% if award.level == 0 or award.level == 1 %}bg-warning text-dark
              {% elsif award.level == 2 or award.level == 3 %}bg-danger
              {% else %}bg-info{% endif %}">
              {{ award.level_name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <!-- 学生奖项 -->
  <div class="tab-pane fade" id="student" role="tabpanel">
    {% assign student_awards = site.data.awards | where: "type", "学生" | sort: "year" | reverse %}
    {% for award in student_awards %}
    <div class="award-item border-bottom py-3">
      <div class="d-flex justify-content-between align-items-start">
        <div class="flex-grow-1">
          <h5 class="mb-1">{{ award.competition | default: award.title }}</h5>
          <div class="text-muted mb-1">
            {{ award.participant }}
            {% if award.organization %}
            • {{ award.organization }}
            {% endif %}
          </div>
          {% if award.title != award.competition %}
          <p class="mb-2 small">{{ award.title }}</p>
          {% endif %}
        </div>
        <div class="text-end ms-3">
          <span class="badge bg-secondary">{{ award.year }}</span>
          <div class="mt-1">
            <span class="badge 
              {% if award.level == 0 or award.level == 1 %}bg-warning text-dark
              {% elsif award.level == 2 or award.level == 3 %}bg-danger
              {% else %}bg-info{% endif %}">
              {{ award.level_name }}
            </span>
          </div>
        </div>
      </div>
      {% if award.note %}
      <div class="alert alert-light py-1 px-2 mt-2 mb-0 small">
        <i>Note:</i> {{ award.note }}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

</div>

<style>
.awards-page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header h1 {
  font-weight: 600;
  color: #2c3e50;
}

.lead {
  font-size: 1.1rem;
}

.award-item {
  transition: background-color 0.2s;
}

.award-item:hover {
  background-color: #f8f9fa;
}

.award-item h5 {
  font-weight: 500;
  color: #2c3e50;
}

.stats-summary .h4 {
  color: #495057;
  font-weight: 600;
}

.nav-tabs .nav-link {
  color: #6c757d;
  font-weight: 500;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
}

.nav-tabs .nav-link.active {
  color: #0d6efd;
  background-color: transparent;
  border-bottom: 2px solid #0d6efd;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.badge {
  font-weight: 500;
  padding: 0.4em 0.8em;
}

.alert-light {
  background-color: #f8f9fa;
  border-color: #e9ecef;
}
</style>