$(document).ready(function() {
    // 导航栏滚动效果
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // 数字动画效果
    function animateNumber() {
        $('.lsf_number h1').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(numberWithCommas(Math.ceil(now)));
                }
            });
        });
    }

    // 数字格式化
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 当元素进入视图时触发动画
    $(window).scroll(function() {
        var numberSection = $('.lsf_number');
        if (isElementInView(numberSection)) {
            animateNumber();
            $(window).off('scroll');
        }
    });

    // 检查元素是否在视图中
    function isElementInView(element) {
        var windowHeight = $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + windowHeight;
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
});

