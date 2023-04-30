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

//===============================================================//
// Random Button //
randomBtn = document.getElementById("random_button");

randomBtn.addEventListener("click", randomColor);

function randomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      let newColor = [];
      let hexValue = [];
      for (const [key, value] of Object.entries(data.rgb)) {
        newColor.push(`${value}`);
        hexValue.push(data.color);
      }
      document.body.style.backgroundColor = "rgb(" + newColor.toString() + ")";
      bgValue.innerText = hexValue[0];
      console.log(hexValue);
    });
}
