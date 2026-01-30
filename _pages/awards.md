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
  <div class="d-flex align-items-center justify-content-center mb-3">
    <div class="header-icon me-3">
      <i class="fas fa-award fa-2x text-primary"></i>
    </div>
    <h1 class="mb-0">Awards & Honors</h1>
  </div>
  <p class="lead text-muted">Recognition of academic excellence and achievements</p>
</div>

<!-- 统计卡片 -->
<div class="stats-cards mb-5">
  <div class="row g-4">
    <div class="col-lg-3 col-md-6">
      <div class="stat-card shadow-sm border rounded-3 p-4 text-center">
        <div class="stat-icon mb-3">
          <i class="fas fa-trophy fa-2x text-warning"></i>
        </div>
        <div class="stat-number display-6 fw-bold mb-2" id="total-awards">
          {{ site.data.awards | size }}
        </div>
        <div class="stat-label text-muted">Total Awards</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card shadow-sm border rounded-3 p-4 text-center">
        <div class="stat-icon mb-3">
          <i class="fas fa-chalkboard-teacher fa-2x text-primary"></i>
        </div>
        <div class="stat-number display-6 fw-bold mb-2">
          {% assign faculty_count = site.data.awards | where: "type", "导师" | size %}
          {{ faculty_count }}
        </div>
        <div class="stat-label text-muted">Faculty</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card shadow-sm border rounded-3 p-4 text-center">
        <div class="stat-icon mb-3">
          <i class="fas fa-graduation-cap fa-2x text-success"></i>
        </div>
        <div class="stat-number display-6 fw-bold mb-2">
          {% assign student_count = site.data.awards | where: "type", "学生" | size %}
          {{ student_count }}
        </div>
        <div class="stat-label text-muted">Students</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card shadow-sm border rounded-3 p-4 text-center">
        <div class="stat-icon mb-3">
          <i class="fas fa-calendar-alt fa-2x text-info"></i>
        </div>
        <div class="stat-number display-6 fw-bold mb-2">
          {% assign years = site.data.awards | map: "year" | uniq %}
          {{ years | size }}
        </div>
        <div class="stat-label text-muted">Years</div>
      </div>
    </div>
  </div>
</div>

<!-- 导航标签 -->
<ul class="nav nav-pills mb-4 justify-content-center" id="awardsTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">
      <i class="fas fa-list me-2"></i>All Awards
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="faculty-tab" data-bs-toggle="tab" data-bs-target="#faculty" type="button" role="tab">
      <i class="fas fa-chalkboard-teacher me-2"></i>Faculty
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="student-tab" data-bs-toggle="tab" data-bs-target="#student" type="button" role="tab">
      <i class="fas fa-graduation-cap me-2"></i>Students
    </button>
  </li>
</ul>

