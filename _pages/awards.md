---
layout: default
permalink: /awards/
title: 奖项与荣誉
nav: true
nav_order: 6
---

<div class="awards-page container-fluid px-4 px-lg-5 mt-5">

<!-- 页面标题和简介 -->
<div class="row mb-5">
  <div class="col-12">
    <div class="page-header text-center">
      <h1 class="display-5 fw-bold mb-3">🏆 奖项与荣誉</h1>
      <p class="lead text-muted mb-4">记录团队师生在学术、科研和竞赛中取得的卓越成就</p>
      <div class="stats-badge">
        <span class="badge bg-light text-dark me-2">
          <i class="fas fa-trophy text-warning"></i> 共 {{ site.data.awards | size }} 项荣誉
        </span>
        <span class="badge bg-light text-dark">
          <i class="fas fa-user-graduate text-primary"></i> {{ site.data.awards | where: "type", "学生" | size }} 项学生获奖
        </span>
      </div>
    </div>
  </div>
</div>

<!-- 主要内容区域 -->
<div class="row">

  <!-- 左侧：导师获奖（分页） -->
  <div class="col-lg-6 mb-5">
    <div class="section-header">
      <div class="d-flex align-items-center mb-4">
        <div class="section-icon me-3">
          <i class="fas fa-chalkboard-teacher fa-2x text-primary"></i>
        </div>
        <div>
          <h2 class="section-title mb-2">导师荣誉</h2>
          <p class="section-subtitle text-muted mb-0">团队教师获得的学术与科研奖项</p>
        </div>
      </div>
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
      {% assign end_index = start_index | plus: per_page | minus: 1 %}
      {% assign paginated_items = sorted_teacher | slice: start_index, per_page %}
      
      <!-- 奖项列表 -->
      <div class="teacher-awards-list" id="teacher-awards">
        {% for award in paginated_items %}
        <div class="award-card teacher-award fade-in" style="animation-delay: {{ forloop.index0 | times: 0.1 }}s">
          <div class="award-card-header">
            <div class="award-badge">
              <span class="badge {% if award.level == 0 %}bg-gold{% elsif award.level == 1 %}bg-danger{% elsif award.level == 2 %}bg-warning{% else %}bg-secondary{% endif %}">
                {{ award.level_name }}
              </span>
            </div>
            <div class="award-year">{{ award.year }}年</div>
          </div>
          
          <div class="award-card-body">
            <h4 class="award-title">{{ award.title }}</h4>
            
            <div class="award-meta mb-3">
              <div class="meta-item">
                <i class="fas fa-building me-1"></i>
                <span>{{ award.organization }}</span>
              </div>
              <div class="meta-item">
                <i class="far fa-calendar-alt me-1"></i>
                <span>{{ award.year }}年{{ award.month }}月</span>
              </div>
            </div>
            
            {% if award.description %}
            <div class="award-description">
              <p>{{ award.description }}</p>
            </div>
            {% endif %}
          </div>
          
          <div class="award-card-footer">
            <div class="d-flex align-items-center">
              <div class="user-icon me-2">
                <i class="fas fa-user-circle text-muted"></i>
              </div>
              <span class="text-muted small">团队导师</span>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
      
      <!-- 分页控件 -->
      {% if total_pages > 1 %}
      <div class="pagination-wrapper mt-4">
        <nav aria-label="导师获奖分页导航">
          <ul class="pagination pagination-lg justify-content-center mb-0">
            <!-- 上一页 -->
            {% if current_page > 1 %}
            <li class="page-item">
              <a class="page-link" href="?teacher_page={{ current_page | minus: 1 }}#teacher-awards" aria-label="上一页">
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
              <a class="page-link" href="?teacher_page={{ current_page | plus: 1 }}#teacher-awards" aria-label="下一页">
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
              第 {{ current_page }} 页 / 共 {{ total_pages }} 页 • 共 {{ total_items }} 项荣誉
            </small>
          </div>
        </nav>
      </div>
      {% endif %}
      
    {% else %}
    <div class="empty-state">
      <div class="empty-icon mb-3">
        <i class="fas fa-award fa-3x text-muted"></i>
      </div>
      <h4 class="text-muted mb-2">暂无导师获奖记录</h4>
      <p class="text-muted mb-0">导师荣誉正在更新中...</p>
    </div>
    {% endif %}
  </div>

  <!-- 右侧：学生获奖（按时间倒序） -->
  <div class="col-lg-6">
    <div class="section-header">
      <div class="d-flex align-items-center mb-4">
        <div class="section-icon me-3">
          <i class="fas fa-users fa-2x text-success"></i>
        </div>
        <div>
          <h2 class="section-title mb-2">学生获奖</h2>
          <p class="section-subtitle text-muted mb-0">学生在各类竞赛和学术活动中的成果</p>
        </div>
      </div>
    </div>
    
    <!-- 时间线视图 -->
    <div class="student-awards-timeline">
      {% assign student_awards = site.data.awards | where: "type", "学生" %}
      {% if student_awards.size > 0 %}
        {% assign sorted_student = student_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
        
        {% assign current_year = 0 %}
        {% for award in sorted_student %}
          {% if award.year != current_year %}
            {% if current_year != 0 %}</div></div>{% endif %}
            
            <div class="timeline-year-group">
              <div class="timeline-year-header">
                <div class="year-badge">
                  <span>{{ award.year }}年</span>
                </div>
                <div class="year-line"></div>
              </div>
              <div class="timeline-year-items">
              {% assign current_year = award.year %}
          {% endif %}
          
          <div class="student-award-card timeline-item">
            <div class="timeline-dot"></div>
            
            <div class="award-card-content">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="award-title mb-0">{{ award.competition | default: award.title }}</h5>
                <span class="award-level {% if award.level == 0 %}level-special{% elsif award.level <= 3 %}level-national{% else %}level-regional{% endif %}">
                  {{ award.level_name }}
                </span>
              </div>
              
              {% if award.title != award.competition %}
              <div class="project-name mb-2">
                <i class="fas fa-code-branch me-1 text-primary"></i>
                <strong>{{ award.title }}</strong>
              </div>
              {% endif %}
              
              <div class="student-info">
                <div class="student-badge">
                  <i class="fas fa-user-graduate me-1"></i>
                  {{ award.participant }}
                </div>
              </div>
              
              {% if award.note %}
              <div class="special-note mt-2">
                <i class="fas fa-star text-warning me-1"></i>
                <span>{{ award.note }}</span>
              </div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
        </div></div>
        
      {% else %}
      <div class="empty-state">
        <div class="empty-icon mb-3">
          <i class="fas fa-graduation-cap fa-3x text-muted"></i>
        </div>
        <h4 class="text-muted mb-2">暂无学生获奖记录</h4>
        <p class="text-muted mb-0">学生荣誉正在更新中...</p>
      </div>
      {% endif %}
    </div>
  </div>
</div>

<!-- 统计信息卡片 -->
<div class="row mt-5">
  <div class="col-12">
    <div class="stats-cards">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="stat-card text-center">
            <div class="stat-icon mb-3">
              <i class="fas fa-medal fa-2x text-warning"></i>
            </div>
            <h3 class="stat-number">{{ site.data.awards | where: "level", 1 | size }}</h3>
            <p class="stat-label">国家级一等奖</p>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="stat-card text-center">
            <div class="stat-icon mb-3">
              <i class="fas fa-trophy fa-2x text-primary"></i>
            </div>
            <h3 class="stat-number">{{ site.data.awards | where: "type", "学生" | size }}</h3>
            <p class="stat-label">学生竞赛获奖</p>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="stat-card text-center">
            <div class="stat-icon mb-3">
              <i class="fas fa-chart-line fa-2x text-success"></i>
            </div>
            <h3 class="stat-number">{{ site.data.awards | group_by: "year" | size }}</h3>
            <p class="stat-label">累计获奖年份</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<!-- 自定义样式 -->
<style>
/* 全局样式 */
.awards-page {
  padding-bottom: 4rem;
}

/* 页面标题 */
.page-header {
  padding: 2rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  margin-bottom: 2rem;
}

.stats-badge {
  margin-top: 1rem;
}

/* 区块标题 */
.section-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f1f1;
}

