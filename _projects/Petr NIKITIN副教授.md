---
layout: page
title: 农工综合体中大语言模型参数优化与高效微调应用进展
description: 俄罗斯联邦金融大学Petr NIKITIN副教授
img: assets/img/scholarly_photos/Petr_NIKITIN.jpg
importance: 1
category: Conferences
related_publications: false
date: 2026-01-18
---

<!-- 仅新增标题字体大小样式，其余样式保留不变 -->
<style>
    /* 新增：设置页面标题的字体大小 */
    h1.page-title {
        font-size: 24px; /* 可根据需求修改数值，如22px、26px */
        /* 可选：如需标题也匹配宋体+Times New Roman，可添加以下行 */
        /* font-family: Times New Roman, SimSun, serif; */
    }

    .project-main-text {
        font-family: Times New Roman, SimSun, serif;
        font-size: 17px;
        text-indent: 2em;
        line-height: 1.5;
    }
    .caption {
        font-family: Times New Roman, SimSun, serif;
        font-size: 17px;
    }
    /* 新增：为图片容器添加顶部外边距，实现文字与图片的间距 */
    .image-container {
        margin-top: 20px; /* 可根据需求调整数值，如15px、25px */
    }
</style>

<!-- 原有结构完全保留，仅包裹类名 -->
<div class="project-main-text">
    2026年1月18日上午10：30-11：00，俄罗斯联邦金融大学Petr NIKITIN副教授做了题为“Parameter Optimization and Further Training of Large Language Models for Use in the Agro-Industrial Complex”的学术报告。报告会由机电学院傅隆生教授主持，俄罗斯国立土地利用规划大学副校长Vladimir I. SOLOVIEV教授、俄罗斯联邦金融大学Nikita ANDRIYANOV副教授及机电学院40余名师生参加了此次学术报告。
</div>

<!-- 新增image-container类，为图片添加顶部间距 -->
<div class="image-container"> 
    <div class="row">
        <div class="col-sm-8 offset-sm-2 mt-3 mt-md-0">
            <div class="ratio ratio-4x3">
                {% include figure.liquid loading="eager" path="assets/img/scholarly_photos/Petr_NIKITIN.jpg" title="example image" class="img-fluid rounded z-depth-1 object-fit-cover" %}
            </div>
        </div>
    </div>     
</div>

<div class="project-main-text mt-4">
    报告中，Petr NIKITIN副教授围绕“大语言模型参数优化与进一步训练”展开介绍。他指出，农工综合体（АПК）场景任务多、数据形态复杂且对成本敏感，大模型要真正落地，必须同时考虑训练开销、推理时延与长期运维等工程约束，而不能仅停留在实验指标的提升。
</div>
<div class="project-main-text mt-4">
    在技术路线方面，他重点讲解了参数高效微调（PEFT）的核心思想，并以LoRA、Adapter等方法为例，说明“基础模型+轻量适配模块”能够在较小参数增量下完成面向特定任务的能力迁移，显著降低全量微调带来的算力与存储压力，同时提升多任务场景下的快速切换效率。结合部署需求，他进一步从延迟、吞吐与首Token时间等指标出发，说明推理服务评估要点，并提出批处理策略、缓存复用等可行优化方向。同时，他强调应结合农业业务流程构建可复现的评测体系，确保模型效果稳定转化为生产能力。
</div>
<div class="project-main-text mt-4">
    报告结束后，现场讨论氛围浓厚。与会专家学者就大语言模型在农工综合体中的应用展开深入讨论，研究生们也结合报告内容提出了相关问题。针对这些问题，Petr NIKITIN副教授与在场教师逐一进行了解答与指导，使同学们对该研究方向有了更清晰的认识。
</div>