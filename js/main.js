/**
 * Template Main JS File
 */
document.addEventListener("DOMContentLoaded", function () {
	"use strict";

	/**
	 * Init AOS
	 */
	function initAOS() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}

	/**
	 * Sticky header on scroll
	 */
	// const selectHeader = document.querySelector("#header");
	// if (selectHeader) {
	// 	let headerOffset = selectHeader.offsetTop;
	// 	let nextElement = selectHeader.nextElementSibling;

	// 	const headerFixed = () => {
	// 		if (headerOffset - window.scrollY <= 0) {
	// 			selectHeader.classList.add("header-scrolled");
	// 			if (nextElement) {
	// 				nextElement.classList.add("scrolled-offset");
	// 			}
	// 		} else {
	// 			selectHeader.classList.remove("header-scrolled");
	// 			if (nextElement) {
	// 				nextElement.classList.remove("scrolled-offset");
	// 			}
	// 		}
	// 	};
	// 	window.addEventListener("load", headerFixed);
	// 	window.addEventListener("scroll", headerFixed);
	// }

	/**
	 * Back to top button
	 */
	const backtotop = document.querySelector(".back-to-top");
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add("active");
			} else {
				backtotop.classList.remove("active");
			}
		};
		window.addEventListener("load", toggleBacktotop);
		window.addEventListener("scroll", toggleBacktotop);

		backtotop.addEventListener("click", (e) => {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	/**
	 * Mobile nav toggle
	 */
	const mobileNavToggle = document.querySelector(".navbar-toggler");
	if (mobileNavToggle) {
		mobileNavToggle.addEventListener("click", function (e) {
			document.body.classList.toggle("mobile-nav-active");
			this.classList.toggle("toggled");
		});
	}

	/**
	 * Mobile nav dropdowns activate
	 */
	const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");
	navDropdowns.forEach((el) => {
		el.addEventListener("click", function (e) {
			if (window.innerWidth < 992) {
				e.preventDefault();
				this.nextElementSibling.classList.toggle("dropdown-active");
			}
		});
	});

	/**
	 * Testimonials slider
	 */
	if (document.querySelector(".testimonials-slider")) {
		new Swiper(".testimonials-slider", {
			speed: 600,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			slidesPerView: "auto",
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	}

	/**
	 * Update footer year
	 */
	document.getElementById("current-year").textContent =
		new Date().getFullYear();

	/**
	 * Handle contact form submission
	 */
	const contactForm = document.querySelector(".php-email-form");
	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();

			const formData = new FormData(this);
			const name = formData.get("name");

			// Show "loading" state
			this.querySelector(".loading").style.display = "block";

			// Simulate a form submission
			setTimeout(() => {
				this.querySelector(".loading").style.display = "none";
				this.querySelector(".sent-message").style.display = "block";
				this.querySelector(
					".sent-message",
				).textContent = `Thank you, ${name}! Your message has been sent. One of our luxury travel experts will contact you shortly.`;

				// Reset form after "success"
				this.reset();

				// Hide success message after 5 seconds
				setTimeout(() => {
					this.querySelector(".sent-message").style.display = "none";
				}, 5000);
			}, 1500);
		});
	}

	/**
	 * Initialize all functions
	 */
	initAOS();
});
