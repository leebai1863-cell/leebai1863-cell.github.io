---
layout: page
permalink: /members/
title: Members
description: Team members of AgRobot
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

/* 标题样式 */
.section-title {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}

.subsection-title {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin: 50px 0 30px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

/* 第一位导师特殊样式 - 单行显示 */
.first-faculty-card {
  background: #fff;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  height: 220px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  width: 100%;
}

.first-faculty-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  border-color: #3498db;
}

/* 导师卡片样式 */
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 固定两列 */
  gap: 30px;
  margin: 30px 0;
}

.faculty-card {
  background: #fff;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  height: 220px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.faculty-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  border-color: #3498db;
}

.faculty-photo {
  width: 180px;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
}

.first-faculty-card .faculty-photo {
  width: 220px; /* 第一位导师照片更大 */
}

.faculty-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.first-faculty-card:hover .faculty-photo img,
.faculty-card:hover .faculty-photo img {
  transform: scale(1.05);
}

.faculty-info {
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.first-faculty-card .faculty-info {
  padding: 30px; /* 第一位导师信息区域更大 */
}

.faculty-name {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.3;
}

.first-faculty-card .faculty-name {
  font-size: 24px; /* 第一位导师名字更大 */
}

.faculty-title {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 17px;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 8px;
}

.first-faculty-card .faculty-title {
  font-size: 18px; /* 第一位导师职称更大 */
}

.faculty-degree {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 15px;
  color: #7f8c8d;
  margin-bottom: 12px;
}

/* 研究方向样式 */
.faculty-research {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  line-height: 1.5;
}

.first-faculty-card .faculty-research {
  font-size: 15px; /* 第一位导师研究方向文字更大 */
}

.faculty-research strong {
  color: #2c3e50;
  font-style: normal;
}

/* 联系信息样式 */
.faculty-contact {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  line-height: 1.5;
}

.first-faculty-card .faculty-contact {
  font-size: 15px; /* 第一位导师联系信息文字更大 */
}

.faculty-contact strong {
  color: #2c3e50;
  font-style: normal;
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
  height: 180px; /* 恢复高度，因为要显示毕业去向 */
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
  transition: transform 0.3s ease;
}

.student-card:hover .student-photo img {
  transform: scale(1.05);
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

/* 毕业去向样式 - 已去除斜体 */
.student-destination {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  line-height: 1.4;
}

.student-destination strong {
  color: #2c3e50;
}

/* 统计数据样式 */
.stats-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0 40px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
}

.stat-label {
  font-family: "Times New Roman", SimSun, serif;
  font-size: 16px;
  color: #7f8c8d;
  margin-top: 5px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .team-container {
    padding: 15px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .subsection-title {
    font-size: 20px;
    margin: 40px 0 25px 0;
  }
  
  .first-faculty-card {
    height: auto;
    flex-direction: column;
  }
  
  .first-faculty-card .faculty-photo {
    width: 100%;
    height: 220px;
    border-right: none;
    border-bottom: 1px solid #eaeaea;
  }
  
  .faculty-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .faculty-card {
    height: auto;
    flex-direction: column;
  }
  
  .faculty-photo {
    width: 100%;
    height: 200px;
    border-right: none;
    border-bottom: 1px solid #eaeaea;
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
  
  .stats-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>

<div class="team-container">
  <h1 class="section-title">实验室成员</h1>
  
  <!-- 统计数据 -->
  <div class="stats-container">
    <div class="stat-item">
      <div class="stat-number">{{ site.data.members.current | size }}</div>
      <div class="stat-label">在读学生</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">{{ site.data.members.graduated | size }}</div>
      <div class="stat-label">已毕业学生</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">
        {% assign current = site.data.members.current | size %}
        {% assign graduated = site.data.members.graduated | size %}
        {{ current | plus: graduated }}
      </div>
      <div class="stat-label">总计</div>
    </div>
  </div>
  
  <!-- 导师团队部分 -->
  {% if site.data.members.faculty and site.data.members.faculty.size > 0 %}
  <h2 class="subsection-title">导师团队</h2>
  
  <!-- 第一位导师单独显示 -->
  {% assign first_faculty = site.data.members.faculty | first %}
  <div class="first-faculty-card">
    <div class="faculty-photo">
      {% if first_faculty.photo %}
      <img src="{{ first_faculty.photo | relative_url }}" alt="{{ first_faculty.name }}" loading="lazy">
      {% else %}
      <div class="no-photo-placeholder">
        照片
      </div>
      {% endif %}
    </div>
    <div class="faculty-info">
      <div class="faculty-name">{{ first_faculty.name }}</div>
      <div class="faculty-title">{{ first_faculty.title }}</div>
      {% if first_faculty.degree %}
      <div class="faculty-degree">{{ first_faculty.degree }}</div>
      {% endif %}
      {% if first_faculty.research_interest %}
      <div class="faculty-research">
        <strong>研究方向：</strong>{{ first_faculty.research_interest }}
      </div>
      {% endif %}
      {% if first_faculty.email %}
      <div class="faculty-contact">
        <strong>邮箱：</strong>{{ first_faculty.email }}
      </div>
      {% endif %}
    </div>
  </div>
  
  <!-- 其他导师网格布局 -->
  {% assign remaining_faculty = site.data.members.faculty | slice: 1, site.data.members.faculty.size %}
  {% if remaining_faculty.size > 0 %}
  <div class="faculty-grid">
    {% for faculty in remaining_faculty %}
    <div class="faculty-card">
      <div class="faculty-photo">
        {% if faculty.photo %}
        <img src="{{ faculty.photo | relative_url }}" alt="{{ faculty.name }}" loading="lazy">
        {% else %}
        <div class="no-photo-placeholder">
          照片
        </div>
        {% endif %}
      </div>
      <div class="faculty-info">
        <div class="faculty-name">{{ faculty.name }}</div>
        <div class="faculty-title">{{ faculty.title }}</div>
        {% if faculty.degree %}
        <div class="faculty-degree">{{ faculty.degree }}</div>
        {% endif %}
        {% if faculty.research_interest %}
        <div class="faculty-research">
          <strong>研究方向：</strong>{{ faculty.research_interest }}
        </div>
        {% endif %}
        {% if faculty.email %}
        <div class="faculty-contact">
          <strong>邮箱：</strong>{{ faculty.email }}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  {% endif %}
  
  <!-- 在读学生部分 -->
  <h2 class="subsection-title">在读学生</h2>
  
  <!-- 博士研究生 -->
  {% assign phd_students = site.data.members.current | where: "degree", "博士研究生" %}
  {% if phd_students.size > 0 %}
  <h3 style="font-family: 'Times New Roman', SimSun, serif; font-size: 18px; color: #555; margin: 30px 0 15px 0;">博士研究生</h3>
  <div class="students-grid">
    {% assign sorted_phd = phd_students | sort: "year" %}
    {% for student in sorted_phd %}
    <div class="student-card">
      <div class="student-photo">
        {% if student.photo %}
        <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}" loading="lazy">
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
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  
  <!-- 硕士研究生 -->
  {% assign ms_students = site.data.members.current | where: "degree", "硕士研究生" %}
  {% if ms_students.size > 0 %}
  <h3 style="font-family: 'Times New Roman', SimSun, serif; font-size: 18px; color: #555; margin: 30px 0 15px 0;">硕士研究生</h3>
  <div class="students-grid">
    {% assign sorted_ms = ms_students | sort: "year" %}
    {% for student in sorted_ms %}
    <div class="student-card">
      <div class="student-photo">
        {% if student.photo %}
        <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}" loading="lazy">
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
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  
  <!-- 已毕业学生部分 -->
  <h2 class="subsection-title">已毕业学生</h2>
  
  <!-- 已毕业博士研究生 -->
  {% assign graduated_phd = site.data.members.graduated | where: "degree", "博士研究生" %}
  {% if graduated_phd.size > 0 %}
  <h3 style="font-family: 'Times New Roman', SimSun, serif; font-size: 18px; color: #555; margin: 30px 0 15px 0;">博士研究生</h3>
  <div class="students-grid">
    {% assign sorted_graduated_phd = graduated_phd | sort: "year" %}
    {% for student in sorted_graduated_phd %}
    <div class="student-card">
      <div class="student-photo">
        {% if student.photo %}
        <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}" loading="lazy">
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
        <!-- 添加毕业去向显示 -->
        {% if student.graduation_destination and student.graduation_destination != "" %}
        <div class="student-destination">
          <strong>毕业去向：</strong>{{ student.graduation_destination }}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
  
  <!-- 已毕业硕士研究生 -->
  {% assign graduated_ms = site.data.members.graduated | where: "degree", "硕士研究生" %}
  {% if graduated_ms.size > 0 %}
  <h3 style="font-family: 'Times New Roman', SimSun, serif; font-size: 18px; color: #555; margin: 30px 0 15px 0;">硕士研究生</h3>
  <div class="students-grid">
    {% assign sorted_graduated_ms = graduated_ms | sort: "year" %}
    {% for student in sorted_graduated_ms %}
    <div class="student-card">
      <div class="student-photo">
        {% if student.photo %}
        <img src="{{ student.photo | relative_url }}" alt="{{ student.name }}" loading="lazy">
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
        <!-- 添加毕业去向显示 -->
        {% if student.graduation_destination and student.graduation_destination != "" %}
        <div class="student-destination">
          <strong>毕业去向：</strong>{{ student.graduation_destination }}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
</div>