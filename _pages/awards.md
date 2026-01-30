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

  <!-- 分页控件 - 放在列表下方 -->
  <div id="teacher-pagination" class="pagination-wrapper mt-4">
    <nav aria-label="Faculty awards pagination">
      <ul class="pagination justify-content-center mb-0" id="teacher-pagination-list">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="teacher-page-info">Loading...</small>
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
  
  <!-- 学生奖项列表容器 -->
  <div id="student-awards-list" class="student-awards-list">
    <!-- 内容由JavaScript动态加载 -->
    <div class="text-center py-5">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading student awards...</p>
    </div>
  </div>

  <!-- 学生奖项分页控件 -->
  <div id="student-pagination" class="pagination-wrapper mt-4">
    <nav aria-label="Student awards pagination">
      <ul class="pagination justify-content-center mb-0" id="student-pagination-list">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="student-page-info">Loading...</small>
      </div>
    </nav>
  </div>
</div>

<!-- 统计信息 -->
<div class="stats-summary mt-5">
  <div class="row g-3">
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-3 text-primary" id="total-awards">
          0
        </div>
        <div class="stat-label text-muted">Total Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-3 text-success" id="student-awards-count">
          0
        </div>
        <div class="stat-label text-muted">Student Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-3 text-warning" id="first-prizes-count">
          0
        </div>
        <div class="stat-label text-muted">First Prizes</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3 border rounded">
        <div class="stat-value fw-bold fs-3 text-info" id="years-count">
          0
        </div>
        <div class="stat-label text-muted">Years</div>
      </div>
    </div>
  </div>
</div>

</div>

<!-- 奖项数据（隐藏在页面中，供JavaScript使用） -->
<div id="awards-data" style="display:none;">
  {% for award in site.data.awards %}
  <div class="award-item" 
       data-type="{{ award.type | escape }}" 
       data-title="{{ award.title | escape }}" 
       data-year="{{ award.year }}" 
       data-month="{{ award.month }}" 
       data-level="{{ award.level }}" 
       data-level-name="{{ award.level_name | escape }}" 
       data-organization="{{ award.organization | default: '' | escape }}" 
       data-competition="{{ award.competition | default: '' | escape }}" 
       data-participant="{{ award.participant | default: '' | escape }}" 
       data-description="{{ award.description | default: '' | escape }}" 
       data-note="{{ award.note | default: '' | escape }}">
  </div>
  {% endfor %}
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
  margin-bottom: 1rem;
}

.award-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.award-card .card-header {
  background-color: rgba(0,0,0,0.02);
  border-bottom: 1px solid #e9ecef;
  padding: 0.75rem 1rem;
}

.card-title {
  font-weight: 600;
  color: #2c3e50;
}

/* 年份分组 */
.year-group {
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 3px solid #28a745;
}

.year-group h4 {
  color: #495057;
  font-weight: 600;
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
}

