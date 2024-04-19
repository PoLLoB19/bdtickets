let Data = [
  "Dhaka",
  "Rajshahi",
  "Chapainawababganj",
  "Barishal",
  "Chittagong",
  "Cox's Bazar",
  "Khulna",
  "Rangpur",
];

const search = document.querySelector(".tip");
const Box = document.querySelector(".search_butttons");
const button = document.querySelectorAll(".search_button");
const fromBox = document.querySelector(".select");
const input = document.querySelector(".input");
const push =document.querySelectorAll(".push");

input.onkeyup = function () {
  let result = [];
  let inputit = input.value;
  if (inputit) {
    result = Data.filter((words) => {
      return words.toLowerCase().includes(inputit.toLowerCase());
    });
  }

  function display() {
    let alone = result.map((items) => {
      return `<div class='search_button div_b'>${items}</div>`;
    });

    Box.innerHTML = `<button class="push" >${alone.join("")}</button>`;


  }

  display();
};
push.forEach((item)=>{
item.addEventListener('click',()=>{
  fromBox.innerHTML= item.innerText;
  console.log(13)
})
})
button.forEach((items) => {
  items.addEventListener('click',()=>{
    fromBox.innerHTML =items.innerText;
   
  })
});



