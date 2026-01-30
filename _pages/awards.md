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
  <h1 class="display-5 mb-3">Awards & Honors</h1>
  <p class="lead text-muted">Academic achievements and recognitions</p>
</div>

<!-- 统计概览 -->
<div class="stats-summary mb-5">
  <div class="row g-3">
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3">
        <div class="stat-value fw-bold fs-3 text-primary" id="total-awards">
          0
        </div>
        <div class="stat-label text-muted">Total Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3">
        <div class="stat-value fw-bold fs-3 text-success" id="faculty-awards-count">
          0
        </div>
        <div class="stat-label text-muted">Faculty Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3">
        <div class="stat-value fw-bold fs-3 text-warning" id="student-awards-count">
          0
        </div>
        <div class="stat-label text-muted">Student Awards</div>
      </div>
    </div>
    
    <div class="col-md-3 col-6">
      <div class="stat-box text-center p-3">
        <div class="stat-value fw-bold fs-3 text-info" id="years-count">
          0
        </div>
        <div class="stat-label text-muted">Years</div>
      </div>
    </div>
  </div>
</div>

<!-- 奖项筛选 -->
<div class="awards-filter mb-4">
  <div class="btn-group" role="group" aria-label="Awards filter">
    <button type="button" class="btn btn-outline-primary active" data-filter="all">All Awards</button>
    <button type="button" class="btn btn-outline-primary" data-filter="faculty">Faculty Awards</button>
    <button type="button" class="btn btn-outline-primary" data-filter="student">Student Awards</button>
  </div>
</div>

<!-- 第一部分：导师获奖 -->
<section class="faculty-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="section-title mb-2">
      <i class="fas fa-chalkboard-teacher me-2"></i>
      Faculty Awards
    </h2>
  </div>

  <div id="teacher-awards-list" class="teacher-awards-list">
    <!-- 内容由JavaScript动态加载 -->
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading faculty awards...</p>
    </div>
  </div>

  <!-- 分页控件 -->
  <div id="teacher-pagination" class="pagination-wrapper mt-4 d-none">
    <nav aria-label="Faculty awards pagination">
      <ul class="pagination justify-content-center mb-0" id="teacher-pagination-list">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="teacher-page-info">Page 1 of 1</small>
      </div>
    </nav>
  </div>
</section>

<!-- 第二部分：学生获奖 -->
<section class="student-awards-section mb-5">
  <div class="section-header mb-4">
    <h2 class="section-title mb-2">
      <i class="fas fa-graduation-cap me-2"></i>
      Student Awards
    </h2>
  </div>
  
  <div id="student-awards-list" class="student-awards-list">
    <!-- 内容由JavaScript动态加载 -->
    <div class="text-center py-5">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading student awards...</p>
    </div>
  </div>

  <!-- 分页控件 -->
  <div id="student-pagination" class="pagination-wrapper mt-4 d-none">
    <nav aria-label="Student awards pagination">
      <ul class="pagination justify-content-center mb-0" id="student-pagination-list">
        <!-- 页码由JavaScript生成 -->
      </ul>
      <div class="text-center mt-2">
        <small class="text-muted" id="student-page-info">Page 1 of 1</small>
      </div>
    </nav>
  </div>
</section>

<!-- 回到顶部按钮 -->
<button id="back-to-top" class="btn btn-primary rounded-circle shadow d-none" style="position: fixed; bottom: 20px; right: 20px; width: 45px; height: 45px;">
  <i class="fas fa-chevron-up"></i>
</button>

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
/* 基础样式 */
.awards-page {
  max-width: 1200px;
}

/* 页面标题 */
.page-header {
  padding: 3rem 0;
  margin-bottom: 2rem;
}

.display-5 {
  font-weight: 700;
  color: #2c3e50;
}

.lead {
  color: #6c757d;
  font-size: 1.1rem;
}

/* 统计概览 */
.stats-summary {
  margin-bottom: 3rem;
}

.stat-box {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.stat-value {
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
}

/* 筛选按钮 */
.awards-filter {
  text-align: center;
  margin-bottom: 2rem;
}

.awards-filter .btn {
  min-width: 120px;
}

/* 区块标题 */
.section-header {
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

/* 导师获奖卡片 */
.teacher-awards-list {
  min-height: 200px;
}

.teacher-award-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #0d6efd;
  transition: box-shadow 0.2s ease;
}

.teacher-award-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.teacher-award-header {
  margin-bottom: 1rem;
}

.teacher-award-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.teacher-award-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.meta-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
  background: #f8f9fa;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #6c757d;
  border: 1px solid #e9ecef;
}

