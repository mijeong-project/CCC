// 슬라이드 
var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 3000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    breakpoints: {
        1000: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        370: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

$(function () {
    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});

// 글자 올라가는 효과
$(function () {
    var executed2 = false;

    $('.story').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
        }
    },
        {
            offset: '80%'
        }
    );

});

// 형광펜 애니메이션
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

// aos 말풍선 튀어나오는 효과
// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
    io.observe(el);
});

// aos 
AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 슬라이드 내용소개
var swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        740: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
    watchOverflow : true,
    on: {
        slideChange: function () {
            setTimeout(function () {
                swiper2.params.touchReleaseOnEdges = false;
                swiper2.params.mousewheel.releaseOnEdges = false;
            });
        },
        reachEnd: function () {
            setTimeout(function () {
                swiper2.params.touchReleaseOnEdges = true;
                swiper2.params.mousewheel.releaseOnEdges = true;
            }, 500);
        },
        reachBeginning: function () {
            setTimeout(function () {
                swiper2.params.touchReleaseOnEdges = true;
                swiper2.params.mousewheel.releaseOnEdges = true;
            }, 500);
        }
    }

});
// 360도 회전
const $carousel_cells = $('#product-carousel li');
const $carousel_dots = $('#carousel-dots li');
const $carousel_nav = $('.carousel-nav');
let selected_product_index = 0;

function selectProduct(index) {
  selected_product_index = index % $carousel_cells.length;

  if (selected_product_index < 0) selected_product_index = $carousel_cells.length + selected_product_index;

  $carousel_cells.each(function (i) {
    let offset = i - selected_product_index;
    if (offset < 0) offset += $carousel_cells.length;

    let index;
    for (index = 0; index < $carousel_cells.length + 1; index++) {
      $(this).removeClass('item-' + index).addClass('item-' + (offset + 1));
    }
  });

  $carousel_dots.eq(index).addClass('active').siblings('li').removeClass('active');
}

/* Arrow clicks */
$carousel_nav.click(function () {
  const delta = $(this).hasClass('prev') ? -1 : 1;
  const $delta_product = $(`#product-carousel li:eq(${(selected_product_index + delta) % $carousel_cells.length})`);
  const delta_product_index = parseInt($delta_product.index());
  selectProduct(delta_product_index);
});

/* Can clicks */
$carousel_cells.click(function () {
  selectProduct($(this).index());
});