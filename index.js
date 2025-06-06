const textElement = document.getElementById('text');
const languageSwitch = document.getElementById('languageSwitch');
const naviBoxes = document.querySelectorAll('.naviBox');

const navTexts = {
    en: {
        home: "Home",
        about: "M-Platforms",
        contact: "Contact Me",
        projects: "My Projects",
        honours: "My Honours",
        language: "语言切换",
        csdn: "CSDN",
        github: "Github",
        bilibili: "Bilibili",
        zhihu: "Zhihu",
        CSIET: "Innov.Entrep.Training",
        BCP: "ChallengeCup(Acad.)",
        SCP: "ChallengeCup(Biz.)",
        c4: "Collegiate.Comp.Cont",
        otherProject: "Other",
        societyWork: "Social Work",
        SocialPractice: "Social Practice",
        WorkExperience: "Work Experience",
        CommunityService: "Community Service",
        CompetitionAwards: "Competition",
        ServiceAwards: "Service",
        HobbyAwards: "Hobby",
        OtherAwards: "Other",
        contact_web: "Web",
        contact_email: "Email",
        contact_tell: "Phone",
        education: "Undergraduate(2023)",
        organization: "College of Computer Science, Sichuan University",
        skill: "Embedded Systems, Creative Design, etc."
    },
    zh: {
        home: "首    页",
        about: "账号平台",
        contact: "与我联系",
        projects: "我的项目",
        honours: "我的荣誉",
        language: "English",
        csdn: "CSDN",
        github: "Github",
        bilibili: "哔哩哔哩",
        zhihu: "知乎",
        CSIET: "大创计划",
        BCP: "“大挑”竞赛",
        SCP: "“小挑”竞赛",
        C4: "高校计设大赛",
        otherProject: "其他项目",
        societyWork: "社会工作",
        WorkExperience: "任职经历",
        SocialPractice: "社会实践",
        CommunityService: "志愿服务",
        CompetitionAwards: "专业竞赛获奖",
        ServiceAwards: "社会工作获奖",
        HobbyAwards: "爱好特长获奖",
        OtherAwards: "其他获奖",
        contact_web: "通过网页",
        contact_email: "通过邮箱",
        contact_tell: "通过电话",
        education: "学历：本科2023级",
        organization: "学院：四川大学计算机学院",
        skill: "技能：嵌入式系统开发、创意设计等"
    }
};
let currentLanguage = 'en'; // 默认语言为英文


// 更新导航栏文本
function updateTextLanguage() {
    [languageSwitch, ...naviBoxes].forEach(box => {
        const key = box.getAttribute('data-key');
        if (key) {
            const textElement = box.querySelector('.navi-text') || box;
            textElement.textContent = navTexts[currentLanguage][key];
        }
        const dropdown = box.querySelector('.dropdown-content');
        if (dropdown) {
            dropdown.querySelectorAll('a').forEach(link => {
                const linkKey = link.getAttribute('data-key');
                if (linkKey) {
                    link.textContent = navTexts[currentLanguage][linkKey];
                }
            });
        }
    });


    // 更新个人信息部分的文本
    
    const organizationElement = document.querySelector('.organization');
    const eduactionElement = document.querySelector('.education');
    const skillElement = document.querySelector('.skill');
    if (organizationElement) {
        organizationElement.textContent = navTexts[currentLanguage].organization;
    }
    if (eduactionElement) {
        eduactionElement.textContent = navTexts[currentLanguage].education;
    }
    if (skillElement) {
        skillElement.textContent = navTexts[currentLanguage].skill;
    }
}

// 切换语言
languageSwitch.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en'; // 切换语言
    updateTextLanguage(); 
});

// 定义一个函数来逐字母显示代码
const codeContent = 
`<div id="personalInfoOverview">
    <div id="personalInfoOverview-top">
        <div class="personalInfoOverview-left">
            <img src="Strayer.jpg" alt="Avatar" class="avatar">
        </div>
        <div class="personalInfoOverview-right">
            <div class="info">
                <h3>Strayer👑</h3>
                <span class="divider"></span>
                <div class="education" data-key="education">本科</div>
                <div class="organization" data-key="organization">四川大学</div>
                <div class="skill" data-key="skill">硬件</div>
                <div class="signiture">I want to sleep...</div>
            </div>
        </div>
    </div>
    <div id="personalInfoOverview-bottom">
        <div class="awards">四川大学2023-2024学年综合三等奖学金-SCU 2023-2024 Third-Class Scholarship</div>
        <div class="awards">四川大学2023-2024学年本科优秀学生-SCU 2023-2024 Outstanding Undergraduate</div>
        <div class="awards">全国大学生数学建模竞赛省级三等奖-National CUMCM Provincial Third Prize(2024)</div>
        <div class="awards">四川大学电子设计竞赛三等奖-SCU Electronics Design Contest Third Prize(2024)</div>
    </div>
</div>
`;

const codeText = document.querySelector('.codeContainerText');
let index = 0;

// 状态机状态
const states = {
    NORMAL: 0,
    TAG: 1,
    STRING: 2,
    ATTRIBUTE: 3,
    COMMENT: 4
};

let currentState = states.NORMAL;
let currentTag = '';

function typeCode() {
    if (index < codeContent.length) {
        const currentChar = codeContent[index];
        let highlightedChar = highlightCharacter(currentChar);
        codeText.innerHTML += highlightedChar;
        index++;
        // 滚动到最底部
        codeContainer.scrollTop = codeText.scrollHeight;
        setTimeout(typeCode, 0.1); 
    }
}

function highlightCharacter(char) {
    switch (currentState) {
        case states.NORMAL:
            if (char === '<') {
                currentState = states.TAG;
                return '<span class="tag">&lt;</span>';
            } else if (char === '"') {
                currentState = states.STRING;
                return '<span class="string">&quot;</span>';
            } else if (char === '/') {
                return '<span class="tag">/</span>';
            } else if (char === '=') {
                return '<span class="attribute">=</span>';
            } else {
                return char;
            }
        case states.TAG:
            if (char === '>') {
                currentState = states.NORMAL;
                return '<span class="tag">&gt;</span>';
            } else if (char === '"') {
                currentState = states.ATTRIBUTE;
                return '<span class="tag">&quot;</span>';
            } else {
                return `<span class="tag">${char}</span>`;
            }
        case states.STRING:
            if (char === '"') {
                currentState = states.NORMAL;
                return '<span class="string">&quot;</span>';
            } else {
                return `<span class="string">${char}</span>`;
            }
        case states.ATTRIBUTE:
            if (char === '"') {
                currentState = states.TAG;
                return '<span class="tag">&quot;</span>';
            } else if (char === '=') {
                return '<span class="attribute">=</span>';
            } else {
                return `<span class="attribute">${char}</span>`;
            }
        default:
            return char;
    }
}


updateTextLanguage();
typeCode();
