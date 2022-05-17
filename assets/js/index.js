// Scroll nav bar
var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById("nav").classList.remove("border-bottom-nav");
      document.getElementById("nav").classList.add("display-none-nav");
      document.getElementById("nav").classList.remove("display-flex-nav");
    } else {
      document.getElementById("nav").classList.add("border-bottom-nav");
      document.getElementById("nav").classList.remove("display-none-nav");
      document.getElementById("nav").classList.add("display-flex-nav");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
