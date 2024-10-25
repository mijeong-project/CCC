//탭 메뉴   1번 
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});
//탭 메뉴  2번 
$(function () {
    $('.tabcontent2 > div').hide();
    $('.tabnav2 a').click(function () {
        $('.tabcontent2 > div').hide().filter(this.hash).fadeIn();
        $('.tabnav2 a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


// 슬라이드
var swiper = new Swiper('.mySwiper', {
    speed: 3000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
});

// aos
AOS.init({
    duration: 1200 //aos 나타나는 속도
});