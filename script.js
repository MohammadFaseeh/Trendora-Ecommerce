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

// Image Swap on Click in sproduct.html button
var mainImg = document.getElementById("mainImg");

var smallImgs = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImgs.length; i++) {
  smallImgs[i].onclick = function () {
    mainImg.src = smallImgs[i].src;
  };
}

// Remove items from the cart
document.addEventListener("DOMContentLoaded", function () {
    const removeIcons = document.querySelectorAll("#cart tbody .fa-times-circle");

    removeIcons.forEach(icon => {
      icon.addEventListener("click", function (e) {
        e.preventDefault();
        const row = icon.closest("tr");
        if (row) {
          row.remove();
        }
      });
    });
  });
