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
  <h1 class="display-5 mb-3">Awards</h1>
  <p class="lead text-muted">Academic and competition achievements</p>
</div>

<!-- 统计信息 -->
<div class="stats-summary mt-4 mb-5">
  <div class="row g-3">
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-4" id="total-awards">
          {{ site.data.awards | size }}
        </div>
        <div class="stat-label text-muted">Total Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-4" id="student-awards-count">
          {% assign student_count = site.data.awards | where: "type", "学生" | size %}
          {{ student_count }}
        </div>
        <div class="stat-label text-muted">Student Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-4" id="first-prizes-count">
          {% assign first_prizes = site.data.awards | where: "level", 1 | size %}
          {{ first_prizes }}
        </div>
        <div class="stat-label text-muted">First Prizes</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-4" id="years-count">
          {% assign years = site.data.awards | map: "year" | uniq %}
          {{ years | size }}
        </div>
        <div class="stat-label text-muted">Years</div>
      </div>
    </div>
  </div>
</div>

<!-- 第一部分：导师获奖 -->
<div class="faculty-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="mb-3">Faculty Awards</h2>
    <p class="section-subtitle text-muted">Awards and honors received by faculty members</p>
  </div>

  <!-- 按年份分组的导师奖项 -->
  {% assign faculty_awards = site.data.awards | where: "type", "导师" | sort: "year" | reverse | group_by: "year" %}
  
  {% if faculty_awards.size > 0 %}
    {% for year_group in faculty_awards %}
    <div class="year-group mb-4">
      <h4 class="mb-3 pb-2 border-bottom">{{ year_group.name }}</h4>
      <div class="row">
        {% for award in year_group.items %}
        <div class="col-lg-6 mb-4">
          <div class="teacher-award-card card h-100 border-start border-3">
            <div class="card-body">
              <h5 class="card-title mb-2">{{ award.title }}</h5>
              
              <div class="mb-2">
                {% if award.organization %}
                <span class="badge bg-light text-dark me-2">
                  <i class="fas fa-building me-1"></i>{{ award.organization }}
                </span>
                {% endif %}
                <span class="badge bg-light text-dark">
                  <i class="far fa-calendar me-1"></i>{{ award.year }}-{{ award.month | default: "01" | prepend: "00" | slice: -2, 2 }}
                </span>
              </div>
              
              {% if award.description %}
              <div class="teacher-award-description mb-3">
                {{ award.description }}
              </div>
              {% endif %}
              
              <div class="d-flex justify-content-between align-items-center">
                <span class="badge {% if award.level == 0 %}bg-warning text-dark
                                   {% elsif award.level == 1 %}bg-danger
                                   {% elsif award.level == 2 %}bg-warning text-dark
                                   {% elsif award.level == 3 %}bg-info
                                   {% elsif award.level == 4 %}bg-success
                                   {% else %}bg-secondary{% endif %}">
                  {{ award.level_name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="text-center py-4 border rounded bg-light">
      <i class="fas fa-award fa-2x text-muted mb-3"></i>
      <p class="text-muted mb-0">No faculty awards recorded yet</p>
    </div>
  {% endif %}
</div>

<hr class="my-5">

<!-- 第二部分：学生获奖 -->
<div class="student-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="mb-3">Student Awards</h2>
    <p class="section-subtitle text-muted">Competition and academic achievements by students</p>
  </div>
  
  <!-- 按年份分组的学生奖项 -->
  {% assign student_awards = site.data.awards | where: "type", "学生" | sort: "year" | reverse | group_by: "year" %}
  
  {% if student_awards.size > 0 %}
    {% for year_group in student_awards %}
    <div class="year-group mb-4">
      <h4 class="mb-3 pb-2 border-bottom">{{ year_group.name }}</h4>
      <div class="student-awards-list">
        {% for award in year_group.items %}
        <div class="student-award-item border-bottom pb-3 mb-3">
          <div class="row">
            <div class="col-md-8">
              <h5 class="mb-1">{{ award.competition | default: award.title }}</h5>
              
              {% if award.title != award.competition %}
              <div class="project-info mb-2">
                <small class="text-muted">
                  <i class="fas fa-project-diagram me-1"></i>
                  {{ award.title }}
                </small>
              </div>
              {% endif %}
              
              <div class="student-info mb-2">
                <span class="badge bg-light text-dark">
                  <i class="fas fa-user-graduate me-1"></i>
                  {{ award.participant | default: "Team" }}
                </span>
                {% if award.organization %}
                <span class="badge bg-light text-dark ms-2">
                  <i class="fas fa-university me-1"></i>
                  {{ award.organization }}
                </span>
                {% endif %}
              </div>
              
              {% if award.note %}
              <div class="note-info">
                <div class="alert alert-light py-2 px-3 mb-0 small">
                  <i class="fas fa-star me-1"></i>
                  {{ award.note }}
                </div>
              </div>
              {% endif %}
            </div>
            
            <div class="col-md-4 text-md-end">
              <div class="mb-2">
                <span class="badge {% if award.level == 0 %}bg-warning text-dark
                                   {% elsif award.level == 1 %}bg-danger
                                   {% elsif award.level == 2 %}bg-warning text-dark
                                   {% elsif award.level == 3 %}bg-info
                                   {% elsif award.level == 4 %}bg-success
                                   {% else %}bg-secondary{% endif %}">
                  {{ award.level_name }}
                </span>
              </div>
              <div class="text-muted small">
                {{ award.year }}-{{ award.month | default: "01" | prepend: "00" | slice: -2, 2 }}
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  {% else %}
    <div class="text-center py-4 border rounded bg-light">
      <i class="fas fa-graduation-cap fa-2x text-muted mb-3"></i>
      <p class="text-muted mb-0">No student awards recorded yet</p>
    </div>
  {% endif %}
</div>

</div>

<style>
.awards-page {
  padding-bottom: 3rem;
}

.page-header {
  padding: 2rem 0;
}

.display-5 {
  font-weight: 700;
  color: #2c3e50;
}

.lead {
  font-size: 1.1rem;
}

/* 区块标题 */
.section-header {
  padding-bottom: 1rem;
}

.section-header h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.section-subtitle {
  font-size: 0.9rem;
}

/* 年份分组 */
.year-group {
  margin-bottom: 2rem;
}

.year-group h4 {
  color: #495057;
  font-weight: 600;
}

/* 导师获奖卡片样式 */
.teacher-award-card {
  transition: box-shadow 0.2s;
  height: 100%;
}

.teacher-award-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.teacher-award-card .border-start {
  border-left-color: #0d6efd !important;
}

.teacher-award-card .card-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2c3e50;
}

.teacher-award-description {
  color: #495057;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 学生奖项项 */
.student-award-item:last-child {
  border-bottom: none !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.student-award-item h5 {
  font-weight: 500;
  font-size: 1.05rem;
  color: #2c3e50;
}

/* 统计盒子 */
.stat-box {
  background: white;
  border: 1px solid #e9ecef;
}

.stat-value {
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
}

/* 徽章样式 */
.badge {
  font-weight: 500;
  padding: 0.4em 0.8em;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-info {
  background-color: #17a2b8 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 1rem 0;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.3rem;
  }
  
  .year-group h4 {
    font-size: 1.2rem;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
  
  .student-award-item .col-md-4 {
    text-align: left !important;
    margin-top: 1rem;
  }
}

/* 分割线 */
hr {
  border: 0;
  height: 1px;
  background: #dee2e6;
}

/* 空状态 */
.text-center .fa-2x {
  opacity: 0.5;
}
</style>