<div class="tab-content" id="awardsTabContent">
  <!-- 全部奖项 -->
  <div class="tab-pane fade show active" id="all" role="tabpanel">
    {% assign all_awards = site.data.awards | sort: "year" | reverse | group_by: "year" %}
    {% for year_group in all_awards %}
    <div class="year-section mb-5">
      <div class="year-header d-flex align-items-center mb-4">
        <div class="year-badge bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
          <span class="h4 mb-0">{{ year_group.name }}</span>
        </div>
        <h2 class="mb-0">{{ year_group.name }}</h2>
      </div>
      
      <div class="row g-4">
        {% for award in year_group.items %}
        <div class="col-lg-6">
          <div class="award-card h-100 border rounded-3 shadow-sm p-4 position-relative hover-lift">
            <div class="award-type-badge position-absolute top-0 end-0 mt-3 me-3">
              {% if award.type == "导师" %}
              <span class="badge bg-primary">
                <i class="fas fa-chalkboard-teacher me-1"></i>Faculty
              </span>
              {% else %}
              <span class="badge bg-success">
                <i class="fas fa-graduation-cap me-1"></i>Student
              </span>
              {% endif %}
            </div>
            
            <div class="award-content">
              <h4 class="award-title mb-3">{{ award.title }}</h4>
              
              <div class="award-meta mb-3">
                {% if award.organization %}
                <div class="meta-item mb-2">
                  <i class="fas fa-university text-muted me-2"></i>
                  <span class="text-muted">{{ award.organization }}</span>
                </div>
                {% endif %}
                
                {% if award.competition %}
                <div class="meta-item mb-2">
                  <i class="fas fa-medal text-muted me-2"></i>
                  <span class="text-muted">{{ award.competition }}</span>
                </div>
                {% endif %}
                
                {% if award.participant %}
                <div class="meta-item mb-2">
                  <i class="fas fa-users text-muted me-2"></i>
                  <span class="text-muted">{{ award.participant }}</span>
                </div>
                {% endif %}
              </div>
              
              {% if award.description %}
              <div class="award-description mb-3">
                <p class="mb-0">{{ award.description }}</p>
              </div>
              {% endif %}
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="level-badge">
                  <span class="badge award-level level-{{ award.level }}">
                    {{ award.level_name }}
                  </span>
                </div>
                <div class="award-date text-muted">
                  <i class="far fa-calendar me-1"></i>
                  {{ award.year }}{% if award.month %}-{{ award.month }}{% endif %}
                </div>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  
  <!-- 导师奖项 -->
  <div class="tab-pane fade" id="faculty" role="tabpanel">
    {% assign faculty_awards = site.data.awards | where: "type", "导师" | sort: "year" | reverse | group_by: "year" %}
    {% for year_group in faculty_awards %}
    <div class="year-section mb-5">
      <div class="year-header d-flex align-items-center mb-4">
        <div class="year-badge bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
          <span class="h4 mb-0">{{ year_group.name }}</span>
        </div>
        <h2 class="mb-0">{{ year_group.name }}</h2>
      </div>
      
      <div class="row g-4">
        {% for award in year_group.items %}
        <div class="col-lg-6">
          <div class="award-card h-100 border rounded-3 shadow-sm p-4 position-relative hover-lift">
            <div class="award-content">
              <h4 class="award-title mb-3">{{ award.title }}</h4>
              
              <div class="award-meta mb-3">
                {% if award.organization %}
                <div class="meta-item mb-2">
                  <i class="fas fa-university text-muted me-2"></i>
                  <span class="text-muted">{{ award.organization }}</span>
                </div>
                {% endif %}
              </div>
              
              {% if award.description %}
              <div class="award-description mb-3">
                <p class="mb-0">{{ award.description }}</p>
              </div>
              {% endif %}
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="level-badge">
                  <span class="badge award-level level-{{ award.level }}">
                    {{ award.level_name }}
                  </span>
                </div>
                <div class="award-date text-muted">
                  <i class="far fa-calendar me-1"></i>
                  {{ award.year }}{% if award.month %}-{{ award.month }}{% endif %}
                </div>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  
  <!-- 学生奖项 -->
  <div class="tab-pane fade" id="student" role="tabpanel">
    {% assign student_awards = site.data.awards | where: "type", "学生" | sort: "year" | reverse | group_by: "year" %}
    {% for year_group in student_awards %}
    <div class="year-section mb-5">
      <div class="year-header d-flex align-items-center mb-4">
        <div class="year-badge bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
          <span class="h4 mb-0">{{ year_group.name }}</span>
        </div>
        <h2 class="mb-0">{{ year_group.name }}</h2>
      </div>
      
      <div class="row g-4">
        {% for award in year_group.items %}
        <div class="col-lg-6">
          <div class="award-card h-100 border rounded-3 shadow-sm p-4 position-relative hover-lift">
            <div class="award-content">
              <h4 class="award-title mb-3">{{ award.competition | default: award.title }}</h4>
              
              <div class="award-meta mb-3">
                {% if award.participant %}
                <div class="meta-item mb-2">
                  <i class="fas fa-users text-muted me-2"></i>
                  <span class="text-muted">{{ award.participant }}</span>
                </div>
                {% endif %}
                
                {% if award.organization %}
                <div class="meta-item mb-2">
                  <i class="fas fa-university text-muted me-2"></i>
                  <span class="text-muted">{{ award.organization }}</span>
                </div>
                {% endif %}
              </div>
              
              {% if award.title != award.competition %}
              <div class="award-project mb-3">
                <div class="d-flex align-items-start">
                  <i class="fas fa-project-diagram text-muted mt-1 me-2"></i>
                  <div>
                    <small class="text-muted">Project:</small>
                    <p class="mb-0">{{ award.title }}</p>
                  </div>
                </div>
              </div>
              {% endif %}
              
              {% if award.note %}
              <div class="award-note alert alert-light mb-3">
                <div class="d-flex align-items-center">
                  <i class="fas fa-star text-warning me-2"></i>
                  <div>{{ award.note }}</div>
                </div>
              </div>
              {% endif %}
              
              <div class="d-flex justify-content-between align-items-center">
                <div class="level-badge">
                  <span class="badge award-level level-{{ award.level }}">
                    {{ award.level_name }}
                  </span>
                </div>
                <div class="award-date text-muted">
                  <i class="far fa-calendar me-1"></i>
                  {{ award.year }}{% if award.month %}-{{ award.month }}{% endif %}
                </div>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

