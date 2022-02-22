//Select Classes****************************************************

//page container class
const container = document.querySelector(".container");
//Overlay class selector
const Overlay = document.querySelector(".overlay");

//alert class
const alert = document.querySelector(".alert");

//Color palatte section
const lists = document.querySelectorAll(".lists");
const list1 = document.querySelector(".list-1");
const list2 = document.querySelector(".list-2");
const list3 = document.querySelector(".list-3");
const list4 = document.querySelector(".list-4");
const list5 = document.querySelector(".list-5");
const list6 = document.querySelector(".list-6");
const list7 = document.querySelector(".list-7");
const list8 = document.querySelector(".list-8");
const list9 = document.querySelector(".list-9");
const list10 = document.querySelector(".list-10");

//Copy text option
const copyText = document.querySelectorAll(".copy-text");
const copyTextS1 = document.querySelector(".copy-text-1");
const copyTextS2 = document.querySelector(".copy-text-2");
const copyTextS3 = document.querySelector(".copy-text-3");
const copyTextS4 = document.querySelector(".copy-text-4");
const copyTextS5 = document.querySelector(".copy-text-5");
const copyTextS6 = document.querySelector(".copy-text-6");
const copyTextS7 = document.querySelector(".copy-text-7");
const copyTextS8 = document.querySelector(".copy-text-8");
const copyTextS9 = document.querySelector(".copy-text-9");
const copyTextS10 = document.querySelector(".copy-text-10");

//Section where Copy lock options have
const CopyLockOptions1 = document.querySelector(".copy-lock-options-1");
const CopyLockOptions2 = document.querySelector(".copy-lock-options-2");
const CopyLockOptions3 = document.querySelector(".copy-lock-options-3");
const CopyLockOptions4 = document.querySelector(".copy-lock-options-4");
const CopyLockOptions5 = document.querySelector(".copy-lock-options-5");

//Copy to clipboard
const clipboard01 = document.querySelector(".clipboard-1");
const clipboard02 = document.querySelector(".clipboard-2");
const clipboard03 = document.querySelector(".clipboard-3");
const clipboard04 = document.querySelector(".clipboard-4");
const clipboard05 = document.querySelector(".clipboard-5");

//Lock color palatte
const lockColor1 = document.querySelector(".lock-color-1");
const lockColor2 = document.querySelector(".lock-color-2");
const lockColor3 = document.querySelector(".lock-color-3");
const lockColor4 = document.querySelector(".lock-color-4");
const lockColor5 = document.querySelector(".lock-color-5");

//All Buttons of the page
const generateColorBtn = document.querySelector(".generate");
const addToFav = document.querySelector(".add-to-fav");
const savedColorsBtn = document.querySelector(".saved-colors");
const submitColorBtn = document.querySelector(".submit-color");
const clearAll = document.querySelector(".clear-all");

//Submit to add into save from
const formContainer = document.querySelector(".form-section");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

//Section where colors are saved
const colorContainer = document.querySelector(".color-container");
const insertColor = document.querySelector(".saved-colors-container");
const savedColors1 = document.querySelector(".first-color-saved");
const savedColors2 = document.querySelector(".second-color-saved");
const savedColors3 = document.querySelector(".third-color-saved");
const savedColors4 = document.querySelector(".fourth-color-saved");
const savedColors5 = document.querySelector(".fifth-color-saved");

//DOM content loaded
window.addEventListener("DOMContentLoaded", setUpItems);

//Function for alert functionality
const alertFunc = function (message, className) {
  alert.textContent = message;
  alert.classList.remove(`${className}`);

  setTimeout(function () {
    alert.textContent = message;
    alert.classList.add(`${className}`);
  }, 1000);
};

//FUNCTIONALITY: Copy to clipboard Functionality********************************************
//Section - 1
clipboard01.addEventListener("click", () => {
  copyTextS1.select();
  navigator.clipboard.writeText(copyTextS1.value);
  alertFunc("Added to clipboard 🎉", "hide-alert");
});

