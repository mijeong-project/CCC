// 탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        $('.tabnav li').removeClass('active2');
        $(this).parent('.tabnav li').addClass('active2');
        return false;
    }).filter(':eq(0)').click();
});


// 메인배너 글자 타이핑 효과
const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
  "따뜻한 사회",
  "함께하는 사회", 
  "행복한 사회"
];

// 글자 입력 속도
const speed = 150;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);

// 아코디언효과 공지사항
$(function () {
  $(".notice_in li").click(function () {
    $(this).children("div").slideToggle()
    $(this).siblings().children("div").slideUp();
    $(this).toggleClass("on").siblings().removeClass("on")
  });
});


// aos
AOS.init({
  duration: 1200 //aos 나타나는 속도
});