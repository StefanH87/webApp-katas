const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const bgValue = document.querySelector("#colorBg_value");

// background color

document.body.style.backgroundColor = "rgb(255,105,180)"; //standartfarb body
function rgbColors() {
  let redC = rangeValue(red.value);
  let greenC = rangeValue(green.value);
  let blueC = rangeValue(blue.value);
  let color = "#" + redC + greenC + blueC;

  document.body.style.backgroundColor = color;
  document.getElementById("range_slider").value = color;
  bgValue.innerText = color;
}

function rangeValue(value) {
  value = Number.parseInt(value);
  return value.toString(16).substring(-2);
}

document.body.addEventListener("input", rgbColors);

//----erster Code----------//
//----mit 3 p HTML lementen-------//

// const red = document.querySelector("#red");
// // const outputR = document.querySelector(".red_value");

// const green = document.querySelector("#green");
// // const outputG = document.querySelector(".green_value");

// const blue = document.querySelector("#blue");
// // const outputB = document.querySelector(".blue_value");

// red.addEventListener("input", function () {
//   outputR.innerHTML = this.value;
// });

// green.addEventListener("input", function () {
//   outputG.innerHTML = this.value;
// });

// blue.addEventListener("input", function () {
//   outputB.innerHTML = this.value;
// });

// document.body.style.backgroundColor = "rgb(255,105,180)"; //standartfarb body
// function rgbColors() {
//   let redC = document.getElementById("red").value.charCodeAt();
//   let greenC = document.getElementById("green").value;
//   let blueC = document.getElementById("blue").value;
//   let color = "rgb(" + redC + "," + greenC + "," + blueC + ")";

//   document.body.style.backgroundColor = color;
//   document.getElementById("range_slider").value = color;
// }

// document.getElementById("red").addEventListener("input", rgbColors);
// document.getElementById("green").addEventListener("input", rgbColors);
// document.getElementById("blue").addEventListener("input", rgbColors);
