/// smooth-scroll Nav

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400,
    speedAsDuration: true
});


const button = document.querySelector('.btn');
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
        "img_name" : "Billy the Bat.png",
        "station" : "EBS",
        "num_episodes" : 104,
        "year": 1997,
        "type": "TV Series"
    },
    {
        "title_kor" : "어쩌면 좋아",
        "title_eng" : "Oh My Gosh",
        "img_name" : "Oh My Gosh.png",
        "station" : "MBC",
        "num_episodes" : 41,
        "year" : 2001,
        "type" : "TV Series"
    },
    {
        "title_kor" : "울지마, 엄마!",
        "title_eng" : "Don't Cry Mom!",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2003,
        "type" : "Documentary"
    },
    {
        "title_kor" : "숨은 사랑 찾기",
        "title_eng" : "Finding Hidden Love",
        "img_name" :  "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2003,
        "type" : "Documentary"
    },
    {
        "title_kor" : "아르곤",
        "title_eng" : "Argon",
        "img_name" : "Argon.png",
        "station" : "MBC",
        "num_episodes" : 2,
        "year" : 2003,
        "type" : "Short Film"
    },
    {
        "title_kor" : "겨울 하느님께",
        "title_eng" : "Dear Winter God",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "단팥빵",
        "title_eng" : "Sweet Buns",
        "img_name" : "Sweet Buns.png",
        "station" : "MBC",
        "num_episodes" : 26,
        "year" : 2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "물꽃마을 사람들",
        "title_eng" : "People of Water Flower Village",
        "img_name" : "People of Water Flower Village.png",
        "station" :  "MBC",
        "num_episodes" : 26,
        "year" :2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "깡순이",
        "title_eng" : "Kkangsooni",
        "img_name" : "Kkangsooni.png",
        "station" : "EBS",
        "num_episodes" : 84,
        "year" : 2004,
        "type" : "TV Series"
    },
    {
        "title_kor" : "작은 천사들",
        "title_eng" : "Little Angels",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "직지",
        "title_eng" : "Jikji",
        "img_name" : "Jikji.png",
        "station" : "MBC",
        "num_episodes" : 1,
        "year" : 2006,
        "type" : "Short Film"
    },
    {
        "title_kor" : "사막을 건너는 법",
        "title_eng" : "How to Cross the Desert",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2004,
        "type" : "Documentary"
    },
    {
        "title_kor" : "이별에 대처하는 우리의 자세",
        "title_eng" : "Rules of Love",
        "img_name" : "Rules of Love.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2005,
        "type" : "TV Series"
    },
    {
        "title_kor" : "바다가 하는 말",
        "title_eng" : "Listen to The Ocean",
        "img_name" : "MBCBest.png",
        "station" : "MBC",
        "num_episodes" : "Bestseller Theater",
        "year" : 2006,
        "type" : "Documentary"
    },
    {
        "title_kor" : "오성대반점",
        "title_eng" : "Five Star Hotel",
        "img_name" : "Five Star Hotel.png",
        "station" : "CCTV",
        "num_episodes" : 28,
        "year" : 2007,
        "type" : "TV Series"
    },
    {
        "title_kor" : "별순검",
        "title_eng" : "Chosun Police S1",
        "img_name" : "Chosun Police S1.png",
        "station" : "MBC",
        "num_episodes" : 22,
        "year" : 2007,
        "type" : "TV Series"
    },
    {
        "title_kor" : "나도 잘 모르지만",
        "title_eng" : "Get Up",
        "img_name" : "Get Up.png",
        "station" : "MBC",
        "num_episodes" : "",
        "year" : 2008,
        "type" : "Movie"
    },
    {
        "title_kor" : "별순검 2",
        "title_eng" : "Chosun Police S2",
        "img_name" : "Chosun Police S2.png",
        "station" : "MBC",
        "num_episodes" : 20,
        "year" : 2008,
        "type" : "TV Series"
    },
    {
        "title_kor" : "바나우에 라이스 테라스",
        "title_eng" : "Banaue's Rice Terrace",
        "img_name" : "Banaue's Rice Terrace.png",
        "station" : "EBS",
        "num_episodes" : "",
        "year" : 2009,
        "type" : "Documentary"
    },
    {
        "title_kor" : "멈출 수 없어",
        "title_eng" : "I Can't Stop",
        "img_name" : "I Can't Stop.png",
        "station" : "MBC",
        "num_episodes" : 129,
        "year" : 2009,
        "type" : "TV Series"
    },
    {
        "title_kor" : "별순검 3",
        "title_eng" : "Chosun Police S3",
        "img_name" : "Chosun Police S3.png",
        "station" : "MBC",
        "num_episodes" : 20,
        "year" : 2010,
        "type" : "TV Series"
    },
    {
        "title_kor" : "볼수록 애교만점",
        "title_eng" : "More Charming By The Day",
        "img_name" : "More Charming By The Day.png",
        "station" : "MBC",
        "num_episodes" : 138,
        "year" : 2010,
        "type" : "TV Series"
    },
    {
        "title_kor" : "당신 참 예쁘다",
        "title_eng" : "You're So Pretty",
        "img_name" : "You're So Pretty.png",
        "station" : "MBC",
        "num_episodes" : 135,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뚜바뚜바 눈보리 2",
        "title_eng" : "Tuba Tuba Noonbory S2",
        "img_name" : "Tuba Tuba Noonbory S2.png",
        "station" : "EBS 1",
        "num_episodes" : 26,
        "year" : 2011,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "TEN 1",
        "title_eng" : "Special Affairs Team S1",
        "img_name" : "Special Affairs Team S1.png",
        "station" : "OCN",
        "num_episodes" : 9,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "지고는 못살아",
        "title_eng" : "Can't Lose",
        "img_name" : "Can't Lose.png",
        "station" : "MBC",
        "num_episodes" : 18,
        "year" : 2011,
        "type" : "TV Series"
    },
    {
        "title_kor" : "로맨스가 필요해 2012",
        "title_eng" : "I Need a Romance 2012",
        "img_name" : "I Need a Romance 2012.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "노란복수초",
        "title_eng" : "Yellow Boots",
        "img_name" : "Yellow Boots.png",
        "station" : "TVN",
        "num_episodes" : 108,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "유리가면",
        "title_eng" : "Glass Mask",
        "img_name" : "Glass Mask.png",
        "station" : "TVN",
        "num_episodes" : 122,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "프로포즈 대작전",
        "title_eng" : "Operation Proposal",
        "img_name" : "Operation Proposal.png",
        "station" : "TV Chosun",
        "num_episodes" : 16,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "엄마가 뭐길래",
        "title_eng" : "What is Mom",
        "img_name" : "What is Mom.png",
        "station" : "MBC",
        "num_episodes" : 27,
        "year" : 2012,
        "type" : "TV Series"
    },
    {
        "title_kor" : "인현왕후의 남자",
        "title_eng" : "Queen and I",
        "img_name" : "Queen and I.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뽀롱뽀롱 뽀로로 4",
        "title_eng" : "Pororo the Little Penguin S4",
        "img_name" : "Pororo the Little Penguin S4.png",
        "station" : "EBS 1",
        "num_episodes" : 26,
        "year" : 2012,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "뽀로로의 잉글리시 쇼",
        "title_eng" : "Pororo's English Show",
        "img_name" : "Pororo's English Show.png",
        "station" : "EBS 1",
        "num_episodes" : 13,
        "year" : 2012,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "내 손을 잡아",
        "title_eng" : "Hold My Hands",
        "img_name" : "Hold My Hands.png",
        "station" : "MBC",
        "num_episodes" : 130,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "이웃집 꽃미남",
        "title_eng" : "My Cute Guys",
        "img_name" : "My Cute Guys.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "TEN 2",
        "title_eng" : "Special Affairs Team S2",
        "img_name" : "Special Affairs Team S2.png",
        "station" : "OCN",
        "num_episodes" : 12,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "천명",
        "title_eng" : "The Fugitive of Joseon",
        "img_name" : "The Fugitive of Joseon.png",
        "station" : "KBS 2",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "네 이웃의 아내",
        "title_eng" : "Your Neighbor's Wife",
        "img_name" : "Your Neighbor's Wife.png",
        "station" : "JTBC",
        "num_episodes" : 22,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "나인",
        "title_eng" : "Nine",
        "img_name" : "Nine.png",
        "station" : "TVN",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "무정도시",
        "title_eng" : "Heartless City",
        "img_name" : "Heartless City.png",
        "station" : "JTBC",
        "num_episodes" : 20,
        "year" : 2013,
        "type" : "TV Series"
    },
    {
        "title_kor" : "내 생애 봄날",
        "title_eng" : "My Spring Days",
        "img_name" : "My Spring Days.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "연애의 발견",
        "title_eng" : "Discovery of Love",
        "img_name" : "Discovery of Love.png",
        "station" : "KBS 2",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "뽀롱뽀롱 구출작전",
        "title_eng" : "Porong Porong Rescue Mission",
        "img_name" : "Porong Porong Rescue Mission.png",
        "station" : "",
        "num_episodes" : "",
        "year" : 2014,
        "type" : "Movie"
    },
    {
        "title_kor" : "뽀롱뽀롱 뽀로로 5",
        "title_eng" : "Pororo the Little Penguin S5",
        "img_name" : "Pororo the Little Penguin S5.png",
        "station" : "EBS 1",
        "num_episodes" : 27,
        "year" : 2014,
        "type" : "Animated Series"
    },
    {
        "title_kor" : "로맨스가 필요해 3",
        "title_eng" : "I Need a Romance S3",
        "img_name" : "I Need a Romance S3.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "엔젤 아이즈",
        "title_eng" : "Angel Eyes",
        "img_name" : "Angel Eyes.png",
        "station" : "SBS",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "눈길",
        "title_eng" : "Snowy Road",
        "img_name" : "Snowy Road.png",
        "station" : "KBS 1",
        "num_episodes" : "2 films",
        "year" : 2015,
        "type" : "Movie"
    },
    {
        "title_kor" : "마녀의 연애",
        "title_eng" : "A Witch's Love",
        "img_name" : "A Witch's Love.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "삼총사",
        "title_eng" : "The Three Musketeers",
        "img_name" : "The Three Musketeers.png",
        "station" : "TVN",
        "num_episodes" : 12,
        "year" : 2014,
        "type" : "TV Series"
    },
    {
        "title_kor" : "상애천사천년",
        "title_eng" : "The Love Weave Through a Millennium",
        "img_name" : "The Love Weave Through a Millennium.png",
        "station" : "Hunan TV",
        "num_episodes" : 24,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "처음이라서",
        "title_eng" : "Because It's The First Time",
        "img_name" : "Because It's The First Time.png",
        "station" : "OnStyle",
        "num_episodes" : 8,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "사랑하는 은동아",
        "title_eng" : "This is My Love",
        "img_name" : "This is My Love.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "풍선껌",
        "title_eng" : "Bubblegum",
        "img_name" : "Bubblegum.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "아름다운 나의 신부",
        "title_eng" : "My Beautiful Bride",
        "img_name" : "My Beautiful Bride.png",
        "station" : "OCN",
        "num_episodes" : 16,
        "year" : 2015,
        "type" : "TV Series"
    },
    {
        "title_kor" : "한번 더 해피엔딩",
        "title_eng" : "One More Happy Ending",
        "img_name" : "One More Happy Ending.png",
        "station" : "MBC",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series"
    },
    {
        "title_kor" : "질투의 화신",
        "title_eng" : "Don't Dare to Dream",
        "img_name" : "Don't Dare to Dream.png",
        "station" : "SBS",
        "num_episodes" : 24,
        "year" : 2016,
        "type" : "TV Series"
    },
    {
        "title_kor" : "기억",
        "title_eng" : "Memory Highlights",
        "img_name" : "Memory Highlights.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series"
    },
    {
        "title_kor" : "굿 와이프",
        "title_eng" : "The Good Wife",
        "img_name" : "The Good Wife.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2016,
        "type" : "TV Series"
    },
    {
        "title_kor" : "시카고 타자기",
        "title_eng" : "Chicago Typewriter",
        "img_name" : "Chicago Typewriter.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2017,
        "type" : "TV Series"
    },
    {
        "title_kor" : "빨간 선생님",
        "title_eng" : "The Red Teacher",
        "img_name" : "The Red Teacher.png",
        "station" : "KBS",
        "num_episodes" : "Drama Special",
        "year" : 2016,
        "type" : "Short Film"
    },
    {
        "title_kor" : "도깨비",
        "title_eng" : "Guardian: The Lonely and Great God",
        "img_name" : "Goblin.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "하백의 신부",
        "title_eng" : "The Bride of Habaek",
        "img_name" : "The Bride of Habaek.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2017,
        "type" : "TV Series"
    },
    {
        "title_kor" : "블랙",
        "title_eng" : "Black",
        "img_name" : "Black.png",
        "station" : "OCN",
        "num_episodes" : 18,
        "year" : 2017,
        "type" : "TV Series"
    },
    {
        "title_kor" : "수상한 파트너",
        "title_eng" : "Suspicious Partner",
        "img_name" : "Suspicious Partner.png",
        "station" : "SBS",
        "num_episodes" : 40,
        "year" : 2017,
        "type" : "TV Series"
    },
    {
        "title_kor" : "그냥 사랑하는 사이",
        "title_eng" : "Rain or Shine",
        "img_name" : "Rain or Shine.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "낫플레이드",
        "title_eng" : "Not Played",
        "img_name" :  "Not Played.png",
        "station" : "TVN",
        "num_episodes" : "Drama Stage",
        "year" : 2018,
        "type" : "Short Film"
    },
    {
        "title_kor" : "기름진 멜로",
        "title_eng" : "Wok of Love",
        "img_name" : "Wok of Love.png",
        "station" : "SBS",
        "num_episodes" : 38,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "라이프 온 마스",
        "title_eng" : "Life On Mars",
        "img_name" : "Life On Mars.png",
        "station" : "OCN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "여우각시별",
        "title_eng" : "Where Stars Land",
        "img_name" : "Where Stars Land.png",
        "station" : "SBS",
        "num_episodes" : 32,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "미스터 션샤인",
        "title_eng" : "Mr.Sunshine",
        "img_name" : "Mr.Sunshine.png",
        "station" : "TVN",
        "num_episodes" : 24,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "남자친구",
        "title_eng" : "Encounter",
        "img_name" : "Encounter.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2018,
        "type" : "TV Series"
    },
    {
        "title_kor" : "로맨스는 별책부록",
        "title_eng" : "Romance Is a Bonus Book",
        "img_name" : "Romance Is a Bonus Book.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series"
    },
    {
        "title_kor" : "아름다운 세상",
        "title_eng" : "Beautiful World",
        "img_name" : "Beautiful World.png",
        "station" : "JTBC",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series"
    },
    {
        "title_kor" : "베가본드",
        "title_eng" : "Vagabond",
        "img_name" : "Vagabond.png",
        "station" : "SBS",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series"
    },
    {
        "title_kor" : "사랑의 불시착",
        "title_eng" : "Crash Landing On You",
        "img_name" : "Crash Landing On You.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2019,
        "type" : "TV Series"
    },
    {
        "title_kor" : "사이코지만 괜찮아",
        "title_eng" : "It's Okay to Not Be Okay",
        "img_name" : "It's Okay to Not Be Okay.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2020,
        "type" : "TV Series"
    },
    {
        "title_kor" : "청춘기록",
        "title_eng" : "Record of Youth",
        "img_name" : "Record of Youth.png",
        "station" : "TVN",
        "num_episodes" : 16,
        "year" : 2020,
        "type" : "TV Series"
    },
    {
        "title_kor" : "도시남녀의 사랑법",
        "title_eng" : "Lovestruck in the City",
        "img_name" : "Lovestruck in the City.png",
        "station" : "Kakao TV",
        "num_episodes" : 17,
        "year" : 2021,
        "type" : "TV Series"
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
    discoElement.textContent = discographyList[i]["title_kor"] + " / " + discographyList[i]["title_eng"]; 
    discoElement.appendChild(document.createElement("br"));
    if (typeof(discographyList[i]["num_episodes"])=== "number"){
        discoElement.appendChild(document.createElement("p")).textContent = discographyList[i]["station"] + "(" + discographyList[i]["num_episodes"] + " episodes)";
    } else {
        discoElement.appendChild(document.createElement("p")).textContent = discographyList[i]["station"];
    }
    discoElement.appendChild(document.createElement("br"));
    // discoElement.appendChild(document)
    
}


titleInfo.
    titleInfo.textContent = discographyList[i]["station"]
console.log(document.getElementsByClassName("discoList"))

// document.body.onwheel = function (e) {
//     console.log(e.deltaY)
// }


let posterImage = document.querySelector(".posterImage");
posterImage.backgroundImage = "discography_png/" + discographyList[33]["img_name"] ;


console.log(posterImage)
