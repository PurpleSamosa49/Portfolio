const carousel = document.querySelector('.carousel-box');
const previousButton = document.querySelector('.carousel-button-left');
const nextButton = document.querySelector('.carousel-button-right');
const carouselCounter = document.querySelector('.carousel-counter');
const carouselItems = [...carousel.querySelectorAll('.carousel-item')];

const updateCarouselCounter = () => {
    const currentItem = carouselItems.reduce((closestItem, item) => {
        const currentDistance = Math.abs(item.offsetLeft - carousel.scrollLeft);
        const closestDistance = Math.abs(closestItem.offsetLeft - carousel.scrollLeft);

        return currentDistance < closestDistance ? item : closestItem;
    });

    carouselCounter.textContent = `${carouselItems.indexOf(currentItem) + 1}/${carouselItems.length}`;
};

const scrollCarousel = (direction) => {
    carousel.scrollBy({
        left: direction * carousel.clientWidth,
        behavior: 'smooth'
    });
};

previousButton.addEventListener('click', () => scrollCarousel(-1));
nextButton.addEventListener('click', () => scrollCarousel(1));
carousel.addEventListener('scroll', updateCarouselCounter, { passive: true });
updateCarouselCounter();