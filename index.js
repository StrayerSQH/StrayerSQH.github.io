const textElement = document.getElementById('text');
const languageSwitch = document.getElementById('languageSwitch');
const naviBoxes = document.querySelectorAll('.naviBox');

const texts = {
    en: "Hello there! I'm StrayerSQH!",
    zh: "你好！我是StrayerSQH！"
};

const navTexts = {
    en: {
        home: "Home",
        about: "M-Platform",
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
        contact_tell: "Phone"
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
        contact_tell: "通过电话"
    }
};

let currentLanguage = 'en'; // 默认语言为英文

// 更新导航栏文本
function updateNavText() {
    [languageSwitch, home, ...naviBoxes].forEach(box => {
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
}

// 切换语言
languageSwitch.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en'; // 切换语言
    updateNavText(); // 更新导航栏文本
});

// 初始显示文本
updateNavText();
