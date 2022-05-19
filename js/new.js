function loadData(name) {
  if (name == "btn2") {
    document.getElementById("img1").src = "../images/A.jpg";
    document.getElementById("img2").src = "../images/bc.jpg";
    document.getElementById("img3").src = "../images/cd.jpg";
    document.getElementById("img4").src = "../images/ef.jpg";
    document.getElementById("img5").src = "../images/gh.jpg";
    document.getElementById("para2").innerHTML =
      "Solis Hotel is an elegant banquet hall located in the heart of the capital city of Sri Lanka. We have hosted numerous memorable events and have been in service for over six decades as one of the premier banquet halls in Colombo. Our expansive venue includes 3 banquet halls, each with a unique, opulent setting. Exquisite in-house catering, ample parking space and plenty of stunning photo opportunities make our venue perfect for hosting weddings, homecoming ceremonies, corporate parties, get-together/alumni events, puberty parties, dinner dances, birthday parties, and more.";
  
  }
}

const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let isClickedBtn3 = false;
let isClickedBtn4 = false;

const imageRow1 = document.querySelectorAll(".imageRow1");
const imageRow2 = document.querySelectorAll(".imageRow2");

console.log(imageRow1);

imageRow1.forEach((node) => {
  node.style.display = "none";
});

imageRow2.forEach((node) => {
  node.style.display = "none";
});

btn3.addEventListener("click", () => {
  if (!isClickedBtn3) {
    imageRow1.forEach((node) => {
      node.style.display = "block";
    });
    isClickedBtn3 = true;
  } else {
    imageRow1.forEach((node) => {
      node.style.display = "none";
    });
    isClickedBtn3 = false;
  }
});

btn4.addEventListener("click", () => {
  if (!isClickedBtn4) {
    imageRow2.forEach((node) => {
      node.style.display = "block";
    });
    isClickedBtn4 = true;
  } else {
    imageRow2.forEach((node) => {
      node.style.display = "none";
    });
    isClickedBtn4 = false;
  }
});
