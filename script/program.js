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
const boxElList = document.querySelectorAll('.orange_line , .news_line');
boxElList.forEach((el) => {
    io.observe(el);
});

// aos 속성
AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 마우스휠 슬라이드
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    mousewheel: true,
    speed:1000,
    pagination: {
      el: ".mySwiper .swiper-pagination",
      clickable: true,
    },
    watchOverflow : true,
    on: {
        slideChange: function() {
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = false;  
              swiper.params.mousewheel.releaseOnEdges = false;
            });
        },
        reachEnd: function() {
            setTimeout(function () {
                swiper.params.touchReleaseOnEdges = true;
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
        },
        reachBeginning: function() {
            setTimeout(function () {
                swiper.params.touchReleaseOnEdges = true;
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
        }
    }
  });
  
//   버튼형 슬라이드 
var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".mySwiper2 .swiper-button-next",
      prevEl: ".mySwiper2 .swiper-button-prev",
    },
    speed:1000,
  });


//탭 메뉴   
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});