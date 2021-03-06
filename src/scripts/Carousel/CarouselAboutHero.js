import { NewCarousel } from './Carousel';

class CarouselAboutHero extends NewCarousel {
  constructor(...props) {
    super(...props);

    this.autoplayDelay = 5000;
    this.progressBar = this.elm.querySelector('.circle-progress-bar');
    this.progress = {
      from: 1000,
      to: 840,
      step: 160, // from - to; 100%
    };

    this.start = undefined;
    this.rAF = undefined;

    this.animatedProgressBar = this.animatedProgressBar.bind(this);

    this.setOptions();
  }

  animatedProgressBar(timestamp) {
    if (this.start === undefined) this.start = timestamp;
    // Прошло времени (мс) со старта
    const elapsed = timestamp - this.start;
    // Прогресс в %
    const progress = (elapsed / this.autoplayDelay) * 100;
    // Прогресс линии
    const dashProgress = this.progress.step * (progress / 100);
    this.progressBar.style.strokeDashoffset = this.progress.from - dashProgress;

    if (elapsed < this.autoplayDelay) {
      this.rAF = requestAnimationFrame(this.animatedProgressBar);
    }
  }

  handleSlideChange() {
    if (this.rAF) {
      cancelAnimationFrame(this.rAF);
    }

    this.start = undefined;
    this.progressBar.style = '';

    this.rAF = requestAnimationFrame(this.animatedProgressBar);
  }

  setOptions() {
    const on = {
      slideChange: () => this.handleSlideChange(),
    };

    const navigation = {
      nextEl: this.elm.querySelector('.slider-btn--next'),
      prevEl: this.elm.querySelector('.slider-btn--prev'),
    };

    this.params = {
      ...this.params,
      loop: true,
      autoplay: {
        delay: this.autoplayDelay,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          spaceBetween: 50,
        },
        1024: {
          spaceBetween: 200,
        },
        1220: {
          spaceBetween: 300,
        },
        1550: {
          spaceBetween: 400,
        },
      },
      navigation,
      on,
    };
  }
}

export default CarouselAboutHero;
