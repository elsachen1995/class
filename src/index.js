// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");

let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];

for (let i = 0; i < boxesArray.length; i++) {
  let box = boxesArray[i];
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];
      if (_box.classList.contains("active")) {
        _box.classList.remove("active");
      }
    }

    e.target.classList.add("active");
  };
}

// box1.onclick = () => {
//   box1.classList.add("active");
//   box2.classList.remove("active");
//   box3.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box2.onclick = () => {
//   box1.classList.remove("active");
//   box2.classList.add("active");
//   box3.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box3.onclick = () => {
//   box1.classList.remove("active");
//   box2.classList.remove("active");
//   box3.classList.add("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box4.onclick = () => {
//   box1.classList.remove("active");
//   box2.classList.remove("active");
//   box3.classList.remove("active");
//   box4.classList.add("active");
//   box5.classList.remove("active");
// };

// box5.onclick = () => {
//   box1.classList.remove("active");
//   box2.classList.remove("active");
//   box3.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.add("active");
// };
