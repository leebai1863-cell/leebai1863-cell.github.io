---
layout: page
title: 面向集约化果园自主运输的感知技术
description: 俄罗斯联邦金融大学Nikita ANDRIYANOV副教授
img: assets/img/scholarly_photos/Nikita_ANDRIYANOV.jpg
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
    2026年1月18日上午9:30-10:00，俄罗斯联邦金融大学Nikita ANDRIYANOV副教授做了题为“Ensembling Apple Detection Models and Semantic Segmentation for Autonomous Transport in Horticulture”的学术报告。报告会由傅隆生教授主持，俄罗斯国立土地规划大学副校长Vladimir I. SOLOVIEV教授、俄罗斯联邦金融大学Petr NIKITIN副教授以及机电学院40多位师生参加了此次学术报告。
</div>

<!-- 新增image-container类，为图片添加顶部间距 -->
<div class="image-container"> 
    <div class="row">
        <div class="col-sm-8 offset-sm-2 mt-3 mt-md-0">
            <div class="ratio ratio-4x3">
                {% include figure.liquid loading="eager" path="assets/img/scholarly_photos/Nikita_ANDRIYANOV.jpg" title="example image" class="img-fluid rounded z-depth-1 object-fit-cover" %}
            </div>
        </div>
    </div>     
</div>

<div class="project-main-text mt-4">
    报告中，Nikita ANDRIYANOV副教授报介绍了面向集约化果园自主运输的感知技术，结合了用于苹果检测的YOLO系列检测器自适应集成与基于Transformer的语义分割导航。首先，Nikita ANDRIYANOV副教授基于果园场景中苹果检测面临的挑战，阐述了团队采用的模型集成策略，可实现在各种天气条件下均能稳定提升检测精度。并展示了团队自主开发的软件平台，该平台不仅支持自动检测与人工校正，还提供多种实用的模型选择与融合方式。接下来，Nikita ANDRIYANOV副教授着重解释了语义分割相对于传统边界框检测在导航中的优势，介绍了利用SegFormer架构进行语义分割。他强调，单纯的苹果定位无法引导车辆行驶，而语义分割能清晰划分出可通行路径、树木、近树干安全区等区域，并通过提取路径中心线，使车辆能沿果树行间稳定直线前进。最后，Nikita ANDRIYANOV副教授表示未来将推进实时集成、嵌入式优化及田间验证等工作。
</div>
<div class="project-main-text mt-4">
    报告结束后，根据Nikita ANDRIYANOV副教授提到的各种研究和观点，与会师生展开了热烈交流，为在场师生拓展了研究视野，也进一步促进了相关领域的研究思路交叉与启发。
</div>
