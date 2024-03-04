// script.js

const scrollButton = document.getElementById('scroll-button');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		scrollButton.style.display = 'block';
	} else {
		scrollButton.style.display = 'none';
	}
});

scrollButton.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
``

  $(document).ready(function(){
    $('.certification-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
