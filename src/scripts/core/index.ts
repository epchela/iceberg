import detectTouchScreen from "../utils/detectTouchScreen";
import isDesktop from "../utils/isDesktop";
import SmoothScroll from "./smoothScroll/SmoothScroll";
import fixedHeader from "./fixedHeader";
import { initFeedbackModal } from "./feedbackModal";

export default () => {
  // служебные
  // set APP
  if (window.APP === undefined) {
    window.APP = {
      scrollbar: undefined,
      isDesktop: isDesktop(),
      isTouchScreen: false,
    };
  }

  detectTouchScreen();

  new SmoothScroll(document.querySelector("#scroll-container"));
  fixedHeader();

  if (window.APP.isDesktop) {
    if (window.APP.scrollbar !== undefined) {
      import("./smoothScroll/fixAnchors").then(({default: fixAnchors}) => {
        fixAnchors();
      });
    }
  }

// компоненты
  initFeedbackModal();
}

