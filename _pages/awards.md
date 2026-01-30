# `_pages/awards.md`

---
layout: default
permalink: /awards/
title: Awards
nav: true
nav_order: 6
---

# 奖项与荣誉

{% assign awards_by_year = site.data.awards | group_by: "year" | sort: "name" | reverse %}

{% for year_group in awards_by_year %}
## {{ year_group.name }}年

{% for award in year_group.items %}
### {{ award.title }}
- **类别：** {{ award.category }}
- **颁发机构：** {{ award.organization }}
- **描述：** {{ award.description }}

{% if award.link %}
[🔗 查看详情]({{ award.link }}){: .btn .btn-outline .btn-sm }
{% endif %}

{% if award.pdf %}
[📄 PDF文件]({{ award.pdf }}){: .btn .btn-outline .btn-sm }
{% endif %}

{% endfor %}
{% endfor %}