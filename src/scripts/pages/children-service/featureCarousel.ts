import CarouselFeature from "../../Carousel/CarouselFeature";
import { mediaQueryEvent } from "../../utils/mediaQueryEvent";
import isScreenSm from "../../utils/isScreenSm";

export default () => {
  let carouselFeature: CarouselFeature | undefined;

  const elm = document.querySelector(".feature-slider")!;
  const wrapper = elm.querySelector(".features-list")!;
  const slides = wrapper.querySelectorAll(".features-list__item");

  const initSmScreen = () => {
    carouselFeature?.destroy();

    carouselFeature = new CarouselFeature(elm, wrapper, slides);
    carouselFeature.init();
  };

  const smallScreen = isScreenSm();

  mediaQueryEvent(
    initSmScreen,
    () => {
      carouselFeature?.destroy();
    },
    smallScreen
    );
}