/* 分页样式 */
.pagination-wrapper {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.page-link {
  border-radius: 4px !important;
  margin: 0 2px;
  cursor: pointer;
  min-width: 40px;
  text-align: center;
  padding: 0.5rem 0.75rem;
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
  margin-top: 0.5rem;
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
  
  .year-group h4 {
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
    padding: 0.375rem 0.5rem;
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

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.empty-state i {
  opacity: 0.5;
}

/* 隐藏分页控件的类 */
.d-none {
  display: none !important;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // ============================
  // 初始化数据
  // ============================
  
  // 从隐藏的div中获取所有奖项数据
  const awardItems = document.querySelectorAll('#awards-data .award-item');
  const allAwards = Array.from(awardItems).map(item => ({
    type: item.getAttribute('data-type'),
    title: item.getAttribute('data-title'),
    year: parseInt(item.getAttribute('data-year')),
    month: parseInt(item.getAttribute('data-month')),
    level: parseInt(item.getAttribute('data-level')),
    levelName: item.getAttribute('data-level-name'),
    organization: item.getAttribute('data-organization'),
    competition: item.getAttribute('data-competition'),
    participant: item.getAttribute('data-participant'),
    description: item.getAttribute('data-description'),
    note: item.getAttribute('data-note')
  }));
  
  // 分离导师和学生奖项
  const teacherAwards = allAwards.filter(a => a.type === "导师");
  const studentAwards = allAwards.filter(a => a.type === "学生");
  
  // 按年份和等级排序
  teacherAwards.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    if (b.month !== a.month) return b.month - a.month;
    return a.level - b.level;
  });
  
  studentAwards.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    if (b.month !== a.month) return b.month - a.month;
    return a.level - b.level;
  });
  
  // ============================
  // 导师获奖分页功能
  // ============================
  
  const teacherItemsPerPage = 4;  // 改为每页4条
  let currentTeacherPage = 1;
  const totalTeacherItems = teacherAwards.length;
  const totalTeacherPages = Math.ceil(totalTeacherItems / teacherItemsPerPage);
  
  const teacherListContainer = document.getElementById('teacher-awards-list');
  const teacherPagination = document.getElementById('teacher-pagination');
  const teacherPaginationList = document.getElementById('teacher-pagination-list');
  const teacherPageInfo = document.getElementById('teacher-page-info');
  
  // 渲染导师获奖列表
  function renderTeacherAwards() {
    teacherListContainer.innerHTML = '';
    
    if (totalTeacherItems === 0) {
      teacherListContainer.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-award fa-3x text-muted mb-3"></i>
          <h4 class="text-muted mb-2">No faculty awards recorded</h4>
          <p class="text-muted mb-0">Faculty awards are being updated...</p>
        </div>
      `;
      teacherPagination.classList.add('d-none');
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentTeacherPage - 1) * teacherItemsPerPage;
    const endIndex = startIndex + teacherItemsPerPage;
    const currentItems = teacherAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach((award, index) => {
      const awardCard = document.createElement('div');
      awardCard.className = 'award-card';
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
            ${award.organization ? `
            <span class="badge bg-light text-dark">
              <i class="fas fa-building me-1"></i>
              ${award.organization}
            </span>
            ` : ''}
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
    updateTeacherPagination();
  }
  
  // 更新导师分页控件
  function updateTeacherPagination() {
    if (totalTeacherPages <= 1) {
      teacherPagination.classList.add('d-none');
      return;
    }
    
    teacherPagination.classList.remove('d-none');
    teacherPageInfo.textContent = `Page ${currentTeacherPage} of ${totalTeacherPages} • ${totalTeacherItems} awards`;
    
    // 生成分页HTML
    let paginationHTML = '';
    
    // 上一页按钮
    if (currentTeacherPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link teacher-page" data-page="${currentTeacherPage - 1}">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link">
            <i class="fas fa-chevron-left"></i>
          </span>
        </li>
      `;
    }
    
    // 页码按钮（最多显示5个）
    const maxPages = 5;
    let startPage = Math.max(1, currentTeacherPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalTeacherPages, startPage + maxPages - 1);
    
    if (endPage - startPage + 1 < maxPages) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    
    // 第一页
    if (startPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link teacher-page" data-page="1">1</a>
        </li>
        ${startPage > 2 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
      `;
    }
    
    // 中间页码
    for (let i = startPage; i <= endPage; i++) {
      if (i === currentTeacherPage) {
        paginationHTML += `
          <li class="page-item active">
            <span class="page-link">${i}</span>
          </li>
        `;
      } else {
        paginationHTML += `
          <li class="page-item">
            <a class="page-link teacher-page" data-page="${i}">${i}</a>
          </li>
        `;
      }
    }
    
    // 最后一页
    if (endPage < totalTeacherPages) {
      paginationHTML += `
        ${endPage < totalTeacherPages - 1 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
        <li class="page-item">
          <a class="page-link teacher-page" data-page="${totalTeacherPages}">${totalTeacherPages}</a>
        </li>
      `;
    }
    
    // 下一页按钮
    if (currentTeacherPage < totalTeacherPages) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link teacher-page" data-page="${currentTeacherPage + 1}">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link">
            <i class="fas fa-chevron-right"></i>
          </span>
        </li>
      `;
    }
    
    teacherPaginationList.innerHTML = paginationHTML;
    
    // 为分页链接添加点击事件
    document.querySelectorAll('.teacher-page[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        if (page && page !== currentTeacherPage) {
          currentTeacherPage = page;
          renderTeacherAwards();
        }
      });
    });
  }
  
  // ============================
  // 学生获奖分页功能
  // ============================
  
  const studentItemsPerPage = 10;
  let currentStudentPage = 1;
  const totalStudentItems = studentAwards.length;
  const totalStudentPages = Math.ceil(totalStudentItems / studentItemsPerPage);
  
  const studentListContainer = document.getElementById('student-awards-list');
  const studentPagination = document.getElementById('student-pagination');
  const studentPaginationList = document.getElementById('student-pagination-list');
  const studentPageInfo = document.getElementById('student-page-info');
  
  // 渲染学生获奖列表
  function renderStudentAwards() {
    studentListContainer.innerHTML = '';
    
    if (totalStudentItems === 0) {
      studentListContainer.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-graduation-cap fa-3x text-muted mb-3"></i>
          <h4 class="text-muted mb-2">No student awards recorded</h4>
          <p class="text-muted mb-0">Student awards are being updated...</p>
        </div>
      `;
      studentPagination.classList.add('d-none');
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentStudentPage - 1) * studentItemsPerPage;
    const endIndex = startIndex + studentItemsPerPage;
    const currentItems = studentAwards.slice(startIndex, endIndex);
    
    // 按年份分组
    const itemsByYear = {};
    currentItems.forEach(award => {
      if (!itemsByYear[award.year]) {
        itemsByYear[award.year] = [];
      }
      itemsByYear[award.year].push(award);
    });
    
    // 渲染年份分组
    Object.keys(itemsByYear).sort((a, b) => b - a).forEach(year => {
      const yearGroup = document.createElement('div');
      yearGroup.className = 'year-group';
      
      yearGroup.innerHTML = `
        <h4>${year}</h4>
        <div class="year-awards">
          ${itemsByYear[year].map(award => {
            // 根据等级确定徽章颜色
            let badgeClass = 'bg-secondary';
            if (award.level === 0) {
              badgeClass = 'bg-warning';
            } else if (award.level <= 3) {
              badgeClass = 'bg-danger';
            }
            
            return `
              <div class="award-card">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0">${award.competition || award.title}</h5>
                    <span class="badge ${badgeClass}">
                      ${award.levelName}
                    </span>
                  </div>
                  
                  ${award.title !== award.competition ? `
                  <div class="project-info mb-2">
                    <small class="text-muted">
                      <i class="fas fa-project-diagram me-1"></i>
                      ${award.title}
                    </small>
                  </div>
                  ` : ''}
                  
                  <div class="student-info mb-2">
                    <span class="badge bg-light text-dark">
                      <i class="fas fa-user-graduate me-1"></i>
                      ${award.participant}
                    </span>
                  </div>
                  
                  ${award.note ? `
                  <div class="note-info">
                    <div class="alert alert-info py-2 px-3 mb-0">
                      <small>
                        <i class="fas fa-star me-1"></i>
                        ${award.note}
                      </small>
                    </div>
                  </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
      
      studentListContainer.appendChild(yearGroup);
    });
    
    // 更新分页控件
    updateStudentPagination();
  }
  
  // 更新学生分页控件
  function updateStudentPagination() {
    if (totalStudentPages <= 1) {
      studentPagination.classList.add('d-none');
      return;
    }
    
    studentPagination.classList.remove('d-none');
    studentPageInfo.textContent = `Page ${currentStudentPage} of ${totalStudentPages} • ${totalStudentItems} awards`;
    
    // 生成分页HTML
    let paginationHTML = '';
    
    // 上一页按钮
    if (currentStudentPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link student-page" data-page="${currentStudentPage - 1}">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link">
            <i class="fas fa-chevron-left"></i>
          </span>
        </li>
      `;
    }
    
    // 页码按钮
    for (let i = 1; i <= totalStudentPages; i++) {
      if (i === currentStudentPage) {
        paginationHTML += `
          <li class="page-item active">
            <span class="page-link">${i}</span>
          </li>
        `;
      } else {
        paginationHTML += `
          <li class="page-item">
            <a class="page-link student-page" data-page="${i}">${i}</a>
          </li>
        `;
      }
    }
    
    // 下一页按钮
    if (currentStudentPage < totalStudentPages) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link student-page" data-page="${currentStudentPage + 1}">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link">
            <i class="fas fa-chevron-right"></i>
          </span>
        </li>
      `;
    }
    
    studentPaginationList.innerHTML = paginationHTML;
    
    // 为分页链接添加点击事件
    document.querySelectorAll('.student-page[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        if (page && page !== currentStudentPage) {
          currentStudentPage = page;
          renderStudentAwards();
        }
      });
    });
  }
  
  // ============================
  // 更新统计信息
  // ============================
  
  function updateStatistics() {
    // 计算统计数据
    const totalAwards = allAwards.length;
    const studentAwardsCount = studentAwards.length;
    const firstPrizesCount = allAwards.filter(a => a.level === 1).length;
    const yearsSet = new Set(allAwards.map(a => a.year));
    const yearsCount = yearsSet.size;
    
    // 更新统计数字
    document.getElementById('total-awards').textContent = totalAwards;
    document.getElementById('student-awards-count').textContent = studentAwardsCount;
    document.getElementById('first-prizes-count').textContent = firstPrizesCount;
    document.getElementById('years-count').textContent = yearsCount;
  }
  
  // ============================
  // 初始化页面
  // ============================
  
  // 初始渲染
  renderTeacherAwards();
  renderStudentAwards();
  updateStatistics();
  
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
});
</script>