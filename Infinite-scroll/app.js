const imgContainer = document.querySelector(".image-container");

const count = 30;

const URL = `https://api.unsplash.com/photos/random/?client_id=R5h0iI8ExvOzMQzIZGQocaq2EPMHShwZ6xJCTvzN6eI&count=${count}`;

let Arr = [];
let dataLoaded = 0;
let totalImages = 0;
let Status = false;

function photosLoaded() {
  dataLoaded++;
  if (dataLoaded === totalImages) {
    Status = true;
  }
}

function showData() {
  dataLoaded = 0;
  totalImages = Arr.length;

  Arr.forEach((photos) => {
    const parentEle = document.createElement("a");
    parentEle.setAttribute("href", photos.links.html);
    parentEle.setAttribute("target", "__blank");

    const childEle = document.createElement("img");
    childEle.setAttribute("src", photos.urls.regular);
    childEle.setAttribute("alt", photos.alt_description);
    childEle.setAttribute("title", photos.alt_description);

    childEle.addEventListener("load", photosLoaded);

    parentEle.appendChild(childEle);
    imgContainer.appendChild(parentEle);
  });
}

async function reqFunction() {
  try {
    const jsonData = await fetch(URL);
    Arr = await jsonData.json();
    showData();
  } catch (err) {
    window.alert("Something went wrong", err);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    Status
  ) {
    Status = false;
    reqFunction();
  }
});

reqFunction();
