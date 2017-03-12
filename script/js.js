/**
 * Created by LENOVO 2.0 on 2016/9/12.
 */


$(function () {
    //"use strict";

    //重置使图片占满整个屏幕
    function o(){
        n=$(window).innerHeight(), $(".intro").css("height",n)
    }
    var n;
    o(),$(window).resize(function(){
        o();
    }),

        //导航浮动
        $(window).scroll(function () {
            if($(this).scrollTop()>n-20){
                $('.navbar').addClass('navbar-fixed-top');
            }
            else {
                $('.navbar').removeClass('navbar-fixed-top');
            }
        }),


        //页面滚动效果
    $('.intro-text a,.next a').click(function () {
        var a = $(this),target = a.attr('href');
        return $('html,body').animate(
            {
                scrollTop:$(target).offset().top-60
            },1000
        ),!1
    }),


        $('#navigation,.navbar-header').find('a').on('click', function (e) {
            var n = $(this),id = n.attr('href');
            return $('html,body').animate(
                {
                    scrollTop:$(id).offset().top
                },1000
            ),!1
        }),

        //手机端导航菜单伸缩效果
        $('#navbar ul li a').click(function (e) {
            $('.navbar-collapse').collapse('hide')
        })




});

//作品图片展示的大小，个数，动画效果
(function ($) {
        "use strict";
        var $container = $('#work-item'),
            colWidth = function () {
                var w = $container.width(),
                    columnNum = 1,
                    columnWidth = 0;
                if (w > 960) {
                    columnNum  = 4;
                }
                else if (w > 640) {
                    columnNum  = 3;
                }
                else if (w > 360) {
                    columnNum  = 2;
                }
                columnWidth = Math.floor(w/columnNum);
                $container.find('.item').each(function() {
                    var $item = $(this),
                        multiplier_w = $item.attr('class').match(/item-w(\d)/),
                        multiplier_h = $item.attr('class').match(/item-h(\d)/),
                        width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
                        height = multiplier_h ? columnWidth*multiplier_h[1]*0.7-10 : columnWidth*0.7-10;
                    $item.css({
                        width: width,
                        height: height
                    });
                });
                return columnWidth;
            },
            isotope = function () {
                $container.isotope({

                    resizable: true,
                    itemSelector: '.item',
                    masonry: {
                        columnWidth: colWidth(),
                        gutterWidth: 10
                    }
                });
            };
        isotope();
        $(window).smartresize(isotope);

        $('.portFilter a').click(function(){
            $('.portFilter .current').removeClass('current');
            $(this).addClass('current');


            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }(jQuery)
);

