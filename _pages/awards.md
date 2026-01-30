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

<!-- 奖项数据容器 -->
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
       data-note="{{ award.note | default: '' | escape }}">
  </div>
  {% endfor %}
</div>

<!-- 全部奖项 -->
<div class="all-awards-section" id="all-awards">
  <div class="year-section mb-5">
    <h3 class="year-title">All Awards</h3>
    
    <div id="all-awards-list" class="awards-list">
      <!-- 内容由JavaScript动态加载 -->
      <div class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading awards...</p>
      </div>
    </div>
    
    <!-- 全部奖项分页 -->
    <div id="all-pagination" class="pagination-wrapper mt-4 d-none">
      <nav aria-label="All awards pagination">
        <ul class="pagination justify-content-center mb-0" id="all-pagination-list">
          <!-- 页码由JavaScript生成 -->
        </ul>
        <div class="text-center mt-2">
          <small class="text-muted" id="all-page-info">Loading...</small>
        </div>
      </nav>
    </div>
  </div>
</div>

<!-- 导师奖项 -->
<div class="faculty-awards-section d-none" id="faculty-awards">
  <div class="year-section mb-5">
    <h3 class="year-title">Faculty Awards</h3>
    
    <div id="faculty-awards-list" class="awards-list">
      <!-- 内容由JavaScript动态加载 -->
      <div class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading faculty awards...</p>
      </div>
    </div>
    
    <!-- 导师奖项分页 - 每页4条 -->
    <div id="faculty-pagination" class="pagination-wrapper mt-4 d-none">
      <nav aria-label="Faculty awards pagination">
        <ul class="pagination justify-content-center mb-0" id="faculty-pagination-list">
          <!-- 页码由JavaScript生成 -->
        </ul>
        <div class="text-center mt-2">
          <small class="text-muted" id="faculty-page-info">Loading...</small>
        </div>
      </nav>
    </div>
  </div>
</div>

<!-- 学生奖项 -->
<div class="student-awards-section d-none" id="student-awards">
  <div class="year-section mb-5">
    <h3 class="year-title">Student Awards</h3>
    
    <div id="student-awards-list" class="awards-list">
      <!-- 内容由JavaScript动态加载 -->
      <div class="text-center py-5">
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2">Loading student awards...</p>
      </div>
    </div>
    
    <!-- 学生奖项分页 - 每页10条 -->
    <div id="student-pagination" class="pagination-wrapper mt-4 d-none">
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

/* 奖项列表 - 单列布局 */
.awards-list {
  min-height: 200px;
}

/* 奖项卡片 - 单列布局 */
.award-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 1.2rem;
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
  flex-wrap: wrap;
}

.detail-item i {
  width: 16px;
  text-align: center;
  opacity: 0.7;
  flex-shrink: 0;
}

