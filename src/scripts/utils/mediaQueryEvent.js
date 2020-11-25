const smallScreen = window.matchMedia('(max-width: 64em)');
const consoleStyle = (background) => `
  background: ${background};
  padding: 1em;
  font-weight: 700`;

export const isDesktop = !smallScreen.matches;

export const mediaQueryEvent = (cbMobile, cbDesktop) => {
  const handleTabletChange = (e) => {
    if (e.matches) {
      // eslint-disable-next-line no-console
      console.log('%cIS SMALL SCREEN', consoleStyle('cornflowerblue'));
      cbMobile();
    } else {
      // eslint-disable-next-line no-console
      console.log('%cIS LARGE SCREEN', consoleStyle('darkseagreen'));
      cbDesktop();
    }
  };

  smallScreen.addEventListener('change', handleTabletChange);
  handleTabletChange(smallScreen);
};
