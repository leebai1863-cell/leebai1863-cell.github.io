// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Latest news and announcements",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-scholarly-seminars",
          title: "Scholarly Seminars",
          description: "实验室例会与学术报告",
          section: "Navigation",
          handler: () => {
            window.location.href = "/scholarly%20seminars";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "实验室集体活动",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-members",
          title: "Members",
          description: "Team members of AgRobot",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "activities-实验室集体活动",
          title: '实验室集体活动',
          description: "羽毛球",
          section: "Activities",handler: () => {
              window.location.href = "/activities/2026-01-09/";
            },},{id: "activities-实验室集体活动",
          title: '实验室集体活动',
          description: "羽毛球",
          section: "Activities",handler: () => {
              window.location.href = "/activities/2026-01-16/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-ai与机器人赋能特色作物管理技术及研究进展",
          title: 'AI与机器人赋能特色作物管理技术及研究进展',
          description: "美国佛罗里达大学Yiannis AMPATZIDIS教授",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Conferences_Yiannis%20AMPATZIDIS%E6%95%99%E6%8E%88/";
            },},{id: "projects-面向集约化果园自主运输的感知技术",
          title: '面向集约化果园自主运输的感知技术',
          description: "俄罗斯联邦金融大学Nikita ANDRIYANOV副教授",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Conferences_Nikita%20ANDRIYANOV%E5%89%AF%E6%95%99%E6%8E%88/";
            },},{id: "projects-农工综合体中大语言模型参数优化与高效微调应用进展",
          title: '农工综合体中大语言模型参数优化与高效微调应用进展',
          description: "俄罗斯联邦金融大学Petr NIKITIN副教授",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Conferences_Petr%20NIKITIN%E5%89%AF%E6%95%99%E6%8E%88/";
            },},{id: "projects-现代苹果园的人工智能应用进展",
          title: '现代苹果园的人工智能应用进展',
          description: "俄罗斯国立土地规划大学副校长Vladimir I. SOLOVIEV教授",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Conferences_Vladimir%20I.%20SOLOVIEV%E6%95%99%E6%8E%88/";
            },},{id: "projects-智慧农业中差异性与数字化权衡的研究进展",
          title: '智慧农业中差异性与数字化权衡的研究进展',
          description: "意大利帕多瓦大学Francesco MARINELLO教授",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Conferences_Francesco%20MARINELLO%E6%95%99%E6%8E%88/";
            },},{id: "projects-实验室组会",
          title: '实验室组会',
          description: "实验室全体成员参与",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Presentions_2026.01.25/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
