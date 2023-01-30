import "./css/style.css"; //importing css

const box = document.querySelector(".modal");

const myButton = document.getElementById("button");

const boxPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    }, 3000);
  });
};

const getResult = async () => {
  let result = await boxPromise();
  box.style.display = result;
};
myButton.addEventListener("click", myfunction);

function myfunction() {
  console.log("clicked");
  box.style.display = "none";
}

getResult();
