---
layout: default
permalink: /awards/
title: Awards
nav: true
nav_order: 6
---

# 奖项与荣誉

<div class="container mt-4">

<!-- 检查数据是否存在 -->
{% if site.data.awards and site.data.awards.size > 0 %}

<!-- 统计信息 -->
<div class="row mb-4">
  <div class="col-md-12">
    <div class="alert alert-info">
      <div class="row text-center">
        <div class="col">
          <h4 class="mb-1">{{ site.data.awards.size }}</h4>
          <p class="mb-0 text-muted">总奖项数</p>
        </div>
        <div class="col border-start">
          <h4 class="mb-1">{{ site.data.awards | where: "type", "学生竞赛" | size }}</h4>
          <p class="mb-0 text-muted">学生竞赛奖</p>
        </div>
        <div class="col border-start">
          <h4 class="mb-1">{{ site.data.awards | where: "type", "个人" | size }}</h4>
          <p class="mb-0 text-muted">个人奖项</p>
        </div>
        <div class="col border-start">
          <h4 class="mb-1">{{ site.data.awards | where: "level", 1 | size }}</h4>
          <p class="mb-0 text-muted">国家级一等奖</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 按类型分组显示 -->
<div class="row">
  <!-- 学生竞赛奖项 -->
  <div class="col-lg-8">
    <h3>🏆 学生竞赛获奖</h3>
    
    {% assign student_awards = site.data.awards | where: "type", "学生竞赛" %}
    {% if student_awards.size > 0 %}
      {% assign sorted_student = student_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
      
      {% assign current_year = 0 %}
      {% assign current_month = 0 %}
      
      {% for award in sorted_student %}
        {% if award.year != current_year %}
          {% if current_year != 0 %}</div>{% endif %}
          <h4 class="mt-4 mb-3">{{ award.year }}年</h4>
          <div class="ms-3">
          {% assign current_year = award.year %}
          {% assign current_month = 0 %}
        {% endif %}
        
        {% if award.month != current_month %}
          {% if current_month != 0 %}</div>{% endif %}
          <h5 class="mt-3 mb-2">{{ award.month }}月</h5>
          <div class="ms-3">
          {% assign current_month = award.month %}
        {% endif %}
        
        <div class="award-item student-award mb-3">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <div>
              <strong>{{ award.competition }}</strong>
              {% if award.name != award.competition %}
              <div class="text-muted small">项目：{{ award.name }}</div>
              {% endif %}
            </div>
            <span class="badge 
              {% if award.level == 0 %}bg-warning text-dark
              {% elsif award.level == 1 %}bg-danger
              {% elsif award.level == 2 %}bg-warning text-dark
              {% elsif award.level == 3 %}bg-info
              {% elsif award.level == 4 %}bg-success
              {% elsif award.level == 5 %}bg-primary
              {% else %}bg-secondary
              {% endif %}">
              {{ award.level_name }}
            </span>
          </div>
          
          <div class="mb-1">
            <span class="badge bg-light text-dark me-2">
              <i class="fas fa-user-graduate"></i> {{ award.participant }}
            </span>
          </div>
          
          {% if award.description and award.description != "" %}
          <div class="alert alert-light p-2 mt-2 mb-0">
            <i class="fas fa-trophy text-warning"></i> {{ award.description }}
          </div>
          {% endif %}
        </div>
      {% endfor %}
      </div>
    {% else %}
      <p class="text-muted">暂无学生竞赛获奖记录。</p>
    {% endif %}
  </div>
  
  <!-- 个人奖项 -->
  <div class="col-lg-4">
    <h3>🏅 个人奖项</h3>
    
    {% assign personal_awards = site.data.awards | where: "type", "个人" %}
    {% if personal_awards.size > 0 %}
      {% assign sorted_personal = personal_awards | sort: "level" | sort: "month" | reverse | sort: "year" | reverse %}
      
      {% for award in sorted_personal %}
      <div class="award-item personal-award mb-3">
        <div class="d-flex justify-content-between align-items-start mb-1">
          <strong>{{ award.name }}</strong>
          <span class="badge 
            {% if award.level == 1 %}bg-danger
            {% elsif award.level == 2 %}bg-warning text-dark
            {% elsif award.level == 3 %}bg-info
            {% elsif award.level == 4 %}bg-success
            {% elsif award.level == 5 %}bg-primary
            {% else %}bg-secondary
            {% endif %}">
            {{ award.level_name }}
          </span>
        </div>
        
        <div class="text-muted small mb-1">
          {{ award.organization }} · {{ award.year }}年{{ award.month }}月
        </div>
        
        {% if award.description and award.description != "" %}
        <div class="small">{{ award.description }}</div>
        {% endif %}
      </div>
      {% endfor %}
    {% else %}
      <p class="text-muted">暂无个人奖项记录。</p>
    {% endif %}
    
    <!-- 添加新奖项的提示 -->
    <div class="alert alert-light mt-4">
      <h6>📝 添加新奖项</h6>
      <p class="small mb-2">如需添加个人奖项，请编辑 <code>_data/awards.yml</code> 文件。</p>
      <a href="#add-award-instruction" class="btn btn-sm btn-outline-primary" data-bs-toggle="collapse">
        查看添加方法
      </a>
      <div id="add-award-instruction" class="collapse mt-2">
        <pre class="bg-light p-2 small"><code>- type: "个人"
  name: "奖项名称"
  year: 2024
  month: 1
  level: 1
  level_name: "国家级一等奖"
  organization: "颁发机构"
  description: "奖项描述（可选）"</code></pre>
      </div>
    </div>
  </div>
</div>

{% else %}
<!-- 如果没有数据，显示静态内容 -->
<div class="alert alert-warning">
  <h4>📝 奖项信息正在整理中</h4>
  <p>目前还没有添加奖项数据。</p>
  <p>请编辑 <code>_data/awards.yml</code> 文件来添加奖项信息。</p>
</div>
{% endif %}

</div>

<style>
.award-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.award-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.student-award {
  border-left: 4px solid #28a745;
}

.personal-award {
  border-left: 4px solid #0d6efd;
}

.award-item .badge {
  font-size: 0.85em;
  padding: 0.35em 0.65em;
  white-space: nowrap;
}

.alert-light {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c3e50;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 10px;
  margin-bottom: 1.5rem;
}

h4 {
  color: #495057;
  font-weight: 600;
}

h5 {
  color: #6c757d;
  font-weight: 600;
}

pre {
  border-radius: 6px;
}
</style>

<script>
// 简单的折叠功能
document.addEventListener('DOMContentLoaded', function() {
  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
      toggle: false
    })
  })
});
</script>