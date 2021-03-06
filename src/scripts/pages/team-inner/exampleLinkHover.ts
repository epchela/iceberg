export const exampleLinkHover = () => {
  const HOVER_CLASS = "is-hover";
  const links = Array.from(document.querySelectorAll(".example-card__link")) as HTMLAnchorElement[];

  links.forEach(link => {
    const parent: HTMLElement = link.closest(".example-card") as HTMLElement;

    link.addEventListener("mouseenter", () => {
      parent.classList.add(HOVER_CLASS);
    }, {passive: true});

    link.addEventListener("mouseleave", () => {
      parent.classList.remove(HOVER_CLASS);
    }, {passive: true});
  });
};
