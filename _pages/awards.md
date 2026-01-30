---
layout: default
permalink: /awards/
title: Awards
nav: true
nav_order: 6
---

<div class="awards-page">

<!-- 统计卡片 -->
<div class="stats-cards mb-5">
  <div class="row g-4">
    <div class="col-lg-3 col-md-6">
      <div class="stat-card text-center">
        <div class="stat-number">{{ site.data.awards | size }}</div>
        <div class="stat-label">Total Awards</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card text-center">
        <div class="stat-number">
          {% assign faculty_count = site.data.awards | where: "type", "导师" | size %}
          {{ faculty_count }}
        </div>
        <div class="stat-label">Faculty Awards</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card text-center">
        <div class="stat-number">
          {% assign student_count = site.data.awards | where: "type", "学生" | size %}
          {{ student_count }}
        </div>
        <div class="stat-label">Student Awards</div>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6">
      <div class="stat-card text-center">
        <div class="stat-number">
          {% assign years = site.data.awards | map: "year" | uniq %}
          {{ years | size }}
        </div>
        <div class="stat-label">Years</div>
      </div>
    </div>
  </div>
</div>

<!-- 筛选按钮 -->
<div class="filter-buttons mb-4">
  <div class="d-flex flex-wrap justify-content-center gap-3">
    <button class="filter-btn active" data-filter="all">
      <i class="fas fa-list me-2"></i>All Awards
    </button>
    <button class="filter-btn" data-filter="faculty">
      <i class="fas fa-chalkboard-teacher me-2"></i>Faculty Awards
    </button>
    <button class="filter-btn" data-filter="student">
      <i class="fas fa-graduation-cap me-2"></i>Student Awards
    </button>
  </div>
</div>

<!-- 全部奖项 -->
<div class="all-awards-section" id="all-awards">
  {% assign all_awards = site.data.awards | sort: "year" | reverse | group_by: "year" %}
  
  {% for year_group in all_awards %}
  <div class="year-section mb-5">
    <h3 class="year-title">{{ year_group.name }}</h3>
    
    <div class="awards-grid">
      {% for award in year_group.items %}
      <div class="award-card award-type-{{ award.type | slugify }} award-level-{{ award.level }}">
        <div class="award-header">
          <h4 class="award-title">{{ award.title }}</h4>
          <div class="award-type-badge">
            {% if award.type == "导师" %}
            <span class="badge faculty-badge">
              <i class="fas fa-chalkboard-teacher me-1"></i>Faculty
            </span>
            {% else %}
            <span class="badge student-badge">
              <i class="fas fa-graduation-cap me-1"></i>Student
            </span>
            {% endif %}
          </div>
        </div>
        
        <div class="award-details">
          {% if award.organization %}
          <div class="detail-item">
            <i class="fas fa-university me-2"></i>
            <span>{{ award.organization }}</span>
          </div>
          {% endif %}
          
          {% if award.competition and award.type == "学生" %}
          <div class="detail-item">
            <i class="fas fa-medal me-2"></i>
            <span>{{ award.competition }}</span>
          </div>
          {% endif %}
          
          {% if award.participant %}
          <div class="detail-item">
            <i class="fas fa-users me-2"></i>
            <span>{{ award.participant }}</span>
          </div>
          {% endif %}
        </div>
        
        {% if award.description %}
        <div class="award-description">
          {{ award.description }}
        </div>
        {% endif %}
        
        {% if award.note %}
        <div class="award-note">
          <i class="fas fa-star me-2"></i>
          {{ award.note }}
        </div>
        {% endif %}
        
        <div class="award-footer">
          <span class="award-level level-{{ award.level }}">
            {{ award.level_name }}
          </span>
          <span class="award-year">
            <i class="far fa-calendar me-1"></i>{{ award.year }}
          </span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- 导师奖项 -->
