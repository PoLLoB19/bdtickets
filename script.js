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

button.forEach((items) => {
  items.addEventListener("click", () => {
    fromBox.innerHTML = items.innerHTML;
  });
});

input.onkeyup = function () {
  let result = [];
  let inputit = input.value;
  if (inputit.length) {
    result = Data.filter((words) => {
      return words.toLowerCase().includes(inputit.toLowerCase());
    });
  }

  function display() {
   let alone = result.map((items)=>{
       return `<div>${items}</div>`
   })
    
   alone.map((item)=>{
      Box.innerHTML = `<button class="search_button">${item}</button>`;
   })
  
  }
  display();
};
