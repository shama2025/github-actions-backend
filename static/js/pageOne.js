/**
 * This file will contain the functionality to pageOne.html
 */

let count = 0;
let payFeeFlag = false
const resetBtn = document.getElementById("resetClicksBtn")
const counterBtn = document.getElementById("counterBtn");
const payFeeBtn = document.getElementById("payFee")
const counterNum = document.getElementById("counter");
counterBtn.addEventListener("click", () => {
  console.log(count);
  count += 1;
  counterNum.innerHTML = count;
  if (count == 10 || !payFeeFlag) { //fix this to stop happening when payment is true
    counterNum.innerHTML = count
    counterBtn.addEventListener("click", function () {
      myPopup.classList.add("show");
      payFeeBtn.addEventListener("click", () =>{
        payFeeFlag = true
        myPopup.classList.remove("show")
      })
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

resetBtn.addEventListener("click", () =>{

  counterNum.innerHTML = 0
})