//Section - 2
clipboard02.addEventListener("click", () => {
  copyTextS2.select();
  navigator.clipboard.writeText(copyTextS2.value);
  alertFunc("Added to clipboard 🎉", "hide-alert");
});

//Section - 3
clipboard03.addEventListener("click", () => {
  copyTextS3.select();
  navigator.clipboard.writeText(copyTextS3.value);
  alertFunc("Added to clipboard 🎉", "hide-alert");
});

//Section - 4
clipboard04.addEventListener("click", () => {
  copyTextS4.select();
  navigator.clipboard.writeText(copyTextS4.value);
  alertFunc("Added to clipboard 🎉", "hide-alert");
});

//Section - 5
clipboard05.addEventListener("click", () => {
  copyTextS1.select();
  navigator.clipboard.writeText(copyTextS5.value);
  alertFunc("Added to clipboard 🎉", "hide-alert");
});

//FUNCTIONALITY: Lock Color Funcionality********************************************************
//Section - 1
lockColor1.addEventListener("click", () => {
  lockColor1.classList.toggle("lock");
  lockColor1.classList.toggle("after-lock-click");
  CopyLockOptions1.classList.toggle("after-lock-click");
});

//Section - 2
lockColor2.addEventListener("click", () => {
  lockColor2.classList.toggle("lock");
  lockColor2.classList.toggle("after-lock-click");
  CopyLockOptions2.classList.toggle("after-lock-click");
});

//Section - 3
lockColor3.addEventListener("click", () => {
  lockColor3.classList.toggle("lock");
  lockColor3.classList.toggle("after-lock-click");
  CopyLockOptions3.classList.toggle("after-lock-click");
});

//Section - 4
lockColor4.addEventListener("click", () => {
  lockColor4.classList.toggle("lock");
  lockColor4.classList.toggle("after-lock-click");
  CopyLockOptions4.classList.toggle("after-lock-click");
});

//Section - 5
lockColor5.addEventListener("click", () => {
  lockColor5.classList.toggle("lock");
  lockColor5.classList.toggle("after-lock-click");
  CopyLockOptions5.classList.toggle("after-lock-click");
});

//FUNCTIONALITY: Creating Random Colors Functionality
generateColorBtn.addEventListener("click", () => {
  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (!lockColor1.classList.contains("lock")) {
    copyTextS1.value = generateRandomColor().slice(1);
    list1.style.backgroundColor = `#${copyTextS1.value}`;
  }

  if (!lockColor2.classList.contains("lock")) {
    copyTextS2.value = generateRandomColor().slice(1);
    list2.style.backgroundColor = `#${copyTextS2.value}`;
  }
  if (!lockColor3.classList.contains("lock")) {
    copyTextS3.value = generateRandomColor().slice(1);
    list3.style.backgroundColor = `#${copyTextS3.value}`;
  }
  if (!lockColor4.classList.contains("lock")) {
    copyTextS4.value = generateRandomColor().slice(1);
    list4.style.backgroundColor = `#${copyTextS4.value}`;
  }
  if (!lockColor5.classList.contains("lock")) {
    copyTextS5.value = generateRandomColor().slice(1);
    list5.style.backgroundColor = `#${copyTextS5.value}`;
  }
});

//FUNCTIONALITY: Adding to saved color bag functionality
addToFav.addEventListener("click", () => {
  first.style.backgroundColor = `#${copyTextS1.value}`;
  second.style.backgroundColor = `#${copyTextS2.value}`;
  third.style.backgroundColor = `#${copyTextS3.value}`;
  fourth.style.backgroundColor = `#${copyTextS4.value}`;
  fifth.style.backgroundColor = `#${copyTextS5.value}`;

  formContainer.classList.toggle("form-show");
  Overlay.classList.toggle("overlay-hidden");
});

//FUNCTIONALITY: Show Saved Colors bag functionality
savedColorsBtn.addEventListener("click", () => {
  colorContainer.classList.toggle("color-container-show");
  Overlay.classList.toggle("overlay-hidden");
});

