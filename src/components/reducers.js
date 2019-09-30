const reducers = {
    languageLevel: {
        English: {
            id: 'English',
            level: ["IELTS Overall: 6.5", "Listening: 6.5 ", "Reading: 5.5 ", "Writing: 6.5", "Speaking: 7.0"]
        }, 
        Japanese: {
            id: 'Japanese',
            level: ["Beginer"]
        }
    },
    education: {
        msc: {
            school: 'Newcastle University',
            course: "MSc. Computer Science",
            time: "2018/9-2019/9"
        },
        bsc: {
            school: "Wuhan University",
            course: "BSc. Web Communication",
            time: "2011/9-2015/7"
        }
    },
    skills: [
         {
            title: "Front-End",
            list: [
                "JavaScript (ES5 / ES6)",
                "HTML / CSS",
                "React / Redux",
                "jQuery",
                "Semantic-UI"
            ]
        },
        {
            title: "Back-End",
            list: [
                "Java",
                "SQL",
                "MySQL"
            ]
        },
        {
            title: "Others",
            list: [
                "Git",
                "Nightwatch.js (End-to-End test)",
                "AJAX",
                "Google Analytics",
                "Google Data Studio",
                "Chart.js"
            ]
        }
    ],
    project: {
        resume: {
            id: 'Resume',
            skills: ["React", "JavaScript", "HTML", "CSS", "Semantic-UI"],
            description: ["1. 使用React實作", "2. 撰寫Functional Component，並實作元件之間的狀態管理","3. 使用gitHub上線"],
            link:"https://jameslin3263.github.io/resume/"
        },
        warehouse: {
            id: '倉庫管理系統',
            skills: ["jQuery", "JavaScript", "HTML", "CSS", "PHP", "MySQL", "Chart.js", "Semantic-UI"],
            description: [
                "1. 使用JavaScript, HTML, CSS, jQuery操作DOM",
                "2. 使用AJAX串接後端API",
                "3. 有使用PHP接收AJAX request 並 response 數據庫資料的經驗",
                "4. 使用MySQL數據庫",
                "5. 使用Chart.js製作數據圖表",
                "6. 使用semantic-UI (CSS framework)",
                "7. 使用gitLab做版本控制"
            ],
            link:""
        },
        photoSearch: {
            id: "Photo Search",
            skills: ["React", "JavaScript", "HTML", "CSS", "Semantic-UI"],
            description: [
                "1. 使用React實作照片搜尋",
                "2. 撰寫Class 跟 Functional Component，並實作元件之間的狀態管理",
                "3. 串接 Unsplash API"
            ],
            link:""
        },
        videoSearch: {
            id: "Video Search",
            skills: ["React", "JavaScript", "HTML", "CSS", "Semantic-UI"],
            description: [
                "1. 使用React 實作Youtube影片搜尋",
                "2. 撰寫Class 跟 Functional Component，並實作元件之間的狀態管理",
                "3. 串接 Youtube API"
            ],
            link:""
        },
        dissertation: {
            id: "Dissertation Project",
            skills: ["jQuery", "JavaScript", "HTML", "CSS", "Semantic-UI", "Nightwatch.js"],
            description: [
                "1. 使用JavaScript, CSS, HTML, jQuery實作動畫",
                "2. 使用Nightwatch.js 做測試",
                "3. 架設基本Node server (localhost)"
            ],
            link:"https://github.com/jameslin3263/dissertation"
        }
    },
    experience: {
        work: {
            type: "實習",
            length: "18 months",
            tasks: [
                "1. 實習主要是負責處理跟分析數據，用來協助其他部門做網絡行銷，對業界常用數據分析方法和工具有一定認識，有接觸過SEO跟SEM的經驗。",
                "2. 有使用Google Analytics 跟Data Studio的經驗。",
                "3. 有寫過End-to-End Test的經驗，寫過Selenium Test, 使用Nightwatch.js框架，有寫過測試文件。",
                "4. 有使用過GTM。",
                "5. 有QA經驗。"
            ]
        }
    }
}

export default reducers