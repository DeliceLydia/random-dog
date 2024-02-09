const container = document.getElementsByClassName('container')
const dogImg = document.getElementById("dog-img");
const button = document.getElementById("dog-button")

function fetchImg() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      dogImg.src = data.url;
    })
    .catch((error) => console.error(error));
};
fetchImg();
button.addEventListener("click", fetchImg);
