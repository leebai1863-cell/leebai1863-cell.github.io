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

<!-- 第一部分：导师获奖 -->
<div class="faculty-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="section-title mb-2">
      <i class="fas fa-chalkboard-teacher me-2 text-primary"></i>
      Faculty Awards
    </h2>
    <p class="section-subtitle text-muted">Awards and honors received by faculty members</p>
  </div>

  <!-- 分页控件 - 显示在上面 -->
  <div id="teacher-pagination-top" class="pagination-wrapper mb-4 d-none">
    <nav aria-label="Faculty awards pagination">
      <ul class="pagination justify-content-center mb-0">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="teacher-page-info"></small>
      </div>
    </nav>
  </div>

  <!-- 奖项列表容器 -->
  <div id="teacher-awards-list" class="teacher-awards-list">
    <!-- 内容由JavaScript动态加载 -->
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading faculty awards...</p>
    </div>
  </div>

  <!-- 分页控件 - 显示在下面 -->
  <div id="teacher-pagination-bottom" class="pagination-wrapper mt-4 d-none">
    <nav aria-label="Faculty awards pagination">
      <ul class="pagination justify-content-center mb-0">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="teacher-page-info-bottom"></small>
      </div>
    </nav>
  </div>
</div>

<hr class="my-5">

<!-- 第二部分：学生获奖 -->
<div class="student-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="section-title mb-2">
      <i class="fas fa-users me-2 text-success"></i>
      Student Awards
    </h2>
    <p class="section-subtitle text-muted">Competition and academic achievements by students</p>
  </div>
  
  {% assign student_awards = site.data.awards | where: "type", "学生" %}
  {% if student_awards.size > 0 %}
    {% assign sorted_student = student_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
    
    {% assign current_year = 0 %}
    {% for award in sorted_student %}
      {% if award.year != current_year %}
        {% if current_year != 0 %}
        </div>
        {% endif %}
        
        <div class="year-section mb-4">
          <div class="d-flex align-items-center mb-3">
            <h3 class="mb-0 me-3">{{ award.year }}</h3>
            <div class="flex-grow-1 border-top"></div>
          </div>
          <div class="awards-container">
        {% assign current_year = award.year %}
      {% endif %}
      
      <div class="award-card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">{{ award.competition | default: award.title }}</h5>
            <span class="badge 
              {% if award.level == 0 %}bg-warning
              {% elsif award.level <= 3 %}bg-danger
              {% else %}bg-secondary
              {% endif %}">
              {{ award.level_name }}
            </span>
          </div>
          
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
              {{ award.participant }}
            </span>
          </div>
          
          {% if award.note %}
          <div class="note-info mt-2">
            <div class="alert alert-info py-2 px-3 mb-0">
              <small>
                <i class="fas fa-star me-1"></i>
                {{ award.note }}
              </small>
            </div>
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

<!-- 统计信息 -->
<div class="stats-summary mt-5">
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

<!-- 导师获奖数据（隐藏在页面中，供JavaScript使用） -->
<div id="teacher-awards-data" style="display:none;">
  {% assign teacher_awards = site.data.awards | where: "type", "导师" %}
  {% if teacher_awards.size > 0 %}
    {% assign sorted_teacher = teacher_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
    {% for award in sorted_teacher %}
    <div class="award-item" 
         data-title="{{ award.title | escape }}" 
         data-year="{{ award.year }}" 
         data-month="{{ award.month }}" 
         data-level="{{ award.level }}" 
         data-level-name="{{ award.level_name | escape }}" 
         data-organization="{{ award.organization | escape }}" 
         data-description="{{ award.description | escape }}">
    </div>
    {% endfor %}
  {% endif %}
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
  background: white;
}

.award-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.award-card .card-header {
  background-color: rgba(0,0,0,0.02);
  border-bottom: 1px solid #e9ecef;
}

.card-title {
  font-weight: 600;
  color: #2c3e50;
}

/* 年份分组 */
.year-section {
  margin-bottom: 2rem;
}

.year-section h3 {
  color: #495057;
  font-weight: 600;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
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
  cursor: pointer;
  min-width: 40px;
  text-align: center;
}

.page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
  opacity: 0.6;
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

/* 项目信息和学生信息样式 */
.project-info, .student-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.note-info .alert {
  background-color: #f8f9fa;
  border-color: #e9ecef;
  border-radius: 6px;
}

/* 徽章样式 */
.badge {
  font-weight: 500;
  padding: 0.4em 0.8em;
}

.bg-warning {
  background-color: #ffc107 !important;
  color: #000 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-secondary {
  background-color: #6c757d !important;
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
  
  .year-section h3 {
    font-size: 1.2rem;
  }
  
  .stat-value {
    font-size: 1.8rem;
  }
  
  .award-card {
    padding: 1rem;
  }
  
  .pagination-wrapper {
    padding: 0.75rem;
  }
  
  .page-link {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    min-width: 35px;
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

.award-card {
  animation: fadeInUp 0.3s ease forwards;
}

/* 分割线 */
hr {
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #dee2e6, transparent);
  margin: 3rem 0;
}

/* 加载动画 */
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // ============================
  // 导师获奖分页功能
  // ============================
  
  // 从隐藏的div中获取导师获奖数据
  const teacherAwardsItems = document.querySelectorAll('#teacher-awards-data .award-item');
  const teacherAwards = Array.from(teacherAwardsItems).map(item => ({
    title: item.getAttribute('data-title'),
    year: parseInt(item.getAttribute('data-year')),
    month: parseInt(item.getAttribute('data-month')),
    level: parseInt(item.getAttribute('data-level')),
    levelName: item.getAttribute('data-level-name'),
    organization: item.getAttribute('data-organization'),
    description: item.getAttribute('data-description')
  }));
  
  // 分页配置
  const itemsPerPage = 5;
  let currentTeacherPage = 1;
  const totalTeacherItems = teacherAwards.length;
  const totalTeacherPages = Math.ceil(totalTeacherItems / itemsPerPage);
  
  // DOM 元素
  const teacherListContainer = document.getElementById('teacher-awards-list');
  const paginationTop = document.getElementById('teacher-pagination-top');
  const paginationBottom = document.getElementById('teacher-pagination-bottom');
  const pageInfo = document.getElementById('teacher-page-info');
  const pageInfoBottom = document.getElementById('teacher-page-info-bottom');
  
  // 初始化显示
  renderTeacherAwards();
  
  // 渲染导师获奖列表
  function renderTeacherAwards() {
    // 清空容器
    teacherListContainer.innerHTML = '';
    
    if (totalTeacherItems === 0) {
      teacherListContainer.innerHTML = `
        <div class="text-center py-4 border rounded bg-light">
          <i class="fas fa-award fa-2x text-muted mb-3"></i>
          <p class="text-muted mb-0">No faculty awards recorded</p>
        </div>
      `;
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentTeacherPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = teacherAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach((award, index) => {
      const awardCard = document.createElement('div');
      awardCard.className = 'award-card mb-3';
      awardCard.style.animationDelay = `${index * 0.1}s`;
      
      // 根据等级确定徽章颜色
      let badgeClass = 'bg-secondary';
      if (award.level === 0) {
        badgeClass = 'bg-warning';
      } else if (award.level === 1) {
        badgeClass = 'bg-danger';
      }
      
      awardCard.innerHTML = `
        <div class="card-header d-flex justify-content-between align-items-center">
          <span class="badge ${badgeClass}">
            ${award.levelName}
          </span>
          <span class="text-muted">${award.year}</span>
        </div>
        
        <div class="card-body">
          <h5 class="card-title mb-2">${award.title}</h5>
          
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge bg-light text-dark">
              <i class="fas fa-building me-1"></i>
              ${award.organization}
            </span>
            <span class="badge bg-light text-dark">
              <i class="far fa-calendar-alt me-1"></i>
              ${award.year}-${award.month}
            </span>
          </div>
          
          ${award.description ? `<p class="card-text text-muted">${award.description}</p>` : ''}
        </div>
      `;
      
      teacherListContainer.appendChild(awardCard);
    });
    
    // 更新分页控件
    updatePaginationControls();
  }
  
  // 更新分页控件
  function updatePaginationControls() {
    // 如果没有数据，隐藏分页
    if (totalTeacherPages <= 1) {
      paginationTop.classList.add('d-none');
      paginationBottom.classList.add('d-none');
      return;
    }
    
    // 显示分页控件
    paginationTop.classList.remove('d-none');
    paginationBottom.classList.remove('d-none');
    
    // 生成页码HTML
    function generatePaginationHTML() {
      let html = '';
      
      // 上一页按钮
      if (currentTeacherPage > 1) {
        html += `
          <li class="page-item">
            <a class="page-link" data-page="${currentTeacherPage - 1}" aria-label="Previous">
              <i class="fas fa-chevron-left"></i>
            </a>
          </li>
        `;
      } else {
        html += `
          <li class="page-item disabled">
            <span class="page-link">
              <i class="fas fa-chevron-left"></i>
            </span>
          </li>
        `;
      }
      
      // 页码按钮
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentTeacherPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalTeacherPages, startPage + maxVisiblePages - 1);
      
      // 调整起始页码
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      // 第一页
      if (startPage > 1) {
        html += `
          <li class="page-item">
            <a class="page-link" data-page="1">1</a>
          </li>
          ${startPage > 2 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
        `;
      }
      
      // 中间页码
      for (let i = startPage; i <= endPage; i++) {
        if (i === currentTeacherPage) {
          html += `
            <li class="page-item active">
              <span class="page-link">${i}</span>
            </li>
          `;
        } else {
          html += `
            <li class="page-item">
              <a class="page-link" data-page="${i}">${i}</a>
            </li>
          `;
        }
      }
      
      // 最后一页
      if (endPage < totalTeacherPages) {
        html += `
          ${endPage < totalTeacherPages - 1 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
          <li class="page-item">
            <a class="page-link" data-page="${totalTeacherPages}">${totalTeacherPages}</a>
          </li>
        `;
      }
      
      // 下一页按钮
      if (currentTeacherPage < totalTeacherPages) {
        html += `
          <li class="page-item">
            <a class="page-link" data-page="${currentTeacherPage + 1}" aria-label="Next">
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        `;
      } else {
        html += `
          <li class="page-item disabled">
            <span class="page-link">
              <i class="fas fa-chevron-right"></i>
            </span>
          </li>
        `;
      }
      
      return html;
    }
    
    // 更新两个分页控件的HTML
    const paginationHTML = generatePaginationHTML();
    paginationTop.querySelector('.pagination').innerHTML = paginationHTML;
    paginationBottom.querySelector('.pagination').innerHTML = paginationHTML;
    
    // 更新页面信息
    const pageInfoText = `Page ${currentTeacherPage} of ${totalTeacherPages} • ${totalTeacherItems} awards`;
    pageInfo.textContent = pageInfoText;
    pageInfoBottom.textContent = pageInfoText;
    
    // 为分页链接添加点击事件
    document.querySelectorAll('.page-link[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        if (page && page !== currentTeacherPage) {
          currentTeacherPage = page;
          renderTeacherAwards();
          
          // 滚动到导师获奖部分顶部
          document.querySelector('.faculty-awards-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // ============================
  // 回到顶部按钮
  // ============================
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
  
  // ============================
  // URL参数处理（可选功能）
  // ============================
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  // 检查URL中是否有页码参数
  const urlPage = parseInt(getUrlParameter('teacher_page'));
  if (urlPage && urlPage >= 1 && urlPage <= totalTeacherPages) {
    currentTeacherPage = urlPage;
    renderTeacherAwards();
  }
});
</script>