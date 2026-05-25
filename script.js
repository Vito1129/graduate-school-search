// Sample data for schools offering graduate programs in relevant fields
const schoolData = [
    {
        id: 1,
        name: "國立台灣大學",
        englishName: "National Taiwan University",
        department: "電機工程學研究所",
        acceptanceRate: "約 15-20%",
        subjects: [
            {
                name: "半導體元件物理",
                syllabus: [
                    "能帶理論與載子濃度",
                    "PN結與金屬-半導體接觸",
                    "MOS電容與薄膜電晶體",
                    "雙極電晶體與場效電晶體",
                    "熱生成與複合過程",
                    "載子傳輸與擴散",
                    "肖特基效應與邊界態"
                ]
            },
            {
                name: "電子學",
                syllabus: [
                    "類電子電路設計",
                    "數位電路基礎",
                    "放大器理論與應用",
                    "反饋電路與穩定性",
                    "振盪器與濾波器",
                    "運算放大器應用",
                    "電源電路與穩壓器"
                ]
            },
            {
                name: "工程數學",
                syllabus: [
                    "線性代數與矩陣論",
                    "常微分方程",
                    "偏微分方程",
                    "複變函數論",
                    "傅立葉與拉普拉斯變換",
                    "向量積分與發散理論",
                    "數值分析方法"
                ]
            }
        ],
        examInfo: {
            years: ["2023", "2022", "2021", "2020"],
            notice: "考試時間：每年4月第二個週六，地點：台大電機館",
            link: "https://www.ee.ntu.edu.tw/bin/home.php?Lang=zh-tw"
        }
    },
    {
        id: 2,
        name: "國立清華大學",
        englishName: "National Tsing Hua University",
        department: "電子工程學研究所",
        acceptanceRate: "約 10-15%",
        subjects: [
            {
                name: "半導體元件物理",
                syllabus: [
                    "半導體材料特性",
                    - "PN結理論與應用",
                    "MOSFET物理與特性",
                    "雙極接面電晶體",
                    "半導體製程技術",
                    "元件模擬與CAD工具",
                    "新興納米電子元件"
                ]
            },
            {
                name: "電子學",
                syllabus: [
                    "類比積體電路設計",
                    "數位訊號處理",
                    "電磁波與天線",
                    "微波電路與元件",
                    "光電子學基礎",
                    "電路理論進階",
                    "無線通訊系統"
                ]
            },
            {
                name: "工程數學",
                syllabus: [
                    "高等工程數學",
                    "偏微分方程數值解",
                    "最佳化理論與應用",
                    "隨機過程與應用",
                    "控制理論數學基礎",
                    "張量分析",
                    "組合數學與圖論"
                ]
            }
        ],
        examInfo: {
            years: ["2023", "2022", "2021", "2020"],
            notice: "考試時間：每年3月最後一個週末，地點：清華大學電子館",
            link: "https://www.ee.nthu.edu.tw/"
        }
    },
    {
        id: 3,
        name: "國立成功大學",
        englishName: "National Cheng Kung University",
        department: "微電子學研究所",
        acceptanceRate: "約 12-18%",
        subjects: [
            {
                name: "半導體元件物理",
                syllabus: [
                    "半導體物理基礎",
                    "PN結與二極體",
                    "電晶體物理與特性",
                    "MOS元件深入探討",
                    "功率半導體元件",
                    "感測器與MEMS元件",
                    "元件可靠度與失效分析"
                ]
            },
            {
                name: "電子學",
                syllabus: [
                    "類比電路設計進階",
                    "數位系統設計",
                    "混合訊號電路",
                    "電源管理電路",
                    "射頻電路設計",
                    "電磁相容性(EMC)",
                    "印刷電路板(PCB)設計"
                ]
            },
            {
                name: "工程數學",
                syllabus: [
                    "線性系統理論",
                    "傅立葉分析與應用",
                    "複變與積分變換",
                    "偏微分方程工程應用",
                    "隨機過程與雜訊分析",
                    "最佳化方法工程應用",
                    "數值方法與軟體應用"
                ]
            }
        ],
        examInfo: {
            years: ["2023", "2022", "2021", "2020"],
            notice: "考試時間：每年4月第一個週末，地點：成功大學微電子館",
            link: "https://www.oia.ncku.edu.tw/p/412-1000-1001.php?Lang=zh-tw"
        }
    },
    {
        id: 4,
        name: "國立交通大學",
        englishName: "National Chiao Tung University",
        department: "電子工程學研究所",
        acceptanceRate: "約 8-12%",
        subjects: [
            {
                name: "半導體元件物理",
                syllabus: [
                    "能帶結構與載子輸運",
                    "接面物理與 heterojunctions",
                    "量子井與低維系統",
                    "有機與無機半導體",
                    "奈米電子與自旋電子",
                    "光電元件與太陽能電池",
                    "元件製程與Characterization"
                ]
            },
            {
                name: "電子學",
                syllabus: [
                    "高頻電路與系統",
                    "類比積體電路設計",
                    "數位訊號處理晶片",
                    "無線通訊收發機",
                    "光通訊系統",
                    "混合訊號系統設計",
                    "系統晶片(SoC)設計"
                ]
            },
            {
                name: "工程數學",
                syllabus: [
                    "線性代數進階應用",
                    "常微分方程數值解",
                    "偏微分方程求解方法",
                    "複變函數工程應用",
                    "傅立葉與小波分析",
                    "最佳化理論與算法",
                    "隨機過程與馬可夫鏈"
                ]
            }
        ],
        examInfo: {
            years: ["2023", "2022", "2021", "2020"],
            notice: "考試時間：每年3月第三個週末，地點：交大電子館",
            link: "https://www.oia.nctu.edu.tw/"
        }
    },
    {
        id: 5,
        name: "國立中央大學",
        englishName: "National Central University",
        department: "光電科學與工程學研究所",
        acceptanceRate: "約 10-15%",
        subjects: [
            {
                name: "半導體元件物理",
                syllabus: [
                    "半導體基礎物理",
                    "PN結與特殊二極體",
                    "場效電晶體物理",
                    "雙極電晶體特性",
                    "光電半導體元件",
                    "太陽能電池物理",
                    "半導體製程技術"
                ]
            },
            {
                name: "電子學",
                syllabus: [
                    "類比電子電路",
                    "數位邏輯設計",
                    "微處理器與微控制器",
                    "嵌入式系統設計",
                    "訊號與系統",
                    "通訊系統基礎",
                    "控制系統設計"
                ]
            },
            {
                name: "工程數學",
                syllabus: [
                    "工程數學基礎",
                    "線性代數與應用",
                    "常微分方程",
                    "偏微分方程初步",
                    "複變函數論",
                    "積分變換與應用",
                    "概率統計與隨機過程"
                ]
            }
        ],
        examInfo: {
            years: ["2023", "2022", "2021", "2020"],
            notice: "考試時間：每年4月第三個週末，地點：中央大學光電館",
            link: "https://www.ope.ncu.edu.tw/"
        }
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('results');

// Display all schools initially
displaySchools(schoolData);

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query === '') {
        displaySchools(schoolData);
        return;
    }
    
    const filteredData = schoolData.filter(school => {
        return school.name.toLowerCase().includes(query) || 
               school.englishName.toLowerCase().includes(query) ||
               school.department.toLowerCase().includes(query) ||
               school.subjects.some(subject => 
                   subject.name.toLowerCase().includes(query) ||
                   subject.syllabus.some(item => item.toLowerCase().includes(query))
               );
    });
    
    displaySchools(filteredData);
});

