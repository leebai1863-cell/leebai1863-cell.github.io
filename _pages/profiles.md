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

/* 网格布局 - 每行两列卡片 */
.students-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 固定两列 */
  gap: 25px;
  margin: 30px 0;
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
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #999;
  font-size: 14px;
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
  margin-bottom: 8px;
}

.student-research {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 14px;
  color: #555;
  font-style: italic;
  line-height: 1.4;
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
}
</style>

<div class="team-container">
  <h1 class="team-title">在读学生</h1>
  
  <!-- 学生信息卡片容器 -->
  <div class="students-grid">
    {% for student in site.data.members %}
    <div class="student-card">
      <div class="student-photo">
        {% if student.photo %}
        <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}">
        {% else %}
        <div class="no-photo-placeholder">
          照片
        </div>
        {% endif %}
      </div>
      <div class="student-info">
        <div class="student-year">{{ student.year }}</div>
        <div class="student-name">{{ student.name }}</div>
        <div class="student-degree">{{ student.degree }}</div>
        {% if student.research %}
        <div class="student-research">{{ student.research }}</div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>