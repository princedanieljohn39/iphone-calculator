window.onload = function () {
  var display = document.querySelector(".display");
  var buttons = Array.from(document.querySelectorAll("button"));

  buttons.map(function (button) {
    button.addEventListener("click", function () {
      if (button.innerText === "=") {
        try {
          display.innerText = eval(display.innerText); //the equality sign runs using the 
          //eval function which is used to evaluate the value
        } catch {
          display.innerText = "invalid expression";
        }
      } else if (button.innerText === "C") {
        display.innerText = "";
      } else {
        display.innerText += button.innerText;
      }
    });
  });
};

