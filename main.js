/// smooth-scroll Nav

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400,
    speedAsDuration: true
});


const button = document.querySelector('.selected-lang');
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    button.classList.add('btn--clicked');
    document.querySelectorAll('span').forEach((element)=>{element.classList.add('expanded')})
    
    
    
    
    /* 
---------------------------------------
just to reset without having to refresh..
 --------------------------------*/
     setTimeout(()=>{button.classList.remove("btn--clicked")},3500);
     setTimeout(()=>{document.querySelectorAll('span').forEach((element)=>{element.classList.remove('expanded')})},1700)});


 
let discographyList = [
    {
        "title_kor" : "빌리 더 뱃",
        "title_eng" : "Billy the Bat",
        "title_cn_simp" : "蝙蝠比利",
        "title_cn_trad" : "蝙蝠比利",
        "img_name" : "Billy the Bat.png",
        "station" : "EBS",
        "num_episodes" : 104,
        "year": 1997,
        "type": "TV Series"
    },
    {
        "title_kor" : "어쩌면 좋아",
        "title_eng" : "Oh My Gosh",
        "title_cn_simp" : "該如何是好",
        "title_cn_trad" : "該如何是好",
        "img_name" : "Oh My Gosh.png",
        "station" : "MBC",
        "num_episodes" : 41,
        "year" : 2001,
        "type" : "TV Series"
    },
    {
        "title_kor" : "울지마, 엄마!",
        "title_eng" : "Don't Cry Mom!",
        "title_cn_simp" : "别哭妈妈",
        "title_cn_trad" : "別哭媽媽",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2003,
        "type" : "Documentary"
    },
    {
        "title_kor" : "숨은 사랑 찾기",
        "title_eng" : "Finding Hidden Love",
        "title_cn_simp" : "寻找隐藏的爱情",
        "title_cn_trad" : "尋找隱藏的愛情",
        "img_name" :  "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2003,
        "type" : "Documentary"
    },
    {
        "title_kor" : "아르곤",
        "title_eng" : "Argon",
        "title_cn_simp" : "Argon",
        "title_cn_trad" : "Argon",
        "img_name" : "Argon.png",
        "station" : "MBC",
        "num_episodes" : 2,
        "year" : 2003,
        "type" : "Short Film"
    },
    {
        "title_kor" : "겨울 하느님께",
        "title_eng" : "Dear Winter God",
        "title_cn_simp" : "致冬季的上帝" ,
        "title_cn_trad" : "致冬季的上帝",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "단팥빵",
        "title_eng" : "Sweet Buns",
        "title_cn_simp" : "红豆面包",
        "title_cn_trad" : "紅豆麵包",
        "img_name" : "Sweet Buns.png",
        "station" : "MBC",
        "num_episodes" : 26,
        "year" : 2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "물꽃마을 사람들",
        "title_eng" : "People of Water Flower Village",
        "title_cn_simp" : "花溪村的人们",
        "title_cn_trad" : "花溪村的人們",
        "img_name" : "People of Water Flower Village.png",
        "station" :  "MBC",
        "num_episodes" : 26,
        "year" :2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "깡순이",
        "title_eng" : "Kkangsooni",
        "title_cn_simp" : "勇敢的女孩",
        "title_cn_trad" : "勇敢的女孩",
        "img_name" : "Kkangsooni.png",
        "station" : "EBS",
        "num_episodes" : 84,
        "year" : 2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "작은 천사들",
        "title_eng" : "Little Angels",
        "title_cn_simp" : "小天使们",
        "title_cn_trad" : "小天使們",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "직지",
        "title_eng" : "Jikji",
        "title_cn_simp" : "直指",
        "title_cn_trad" : "直指",
        "img_name" : "Jikji.png",
        "station" : "MBC",
        "num_episodes" : 1,
        "year" : 2006,
        "type" : "Short Film"
    },
    {
        "title_kor" : "사막을 건너는 법",
        "title_eng" : "How to Cross the Desert",
        "title_cn_simp" : "穿越沙漠的方法",
        "title_cn_trad" : "穿越沙漠的方法",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "이별에 대처하는 우리의 자세",
        "title_eng" : "Rules of Love",
        "title_cn_simp" : "我们应对离别的方式",
        "title_cn_trad" : "我們應對離別的方式",
        "img_name" : "Rules of Love.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2005,
        "type" : "TV Series"
    },
    {
        "title_kor" : "바다가 하는 말",
        "title_eng" : "Listen to The Ocean",
        "title_cn_simp" : "大海说的故事",
        "title_cn_trad" : "大海說的故事",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2006,
        "type" : "Documentary"
    },
    {
        "title_kor" : "오성대반점",
        "title_eng" : "Five Star Hotel",
        "title_cn_simp" : "五星大饭店",
        "title_cn_trad" : "五星大飯店",
        "img_name" : "Five Star Hotel.png",
        "station" : "CCTV",
        "num_episodes" : 28,
        "year" : 2007,
        "type" : "TV Series"
    },
    {
        "title_kor" : "별순검",
        "title_eng" : "Chosun Police S1",
        "title_cn_simp" : "别巡检",
        "title_cn_trad" : "別巡檢",
        "img_name" : "Chosun Police S1.png",
        "station" : "MBC",
        "num_episodes" : 22,
        "year" : 2007,
        "type" : "TV Series"
    },
    {
        "title_kor" : "나도 잘 모르지만",
        "title_eng" : "Get Up",
        "title_cn_simp" : "虽然我也不懂",
        "title_cn_trad" : "雖然我也不懂",
        "img_name" : "Get Up.png",
        "station" : "MBC",
        "num_episodes" : "",
        "year" : 2008,
        "type" : "Movie"
    },
    {
        "title_kor" : "별순검 2",
        "title_eng" : "Chosun Police S2",
        "title_cn_simp" : "别巡检 2",
        "title_cn_trad" : "別巡檢 2",
        "img_name" : "Chosun Police S2.png",
        "station" : "MBC",
        "num_episodes" : 20,
        "year" : 2008,
        "type" : "TV Series"
    },
    {
        "title_kor" : "바나우에 라이스 테라스",
        "title_eng" : "Banaue's Rice Terrace",
        "title_cn_simp" : "巴拿威梯田",
        "title_cn_trad" : "巴拿威梯田",
        "img_name" : "Banaue's Rice Terrace.png",
        "station" : "EBS",
        "num_episodes" : "",
        "year" : 2009,
        "type" : "Documentary"
    },
    {
        "title_kor" : "멈출 수 없어",
        "title_eng" : "I Can't Stop",
        "title_cn_simp" : "无法停止",
        "title_cn_trad" : "無法停止",
        "img_name" : "I Can't Stop.png",
        "station" : "MBC",
        "num_episodes" : 129,
        "year" : 2009,
        "type" : "TV Series"
    },
    {
        "title_kor" : "별순검 3",
        "title_eng" : "Chosun Police S3",
        "title_cn_simp" : "别巡检 3",
        "title_cn_trad" : "別巡檢 3",
        "img_name" : "Chosun Police S3.png",
        "station" : "MBC",
        "num_episodes" : 20,
        "year" : 2010,
        "type" : "TV Series"
    },
    {
        "title_kor" : "볼수록 애교만점",
        "title_eng" : "More Charming By The Day",
        "title_cn_simp" : "越看越可爱",
        "title_cn_trad" : "越看越可愛",
        "img_name" : "More Charming By The Day.png",
        "station" : "MBC",
        "num_episodes" : 138,
        "year" : 2010,
        "type" : "TV Series"
    },
    {
        "title_kor" : "당신 참 예쁘다",
        "title_eng" : "You're So Pretty",
        "title_cn_simp" : "你真漂亮",
        "title_cn_trad" : "你眞漂亮",
        "img_name" : "You're So Pretty.png",
        "station" : "MBC",
        "num_episodes" : 135,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뚜바뚜바 눈보리 2",
        "title_eng" : "Tuba Tuba Noonbory S2",
        "title_cn_simp" : "嘟吧嘟吧 努宝力2",
        "title_cn_trad" : "嘟吧嘟吧 努宝力2",
        "img_name" : "Tuba Tuba Noonbory S2.png",
        "station" : "EBS 1",
        "num_episodes" : 26,
        "year" : 2011,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "TEN 1",
        "title_eng" : "Special Affairs Team S1",
        "title_cn_simp" : "特殊案件专案组 TEN1",
        "title_cn_trad" : "特殊案件專案組 TEN1",
        "img_name" : "Special Affairs Team S1.png",
        "station" : "OCN",
        "num_episodes" : 9,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "지고는 못살아",
        "title_eng" : "Can't Lose",
        "title_cn_simp" : "绝不认输",
        "title_cn_trad" : "絶不認輸",
        "img_name" : "Can't Lose.png",
        "station" : "MBC",
        "num_episodes" : 18,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "로맨스가 필요해 2012",
        "title_eng" : "I Need a Romance 2012",
        "title_cn_simp" : "需要浪漫 2012",
        "title_cn_trad" : "需要浪漫 2012",
        "img_name" : "I Need a Romance 2012.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "노란복수초",
        "title_eng" : "Yellow Boots",
        "title_cn_simp" : "黄色复仇草",
        "title_cn_trad" : "黃色復仇草",
        "img_name" : "Yellow Boots.png",
        "station" : "TVN",
        "num_episodes" : 108,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "유리가면",
        "title_eng" : "Glass Mask",
        "title_cn_simp" : "玻璃假面",
        "title_cn_trad" : "玻璃假面",
        "img_name" : "Glass Mask.png",
        "station" : "TVN",
        "num_episodes" : 122,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "프로포즈 대작전",
        "title_eng" : "Operation Proposal",
        "title_cn_simp" : "求婚大作战",
        "title_cn_trad" : "求婚大作戰",
        "img_name" : "Operation Proposal.png",
        "station" : "TV Chosun",
        "num_episodes" : 16,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "엄마가 뭐길래",
        "title_eng" : "What is Mom",
        "title_cn_simp" : "妈妈是什么",
        "title_cn_trad" : "媽媽是什麼",
        "img_name" : "What is Mom.png",
        "station" : "MBC",
        "num_episodes" : 27,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "인현왕후의 남자",
        "title_eng" : "Queen and I",
        "title_cn_simp" : "仁显王后的男人",
        "title_cn_trad" : "仁顯王后的男人",
        "img_name" : "Queen and I.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뽀롱뽀롱 뽀로로 4",
        "title_eng" : "Pororo the Little Penguin S4",
        "title_cn_simp" : "小企鹅宝露露 4",
        "title_cn_trad" : "小企鵝寶露露 4",
        "img_name" : "Pororo the Little Penguin S4.png",
        "station" : "EBS 1",
        "num_episodes" : 26,
        "year" : 2012,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "뽀로로의 잉글리시 쇼",
        "title_eng" : "Pororo's English Show",
        "title_cn_simp" : "小企鹅宝露露的英语秀",
        "title_cn_trad" : "小企鵝寶露露的英語秀",
        "img_name" : "Pororo's English Show.png",
        "station" : "EBS 1",
        "num_episodes" : 13,
        "year" : 2012,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "내 손을 잡아",
        "title_eng" : "Hold My Hands",
        "title_cn_simp" : "握住我的手",
        "title_cn_trad" : "握住我的手",
        "img_name" : "Hold My Hands.png",
        "station" : "MBC",
        "num_episodes" : 130,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "이웃집 꽃미남",
        "title_eng" : "My Cute Guys",
        "title_cn_simp" : "邻家花美男",
        "title_cn_trad" : "鄰家花美男",
        "img_name" : "My Cute Guys.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "TEN 2",
        "title_eng" : "Special Affairs Team S2",
        "title_cn_simp" : "特殊案件专案组 TEN2",
        "title_cn_trad" : "特殊案件專案組 TEN2",
        "img_name" : "Special Affairs Team S2.png",
        "station" : "OCN",
        "num_episodes" : 12,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "천명",
        "title_eng" : "The Fugitive of Joseon",
        "title_cn_simp" : "天命 : 朝鲜版逃亡者故事",
        "title_cn_trad" : "天命 : 朝鮮版逃亡者故事",
        "img_name" : "The Fugitive of Joseon.png",
        "station" : "KBS 2",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "네 이웃의 아내",
        "title_eng" : "Your Neighbor's Wife",
        "title_cn_simp" : "你邻居的妻子",
        "title_cn_trad" : "你鄰居的妻子",
        "img_name" : "Your Neighbor's Wife.png",
        "station" : "JTBC",
        "num_episodes" : 22,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "나인",
        "title_eng" : "Nine",
        "title_cn_simp" : "Nine：九回时间旅行",
        "title_cn_trad" : "Nine：九回時間旅行",
        "img_name" : "Nine.png",
        "station" : "TVN",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "무정도시",
        "title_eng" : "Heartless City",
        "title_cn_simp" : "无情都市",
        "title_cn_trad" : "無情都市",
        "img_name" : "Heartless City.png",
        "station" : "JTBC",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "내 생애 봄날",
        "title_eng" : "My Spring Days",
        "title_cn_simp" : "我人生的春天",
        "title_cn_trad" : "我人生的春天",
        "img_name" : "My Spring Days.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "연애의 발견",
        "title_eng" : "Discovery of Love",
        "title_cn_simp" : "恋爱的发现",
        "title_cn_trad" : "戀愛的發現",
        "img_name" : "Discovery of Love.png",
        "station" : "KBS 2",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뽀롱뽀롱 구출작전",
        "title_eng" : "Porong Porong Rescue Mission",
        "title_cn_simp" : "小企鹅宝露露的营救作战",
        "title_cn_trad" : "小企鵝宝露露的營救作戰",
        "img_name" : "Porong Porong Rescue Mission.png",
        "station" : "",
        "num_episodes" : "",
        "year" : 2014,
        "type" : "Movie"
    },
    {
        "title_kor" : "뽀롱뽀롱 뽀로로 5",
        "title_eng" : "Pororo the Little Penguin S5",
        "title_cn_simp" : "小企鹅宝露露 5",
        "title_cn_trad" : "小企鵝寶露露 5",
        "img_name" : "Pororo the Little Penguin S5.png",
        "station" : "EBS 1",
        "num_episodes" : 27,
        "year" : 2014,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "로맨스가 필요해 3",
        "title_eng" : "I Need a Romance S3",
        "title_cn_simp" : "需要浪漫3",
        "title_cn_trad" : "需要浪漫3",
        "img_name" : "I Need a Romance S3.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "엔젤 아이즈",
        "title_eng" : "Angel Eyes",
        "title_cn_simp" : "天使之眼",
        "title_cn_trad" : "天使之眼",
        "img_name" : "Angel Eyes.png",
        "station" : "SBS",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "눈길",
        "title_eng" : "Snowy Road",
        "title_cn_simp" : "雪路",
        "title_cn_trad" : "雪路",
        "img_name" : "Snowy Road.png",
        "station" : "KBS 1",
        "num_episodes" : "2 films",
        "year" : 2015,
        "type" : "Movie"
    },
    {
        "title_kor" : "마녀의 연애",
        "title_eng" : "A Witch's Love",
        "title_cn_simp" : "魔女的恋爱",
        "title_cn_trad" : "魔女的戀愛",
        "img_name" : "A Witch's Love.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "삼총사",
        "title_eng" : "The Three Musketeers",
        "title_cn_simp" : "三剑客",
        "title_cn_trad" : "三劍客",
        "img_name" : "The Three Musketeers.png",
        "station" : "TVN",
        "num_episodes" : 12,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "상애천사천년",
        "title_eng" : "The Love Weave Through a Millennium",
        "title_cn_simp" : "相爱穿梭千年",
        "title_cn_trad" : "相愛穿梭千年",
        "img_name" : "The Love Weave Through a Millennium.png",
        "station" : "Hunan TV",
        "num_episodes" : 24,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "처음이라서",
        "title_eng" : "Because It's The First Time",
        "title_cn_simp" : "因为是第一次",
        "title_cn_trad" : "因為是第一次",
        "img_name" : "Because It's The First Time.png",
        "station" : "OnStyle",
        "num_episodes" : 8,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "사랑하는 은동아",
        "title_eng" : "This is My Love",
        "title_cn_simp" : "亲爱的恩东啊",
        "title_cn_trad" : "親愛的恩東啊",
        "img_name" : "This is My Love.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "풍선껌",
        "title_eng" : "Bubblegum",
        "title_cn_simp" : "泡泡糖",
        "title_cn_trad" : "泡泡糖",
        "img_name" : "Bubblegum.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "아름다운 나의 신부",
        "title_eng" : "My Beautiful Bride",
        "title_cn_simp" : "我的美丽新娘",
        "title_cn_trad" : "我的美麗新娘",
        "img_name" : "My Beautiful Bride.png",
        "station" : "OCN",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "한번 더 해피엔딩",
        "title_eng" : "One More Happy Ending",
        "title_cn_simp" : "再一次 Happy Ending",
        "title_cn_trad" : "再一次 Happy Ending",
        "img_name" : "One More Happy Ending.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series"
    },
    {
        "title_kor" : "질투의 화신",
        "title_eng" : "Don't Dare to Dream",
        "title_cn_simp" : "嫉妒的化身",
        "title_cn_trad" : "嫉妒的化身 ",
        "img_name" : "Don't Dare to Dream.png",
        "station" : "SBS",
        "num_episodes" : 24,
        "year" : 2016,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "기억",
        "title_eng" : "Memory Highlights",
        "title_cn_simp" : "记忆",
        "title_cn_trad" : "記憶",
        "img_name" : "Memory Highlights.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "굿 와이프",
        "title_eng" : "The Good Wife",
        "title_cn_simp" : "法庭女王",
        "title_cn_trad" : "法庭女王",
        "img_name" : "The Good Wife.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "시카고 타자기",
        "title_eng" : "Chicago Typewriter",
        "title_cn_simp" : "芝加哥打字机",
        "title_cn_trad" : "芝加哥打字機",
        "img_name" : "Chicago Typewriter.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2017,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "빨간 선생님",
        "title_eng" : "The Red Teacher",
        "title_cn_simp" : "红色老师",
        "title_cn_trad" : "紅色老師",
        "img_name" : "The Red Teacher.png",
        "station" : "KBS",
        "num_episodes" : "Drama Special",
        "year" : 2016,
        "type" : "Short Film",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "도깨비",
        "title_eng" : "Guardian: The Lonely and Great God",
        "title_cn_simp" : "孤单又灿烂的神－鬼怪",
        "title_cn_trad" : "孤單又燦爛的神－鬼怪",
        "img_name" : "Goblin.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "하백의 신부",
        "title_eng" : "The Bride of Habaek",
        "title_cn_simp" : "河伯的新娘",
        "title_cn_trad" : "河伯的新娘",
        "img_name" : "The Bride of Habaek.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2017,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "블랙",
        "title_eng" : "Black",
        "title_cn_simp" : "Black",
        "title_cn_trad" : "Black",
        "img_name" : "Black.png",
        "station" : "OCN",
        "num_episodes" : 18,
        "year" : 2017,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "수상한 파트너",
        "title_eng" : "Suspicious Partner",
        "title_cn_simp" : "奇怪的搭档",
        "title_cn_trad" : "奇怪的搭檔",
        "img_name" : "Suspicious Partner.png",
        "station" : "SBS",
        "num_episodes" : 40,
        "year" : 2017,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "그냥 사랑하는 사이",
        "title_eng" : "Rain or Shine",
        "title_cn_simp" : "只是相爱的关系",
        "title_cn_trad" : "只是相愛的關係",
        "img_name" : "Rain or Shine.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "낫플레이드",
        "title_eng" : "Not Played",
        "title_cn_simp" : "Not Played",
        "title_cn_trad" : "Not Played",
        "img_name" :  "Not Played.png",
        "station" : "TVN",
        "num_episodes" : "Drama Stage",
        "year" : 2018,
        "type" : "Short Film",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "기름진 멜로",
        "title_eng" : "Wok of Love",
        "title_cn_simp" : "油膩的Melo",
        "title_cn_trad" : "油膩的Melo",
        "img_name" : "Wok of Love.png",
        "station" : "SBS",
        "num_episodes" : 38,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "라이프 온 마스",
        "title_eng" : "Life On Mars",
        "title_cn_simp" : "火星生活",
        "title_cn_trad" : "火星生活",
        "img_name" : "Life On Mars.png",
        "station" : "OCN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "여우각시별",
        "title_eng" : "Where Stars Land",
        "title_cn_simp" : "狐狸新娘星",
        "title_cn_trad" : "狐狸新娘星",
        "img_name" : "Where Stars Land.png",
        "station" : "SBS",
        "num_episodes" : 32,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "미스터 션샤인",
        "title_eng" : "Mr.Sunshine",
        "title_cn_simp" : "阳光先生",
        "title_cn_trad" : "陽光先生",
        "img_name" : "Mr.Sunshine.png",
        "station" : "TVN",
        "num_episodes" : 24,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "남자친구",
        "title_eng" : "Encounter",
        "title_cn_simp" : "男朋友",
        "title_cn_trad" : "男朋友",
        "img_name" : "Encounter.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "로맨스는 별책부록",
        "title_eng" : "Romance Is a Bonus Book",
        "title_cn_simp" : "罗曼史是别册附录",
        "title_cn_trad" : "羅曼史是別冊附錄",
        "img_name" : "Romance Is a Bonus Book.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series",
        "gradient-colors" : ["#0D3B66", "#094074", "#3C6997"]
    },
    {
        "title_kor" : "아름다운 세상",
        "title_eng" : "Beautiful World",
        "title_cn_simp" : "美丽的世界",
        "title_cn_trad" : "美麗的世界",
        "img_name" : "Beautiful World.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    },
    {
        "title_kor" : "베가본드",
        "title_eng" : "Vagabond",
        "title_cn_simp" : "浪客行",
        "title_cn_trad" : "浪客行",
        "img_name" : "Vagabond.png",
        "station" : "SBS",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series",
        "gradient-colors" : ["#53B3CB", "#449DD1", "#fff"]
    },
    {
        "title_kor" : "사랑의 불시착",
        "title_eng" : "Crash Landing On You",
        "img_name" : "Crash Landing On You.png",
        "title_cn_simp" : "爱的迫降",
        "title_cn_trad" : "愛的迫降",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series",
        "gradient-colors" : ["#D7263D", "#F46036", "#C5D86D" ]
    },
    {
        "title_kor" : "사이코지만 괜찮아",
        "title_eng" : "It's Okay to Not Be Okay",
        "title_cn_simp" : "虽然是精神病但没关系",
        "title_cn_trad" : "雖然是精神病但沒關係",
        "img_name" : "It's Okay to Not Be Okay.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2020,
        "type" : "TV Series",
        "gradient-colors" : ["#1D3549","#2F5575","#30C5C5"]
    },
    {
        "title_kor" : "청춘기록",
        "title_eng" : "Record of Youth",
        "title_cn_simp" : "青春记录",
        "title_cn_trad" : "青春記錄",
        "img_name" : "Record of Youth.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2020,
        "type" : "TV Series",
        "gradient-colors" : ["#00FFE7", "#00CFC1", "#AF3800"]
    },
    {
        "title_kor" : "도시남녀의 사랑법",
        "title_eng" : "Lovestruck in the City",
        "title_cn_simp" : "都市男女爱情法",
        "title_cn_trad" : "都市男女愛情法",
        "img_name" : "Lovestruck in the City.png",
        "station" : "Kakao TV",
        "num_episodes" : 17,
        "year" : 2021,
        "type" : "TV Series",
        "gradient-colors" : ["#4BB3FD", "#F9B3D1", "#fff"]
    }
    

]

let discoDisplay = document.querySelector(".small-container");
let elementInfo = document.querySelector(".elementInfo")

for (let i = discographyList.length -24; i > -1; i --){

    
    let discoList = discoDisplay.appendChild(document.createElement("div"));
    discoList.classList.add("discoList");        // adding class


    // adding div.img to discoList

    let img_element = discoList.appendChild(document.createElement("img"));
    img_element.src = "discography_png/" + discographyList[i]["img_name"];
    let discoImage = img_element.classList.add("discographyImg");


    // adding div.elementInfo to discoList
    
    let discoElement = discoList.appendChild(document.createElement("div"))
    discoElement.classList.add("elementInfo");
    discoElement.innerHTML = discographyList[i]["title_kor"] + " / " + discographyList[i]["title_eng"] + "<br>"; 

    if (typeof(discographyList[i]["num_episodes"])=== "number"){
        let stationInfo = discoElement.appendChild(document.createElement("p")).textContent = discographyList[i]["station"] + "(" + discographyList[i]["num_episodes"] + " episodes)";
    } else {
        discoElement.appendChild(document.createElement("p")).textContent = discographyList[i]["station"];
    }
    discoElement.appendChild(document.createElement("br"));
    // discoElement.appendChild(document)
}



/////////// main discography items

let netflixList = document.querySelector(".netflix-list");
let netflixListUl = netflixList.appendChild(document.createElement("ul"));
let netflixInfo = document.querySelector(".netflix-info");
let netflixWrapper = document.querySelector(".netflix-wrapper");
let numToShow = 24;
let discoMain = [];
for (let i = discographyList.length -1; i > discographyList.length - numToShow; i --) {
    discoMain.push(discographyList[i])
}


netflixWrapper.appendChild(document.createElement("img")).classList.add("main-display");
let main_netflix = document.querySelector(".main-display");
main_netflix.id = discoMain[0]["title_eng"]
main_netflix.src = "discography_png/" + discoMain[0]["img_name"];


/// displaying Info over the main-display when hover

main_netflix.addEventListener("mouseover", function () {
    netflixInfo.style.display = "inline-block";
    let discoIndex = discoMain.findIndex(i => i.title_eng == main_netflix.id);
    netflixInfo.innerHTML = discoMain[discoIndex]["title_kor"] + "<br>" 
                                + discoMain[discoIndex]["title_eng"] + "<br>"
                                + discoMain[discoIndex]["station"] + "<br>"
                                + discoMain[discoIndex]["year"]
})
main_netflix.addEventListener("mouseout", function () {
    netflixInfo.style.display = "none";
})



for (let i = 0; i < discoMain.length -1; i ++) {
    let netflixElement = netflixListUl.appendChild(document.createElement("li"));
    netflixElement.addEventListener("click", function () {
        main_netflix.src = "discography_png/" + discoMain[i]["img_name"]
        main_netflix.id = discoMain[i]["title_eng"]
        let gradientBack = "linear-gradient(to right, " 
                                + discoMain[i]["gradient-colors"][0] 
                                + " 4%," + discoMain[i]["gradient-colors"][1]
                                + "," 
                                + discoMain[i]["gradient-colors"][2] + ")";
        netflixWrapper.style.background = gradientBack;
    } );
    
    netflixElement.textContent = discoMain[i]["title_kor"];
    
}





//// Language Switch
function langFunction() {
    document.getElementById("myLang").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.lang-dropdown')) {
      var dropdowns = document.getElementsByClassName("lang-options");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }