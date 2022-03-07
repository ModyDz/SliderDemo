let count = 0;
const wrapper = document.querySelector(".wrapper");
const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow");
const movingCir = document.getElementById("movingCir");
const circles = document.querySelector(".circles");
for (let i = 0; i < document.querySelectorAll(".imgSlider").length; i++) {
  const span = document.createElement("span");
  span.dataset["movingcounter"] = i;
  circles.append(span);
}
circles.addEventListener("click", (e) => {
  if (e.target.tagName == "SPAN") {
    moveSlider("none", parseInt(e.target.getAttribute("data-movingcounter")));
  }
});
leftArr.addEventListener("click", () => {
  moveSlider("left");
});
rightArr.addEventListener("click", () => {
  moveSlider("right");
});
function moveSlider(dir, amount) {
  if (
    count < document.querySelectorAll(".imgSlider").length - 1 &&
    dir == "right"
  ) {
    count++;
    wrapper.style.transform = `translateX(-${100 * count}vw)`;
    movingCir.style.transform = `translateX(${65 * count}px)`;
  } else if (count > 0 && dir == "left") {
    count--;
    wrapper.style.transform = `translateX(-${100 * count}vw)`;
    movingCir.style.transform = `translateX(${65 * count}px)`;
  } else {
    count = amount;
    wrapper.style.transform = `translateX(-${100 * amount}vw)`;
    movingCir.style.transform = `translateX(${65 * amount}px)`;
  }
}
