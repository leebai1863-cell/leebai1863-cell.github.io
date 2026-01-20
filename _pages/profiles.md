---
layout: page
permalink: /members/
title: 团队成员
description: 实验室成员介绍
nav: true
nav_order: 7
---

<style>
/* 团队成员页面样式 */
.team-container {
  max-width: 1000px;
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

/* 列表视图样式 - 简洁 */
.student-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.student-photo {
  width: 60px;
  height: 80px;
  margin-right: 15px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  background: #f5f5f5;
  flex-shrink: 0;
}

.student-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-info {
  flex: 1;
}

.student-year {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 16px;
  font-weight: 600;
  color: #7f8c8d;
  margin-bottom: 5px;
}

.student-name {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.student-degree {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 14px;
  color: #95a5a6;
}

/* 已毕业学生特殊样式 */
.graduated-section .student-list-item {
  opacity: 0.8;
}

.graduated-section .student-year {
  color: #b0b0b0;
}

.graduated-section .student-name {
  color: #666;
}

.graduated-section .student-degree {
  color: #aaa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .team-container {
    padding: 15px;
  }
  
  .team-title {
    font-size: 24px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .student-photo {
    width: 50px;
    height: 70px;
    margin-right: 10px;
  }
  
  .student-name {
    font-size: 18px;
  }
  
  .student-year {
    font-size: 14px;
  }
}

/* 搜索框样式 */
.search-container {
  margin-bottom: 30px;
  text-align: center;
}

.search-input {
  padding: 10px 15px;
  width: 300px;
  max-width: 80%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Times New Roman", SimSun, serif;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #3498db;
}
</style>

<div class="team-container">
  <h1 class="team-title">团队成员</h1>
  
  <!-- 搜索框 -->
  <div class="search-container">
    <input type="text" id="studentSearch" class="search-input" placeholder="搜索学生姓名...">
  </div>
  
  <!-- 使用数据文件动态生成 -->
  {% if site.data.members %}
    <!-- 在校学生 -->
    <h2 class="section-title">在读学生</h2>
    <div class="current-section">
      {% for student in site.data.members.current %}
      <div class="student-list-item">
        <div class="student-photo">
          {% if student.photo %}
          <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
          {% else %}
          <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #999; font-size: 12px;">
            照片
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
    <div class="graduated-section">
      {% for student in site.data.members.graduated %}
      <div class="student-list-item">
        <div class="student-photo">
          {% if student.photo %}
          <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
          {% else %}
          <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #999; font-size: 12px;">
            照片
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
  <p style="text-align: center; color: #666; font-style: italic;">
    请创建 _data/members.yml 文件来管理团队成员信息
  </p>
  
  <!-- 静态示例（仅用于演示） -->
  <h2 class="section-title">在读学生</h2>
  <div class="current-section">
    <div class="student-list-item">
      <div class="student-photo">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #999; font-size: 12px;">
          照片
        </div>
      </div>
      <div class="student-info">
        <div class="student-year">2020级</div>
        <div class="student-name">姜立志</div>
        <div class="student-degree">博士研究生</div>
      </div>
    </div>
  </div>
  
  <h2 class="section-title">已毕业学生</h2>
  <div class="graduated-section">
    <div class="student-list-item">
      <div class="student-photo">
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #f0f0f0; color: #999; font-size: 12px;">
          照片
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
  const studentItems = document.querySelectorAll('.student-list-item');
  
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    studentItems.forEach(item => {
      const name = item.querySelector('.student-name').textContent.toLowerCase();
      const year = item.querySelector('.student-year').textContent.toLowerCase();
      const degree = item.querySelector('.student-degree').textContent.toLowerCase();
      
      if (searchTerm === '' || name.includes(searchTerm) || year.includes(searchTerm) || degree.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
</script>