$(document).ready(function () {
  // Mobile menu toggle
  $(".header__btn-menu").on("click", function (e) {
    e.preventDefault();
    $(".mobile-menu").toggleClass("active");
  });

  // Close mobile menu
  $(".mobile-menu__close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });

  // Close mobile menu when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".mobile-menu, .header__btn-menu").length) {
      $(".mobile-menu").removeClass("active");
    }
  });

  // Sticky header functionality
  const header = $("#header");
  const headerHeight = header.outerHeight();
  let lastScrollTop = 0;
  let stickyOffset = 100; // Start sticky behavior after scrolling 100px

  function handleStickyHeader() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > stickyOffset) {
      if (!header.hasClass("sticky-header")) {
        header.addClass("sticky-header");
        $("body").addClass("has-sticky-header").css("padding-top", headerHeight + "px");
      }
    } else {
      header.removeClass("sticky-header");
      $("body").removeClass("has-sticky-header").css("padding-top", 0);
    }

    lastScrollTop = scrollTop;
  }

  // Initialize on page load
  handleStickyHeader();

  // Check on scroll
  $(window).on("scroll", handleStickyHeader);

  // Recalculate on window resize
  $(window).on("resize", function () {
    const newHeaderHeight = header.outerHeight();
    if (header.hasClass("sticky-header")) {
      $("body").css("padding-top", newHeaderHeight + "px");
    }
  });

  // Toggle mega menu on hover for desktop
  $(".has-mega-menu").hover(
    function () {
      $(this).find(".mega-menu").addClass("active");
    },
    function () {
      $(this).find(".mega-menu").removeClass("active");
    }
  );

  // Toggle dropdown in mobile menu
  $(".mobile-menu .has-dropdown > a").on("click", function (e) {
    e.preventDefault();
    $(this).next(".dropdown-content").slideToggle();
    $(this).parent().toggleClass("open");
  });

  // Set current year in footer
  $("#current-year").text(new Date().getFullYear());

  $(".home__shop-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev"><img src="./images/arrow-1.png" alt=""></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="./images/arrow-1-1.png" alt=""></button>`,

    autoplay: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".home-review__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots slick-dots__review",
    pauseOnDotsHover: true,
  });

  $(".destination-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev"><img src="./images/arrow-1.png" alt=""></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="./images/arrow-1-1.png" alt=""></button>`,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".slider-top").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    prevArrow: `<button type="button" class="slick-prev"><img src="./images/arrow-1.png" alt=""></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="./images/arrow-1-1.png" alt=""></button>`,
    asNavFor: ".slider-bot",
  });

  $(".slider-bot").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-top",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          infinite: false,
        },
      },
    ],
  });

  $("#book-tour-btn").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#tourDetailForm").offset().top,
      },
      500,
      function () {
        $(".tour-detail__form").find("input:first").focus();
      }
    );
  });
});