// Allow Enter key to trigger search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Function to display schools
function displaySchools(schools) {
    if (schools.length === 0) {
        resultsSection.innerHTML = `
            <div class="no-results">
                <p>找不到相關的學校或系所</p>
                <p>請嘗試其他關鍵字</p>
            </div>
        `;
        return;
    }
    
    resultsSection.innerHTML = schools.map(school => createSchoolCard(school)).join('');
}

// Function to create school card HTML
function createSchoolCard(school) {
    return `
        <div class="school-card">
            <div class="school-header">
                <h2>${school.name}</h2>
                <p class="department">${school.department}</p>
                ${school.englishName && `<p>${school.englishName}</p>`}
                <p class="acceptance-rate">錄取率：${school.acceptanceRate}</p>
            </div>
            <div class="school-body">
                ${school.subjects.map(subject => `
                    <div class="subject">
                        <h3>${subject.name}</h3>
                        <div class="syllabus">
                            <strong>考試大綱：</strong>
                            <ul>
                                ${subject.syllabus.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
                
                <div class="exam-info">
                    <h4>歷年考試資訊</h4>
                    <p><strong>可參考年度：</strong>${school.examInfo.years.join('、')}</p>
                    <p><strong>考試說明：</strong>${school.examInfo.notice}</p>
                    ${school.examInfo.link ? `<a href="${school.examInfo.link}" target="_blank" rel="noopener noreferrer">參考簡章連結</a>` : ''}
                </div>
            </div>
        </div>
    `;
}