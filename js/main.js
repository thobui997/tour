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
