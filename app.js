const lightbulb = document.querySelector(".container");

const toggleSwitch = document.getElementById("switch");

const colorpicker = document.getElementById("colorPicker");

const bulb = document.getElementById("lightbulb");

function turnLightOnOff() {
  if (bulb.src.match("lightoff")) {
    bulb.src = "lighton.jpg";
  } else {
    bulb.src = "lightoff.jpg";
  }
}

toggleSwitch.addEventListener("click", () => {
  lightbulb.classList.toggle("active");
  lightbulb.classList.toggle("colorPicker");
});

colorpicker.addEventListener("input", function UserChangeColor(e) {
  color = e.target.value;
  lightbulb.style.backgroundColor = colorpicker.value;
  lightbulb.classList.add("changedcolor");
});

if (!localStorage.getItem("colorPicker")) {
  standartBg();
} else {
  setColor();
}

function standartBg() {
  localStorage.setItem(
    "colorPicker",
    document.getElementById("colorPicker").value
  );

  setColor();
}

function setColor() {
  const currentColor = localStorage.getItem("colorPicker");

  document.getElementById("colorPicker").value = currentColor;

  HTMLElem.style.backgroundColor = `#${currentColor}`;
}