<div class="faculty-awards-section d-none" id="faculty-awards">
  {% assign faculty_awards = site.data.awards | where: "type", "导师" | sort: "year" | reverse | group_by: "year" %}
  
  {% for year_group in faculty_awards %}
  <div class="year-section mb-5">
    <h3 class="year-title">{{ year_group.name }}</h3>
    
    <div class="awards-grid">
      {% for award in year_group.items %}
      <div class="award-card award-level-{{ award.level }}">
        <div class="award-header">
          <h4 class="award-title">{{ award.title }}</h4>
        </div>
        
        <div class="award-details">
          {% if award.organization %}
          <div class="detail-item">
            <i class="fas fa-university me-2"></i>
            <span>{{ award.organization }}</span>
          </div>
          {% endif %}
        </div>
        
        {% if award.description %}
        <div class="award-description">
          {{ award.description }}
        </div>
        {% endif %}
        
        <div class="award-footer">
          <span class="award-level level-{{ award.level }}">
            {{ award.level_name }}
          </span>
          <span class="award-year">
            <i class="far fa-calendar me-1"></i>{{ award.year }}
          </span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- 学生奖项 -->
<div class="student-awards-section d-none" id="student-awards">
  {% assign student_awards = site.data.awards | where: "type", "学生" | sort: "year" | reverse | group_by: "year" %}
  
  {% for year_group in student_awards %}
  <div class="year-section mb-5">
    <h3 class="year-title">{{ year_group.name }}</h3>
    
    <div class="awards-grid">
      {% for award in year_group.items %}
      <div class="award-card award-level-{{ award.level }}">
        <div class="award-header">
          <h4 class="award-title">{{ award.competition | default: award.title }}</h4>
        </div>
        
        <div class="award-details">
          {% if award.participant %}
          <div class="detail-item">
            <i class="fas fa-users me-2"></i>
            <span>{{ award.participant }}</span>
          </div>
          {% endif %}
          
          {% if award.organization %}
          <div class="detail-item">
            <i class="fas fa-university me-2"></i>
            <span>{{ award.organization }}</span>
          </div>
          {% endif %}
        </div>
        
        {% if award.title != award.competition %}
        <div class="project-info">
          <small>Project:</small>
          <div>{{ award.title }}</div>
        </div>
        {% endif %}
        
        {% if award.note %}
        <div class="award-note">
          <i class="fas fa-star me-2"></i>
          {{ award.note }}
        </div>
        {% endif %}
        
        <div class="award-footer">
          <span class="award-level level-{{ award.level }}">
            {{ award.level_name }}
          </span>
          <span class="award-year">
            <i class="far fa-calendar me-1"></i>{{ award.year }}
          </span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

</div>

<style>
/* 主容器 */
.awards-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* 统计卡片 */
.stats-cards {
  margin-top: 2rem;
}

.stat-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-color: #007bff;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 筛选按钮 */
.filter-buttons {
  margin: 3rem 0 2rem;
}

.filter-btn {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-btn:hover {
  border-color: #007bff;
  color: #007bff;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
  box-shadow: 0 4px 12px rgba(0,123,255,0.2);
}

.filter-btn i {
  font-size: 0.9em;
}

/* 年份部分 */
.year-section {
  margin-bottom: 3rem;
}

.year-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

/* 奖项网格 */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .awards-grid {
    grid-template-columns: 1fr;
  }
}

/* 奖项卡片 */
.award-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.award-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-color: #007bff;
}

.award-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.award-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2c3e50;
  line-height: 1.4;
  flex: 1;
  margin-right: 1rem;
}

/* 徽章样式 */
.badge {
  font-weight: 500;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  font-size: 0.75rem;
}

.faculty-badge {
  background: rgba(0,123,255,0.1);
  color: #007bff;
  border: 1px solid rgba(0,123,255,0.2);
}

.student-badge {
  background: rgba(40,167,69,0.1);
  color: #28a745;
  border: 1px solid rgba(40,167,69,0.2);
}

