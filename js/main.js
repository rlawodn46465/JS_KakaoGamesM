/*슬라이드*/

var slideIndex = 0;
var slide = document.getElementById("slide_img");

var sec = 4000;

setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, sec);

function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementById("slide_img");
  var size = slides.childElementCount;
  var slide_width = slides.firstElementChild.offsetWidth;

  if ((n + 1) > size) {
    slideIndex = 0;
    n = 0;
  } else if (n < 0) {
    slideIndex = (size - 1);
    n = (size - 1);
  }
  slides.style.left = -slide_width * n + 'px';
}

/* 모바일 */
var slideIndex2 = 0;
var slide2 = document.getElementById("slide_img2");
var sec2 = 3000;

setInterval(function () {
  slideIndex2++;
  showSlides2(slideIndex2);
}, sec2);

function moveSlides2(n) {
  slideIndex2 = slideIndex2 + n
  showSlides2(slideIndex2);
}

function showSlides2(n) {
  var slides2 = document.getElementById("slide_img2");
  var size2 = slides2.childElementCount;
  var slide_width2 = slides2.firstElementChild.offsetWidth;

  if ((n + 1) > size2) {
    slideIndex2 = 0;
    n = 0;
  } else if (n < 0) {
    slideIndex2 = (size2 - 1);
    n = (size2 - 1);
  }
  slides2.style.left = -slide_width2 * n + 'px';
}

/* 공지사항 */
let rollingData = [
  '<카카오게임즈 개인정보처리방침>이 2018년 05월 24일자로 변경 됩니다.',
  '대작 모바일 MMORPG \'오딘:발할라 라이징\'캐릭터 생성 서버 2차 증설!',
  '카카오게임즈, 모바일 RPG\'가디언 테일즈\', 신규 영웅 \'해변의 과학자 소히\' 업데이트!',
  '카카오게임즈, 코로나19 백신 접종 유급 휴가 시행!',
  '대작 모바일 MMORPG \'오딘:발할라 라이징\'캐릭터 생성 서버 증설!',
  '대작 모바일 MMORPG \'오딘:발할라 라이징\'6월 29일 정식 출시!',
  '카카오게임즈 \'프린세스 커넥트! Re:Dive\', 신규 캐릭터 \'린(레인저\'전격 등장!',
  '카카오게임즈, \'이터널 리턴\' 30번째 신규 캐릭터 \'일레븐\' 출시!',
  '카카오게임즈 핵심 계열사, 프렌즈게임즈-웨이투빗 합병',
  '카카오게임즈, 대작 모바일 MMORPG \'오딘: 발할라 라이징\' AR과 XR접목한 업계 최초 \'버츄얼 쇼케이스\' 예고!',
  '카카오게임즈, 모바일 MMORPG \'달빛조각사\' 5월 25일, 미국 일본 등 글로벌 그랜드 출시!',
  '카카오게임즈, 모바일 RPG\'가디언테일즈\', \신규 영웅 \'괴도 루시\' 업데이트!'
] // 공지 리스트

let timer = 2000

let first = document.getElementById('first'),
  second = document.getElementById('second'),
  third = document.getElementById('third')
let move = 2
let dataCnt = 1
let listCnt = 1

first.children[0].innerHTML = rollingData[0]

setInterval(() => {
  if (move == 2) {
    first.classList.remove('notice_card')
    first.classList.add('notice_card_after')

    second.classList.remove('notice_card_after')
    second.classList.add('notice_card')

    third.classList.remove('notice_card_after')
    third.classList.remove('notice_card')

    move = 0
  } else if (move == 1) {
    first.classList.remove('notice_card_after')
    first.classList.add('notice_card')

    second.classList.remove('notice_card_after')
    second.classList.remove('notice_card')

    third.classList.remove('notice_card')
    third.classList.add('notice_card_after')

    move = 2
  } else if (move == 0) {
    first.classList.remove('notice_card_after')
    first.classList.remove('notice_card')

    second.classList.remove('notice_card')
    second.classList.add('notice_card_after')

    third.classList.remove('notice_card_after')
    third.classList.add('notice_card')

    move = 1
  }

  if (dataCnt < (rollingData.length - 1)) {
    document.getElementById('notice_list').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
    dataCnt++
  } else if (dataCnt == rollingData.length - 1) {
    document.getElementById('notice_list').children[listCnt].children[0].innerHTML = rollingData[dataCnt]
    dataCnt = 0
  }

  if (listCnt < 2) {
    listCnt++
  } else if (listCnt == 2) {
    listCnt = 0
  }

}, timer);

/*게임 리스트 */



