// 메뉴고정
$(function () {
    $(document).ready(function () {

        var scrollOffset = $('.meue').offset();

        $(window).scroll(function () {
            if ($(document).scrollTop() > scrollOffset.top) {
                $('.meue').addClass('scroll-fixed');
            }
            else {
                $('.meue').removeClass('scroll-fixed');
            }
        });
    });
});

// aos 효과
AOS.init({
    duration: 1200 //aos 나타나는 속도
});


// 형광펜
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
const boxElList = document.querySelectorAll('.logo_box,.color_box, .enterprise_value_box, .cat_rights_box');
boxElList.forEach((el) => {
    io.observe(el);
});




// 픽스메뉴

$(function () {
   
    $('.logo').waypoint(function () {
       $('.brown_box').css('left','75px');
    },
        {
            offset: '10%'
        }
    );


    $('.corporate_vision').waypoint(function () {
        $('.brown_box').css('left','372px');
    },
        {
            offset: '20%'
        }
    );

    $('.enterprise_value').waypoint(function () {
        $('.brown_box').css('left','675px');
    },
        {
            offset: '20%'
        }
    );

});
