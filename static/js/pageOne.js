/**
 * This file will contain the functionality to pageOne.html
 */

let count = 0;
const counterBtn = document.getElementById("counterBtn");
let counterNum = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  console.log(count);
  count += 1;
  counterNum.innerHTML = count;
  if (count >= 10) {
    counterNum.innerHTML = 10
    counterBtn.addEventListener("click", function () {
      myPopup.classList.add("show");
    });
    closePopup.addEventListener("click", function () {
      myPopup.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
      if (event.target == myPopup) {
        myPopup.classList.remove("show");
      }
    });
  }
});
