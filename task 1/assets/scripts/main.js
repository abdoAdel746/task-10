"use strict";
let img_class = document.querySelectorAll("#img_contaitner img");
let main_img = document.querySelector("#main_img img");

img_class.forEach((e) => {
  e.addEventListener("click", () => {
    main_img.setAttribute("src", e.getAttribute("src"));
  });
});
