$(function ($) {
  new WOW().init();
  const portfolio = {
    init() {
      this.header();
      this.portfolio();
      this.etc();
    },
    header() {
      // Header Scroll Function(Design Change)
      $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= 100) {
          $("header, .go-top-btn").addClass("active");
        } else {
          $("header, .go-top-btn").removeClass("active");
        }
      });
      // Mobile Hamburger Btn Click Function
      $(".hamburger-btn").click(function () {
        $(this).addClass("active");
        $(".mobile-nav").addClass("active");
        $("body").addClass("nav-is-on");
      });
      $(".mobile-nav-close, .mobile-nav a").click(function () {
        $("body").removeClass("nav-is-on");
        $("hamburger-btn").removeClass("active");
        $(".mobile-nav").removeClass("active");
      });
    },
    portfolio() {
      // WebSite Tab Change Function
      $(".change-tab span").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let WebTab = $(this).attr("data-tab");
        $("." + WebTab).addClass("active");
        $("." + WebTab)
          .siblings(".portfolio")
          .removeClass("active");
      });
      // Widget Tab Change Function
      $(".widget-tab-change span").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        let WidgetTab = $(this).attr("data-tab");
        $("." + WidgetTab).addClass("active");
        $("." + WidgetTab)
          .siblings()
          .removeClass("active");
      });
    },
    etc() {
      // Go Top Button Function
      $(".go-top-btn").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 0);
      });
    },
  };
  portfolio.init();
}, jQuery);
