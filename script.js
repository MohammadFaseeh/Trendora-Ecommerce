// Navbar bar icon close and open
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Image Swap on Click
var mainImg = document.getElementById("mainImg");

var smallImgs = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImgs.length; i++) {
  smallImgs[i].onclick = function () {
    mainImg.src = smallImgs[i].src;
  };
}
