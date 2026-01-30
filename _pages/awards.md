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
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  margin-bottom: 2rem;
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
  position: relative;
  display: inline-block;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 50px;
  height: 4px;
  background: linear-gradient(90deg, #0d6efd, #20c997);
  border-radius: 2px;
}

.section-subtitle {
  font-size: 0.9rem;
}

/* 导师获奖卡片样式 - 增强版 */
.teacher-award-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  background: white;
  position: relative;
  overflow: hidden;
}

.teacher-award-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, var(--card-accent-color, #0d6efd), #20c997);
}

.teacher-award-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.teacher-award-header {
  padding: 1.25rem 1.5rem 1rem;
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(32, 201, 151, 0.05));
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.teacher-award-title {
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.25rem;
  line-height: 1.4;
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
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(0,0,0,0.1);
}

.meta-badge i {
  margin-right: 0.4rem;
  opacity: 0.8;
}

.teacher-award-body {
  padding: 1.25rem 1.5rem;
}

.teacher-award-description {
  color: #495057;
  line-height: 1.6;
  font-size: 0.95rem;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid var(--card-accent-color, #0d6efd);
}

.teacher-award-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.05);
  background: rgba(0,0,0,0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.award-level-badge {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.award-level-badge i {
  font-size: 0.9em;
}

.award-year {
  color: #6c757d;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(0,0,0,0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

/* 不同等级的颜色主题 */
.level-special {
  --card-accent-color: #ffc107;
  --card-bg-color: #fff8e1;
  --badge-bg: linear-gradient(135deg, #ffc107, #ff9800);
  --badge-color: #856404;
}

.level-national-1 {
  --card-accent-color: #dc3545;
  --card-bg-color: #f8d7da;
  --badge-bg: linear-gradient(135deg, #dc3545, #c82333);
  --badge-color: white;
}

.level-national-2 {
  --card-accent-color: #fd7e14;
  --card-bg-color: #ffe5d0;
  --badge-bg: linear-gradient(135deg, #fd7e14, #e9690c);
  --badge-color: #663c00;
}

.level-national-3 {
  --card-accent-color: #17a2b8;
  --card-bg-color: #d1ecf1;
  --badge-bg: linear-gradient(135deg, #17a2b8, #138496);
  --badge-color: white;
}

.level-provincial-1 {
  --card-accent-color: #28a745;
  --card-bg-color: #d4edda;
  --badge-bg: linear-gradient(135deg, #28a745, #1e7e34);
  --badge-color: white;
}

.level-provincial-2 {
  --card-accent-color: #6f42c1;
  --card-bg-color: #e2d9f3;
  --badge-bg: linear-gradient(135deg, #6f42c1, #59359a);
  --badge-color: white;
}

.level-other {
  --card-accent-color: #6c757d;
  --card-bg-color: #e2e3e5;
  --badge-bg: linear-gradient(135deg, #6c757d, #545b62);
  --badge-color: white;
}

/* 应用颜色主题 */
.level-special .teacher-award-card:before {
  background: linear-gradient(to bottom, #ffc107, #ff9800);
}

.level-national-1 .teacher-award-card:before {
  background: linear-gradient(to bottom, #dc3545, #c82333);
}

.level-national-2 .teacher-award-card:before {
  background: linear-gradient(to bottom, #fd7e14, #e9690c);
}

.level-national-3 .teacher-award-card:before {
  background: linear-gradient(to bottom, #17a2b8, #138496);
}

.level-provincial-1 .teacher-award-card:before {
  background: linear-gradient(to bottom, #28a745, #1e7e34);
}

.level-provincial-2 .teacher-award-card:before {
  background: linear-gradient(to bottom, #6f42c1, #59359a);
}

.level-other .teacher-award-card:before {
  background: linear-gradient(to bottom, #6c757d, #545b62);
}

.level-special .award-level-badge {
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #856404;
  box-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.level-national-1 .award-level-badge {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
}

.level-national-2 .award-level-badge {
  background: linear-gradient(135deg, #fd7e14, #e9690c);
  color: white;
  box-shadow: 0 2px 4px rgba(253, 126, 20, 0.3);
}

.level-national-3 .award-level-badge {
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
  box-shadow: 0 2px 4px rgba(23, 162, 184, 0.3);
}

.level-provincial-1 .award-level-badge {
  background: linear-gradient(135deg, #28a745, #1e7e34);
  color: white;
  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.3);
}

.level-provincial-2 .award-level-badge {
  background: linear-gradient(135deg, #6f42c1, #59359a);
  color: white;
  box-shadow: 0 2px 4px rgba(111, 66, 193, 0.3);
}

.level-other .award-level-badge {
  background: linear-gradient(135deg, #6c757d, #545b62);
  color: white;
  box-shadow: 0 2px 4px rgba(108, 117, 125, 0.3);
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
  border: 1px solid #e9ecef;
}

.stat-box:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  transform: translateY(-3px);
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
  
  .teacher-award-card {
    padding: 0;
  }
  
  .teacher-award-header,
  .teacher-award-body,
  .teacher-award-footer {
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

.teacher-award-card {
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
  
  const teacherItemsPerPage = 4;  // 每页4条
  let currentTeacherPage = 1;
  const totalTeacherItems = teacherAwards.length;
  const totalTeacherPages = Math.ceil(totalTeacherItems / teacherItemsPerPage);
  
  const teacherListContainer = document.getElementById('teacher-awards-list');
  const teacherPagination = document.getElementById('teacher-pagination');
  const teacherPaginationList = document.getElementById('teacher-pagination-list');
  const teacherPageInfo = document.getElementById('teacher-page-info');
  
  // 获取等级对应的CSS类
  function getLevelClass(level) {
    switch(level) {
      case 0: return 'level-special';      // 特等奖/国赛入围
      case 1: return 'level-national-1';   // 国家级一等奖
      case 2: return 'level-national-2';   // 国家级二等奖
      case 3: return 'level-national-3';   // 国家级三等奖
      case 4: return 'level-provincial-1'; // 省级一等奖
      case 5: return 'level-provincial-2'; // 省级二等奖
      default: return 'level-other';       // 其他
    }
  }
  
  // 获取等级对应的图标
  function getLevelIcon(level) {
    switch(level) {
      case 0: return 'fas fa-crown';      // 特等奖/国赛入围
      case 1: return 'fas fa-trophy';     // 国家级一等奖
      case 2: return 'fas fa-medal';      // 国家级二等奖
      case 3: return 'fas fa-award';      // 国家级三等奖
      case 4: return 'fas fa-star';       // 省级一等奖
      case 5: return 'fas fa-certificate'; // 省级二等奖
      default: return 'fas fa-gem';       // 其他
    }
  }
  
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
      const levelClass = getLevelClass(award.level);
      const levelIcon = getLevelIcon(award.level);
      
      const awardCard = document.createElement('div');
      awardCard.className = `teacher-award-card ${levelClass}`;
      awardCard.style.animationDelay = `${index * 0.1}s`;
      
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
        
        <div class="teacher-award-body">
          ${award.description ? `
          <div class="teacher-award-description">
            ${award.description}
          </div>
          ` : ''}
        </div>
        
        <div class="teacher-award-footer">
          <div class="award-level-badge">
            <i class="${levelIcon}"></i>
            ${award.levelName}
          </div>
          <div class="award-year">${award.year}年</div>
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