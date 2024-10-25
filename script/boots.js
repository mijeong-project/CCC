// 탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

// 형관펜효과
// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('on');
        }
        // 그 외의 경우 'on' 클래스 제거
        else {
            entry.target.classList.remove('on');
        }
    });
});
// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.orange_line');
boxElList.forEach((el) => {
    io.observe(el);
});

// aos 속성
AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(function () {
    $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});