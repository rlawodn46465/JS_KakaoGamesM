/*슬라이드*/

var slideIndex = 0;
var slide = document.getElementById("slide_img");

window.onload = function(){
var sec = 4000;

setInterval(function(){
  slideIndex++;
  showSlides(slideIndex);
}, sec);
}

function moveSlides(n){
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

function showSlides(n){
  var slides = document.getElementById("slide_img");
  var size = slides.childElementCount;
  var slide_width = slides.firstElementChild.offsetWidth;

  if((n + 1) > size){
    slideIndex = 0;
    n = 0;
  } else if(n < 0){
    slideIndex = (size - 1);
    n = (size - 1);
  }
  slides.style.left = -slide_width * n + 'px';
}

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
    console.log("1번")
    checkboxs.forEach((check) => {
      check.parentNode.classList.add('backcolor');
    });
    gameBox.forEach((on) => {
      on.style.display = "block"
    });
  } else {
    console.log("2번")
    checkboxs.forEach((check) => {
      check.parentNode.classList.remove('backcolor');
    });
    gameBox.forEach((on) => {
      on.style.display = "none"
    });
  }
}

function moreOpen() {
  const moreBox = document.getElementById("more_box");
  const gameBox = document.querySelector("#game_box");
  gameBox.style.height = "auto";
  moreBox.style.display = "none";
  console.log("클릭!");
}

/* tab box */
const tab = document.querySelectorAll(".tabs_box h3")
const tabLine = document.querySelectorAll(".tabs_box h3 .line")
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");



tab[0].addEventListener('click', function(){
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

tab[1].addEventListener('click', function(){
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

tab[2].addEventListener('click', function(){
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