.section-title {
  color: #2c3e50;
  font-weight: 700;
  font-size: 1.8rem;
}

.section-subtitle {
  font-size: 0.95rem;
}

.section-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 12px;
}

/* 卡片通用样式 */
.award-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #f1f1f1;
}

.award-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.award-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
}

.award-badge .badge {
  font-size: 0.85rem;
  padding: 0.35em 0.75em;
  border-radius: 20px;
  font-weight: 600;
}

.bg-gold {
  background: linear-gradient(135deg, #FFD700, #FFA500) !important;
  color: #333 !important;
}

.bg-danger {
  background: linear-gradient(135deg, #dc3545, #c82333) !important;
}

.bg-warning {
  background: linear-gradient(135deg, #ffc107, #e0a800) !important;
  color: #333 !important;
}

.award-year {
  background: #f8f9fa;
  color: #6c757d;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.award-title {
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.award-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  color: #6c757d;
  font-size: 0.9rem;
}

.meta-item i {
  width: 16px;
  text-align: center;
}

.award-description {
  color: #495057;
  line-height: 1.6;
  font-size: 0.95rem;
  padding-top: 0.5rem;
  border-top: 1px dashed #e9ecef;
}

.award-card-footer {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f0f0f0;
}

.user-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 50%;
}

/* 学生时间线样式 */
.student-awards-timeline {
  position: relative;
}

.timeline-year-group {
  margin-bottom: 2rem;
}

.timeline-year-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.year-badge {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);
  z-index: 2;
  position: relative;
}

.year-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #28a745, rgba(40, 167, 69, 0.2));
  margin-left: 1rem;
}

