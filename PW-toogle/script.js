const button = document.querySelector(".pw-button");
//const pw = document.querySelector(".pw");
const pw = document.querySelector("#password");

button.addEventListener("click", buttonClick);

function buttonClick() {
  //input.setAttribute("text", "");

  console.log("klick");
  if (pw.type === "password") {
    pw.type = "text";
    button.textContent = "Hide Password";
    console.log("text");
    // pw.setAttribute("type", "password");
  } else {
    pw.type = "password";
    button.textContent = "Show Password";
    console.log("pw");
    //pw.setAttribute("type", "text");
  }
}