/* 详情部分 */
.award-details {
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.detail-item i {
  width: 16px;
  text-align: center;
  opacity: 0.7;
}

/* 描述部分 */
.award-description {
  color: #495057;
  line-height: 1.6;
  font-size: 0.95rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 3px solid #007bff;
}

/* 项目信息 */
.project-info {
  background: #f8f9fa;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 3px solid #28a745;
}

.project-info small {
  display: block;
  color: #6c757d;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}

.project-info div {
  color: #495057;
  font-size: 0.9rem;
}

/* 备注 */
.award-note {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
}

.award-note i {
  margin-top: 2px;
}

/* 页脚 */
.award-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.award-level {
  font-weight: 600;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  font-size: 0.8rem;
}

.level-0 {
  background: linear-gradient(135deg, #ffd700, #ff9800);
  color: #856404;
}

.level-1 {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
}

.level-2 {
  background: linear-gradient(135deg, #fd7e14, #e9690c);
  color: white;
}

.level-3 {
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
}

.level-4 {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
}

.level-5 {
  background: linear-gradient(135deg, #6f42c1, #59359a);
  color: white;
}

.level-other {
  background: linear-gradient(135deg, #6c757d, #545b62);
  color: white;
}

.award-year {
  color: #6c757d;
  font-size: 0.85rem;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.3;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .awards-page {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .year-title {
    font-size: 1.3rem;
  }
  
  .award-card {
    padding: 1.25rem;
  }
}

@media (max-width: 576px) {
  .stats-cards .row {
    margin: 0 -0.5rem;
  }
  
  .stats-cards .col-lg-3 {
    padding: 0 0.5rem;
  }
  
  .filter-buttons .d-flex {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .filter-btn {
    width: 100%;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // 筛选功能
  const filterButtons = document.querySelectorAll('.filter-btn');
  const allAwardsSection = document.getElementById('all-awards');
  const facultyAwardsSection = document.getElementById('faculty-awards');
  const studentAwardsSection = document.getElementById('student-awards');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 更新按钮状态
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 显示对应的部分
      const filter = this.getAttribute('data-filter');
      
      allAwardsSection.classList.add('d-none');
      facultyAwardsSection.classList.add('d-none');
      studentAwardsSection.classList.add('d-none');
      
      if (filter === 'all') {
        allAwardsSection.classList.remove('d-none');
      } else if (filter === 'faculty') {
        facultyAwardsSection.classList.remove('d-none');
      } else if (filter === 'student') {
        studentAwardsSection.classList.remove('d-none');
      }
      
      // 平滑滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  // 添加卡片悬停动画
  const awardCards = document.querySelectorAll('.award-card');
  awardCards.forEach(card => {
    card.style.transition = 'all 0.3s ease';
  });
  
  // 检查是否有空状态
  checkEmptyStates();
  
  function checkEmptyStates() {
    // 检查导师奖项
    if (!document.querySelector('.faculty-awards-section .award-card')) {
      document.querySelector('.faculty-awards-section').innerHTML = `
        <div class="empty-state">
          <i class="fas fa-chalkboard-teacher"></i>
          <h4>No Faculty Awards</h4>
          <p>Faculty awards will be displayed here</p>
        </div>
      `;
    }
    
    // 检查学生奖项
    if (!document.querySelector('.student-awards-section .award-card')) {
      document.querySelector('.student-awards-section').innerHTML = `
        <div class="empty-state">
          <i class="fas fa-graduation-cap"></i>
          <h4>No Student Awards</h4>
          <p>Student awards will be displayed here</p>
        </div>
      `;
    }
    
    // 检查全部奖项
    if (!document.querySelector('.all-awards-section .award-card')) {
      document.querySelector('.all-awards-section').innerHTML = `
        <div class="empty-state">
          <i class="fas fa-award"></i>
          <h4>No Awards</h4>
          <p>Awards will be displayed here</p>
        </div>
      `;
    }
  }
});
</script>