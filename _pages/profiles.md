---
layout: page
permalink: /members/
title: Members
description: Team members of lab
nav: true
nav_order: 7
---

<style>
/* 团队成员页面样式 */
.team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.team-title {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin: 40px 0 25px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
}

/* 网格布局 - 每行两列卡片 */
.students-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 固定两列 */
  gap: 25px;
  margin-bottom: 30px;
}

/* 卡片样式 */
.student-card {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  height: 180px; /* 固定高度，确保卡片对齐 */
}

.student-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
  border-color: #d0d0d0;
}

.student-photo {
  width: 140px;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.student-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #7f8c8d;
  font-size: 14px;
}

.no-photo-placeholder .icon {
  font-size: 36px;
  margin-bottom: 8px;
}

.student-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.student-name {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
  line-height: 1.3;
}

.student-year {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 16px;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 5px;
}

.student-degree {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 15px;
  color: #7f8c8d;
  margin-bottom: 10px;
}

/* 已毕业学生卡片特殊样式 */
.graduated-section .student-card {
  opacity: 0.9;
}

.graduated-section .student-name {
  color: #666;
}

.graduated-section .student-year {
  color: #95a5a6;
}

.graduated-section .student-degree {
  color: #aaa;
}

/* 搜索框样式 */
.search-container {
  margin-bottom: 30px;
  text-align: center;
}

.search-input {
  padding: 12px 20px;
  width: 350px;
  max-width: 80%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Times New Roman", SimSun, serif;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.search-input:focus {
  border-color: #3498db;
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .team-container {
    padding: 15px;
  }
  
  .team-title {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 20px;
    margin: 30px 0 20px 0;
  }
  
  .students-grid {
    grid-template-columns: 1fr; /* 在小屏幕上变为单列 */
    gap: 20px;
  }
  
  .student-card {
    height: auto;
    flex-direction: column;
  }
  
  .student-photo {
    width: 100%;
    height: 180px;
  }
  
  .search-input {
    width: 90%;
    padding: 10px 15px;
    font-size: 15px;
  }
}

/* 搜索结果高亮 */
.highlight {
  background-color: #fffacd;
  padding: 2px 4px;
  border-radius: 2px;
}
</style>

<div class="team-container">
  <h1 class="team-title">团队成员</h1>
  
  <!-- 搜索框 -->
  <div class="search-container">
    <input type="text" id="studentSearch" class="search-input" placeholder="搜索学生姓名或年级...">
  </div>
  
  <!-- 使用数据文件动态生成 -->
  {% if site.data.members %}
    <!-- 在校学生 -->
    <h2 class="section-title">在读学生</h2>
    <div class="students-grid current-section">
      {% for student in site.data.members.current %}
      <div class="student-card" data-search="{{ student.name }} {{ student.year }} {{ student.degree }}">
        <div class="student-photo">
          {% if student.photo %}
          <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
          {% else %}
          <div class="no-photo-placeholder">
            <div class="icon">👤</div>
            <div>暂无照片</div>
          </div>
          {% endif %}
        </div>
        <div class="student-info">
          <div class="student-year">{{ student.year }}</div>
          <div class="student-name">{{ student.name }}</div>
          <div class="student-degree">{{ student.degree }}</div>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <!-- 已毕业学生 -->
    <h2 class="section-title">已毕业学生</h2>
    <div class="students-grid graduated-section">
      {% for student in site.data.members.graduated %}
      <div class="student-card" data-search="{{ student.name }} {{ student.year }} {{ student.degree }}">
        <div class="student-photo">
          {% if student.photo %}
          <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
          {% else %}
          <div class="no-photo-placeholder">
            <div class="icon">👤</div>
            <div>暂无照片</div>
          </div>
          {% endif %}
        </div>
        <div class="student-info">
          <div class="student-year">{{ student.year }} (已毕业)</div>
          <div class="student-name">{{ student.name }}</div>
          <div class="student-degree">{{ student.degree }}</div>
        </div>
      </div>
      {% endfor %}
    </div>
    
  {% else %}
  <!-- 如果数据文件不存在，显示静态内容 -->
  <p style="text-align: center; color: #666; font-style: italic; margin: 40px 0;">
    请创建 _data/members.yml 文件来管理团队成员信息
  </p>
  
  <!-- 静态示例（仅用于演示） -->
  <h2 class="section-title">在读学生</h2>
  <div class="students-grid current-section">
    <!-- 示例卡片 1 -->
    <div class="student-card" data-search="姜立志 2020级 博士研究生">
      <div class="student-photo">
        <div class="no-photo-placeholder">
          <div class="icon">👤</div>
          <div>暂无照片</div>
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2020级</div>
        <div class="student-name">姜立志</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
    
    <!-- 示例卡片 2 -->
    <div class="student-card" data-search="毛吾兰 2022级 博士研究生">
      <div class="student-photo">
        <div class="no-photo-placeholder">
          <div class="icon">👤</div>
          <div>暂无照片</div>
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2022级</div>
        <div class="student-name">毛吾兰</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
    
    <!-- 示例卡片 3 -->
    <div class="student-card" data-search="刘小娟 2022级 博士研究生">
      <div class="student-photo">
        <div class="no-photo-placeholder">
          <div class="icon">👤</div>
          <div>暂无照片</div>
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2022级</div>
        <div class="student-name">刘小娟</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
    
    <!-- 示例卡片 4 -->
    <div class="student-card" data-search="贺磊磊 2023级 博士研究生">
      <div class="student-photo">
        <div class="no-photo-placeholder">
          <div class="icon">👤</div>
          <div>暂无照片</div>
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2023级</div>
        <div class="student-name">贺磊磊</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
  </div>
  
  <h2 class="section-title">已毕业学生</h2>
  <div class="students-grid graduated-section">
    <div class="student-card" data-search="张三 2019级 博士研究生">
      <div class="student-photo">
        <div class="no-photo-placeholder">
          <div class="icon">👤</div>
          <div>暂无照片</div>
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2019级 (已毕业)</div>
        <div class="student-name">张三</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
  </div>
  {% endif %}
</div>

<script>
// 学生搜索功能
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('studentSearch');
  const studentCards = document.querySelectorAll('.student-card');
  
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    studentCards.forEach(card => {
      const searchData = card.getAttribute('data-search').toLowerCase();
      
      if (searchTerm === '' || searchData.includes(searchTerm)) {
        card.style.display = 'flex';
        
        // 高亮显示匹配的文本
        if (searchTerm !== '') {
          const nameElement = card.querySelector('.student-name');
          const yearElement = card.querySelector('.student-year');
          const degreeElement = card.querySelector('.student-degree');
          
          [nameElement, yearElement, degreeElement].forEach(element => {
            const originalText = element.textContent;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = originalText.replace(regex, '<span class="highlight">$1</span>');
            element.innerHTML = highlightedText;
          });
        }
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  // 恢复原始文本（当搜索框清空时）
  searchInput.addEventListener('blur', function(e) {
    if (e.target.value === '') {
      studentCards.forEach(card => {
        const nameElement = card.querySelector('.student-name');
        const yearElement = card.querySelector('.student-year');
        const degreeElement = card.querySelector('.student-degree');
        
        [nameElement, yearElement, degreeElement].forEach(element => {
          element.innerHTML = element.textContent;
        });
      });
    }
  });
});
</script>