export const menu = () => {
  let btns = document.querySelectorAll(".o-box--menu-btn");
  let btn = Array.prototype.slice.call(btns, 0);
  let cover = document.querySelector(".c-gnav-bg");
  let gnav = document.querySelector("#gnav");
  function check() {
    if (gnav.getAttribute("tabindex") == "-1") {
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute("aria-expanded", "true");
        btns[i].setAttribute("aria-label", "menu close");
        btns[i].blur();
      }
      gnav.setAttribute("tabindex", "");
      gnav.setAttribute("aria-hidden", "false");
    } else {
      for (var j = 0; j < btns.length; j++) {
        btns[j].setAttribute("aria-expanded", "false");
        btns[j].setAttribute("aria-label", "menu open");
        btns[j].blur();
      }
      gnav.setAttribute("tabindex", "-1");
      gnav.setAttribute("aria-hidden", "true");
    }
  }
  btn.forEach((target) => {
    target.addEventListener("click", () => {
      check();
    });
  });
  cover.addEventListener("click", () => {
    check();
  });
};