//FUNCTIONALITY: it is used for only for blur backghround effect
Overlay.addEventListener("click", () => {
  formContainer.classList.remove("form-show");
  Overlay.classList.toggle("overlay-hidden");
  colorContainer.classList.remove("color-container-show");
});

// deleting color function
const deleteMe = function () {
  for (let i = 1; i < insertColor.childNodes.length; i + 2) {
    insertColor.childNodes[i + 1].remove();
  }
};

//FUNCTIONALITY: Added to your Saved colors bag section functionality
submitColorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const allColors = {
    firstColor: `#${copyTextS1.value}`,
    secondColor: `#${copyTextS2.value}`,
    thirdColor: `#${copyTextS3.value}`,
    fourthColor: `#${copyTextS4.value}`,
    fifthColor: `#${copyTextS5.value}`,
  };

  const id = new Date().getTime().toString();

  const element = document.createElement("div");
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("saved-color");

  element.innerHTML = `<input style="background-color: ${allColors.firstColor};" 
  type="text" class="first-color-saved color-input" />
  <input style="background-color: ${allColors.secondColor};" 
  type="text" class="second-color-saved color-input" />
  <input style="background-color: ${allColors.thirdColor};" 
  type="text" class="third-color-saved color-input" />
  <input style="background-color: ${allColors.fourthColor};" 
  type="text" class="fourth-color-saved color-input" />
  <input style="background-color: ${allColors.fifthColor};" 
  type="text" class="fifth-color-saved color-input" />
  <button class="delete"><i class="bx bxs-trash"></i></button>`;

  insertColor.appendChild(element);

  // delete select color palette from saved colors
  const deleteMe = element.querySelector(".delete");
  const removeItem = deleteMe.parentElement;

  deleteMe.addEventListener("click", () => {
    insertColor.removeChild(removeItem);
    removeLocalStorage(id);
  });

  alertFunc("Your color has been saved 🎉", "hide-alert");

  addToLocalStorage(id, allColors);

  formContainer.classList.remove("form-show");
  Overlay.classList.toggle("overlay-hidden");
});

//clear all saved colors
function clearAllItems() {
  const savedColors = document.querySelectorAll(".saved-color");
  if (savedColors.length > 0) {
    savedColors.forEach((element) => {
      insertColor.removeChild(element);
    });
  }

  localStorage.removeItem("insertColor");
}

//clear all saved colors
clearAll.addEventListener("click", clearAllItems);

function addToLocalStorage(id, allColors) {
  const colors = {
    id: id,
    allColors: allColors,
  };
  const items = getLocalStorage();
  console.log(items);

  items.push(colors);
  localStorage.setItem("insertColor", JSON.stringify(items));
}

function removeLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("insertColor", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("insertColor")
    ? JSON.parse(localStorage.getItem("insertColor"))
    : [];
}

// SET UP LOCALSTORAGE

function setUpItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.allColors);
    });
  }
}

function createListItem(id, allColors) {
  const element = document.createElement("div");
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("saved-color");

  element.innerHTML = `<input style="background-color: ${allColors.firstColor};" 
  type="text" class="first-color-saved color-input" />
  <input style="background-color: ${allColors.secondColor};" 
  type="text" class="second-color-saved color-input" />
  <input style="background-color: ${allColors.thirdColor};" 
  type="text" class="third-color-saved color-input" />
  <input style="background-color: ${allColors.fourthColor};" 
  type="text" class="fourth-color-saved color-input" />
  <input style="background-color: ${allColors.fifthColor};" 
  type="text" class="fifth-color-saved color-input" />
  <button class="delete"><i class="bx bxs-trash"></i></button>`;

  insertColor.appendChild(element);

  // delete select color palette from saved colors
  const deleteMe = element.querySelector(".delete");
  const removeItem = deleteMe.parentElement;

  deleteMe.addEventListener("click", () => {
    insertColor.removeChild(removeItem);
    removeLocalStorage(id);
  });
}
