"use strict";
let img_class = document.querySelectorAll("#img_contaitner img");
let main_img = document.querySelector("section");
let h1 = document.querySelector("h1")
let sec_content = ["change background 1","change background 2","change background 3",]

img_class.forEach((e) => {
  e.addEventListener("click", () => {
    main_img.style.cssText = `color: #e9e9e9;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(0deg, rgb(0 0 0 / 52%), rgb(0 0 0 / 67%)), url("${e.getAttribute(
      "src"
    )}");
    background-size: cover;
    position: relative;
    justify-content: right; }`;
    let img_num = e.getAttribute("src").match(/\d+/g);
    h1.innerHTML = sec_content[img_num-1]
  });
});