/*게임*/
function clicked(tag) { //개별 클릭시
  const checkboxs = document.querySelectorAll('input[name="tag_box"]');
  const checked = document.querySelectorAll('input[name="tag_box"]:checked');
  const selectAll = document.getElementById("tag1");

  const tag1 = document.querySelectorAll(".simulation");
  const tag2 = document.querySelectorAll(".role-playing");
  const tag3 = document.querySelectorAll(".board");
  const tag4 = document.querySelectorAll(".sports");
  const tag5 = document.querySelectorAll(".puzzle");
  const tag6 = document.querySelectorAll(".run");
  const tag7 = document.querySelectorAll(".action");
  const tag8 = document.querySelectorAll(".shooting");
  const tag9 = document.querySelectorAll(".strategy");
  const tag10 = document.querySelectorAll(".music");
  const tag11 = document.querySelectorAll(".quiz");

  if (checked.length == checkboxs.length) { //전부 체크 되면
    selectAll.checked = true;
    selectAll.parentNode.classList.add('backcolor');
  } else { //전부 체크 해제 되면
    selectAll.checked = false;
    selectAll.parentNode.classList.remove('backcolor');
  }

  if (tag.checked === true) { //개인이 체크가 되면 표시
    tag.parentNode.classList.add('backcolor');

    if (tag.id == 'tag2') {
      tag1.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag3') {
      tag2.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag4') {
      tag3.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag5') {
      tag4.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag6') {
      tag5.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag7') {
      tag6.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag8') {
      tag7.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag9') {
      tag8.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag10') {
      tag9.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag11') {
      tag10.forEach((on) => {
        on.style.display = "block"
      });
    } else if (tag.id == 'tag12') {
      tag11.forEach((on) => {
        on.style.display = "block"
      });
    }
  } else { //개인이 체크가 해제 되면 표시 해제
    tag.parentNode.classList.remove('backcolor');

    if (tag.id == 'tag2') {
      tag1.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag3') {
      tag2.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag4') {
      tag3.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag5') {
      tag4.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag6') {
      tag5.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag7') {
      tag6.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag8') {
      tag7.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag9') {
      tag8.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag10') {
      tag9.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag11') {
      tag10.forEach((on) => {
        on.style.display = "none"
      });
    } else if (tag.id == 'tag12') {
      tag11.forEach((on) => {
        on.style.display = "none"
      });
    }
  }
}

function selectAll(selectAll) { //전체 클릭시
  const checkboxes = document.getElementsByName('tag_box');
  const checkboxs = document.querySelectorAll('input[name="tag_box"]');
  const gameBox = document.querySelectorAll("#game_box li");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })

  if (selectAll.checked == true) {
    checkboxs.forEach((check) => {
      check.parentNode.classList.add('backcolor');
    });
    gameBox.forEach((on) => {
      on.style.display = "block"
    });
  } else {
    checkboxs.forEach((check) => {
      check.parentNode.classList.remove('backcolor');
    });
    gameBox.forEach((on) => {
      on.style.display = "none"
    });
  }
}


function moreOpen() {
  const moreBox = document.querySelector('#section3 .onbox');
  const moreBox2 = document.querySelector('#section3 .offbox');
  const gameBox = document.querySelector("#game_box");
  gameBox.style.height = 'auto';
  moreBox.style.display = "none";
  moreBox2.style.display = "flex";
}

function moreOpen2() {
  const moreBox = document.querySelector('#section3 .onbox');
  const moreBox2 = document.querySelector('#section3 .offbox');
  const gameBox = document.querySelector("#game_box");
  const gmaeBoxHeight = document.querySelector("#game_box li").offsetHeight;
  const addHeight = gmaeBoxHeight * 2;
  gameBox.style.height = addHeight + 'px';
  moreBox.style.display = "flex";
  moreBox2.style.display = "none";
}



/* tab box */
const tab = document.querySelectorAll(".tabs_box h3")
const tabLine = document.querySelectorAll(".tabs_box h3 .line")
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");



tab[0].addEventListener('click', function () {
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
  tabLine[0].style.width = "100%"
  tabLine[0].style.left = "0"
  tabLine[1].style.width = "0"
  tabLine[1].style.left = "50%"
  tabLine[2].style.width = "0"
  tabLine[2].style.left = "50%"
});

tab[1].addEventListener('click', function () {
  tab2.style.display = "block"
  tab1.style.display = "none";
  tab3.style.display = "none";
  tabLine[1].style.width = "100%"
  tabLine[1].style.left = "0"
  tabLine[0].style.width = "0"
  tabLine[0].style.left = "50%"
  tabLine[2].style.width = "0"
  tabLine[2].style.left = "50%"
});

tab[2].addEventListener('click', function () {
  tab3.style.display = "block"
  tab1.style.display = "none";
  tab2.style.display = "none";
  tabLine[2].style.width = "100%"
  tabLine[2].style.left = "0"
  tabLine[0].style.width = "0"
  tabLine[0].style.left = "50%"
  tabLine[1].style.width = "0"
  tabLine[1].style.left = "50%"
});