.detail-item span {
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

.project-item {
  background: #f8f9fa;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #28a745;
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
  flex-shrink: 0;
}

.award-note span {
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
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
  white-space: nowrap;
}

/* 等级颜色配置 */
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

.level-6 {
  background: linear-gradient(135deg, #e83e8c, #d63384);
  color: white;
}

.level-7 {
  background: linear-gradient(135deg, #9e9e9e, #757575);
  color: white;
}

.award-year {
  color: #6c757d;
  font-size: 0.85rem;
  white-space: nowrap;
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
  min-width: 36px;
  text-align: center;
  cursor: pointer;
}

.page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6c757d;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.3;
}

/* 加载动画 */
.spinner-border {
  width: 3rem;
  height: 3rem;
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
  
  .award-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .award-type-badge {
    margin-top: 0.5rem;
  }
  
  .award-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
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
  
  .detail-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .detail-item i {
    margin-bottom: 0.25rem;
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
    month: parseInt(item.getAttribute('data-month')) || 1,
    level: parseInt(item.getAttribute('data-level')),
    levelName: item.getAttribute('data-level-name'),
    organization: item.getAttribute('data-organization'),
    competition: item.getAttribute('data-competition'),
    participant: item.getAttribute('data-participant'),
    note: item.getAttribute('data-note')
  }));
  
  // 分离导师和学生奖项
  const facultyAwards = allAwards.filter(a => a.type === "导师");
  const studentAwards = allAwards.filter(a => a.type === "学生");
  
  // 按年份和等级排序（新的在前，等级高的在前）
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
  
  allAwards.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    if (b.month !== a.month) return b.month - a.month;
    return a.level - b.level;
  });
  
  // ============================
  // 公共函数：创建奖项卡片
  // ============================
  function createAwardCard(award, showTypeBadge = false) {
    const card = document.createElement('div');
    card.className = `award-card award-level-${award.level}`;
    
    // 处理月份显示
    const monthStr = award.month ? String(award.month).padStart(2, '0') : '01';
    
    let html = `
      <div class="award-header">
        <h4 class="award-title">${award.title}</h4>
        ${showTypeBadge ? `
        <div class="award-type-badge">
          ${award.type === "导师" ? `
          <span class="badge faculty-badge">
            <i class="fas fa-chalkboard-teacher me-1"></i>Faculty
          </span>
          ` : `
          <span class="badge student-badge">
            <i class="fas fa-graduation-cap me-1"></i>Student
          </span>
          `}
        </div>
        ` : ''}
      </div>
      
      <div class="award-details">
    `;
    
    // 添加组织信息
    if (award.organization && award.organization.trim() !== '') {
      html += `
        <div class="detail-item">
          <i class="fas fa-university me-2"></i>
          <span>${award.organization}</span>
        </div>
      `;
    }
    
    // 添加比赛信息
    if (award.competition && award.competition.trim() !== '') {
      html += `
        <div class="detail-item">
          <i class="fas fa-medal me-2"></i>
          <span>${award.competition}</span>
        </div>
      `;
    }
    
    // 添加参与者信息
    if (award.participant && award.participant.trim() !== '') {
      html += `
        <div class="detail-item">
          <i class="fas fa-users me-2"></i>
          <span>${award.participant}</span>
        </div>
      `;
    }
    
    // 如果是学生奖项且标题与比赛不同，显示项目信息
    if (award.type === "学生" && award.title !== award.competition && award.competition) {
      html += `
        <div class="detail-item project-item">
          <i class="fas fa-project-diagram me-2"></i>
          <span>${award.title}</span>
        </div>
      `;
    }
    
    html += `
      </div>
    `;
    
    // 添加备注信息
    if (award.note && award.note.trim() !== '') {
      html += `
        <div class="award-note">
          <i class="fas fa-star me-2"></i>
          <span>${award.note}</span>
        </div>
      `;
    }
    
    // 添加页脚
    html += `
      <div class="award-footer">
        <span class="award-level level-${award.level}">
          ${award.levelName}
        </span>
        <span class="award-year">
          <i class="far fa-calendar me-1"></i>${award.year}-${monthStr}
        </span>
      </div>
    `;
    
    card.innerHTML = html;
    return card;
  }
  
  // ============================
  // 全部奖项分页功能
  // ============================
  
  const allItemsPerPage = 8; // 全部奖项每页8条
  let currentAllPage = 1;
  const totalAllItems = allAwards.length;
  const totalAllPages = Math.ceil(totalAllItems / allItemsPerPage);
  
  const allListContainer = document.getElementById('all-awards-list');
  const allPagination = document.getElementById('all-pagination');
  const allPaginationList = document.getElementById('all-pagination-list');
  const allPageInfo = document.getElementById('all-page-info');
  
  // 渲染全部奖项
  function renderAllAwards() {
    allListContainer.innerHTML = '';
    
    if (totalAllItems === 0) {
      allListContainer.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-award"></i>
          <h4>No Awards</h4>
          <p>Awards will be displayed here</p>
        </div>
      `;
      allPagination.classList.add('d-none');
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentAllPage - 1) * allItemsPerPage;
    const endIndex = startIndex + allItemsPerPage;
    const currentItems = allAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach(award => {
      const awardCard = createAwardCard(award, true);
      allListContainer.appendChild(awardCard);
    });
    
    // 更新分页控件
    updateAllPagination();
  }
  
  // 更新全部奖项分页控件
  function updateAllPagination() {
    if (totalAllPages <= 1) {
      allPagination.classList.add('d-none');
      return;
    }
    
    allPagination.classList.remove('d-none');
    allPageInfo.textContent = `Page ${currentAllPage} of ${totalAllPages} • ${totalAllItems} awards`;
    
    // 生成分页HTML
    let paginationHTML = '';
    
    // 上一页按钮
    if (currentAllPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link all-page" data-page="${currentAllPage - 1}" aria-label="Previous">
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
    let startPage = Math.max(1, currentAllPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalAllPages, startPage + maxPages - 1);
    
    if (endPage - startPage + 1 < maxPages) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    
    // 第一页
    if (startPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link all-page" data-page="1">1</a>
        </li>
        ${startPage > 2 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
      `;
    }
    
    // 中间页码
    for (let i = startPage; i <= endPage; i++) {
      if (i === currentAllPage) {
        paginationHTML += `
          <li class="page-item active">
            <span class="page-link">${i}</span>
          </li>
        `;
      } else {
        paginationHTML += `
          <li class="page-item">
            <a class="page-link all-page" data-page="${i}">${i}</a>
          </li>
        `;
      }
    }
    
    // 最后一页
    if (endPage < totalAllPages) {
      paginationHTML += `
        ${endPage < totalAllPages - 1 ? '<li class="page-item disabled"><span class="page-link">...</span></li>' : ''}
        <li class="page-item">
          <a class="page-link all-page" data-page="${totalAllPages}">${totalAllPages}</a>
        </li>
      `;
    }
    
    // 下一页按钮
    if (currentAllPage < totalAllPages) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link all-page" data-page="${currentAllPage + 1}" aria-label="Next">
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
    
    allPaginationList.innerHTML = paginationHTML;
    
    // 为分页链接添加点击事件
    document.querySelectorAll('.all-page[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        if (page && page !== currentAllPage) {
          currentAllPage = page;
          renderAllAwards();
          window.scrollTo({
            top: document.querySelector('#all-awards').offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ============================
  // 导师奖项分页功能
  // ============================
  
  const facultyItemsPerPage = 4; // 导师奖项每页4条
  let currentFacultyPage = 1;
  const totalFacultyItems = facultyAwards.length;
  const totalFacultyPages = Math.ceil(totalFacultyItems / facultyItemsPerPage);
  
  const facultyListContainer = document.getElementById('faculty-awards-list');
  const facultyPagination = document.getElementById('faculty-pagination');
  const facultyPaginationList = document.getElementById('faculty-pagination-list');
  const facultyPageInfo = document.getElementById('faculty-page-info');
  
  // 渲染导师奖项
  function renderFacultyAwards() {
    facultyListContainer.innerHTML = '';
    
    if (totalFacultyItems === 0) {
      facultyListContainer.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-chalkboard-teacher"></i>
          <h4>No Faculty Awards</h4>
          <p>Faculty awards will be displayed here</p>
        </div>
      `;
      facultyPagination.classList.add('d-none');
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentFacultyPage - 1) * facultyItemsPerPage;
    const endIndex = startIndex + facultyItemsPerPage;
    const currentItems = facultyAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach(award => {
      const awardCard = createAwardCard(award, false);
      facultyListContainer.appendChild(awardCard);
    });
    
    // 更新分页控件
    updateFacultyPagination();
  }
  
  // 更新导师分页控件
  function updateFacultyPagination() {
    if (totalFacultyPages <= 1) {
      facultyPagination.classList.add('d-none');
      return;
    }
    
    facultyPagination.classList.remove('d-none');
    facultyPageInfo.textContent = `Page ${currentFacultyPage} of ${totalFacultyPages} • ${totalFacultyItems} awards`;
    
    // 生成分页HTML
    let paginationHTML = '';
    
    // 上一页按钮
    if (currentFacultyPage > 1) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link faculty-page" data-page="${currentFacultyPage - 1}" aria-label="Previous">
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
    for (let i = 1; i <= totalFacultyPages; i++) {
      if (i === currentFacultyPage) {
        paginationHTML += `
          <li class="page-item active">
            <span class="page-link">${i}</span>
          </li>
        `;
      } else {
        paginationHTML += `
          <li class="page-item">
            <a class="page-link faculty-page" data-page="${i}">${i}</a>
          </li>
        `;
      }
    }
    
    // 下一页按钮
    if (currentFacultyPage < totalFacultyPages) {
      paginationHTML += `
        <li class="page-item">
          <a class="page-link faculty-page" data-page="${currentFacultyPage + 1}" aria-label="Next">
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
    
    facultyPaginationList.innerHTML = paginationHTML;
    
    // 为分页链接添加点击事件
    document.querySelectorAll('.faculty-page[data-page]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute('data-page'));
        if (page && page !== currentFacultyPage) {
          currentFacultyPage = page;
          renderFacultyAwards();
          window.scrollTo({
            top: document.querySelector('#faculty-awards').offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ============================
  // 学生奖项分页功能
  // ============================
  
  const studentItemsPerPage = 10; // 学生奖项每页10条
  let currentStudentPage = 1;
  const totalStudentItems = studentAwards.length;
  const totalStudentPages = Math.ceil(totalStudentItems / studentItemsPerPage);
  
  const studentListContainer = document.getElementById('student-awards-list');
  const studentPagination = document.getElementById('student-pagination');
  const studentPaginationList = document.getElementById('student-pagination-list');
  const studentPageInfo = document.getElementById('student-page-info');
  
  // 渲染学生奖项
  function renderStudentAwards() {
    studentListContainer.innerHTML = '';
    
    if (totalStudentItems === 0) {
      studentListContainer.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-graduation-cap"></i>
          <h4>No Student Awards</h4>
          <p>Student awards will be displayed here</p>
        </div>
      `;
      studentPagination.classList.add('d-none');
      return;
    }
    
    // 计算当前页的项目
    const startIndex = (currentStudentPage - 1) * studentItemsPerPage;
    const endIndex = startIndex + studentItemsPerPage;
    const currentItems = studentAwards.slice(startIndex, endIndex);
    
    // 渲染项目
    currentItems.forEach(award => {
      const awardCard = createAwardCard(award, false);
      studentListContainer.appendChild(awardCard);
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
            top: document.querySelector('#student-awards').offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ============================
  // 筛选功能
  // ============================
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 更新按钮状态
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 显示对应的部分
      const filter = this.getAttribute('data-filter');
      
      document.getElementById('all-awards').classList.add('d-none');
      document.getElementById('faculty-awards').classList.add('d-none');
      document.getElementById('student-awards').classList.add('d-none');
      
      if (filter === 'all') {
        document.getElementById('all-awards').classList.remove('d-none');
        // 重置分页到第一页
        currentAllPage = 1;
        renderAllAwards();
      } else if (filter === 'faculty') {
        document.getElementById('faculty-awards').classList.remove('d-none');
        // 重置分页到第一页
        currentFacultyPage = 1;
        renderFacultyAwards();
      } else if (filter === 'student') {
        document.getElementById('student-awards').classList.remove('d-none');
        // 重置分页到第一页
        currentStudentPage = 1;
        renderStudentAwards();
      }
      
      // 平滑滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  // ============================
  // 回到顶部按钮
  // ============================
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'btn btn-primary rounded-circle shadow d-none';
  backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  backToTopBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:1000;width:45px;height:45px;box-shadow:0 2px 5px rgba(0,0,0,0.2);';
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove('d-none');
      backToTopBtn.style.display = 'flex';
      backToTopBtn.style.alignItems = 'center';
      backToTopBtn.style.justifyContent = 'center';
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
  renderAllAwards();
  renderFacultyAwards();
  renderStudentAwards();
});
</script>