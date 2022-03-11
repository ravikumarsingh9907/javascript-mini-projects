const color = [
  "orange",
  "blue",
  "pink",
  "violet",
  "yellow",
  "rgba(135,122,210)",
  "#f1f5f8",
];
let count = 0;

const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

buttons.forEach(function (ans) {
  ans.addEventListener("click", function (f) {
    const styles = f.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // Adding color property
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    }
    value.textContent = count;
    colorflipper();
  });
});

function colorflipper() {
  const RandomNumber = randomColor();
  if (count == 0) {
    document.body.style.backgroundColor = color[6];
  } else {
    document.body.style.backgroundColor = color[RandomNumber];
  }
}

function randomColor() {
  return Math.floor(Math.random() * color.length);
}
