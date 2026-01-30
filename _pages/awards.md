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
  <h1 class="display-5 fw-bold mb-3">🏆 Awards</h1>
  <p class="lead text-muted mb-4">Academic and competition achievements of our team</p>
</div>

<!-- 主要内容区域 -->
<div class="row">

  <!-- 左侧：导师获奖（分页） -->
  <div class="col-lg-6 mb-5">
    <div class="section-header mb-4">
      <h2 class="section-title mb-2">
        <i class="fas fa-chalkboard-teacher me-2 text-primary"></i>
        Faculty Awards
      </h2>
      <p class="section-subtitle text-muted">Awards and honors received by faculty members</p>
    </div>

    {% assign teacher_awards = site.data.awards | where: "type", "导师" %}
    {% if teacher_awards.size > 0 %}
      {% assign sorted_teacher = teacher_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
      
      <!-- 分页配置 -->
      {% assign per_page = 5 %}
      {% assign total_items = sorted_teacher.size %}
      {% assign total_pages = total_items | divided_by: per_page | plus: 1 %}
      {% assign page_param = page.pagination | default: 1 %}
      {% assign current_page = page_param | to_integer %}
      {% assign start_index = current_page | minus: 1 | times: per_page %}
      {% assign paginated_items = sorted_teacher | slice: start_index, per_page %}
      
      <!-- 奖项列表 -->
      <div class="teacher-awards-list" id="teacher-awards">
        {% for award in paginated_items %}
        <div class="award-card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span class="badge {% if award.level == 0 %}bg-warning{% elsif award.level == 1 %}bg-danger{% else %}bg-secondary{% endif %}">
              {{ award.level_name }}
            </span>
            <span class="text-muted">{{ award.year }}</span>
          </div>
          
          <div class="card-body">
            <h5 class="card-title mb-2">{{ award.title }}</h5>
            
            <div class="d-flex flex-wrap gap-2 mb-3">
              <span class="badge bg-light text-dark">
                <i class="fas fa-building me-1"></i>
                {{ award.organization }}
              </span>
              <span class="badge bg-light text-dark">
                <i class="far fa-calendar-alt me-1"></i>
                {{ award.year }}-{{ award.month }}
              </span>
            </div>
            
            {% if award.description %}
            <p class="card-text text-muted">{{ award.description }}</p>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>
      
      <!-- 分页控件 -->
      {% if total_pages > 1 %}
      <div class="pagination-wrapper mt-4">
        <nav aria-label="Faculty awards pagination">
          <ul class="pagination justify-content-center mb-0">
            <!-- 上一页 -->
            {% if current_page > 1 %}
            <li class="page-item">
              <a class="page-link" href="?teacher_page={{ current_page | minus: 1 }}#teacher-awards">
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            {% else %}
            <li class="page-item disabled">
              <span class="page-link">
                <i class="fas fa-chevron-left"></i>
              </span>
            </li>
            {% endif %}
            
            <!-- 页码 -->
            {% for page_num in (1..total_pages) %}
              {% if page_num == current_page %}
              <li class="page-item active">
                <span class="page-link">{{ page_num }}</span>
              </li>
              {% else %}
              <li class="page-item">
                <a class="page-link" href="?teacher_page={{ page_num }}#teacher-awards">{{ page_num }}</a>
              </li>
              {% endif %}
            {% endfor %}
            
            <!-- 下一页 -->
            {% if current_page < total_pages %}
            <li class="page-item">
              <a class="page-link" href="?teacher_page={{ current_page | plus: 1 }}#teacher-awards">
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
            {% else %}
            <li class="page-item disabled">
              <span class="page-link">
                <i class="fas fa-chevron-right"></i>
              </span>
            </li>
            {% endif %}
          </ul>
          
          <div class="text-center mt-2">
            <small class="text-muted">
              Page {{ current_page }} of {{ total_pages }} • {{ total_items }} awards
            </small>
          </div>
        </nav>
      </div>
      {% endif %}
      
    {% else %}
    <div class="text-center py-4 border rounded bg-light">
      <i class="fas fa-award fa-2x text-muted mb-3"></i>
      <p class="text-muted mb-0">No faculty awards recorded</p>
    </div>
    {% endif %}
  </div>

  <!-- 右侧：学生获奖 -->
  <div class="col-lg-6">
    <div class="section-header mb-4">
      <h2 class="section-title mb-2">
        <i class="fas fa-users me-2 text-success"></i>
        Student Awards
      </h2>
      <p class="section-subtitle text-muted">Competition and academic achievements by students</p>
    </div>
    
    <!-- 学生奖项时间线 -->
    <div class="student-awards-timeline">
      {% assign student_awards = site.data.awards | where: "type", "学生" %}
      {% if student_awards.size > 0 %}
        {% assign sorted_student = student_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
        
        {% assign current_year = 0 %}
        {% for award in sorted_student %}
          {% if award.year != current_year %}
            {% if current_year != 0 %}</div></div>{% endif %}
            
            <div class="timeline-year mb-4">
              <div class="d-flex align-items-center mb-3">
                <h4 class="mb-0 me-3">{{ award.year }}</h4>
                <div class="flex-grow-1 border-top"></div>
              </div>
              <div class="timeline-items ps-3">
              {% assign current_year = award.year %}
          {% endif %}
          
          <div class="timeline-item mb-3 position-relative">
            <div class="timeline-marker position-absolute start-0"></div>
            
            <div class="ms-4">
              <div class="d-flex justify-content-between align-items-start mb-1">
                <h6 class="mb-0 fw-bold">{{ award.competition | default: award.title }}</h6>
                <span class="badge 
                  {% if award.level == 0 %}bg-warning
                  {% elsif award.level <= 3 %}bg-danger
                  {% else %}bg-secondary
                  {% endif %}">
                  {{ award.level_name }}
                </span>
              </div>
              
              {% if award.title != award.competition %}
              <p class="mb-1 text-muted small">
                <i class="fas fa-project-diagram me-1"></i>
                {{ award.title }}
              </p>
              {% endif %}
              
              <div class="d-flex align-items-center">
                <span class="badge bg-light text-dark me-2">
                  <i class="fas fa-user-graduate me-1"></i>
                  {{ award.participant }}
                </span>
                
                {% if award.note %}
                <span class="badge bg-info text-dark">
                  <i class="fas fa-star me-1"></i>
                  Special
                </span>
                {% endif %}
              </div>
              
              {% if award.note %}
              <div class="mt-2 alert alert-light py-1 px-2 border">
                <small>{{ award.note }}</small>
              </div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
        </div></div>
        
      {% else %}
      <div class="text-center py-4 border rounded bg-light">
        <i class="fas fa-graduation-cap fa-2x text-muted mb-3"></i>
        <p class="text-muted mb-0">No student awards recorded</p>
      </div>
      {% endif %}
    </div>
  </div>
</div>

<!-- 统计信息 -->
<div class="row mt-5">
  <div class="col-12">
    <div class="stats-summary">
      <div class="row g-3">
        <div class="col-md-3 col-6">
          <div class="stat-box text-center p-3 border rounded">
            <div class="stat-value fw-bold fs-3 text-primary">
              {{ site.data.awards | size }}
            </div>
            <div class="stat-label text-muted">Total Awards</div>
          </div>
        </div>
        
        <div class="col-md-3 col-6">
          <div class="stat-box text-center p-3 border rounded">
            <div class="stat-value fw-bold fs-3 text-success">
              {{ site.data.awards | where: "type", "学生" | size }}
            </div>
            <div class="stat-label text-muted">Student Awards</div>
          </div>
        </div>
        
        <div class="col-md-3 col-6">
          <div class="stat-box text-center p-3 border rounded">
            <div class="stat-value fw-bold fs-3 text-warning">
              {{ site.data.awards | where: "level", 1 | size }}
            </div>
            <div class="stat-label text-muted">First Prizes</div>
          </div>
        </div>
        
        <div class="col-md-3 col-6">
          <div class="stat-box text-center p-3 border rounded">
            {% assign years = site.data.awards | map: "year" | uniq %}
            <div class="stat-value fw-bold fs-3 text-info">
              {{ years.size }}
            </div>
            <div class="stat-label text-muted">Years</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<style>
/* 页面样式 */
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

/* 区块标题 */
.section-header {
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
}

.section-title {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.section-subtitle {
  font-size: 0.9rem;
}

/* 卡片样式 */
.award-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.award-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.award-card .card-header {
  background-color: rgba(0,0,0,0.02);
  border-bottom: 1px solid #e9ecef;
}

/* 时间线样式 */
.timeline-year h4 {
  color: #495057;
  font-weight: 600;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
}

.timeline-marker {
  width: 12px;
  height: 12px;
  background: #28a745;
  border-radius: 50%;
  top: 8px;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #28a745;
}

.timeline-items {
  border-left: 2px solid #e9ecef;
}

.timeline-item {
  padding-left: 1rem;
}

/* 分页样式 */
.pagination-wrapper {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.page-link {
  border-radius: 4px !important;
  margin: 0 2px;
}

.page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

/* 统计盒子 */
.stat-box {
  background: white;
  transition: all 0.2s ease;
}

.stat-box:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.stat-value {
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 1rem 0;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .timeline-year h4 {
    font-size: 1.2rem;
  }
  
  .stat-value {
    font-size: 1.8rem;
  }
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

.award-card, .timeline-item, .stat-box {
  animation: fadeInUp 0.3s ease forwards;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // 简单的滚动到顶部按钮
  const scrollButton = document.createElement('button');
  scrollButton.className = 'btn btn-primary btn-sm rounded-circle';
  scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollButton.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:1000;width:45px;height:45px;display:none;box-shadow:0 2px 5px rgba(0,0,0,0.2);';
  document.body.appendChild(scrollButton);
  
  // 显示/隐藏回到顶部按钮
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = 'flex';
      scrollButton.style.alignItems = 'center';
      scrollButton.style.justifyContent = 'center';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  // 回到顶部功能
  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 处理分页URL锚点
  const urlParams = new URLSearchParams(window.location.search);
  const teacherPage = urlParams.get('teacher_page');
  if (teacherPage) {
    setTimeout(() => {
      const teacherSection = document.getElementById('teacher-awards');
      if (teacherSection) {
        teacherSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  
  // 为卡片添加悬停效果
  const cards = document.querySelectorAll('.award-card, .timeline-item');
  cards.forEach(card => {
    card.style.transition = 'all 0.2s ease';
  });
});
</script>