.timeline-year-items {
  padding-left: 2rem;
  border-left: 2px solid #e9ecef;
  margin-left: 1rem;
}

.student-award-card {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.5rem;
}

.timeline-dot {
  position: absolute;
  left: -11px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #28a745;
  border: 4px solid white;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
}

.award-card-content {
  background: white;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f1f1;
  transition: all 0.2s ease;
}

.student-award-card:hover .award-card-content {
  transform: translateX(5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.award-level {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
}

.level-special {
  background: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.level-national {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.level-regional {
  background: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

.project-name {
  color: #495057;
  font-size: 0.95rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #0d6efd;
}

.student-badge {
  display: inline-flex;
  align-items: center;
  background: #e7f1ff;
  color: #0d6efd;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.special-note {
  font-size: 0.85rem;
  color: #856404;
  background: #fff3cd;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #ffc107;
}

/* 分页样式 */
.pagination-wrapper {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.pagination-lg .page-link {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  margin: 0 0.25rem;
  border-radius: 8px !important;
  border: 1px solid #dee2e6;
  color: #495057;
  transition: all 0.2s ease;
}

.pagination-lg .page-link:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.pagination-lg .active .page-link {
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
  border-color: #0d6efd;
  box-shadow: 0 4px 6px rgba(13, 110, 253, 0.2);
}

/* 统计卡片 */
.stats-cards {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 50%;
  margin: 0 auto;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 1rem 0;
}

.stat-label {
  color: #6c757d;
  font-size: 1rem;
  margin-bottom: 0;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #dee2e6;
}

.empty-icon {
  opacity: 0.5;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 1.5rem 1rem;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .award-card {
    padding: 1.25rem;
  }
  
  .timeline-year-items {
    padding-left: 1.5rem;
  }
  
  .student-award-card {
    padding-left: 1.5rem;
  }
  
  .timeline-dot {
    left: -9px;
    width: 18px;
    height: 18px;
  }
  
  .stats-cards {
    padding: 1.5rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .award-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .pagination-lg .page-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
}
</style>

<!-- JavaScript 增强 -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // 处理分页的 URL 参数
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  // 检查是否有分页参数
  var teacherPage = getUrlParameter('teacher_page');
  if (teacherPage) {
    // 可以在这里添加额外的分页处理逻辑
    console.log('当前导师分页: ' + teacherPage);
  }
  
  // 添加卡片悬停效果
  var awardCards = document.querySelectorAll('.award-card');
  awardCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });
  
  // 添加页面滚动效果
  var scrollToTopButton = document.createElement('button');
  scrollToTopButton.className = 'btn btn-primary btn-floating';
  scrollToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollToTopButton.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:1000;display:none;width:50px;height:50px;border-radius:50%;box-shadow:0 4px 8px rgba(0,0,0,0.2);';
  document.body.appendChild(scrollToTopButton);
  
  // 显示/隐藏回到顶部按钮
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // 回到顶部功能
  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 添加打印按钮
  var printButton = document.createElement('button');
  printButton.className = 'btn btn-outline-secondary btn-floating';
  printButton.innerHTML = '<i class="fas fa-print"></i>';
  printButton.style.cssText = 'position:fixed;bottom:80px;right:20px;z-index:1000;width:50px;height:50px;border-radius:50%;box-shadow:0 4px 8px rgba(0,0,0,0.2);';
  document.body.appendChild(printButton);
  
  printButton.addEventListener('click', function() {
    window.print();
  });
});
</script>