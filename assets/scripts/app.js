const carouselDomElem = document.querySelector('#manulCarousel');
const carousel = new bootstrap.Carousel(
	carouselDomElem,
	{
		slide: false
	}
)


console.log(carousel);

function goToPrevSlide() {
	carousel.prev();
}

function goToNextSlide() {
	carousel.next();
}