</div>

<style>
/* 主容器 */
.awards-page {
  padding-bottom: 4rem;
}

/* 页面标题 */
.page-header {
  padding: 3rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  margin: 2rem 0;
}

.header-icon {
  animation: fadeInDown 0.8s ease;
}

.page-header h1 {
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: -0.5px;
}

.lead {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* 统计卡片 */
.stat-card {
  transition: all 0.3s ease;
  background: white;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
}

.stat-icon {
  opacity: 0.9;
}

.stat-number {
  color: #2c3e50;
}

/* 导航标签 */
.nav-pills {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1rem;
}

.nav-pills .nav-link {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: #6c757d;
  transition: all 0.2s ease;
  border-radius: 30px;
  margin: 0 0.25rem;
}

.nav-pills .nav-link.active {
  background-color: #0d6efd;
  color: white;
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
}

.nav-pills .nav-link:hover:not(.active) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

/* 年份部分 */
.year-section {
  animation: fadeInUp 0.5s ease;
}

.year-header {
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
  margin-bottom: 2rem;
}

.year-badge {
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* 奖项卡片 */
.award-card {
  transition: all 0.3s ease;
  background: white;
  border: 1px solid #e9ecef !important;
}

.award-card.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
  border-color: #0d6efd !important;
}

.award-title {
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.3;
  padding-right: 60px;
}

.award-meta .meta-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.award-description {
  color: #495057;
  line-height: 1.6;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #0d6efd;
}

.award-project {
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #20c997;
}

.award-note {
  background: #fff9e6 !important;
  border: 1px solid #ffecb5 !important;
  border-radius: 8px !important;
  padding: 0.75rem !important;
  font-size: 0.9rem;
}

/* 等级徽章 */
.award-level {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  min-width: 100px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.level-0 { /* 特等奖/国赛入围 */
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #856404;
}

.level-1 { /* 国家级一等奖 */
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
}

.level-2 { /* 国家级二等奖 */
  background: linear-gradient(135deg, #fd7e14, #e9690c);
  color: white;
}

.level-3 { /* 国家级三等奖 */
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
}

.level-4 { /* 省级一等奖 */
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.level-5 { /* 省级二等奖 */
  background: linear-gradient(135deg, #6f42c1, #59359a);
  color: white;
}

.level-other { /* 其他 */
  background: linear-gradient(135deg, #6c757d, #545b62);
  color: white;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .year-badge {
    width: 50px !important;
    height: 50px !important;
  }
  
  .year-badge span {
    font-size: 1.25rem;
  }
  
  .award-title {
    font-size: 1.1rem;
    padding-right: 0;
  }
  
  .nav-pills .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .award-card {
    padding: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .year-header {
    flex-direction: column;
    text-align: center;
  }
  
  .year-badge {
    margin: 0 auto 1rem !important;
  }
  
  .award-level {
    min-width: 80px;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}

/* 打印样式 */
@media print {
  .award-card {
    break-inside: avoid;
    box-shadow: none !important;
    border: 1px solid #dee2e6 !important;
  }
  
  .award-card.hover-lift:hover {
    transform: none !important;
  }
  
  .nav-pills,
  .stats-cards {
    display: none;
  }
}
</style>

<script>
// 简单的动画效果初始化
document.addEventListener('DOMContentLoaded', function() {
  // 添加卡片动画延迟
  const awardCards = document.querySelectorAll('.award-card');
  awardCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
  });
  
  // 平滑滚动到活动标签
  const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
  tabLinks.forEach(link => {
    link.addEventListener('shown.bs.tab', function() {
      window.scrollTo({
        top: document.querySelector('.tab-content').offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
});
</script>