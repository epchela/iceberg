import "simplebar";
import core from "./initCore";
import featureCarousel from "./scripts/pages/children-service/featureCarousel";
import reviewCarousel from "./scripts/pages/children-service/reviewCarousel";
import stickyService from "./scripts/pages/children-service/stickyService";
import stepsAnimation from "./scripts/pages/children-service/stepsAnimation";
import welcomeAnimation from "./scripts/pages/children-service/welcomeAnimation";
import handBrushAnimation from "./scripts/pages/children-service/handBrushAnimation";
import qaAnimation from "./scripts/pages/children-service/qaAnimation";
import serviceCardGallery from "./scripts/pages/children-service/serviceCardGallery";

core();

featureCarousel();
reviewCarousel();
stickyService();
stepsAnimation();
welcomeAnimation();
qaAnimation();
handBrushAnimation();
serviceCardGallery();

if (window.APP.isDesktop) {
  import("./scripts/pages/children-service/serviceGalleryCarousel").then(({default: serviceGallery}) => {
    serviceGallery();
  });
  import("./scripts/core/lightboxGallery").then(({default: lightboxGallery}) => {
    lightboxGallery();
  });
}

if (window.matchMedia("(min-width: 1600px)").matches) {
  import("./scripts/pages/children-service/featureBrushAnimation").then(({default: featureBrushAnimation}) => {
    featureBrushAnimation();
  });
}