.meta-badge i {
  margin-right: 0.4rem;
  opacity: 0.7;
}

.teacher-award-description {
  color: #495057;
  line-height: 1.6;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 3px solid #0d6efd;
}

.teacher-award-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.award-level-badge {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  background: #0d6efd;
  color: white;
}

/* 等级颜色 */
.level-0 .award-level-badge { background: linear-gradient(135deg, #ffd700, #ff9800); color: #856404; }
.level-1 .award-level-badge { background: linear-gradient(135deg, #dc3545, #c82333); color: white; }
.level-2 .award-level-badge { background: linear-gradient(135deg, #fd7e14, #e9690c); color: white; }
.level-3 .award-level-badge { background: linear-gradient(135deg, #17a2b8, #138496); color: white; }
.level-4 .award-level-badge { background: linear-gradient(135deg, #28a745, #1e7e34); color: white; }
.level-5 .award-level-badge { background: linear-gradient(135deg, #6f42c1, #59359a); color: white; }
.level-other .award-level-badge { background: linear-gradient(135deg, #6c757d, #545b62); color: white; }

/* 学生奖项 */
.student-awards-list {
  min-height: 200px;
}

.year-group {
  margin-bottom: 2.5rem;
}

.year-group h4 {
  font-weight: 600;
  color: #495057;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.student-award-item {
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: white;
  transition: box-shadow 0.2s ease;
}

.student-award-item:hover {
  box-shadow: 0 3px 8px rgba(0,0,0,0.06);
}

.student-award-item h5 {
  font-weight: 600;
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.student-info, .project-info {
  margin-bottom: 0.5rem;
}

.note-info .alert {
  background-color: #f8f9fa;
  border-color: #e9ecef;
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
}

/* 分页样式 */
.pagination-wrapper {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.pagination {
  margin-bottom: 0;
}

.page-link {
  border-radius: 4px !important;
  margin: 0 2px;
  min-width: 36px;
  text-align: center;
}

.page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
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
  color: white !important;
}

.bg-success {
  background-color: #28a745 !important;
  color: white !important;
}

.bg-info {
  background-color: #17a2b8 !important;
  color: white !important;
}

.bg-secondary {
  background-color: #6c757d !important;
  color: white !important;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .page-header {
    padding: 2rem 0;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .teacher-award-card,
  .student-award-item {
    padding: 1rem;
  }
  
  .teacher-award-meta {
    gap: 0.5rem;
  }
  
  .meta-badge {
    font-size: 0.8rem;
    padding: 0.25rem 0.6rem;
  }
  
  .awards-filter .btn {
    min-width: 100px;
    font-size: 0.9rem;
  }
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
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
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
  const facultyAwards = allAwards.filter(a => a.type === "导师");
  const studentAwards = allAwards.filter(a => a.type === "学生");
  
  // 按年份和等级排序
  facultyAwards.sort((a, b) => {
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
  // 更新统计信息
  // ============================
  function updateStatistics() {
    const totalAwards = allAwards.length;
    const facultyCount = facultyAwards.length;
    const studentCount = studentAwards.length;
    const yearsSet = new Set(allAwards.map(a => a.year));
    const yearsCount = yearsSet.size;
    
    // 更新统计数字
    document.getElementById('total-awards').textContent = totalAwards;
    document.getElementById('faculty-awards-count').textContent = facultyCount;
    document.getElementById('student-awards-count').textContent = studentCount;
    document.getElementById('years-count').textContent = yearsCount;
  }
  
  // ============================
  // 导师获奖分页功能
  // ============================
  
  const teacherItemsPerPage = 4;
  let currentTeacherPage = 1;
  const totalTeacherItems = facultyAwards.length;
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
          <i class="fas fa-award"></i>
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
    const currentItems = facultyAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach((award, index) => {
      const awardCard = document.createElement('div');
      awardCard.className = `teacher-award-card level-${award.level}`;
      
      awardCard.innerHTML = `
        <div class="teacher-award-header">
          <h5 class="teacher-award-title">${award.title}</h5>
          
          <div class="teacher-award-meta">
            ${award.organization ? `
            <span class="meta-badge">
              <i class="fas fa-building"></i>
              ${award.organization}
            </span>
            ` : ''}
            <span class="meta-badge">
              <i class="far fa-calendar-alt"></i>
              ${award.year}-${String(award.month).padStart(2, '0')}
            </span>
          </div>
        </div>
        
        ${award.description ? `
        <div class="teacher-award-description">
          ${award.description}
        </div>
        ` : ''}
        
        <div class="teacher-award-footer">
          <div class="award-level-badge">
            <i class="fas fa-${getLevelIcon(award.level)} me-1"></i>
            ${award.levelName}
          </div>
          <div class="text-muted small">${award.year} Year</div>
        </div>
      `;
      
      teacherListContainer.appendChild(awardCard);
    });
    
    // 更新分页控件
    updateTeacherPagination();
  }
  
  // 获取等级对应的图标
  function getLevelIcon(level) {
    switch(level) {
      case 0: return 'crown';
      case 1: return 'trophy';
      case 2: return 'medal';
      case 3: return 'award';
      case 4: return 'star';
      case 5: return 'certificate';
      default: return 'gem';
    }
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
          <a class="page-link teacher-page" data-page="${currentTeacherPage - 1}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link" aria-hidden="true">&laquo;</span>
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
          <a class="page-link teacher-page" data-page="${currentTeacherPage + 1}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link" aria-hidden="true">&raquo;</span>
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
          window.scrollTo({
            top: document.querySelector('.faculty-awards-section').offsetTop - 80,
            behavior: 'smooth'
          });
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
          <i class="fas fa-graduation-cap"></i>
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
    const years = Object.keys(itemsByYear).sort((a, b) => b - a);
    years.forEach(year => {
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
            } else if (award.level === 1) {
              badgeClass = 'bg-danger';
            } else if (award.level === 2) {
              badgeClass = 'bg-warning';
            } else if (award.level === 3) {
              badgeClass = 'bg-info';
            } else if (award.level === 4) {
              badgeClass = 'bg-success';
            }
            
            return `
              <div class="student-award-item">
                <div class="row">
                  <div class="col-md-8">
                    <h5>${award.competition || award.title}</h5>
                    
                    ${award.title !== award.competition ? `
                    <div class="project-info">
                      <small class="text-muted">
                        <i class="fas fa-project-diagram me-1"></i>
                        ${award.title}
                      </small>
                    </div>
                    ` : ''}
                    
                    <div class="student-info">
                      <span class="badge bg-light text-dark">
                        <i class="fas fa-user-graduate me-1"></i>
                        ${award.participant || 'Team'}
                      </span>
                    </div>
                    
                    ${award.note ? `
                    <div class="note-info">
                      <div class="alert alert-light py-2 px-3 mb-0">
                        <small>
                          <i class="fas fa-star me-1"></i>
                          ${award.note}
                        </small>
                      </div>
                    </div>
                    ` : ''}
                  </div>
                  
                  <div class="col-md-4 text-md-end">
                    <div class="mb-2">
                      <span class="badge ${badgeClass}">
                        ${award.levelName}
                      </span>
                    </div>
                    <div class="text-muted small">
                      ${award.year}-${String(award.month).padStart(2, '0')}
                    </div>
                  </div>
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
          <a class="page-link student-page" data-page="${currentStudentPage - 1}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link" aria-hidden="true">&laquo;</span>
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
          <a class="page-link student-page" data-page="${currentStudentPage + 1}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      `;
    } else {
      paginationHTML += `
        <li class="page-item disabled">
          <span class="page-link" aria-hidden="true">&raquo;</span>
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
          window.scrollTo({
            top: document.querySelector('.student-awards-section').offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ============================
  // 筛选功能
  // ============================
  document.querySelectorAll('.awards-filter .btn').forEach(button => {
    button.addEventListener('click', function() {
      // 更新按钮状态
      document.querySelectorAll('.awards-filter .btn').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // 根据筛选显示/隐藏部分
      const facultySection = document.querySelector('.faculty-awards-section');
      const studentSection = document.querySelector('.student-awards-section');
      
      if (filter === 'all') {
        facultySection.style.display = 'block';
        studentSection.style.display = 'block';
      } else if (filter === 'faculty') {
        facultySection.style.display = 'block';
        studentSection.style.display = 'none';
      } else if (filter === 'student') {
        facultySection.style.display = 'none';
        studentSection.style.display = 'block';
      }
    });
  });
  
  // ============================
  // 回到顶部按钮
  // ============================
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove('d-none');
    } else {
      backToTopBtn.classList.add('d-none');
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // ============================
  // 初始化页面
  // ============================
  
  // 初始渲染
  updateStatistics();
  renderTeacherAwards();
  renderStudentAwards();
});
</script>