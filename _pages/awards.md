---
layout: default
permalink: /awards/
title: 奖项与荣誉
nav: true
nav_order: 6
pagination:
  enabled: true
  collection: awards
  per_page: 5
  sort_field: 'year'
  sort_reverse: true
---

# 奖项与荣誉

<div class="container mt-4">

## 🏆 导师获奖
<!-- 导师获奖部分 -->

{% assign teacher_awards = site.data.awards | where: "type", "导师" %}
{% assign sorted_teacher = teacher_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}

{% comment %} 分页设置 {% endcomment %}
{% assign per_page = 5 %}
{% assign total_items = sorted_teacher.size %}
{% assign total_pages = total_items | divided_by: per_page | plus: 1 %}
{% assign current_page = page.current_page | default: 1 %}
{% assign start_index = current_page | minus: 1 | times: per_page %}
{% assign end_index = start_index | plus: per_page | minus: 1 %}
{% assign paginated_items = sorted_teacher | slice: start_index, per_page %}

<!-- 显示当前页的导师获奖 -->
<div class="teacher-awards">
  {% if paginated_items.size > 0 %}
    {% for award in paginated_items %}
    <div class="card mb-3 teacher-card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <h5 class="card-title mb-1">{{ award.title }}</h5>
          <span class="badge bg-primary">{{ award.level_name }}</span>
        </div>
        
        <div class="card-subtitle mb-2 text-muted">
          <small>
            {{ award.year }}年{{ award.month }}月 · {{ award.organization }}
          </small>
        </div>
        
        {% if award.description %}
        <p class="card-text">{{ award.description }}</p>
        {% endif %}
      </div>
    </div>
    {% endfor %}
    
    <!-- 分页导航 -->
    {% if total_pages > 1 %}
    <nav aria-label="导师获奖分页" class="mt-4">
      <ul class="pagination justify-content-center">
        <!-- 上一页 -->
        {% if current_page > 1 %}
        <li class="page-item">
          <a class="page-link" href="?page={{ current_page | minus: 1 }}#teacher-awards">上一页</a>
        </li>
        {% else %}
        <li class="page-item disabled">
          <span class="page-link">上一页</span>
        </li>
        {% endif %}
        
        <!-- 页码 -->
        {% for page_num in (1..total_pages) %}
          {% if page_num == current_page %}
          <li class="page-item active" aria-current="page">
            <span class="page-link">{{ page_num }}</span>
          </li>
          {% else %}
          <li class="page-item">
            <a class="page-link" href="?page={{ page_num }}#teacher-awards">{{ page_num }}</a>
          </li>
          {% endif %}
        {% endfor %}
        
        <!-- 下一页 -->
        {% if current_page < total_pages %}
        <li class="page-item">
          <a class="page-link" href="?page={{ current_page | plus: 1 }}#teacher-awards">下一页</a>
        </li>
        {% else %}
        <li class="page-item disabled">
          <span class="page-link">下一页</span>
        </li>
        {% endif %}
      </ul>
      
      <div class="text-center text-muted small">
        第 {{ current_page }} 页 / 共 {{ total_pages }} 页 · 共 {{ total_items }} 项
      </div>
    </nav>
    {% endif %}
    
  {% else %}
  <div class="alert alert-info">
    暂无导师获奖记录
  </div>
  {% endif %}
</div>

<hr class="my-5">

## 🎓 学生获奖
<!-- 学生获奖部分 -->

{% assign student_awards = site.data.awards | where: "type", "学生" %}
{% assign sorted_student = student_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}

{% if sorted_student.size > 0 %}
  {% assign current_year = 0 %}
  
  {% for award in sorted_student %}
    {% if award.year != current_year %}
      {% if current_year != 0 %}</div>{% endif %}
      <h4 class="mt-4 mb-3">{{ award.year }}年</h4>
      <div class="ms-3">
      {% assign current_year = award.year %}
    {% endif %}
    
    <div class="student-award-item mb-3">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <strong>{{ award.title }}</strong>
          {% if award.competition %}
          <div class="text-muted small">{{ award.competition }}</div>
          {% endif %}
        </div>
        <span class="badge 
          {% if award.level == 0 %}bg-warning text-dark
          {% elsif award.level == 1 or award.level == 3 or award.level == 9 %}bg-danger
          {% elsif award.level == 2 or award.level == 5 or award.level == 7 or award.level == 10 %}bg-primary
          {% else %}bg-secondary
          {% endif %}">
          {{ award.level_name }}
        </span>
      </div>
      
      <div class="text-muted small mt-1">
        {{ award.participant }}
      </div>
      
      {% if award.note %}
      <div class="small mt-1 text-info">{{ award.note }}</div>
      {% endif %}
    </div>
  {% endfor %}
  </div>
{% else %}
<div class="alert alert-info">
  暂无学生获奖记录
</div>
{% endif %}

</div>

<style>
/* 导师获奖卡片样式 */
.teacher-card {
  border-left: 4px solid #0d6efd;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.teacher-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* 学生获奖项目样式 */
.student-award-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #28a745;
}

.student-award-item:hover {
  background: #e9ecef;
}

/* 分页样式增强 */
.pagination .page-link {
  border-color: #dee2e6;
}

.pagination .active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

/* 标题样式 */
h2 {
  color: #2c3e50;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 10px;
  margin-bottom: 1.5rem;
}

h4 {
  color: #495057;
  font-weight: 600;
}
</style>

<script>
// 分页锚点跳转处理
document.addEventListener('DOMContentLoaded', function() {
  // 如果URL中有页码参数，滚动到导师获奖部分
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page');
  if (page) {
    // 等待页面加载完成
    setTimeout(() => {
      const teacherSection = document.getElementById('teacher-awards');
      if (teacherSection) {
        teacherSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  
  // 分页链接添加锚点
  const paginationLinks = document.querySelectorAll('.pagination a.page-link');
  paginationLinks.forEach(link => {
    if (!link.href.includes('#')) {
      link.href += '#teacher-awards';
    }
  });
});
</script>