$(document).ready(function () {
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
});
