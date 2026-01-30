---
layout: default
permalink: /awards/
title: Awards
nav: true
nav_order: 6
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">Awards</h1>
    <p class="post-description">Academic achievements and honors</p>
  </header>

  <article>
    <!-- 统计概览 -->
    {% assign faculty_count = site.data.awards | where: "type", "导师" | size %}
    {% assign student_count = site.data.awards | where: "type", "学生" | size %}
    {% assign total_awards = site.data.awards | size %}
    {% assign years = site.data.awards | map: "year" | uniq | size %}
    
    <div class="awards-stats mb-4">
      <div class="row g-3">
        <div class="col-md-3 col-sm-6">
          <div class="card card-hover">
            <div class="card-body text-center">
              <div class="h3 mb-0">{{ total_awards }}</div>
              <div class="text-muted">Total Awards</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="card card-hover">
            <div class="card-body text-center">
              <div class="h3 mb-0">{{ faculty_count }}</div>
              <div class="text-muted">Faculty</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="card card-hover">
            <div class="card-body text-center">
              <div class="h3 mb-0">{{ student_count }}</div>
              <div class="text-muted">Students</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="card card-hover">
            <div class="card-body text-center">
              <div class="h3 mb-0">{{ years }}</div>
              <div class="text-muted">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 导师奖项 -->
    <section class="section mb-5">
      <h2 class="section-title mb-4">
        <i class="fas fa-chalkboard-teacher me-2 text-primary"></i>
        Faculty Awards
      </h2>
      
      {% assign faculty_awards = site.data.awards | where: "type", "导师" | sort: "year" | reverse | group_by: "year" %}
      
      {% for year_group in faculty_awards %}
      <div class="year-group mb-4">
        <h3 class="year-header">{{ year_group.name }}</h3>
        <div class="row">
          {% for award in year_group.items %}
          <div class="col-lg-6 col-md-12 mb-3">
            <div class="card award-card h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h4 class="card-title mb-1">{{ award.title }}</h4>
                  <span class="badge award-badge {{ award.level_name | slugify }}">
                    {{ award.level_name }}
                  </span>
                </div>
                
                {% if award.organization %}
                <div class="card-subtitle mb-2">
                  <i class="fas fa-university me-1"></i>
                  {{ award.organization }}
                </div>
                {% endif %}
                
                {% if award.description %}
                <p class="card-text">{{ award.description }}</p>
                {% endif %}
                
                <div class="card-footer bg-transparent border-0 px-0 pt-2">
                  <small class="text-muted">
                    <i class="far fa-calendar me-1"></i>
                    {{ award.year }}-{{ award.month | default: "01" | prepend: "00" | slice: -2, 2 }}
                  </small>
                </div>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </section>

    <hr class="my-5">

    <!-- 学生奖项 -->
    <section class="section">
      <h2 class="section-title mb-4">
        <i class="fas fa-graduation-cap me-2 text-success"></i>
        Student Awards
      </h2>
      
      {% assign student_awards = site.data.awards | where: "type", "学生" | sort: "year" | reverse | group_by: "year" %}
      
      {% for year_group in student_awards %}
      <div class="year-group mb-4">
        <h3 class="year-header">{{ year_group.name }}</h3>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Competition / Award</th>
                <th scope="col">Participants</th>
                <th scope="col">Level</th>
                <th scope="col">Project</th>
              </tr>
            </thead>
            <tbody>
              {% for award in year_group.items %}
              <tr>
                <td>
                  <strong>{{ award.competition | default: award.title }}</strong>
                  {% if award.organization %}
                  <div class="text-muted small">
                    {{ award.organization }}
                  </div>
                  {% endif %}
                </td>
                <td>{{ award.participant | default: "Team" }}</td>
                <td>
                  <span class="badge award-badge {{ award.level_name | slugify }}">
                    {{ award.level_name }}
                  </span>
                </td>
                <td>
                  {% if award.title != award.competition %}
                  <em>{{ award.title }}</em>
                  {% endif %}
                  {% if award.note %}
                  <div class="text-muted small mt-1">
                    <i class="fas fa-star me-1"></i>
                    {{ award.note }}
                  </div>
                  {% endif %}
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
      </div>
      {% endfor %}
    </section>
  </article>
</div>

<style>
/* 与al-folio主题保持一致 */
.post {
  max-width: 800px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 2rem;
}

.post-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.post-description {
  color: #6c757d;
  font-size: 1.1rem;
}

/* 卡片样式 */
.card-hover {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid rgba(0,0,0,.125);
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}

.award-card {
  border-left: 4px solid var(--card-border-color, #007bff);
  height: 100%;
}

.award-card .card-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.award-card .card-subtitle {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.award-card .card-text {
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 徽章样式 */
.award-badge {
  font-weight: 600;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
}

.badge.国家级一等奖,
.badge.特等奖国赛入围,
.badge.特等奖 {
  background-color: #dc3545;
  color: white;
}

.badge.国家级二等奖 {
  background-color: #fd7e14;
  color: white;
}

.badge.国家级三等奖 {
  background-color: #ffc107;
  color: #212529;
}

.badge.省级一等奖 {
  background-color: #28a745;
  color: white;
}

.badge.省级二等奖 {
  background-color: #17a2b8;
  color: white;
}

.badge.其他 {
  background-color: #6c757d;
  color: white;
}

/* 年份分组 */
.year-group {
  margin-bottom: 2.5rem;
}

.year-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #495057;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

/* 表格样式 */
.table {
  margin-bottom: 0;
}

.table th {
  font-weight: 600;
  color: #495057;
  border-bottom-width: 2px;
}

.table-hover tbody tr:hover {
  background-color: rgba(0,0,0,.02);
}

/* 响应式调整 */
@media (max-width: 767.98px) {
  .post {
    padding: 0 1rem;
  }
  
  .card-hover {
    margin-bottom: 1rem;
  }
  
  .award-card {
    margin-bottom: 1rem;
  }
  
  .table-responsive {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

/* 区块标题 */
.section-title {
  font-weight: 600;
  color: #2c3e50;
  position: relative;
  display: inline-block;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--section-color, #007bff);
}

.section-title.text-primary:after {
  background: #007bff;
}

.section-title.text-success:after {
  background: #28a745;
}

/* 分隔线 */
hr {
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #dee2e6, transparent);
}
</style>