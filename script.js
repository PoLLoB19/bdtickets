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
const push = document.querySelectorAll("#diba");
const searchDiv = document.querySelector(".from_searchbox");

const toBox = document.querySelector(".select_desti");
const twoin = document.querySelector(".desti_button");

const to_button = document.querySelectorAll(".search_button_to");

const Box_to = document.querySelector(".search_butttons_to");

const input_to = document.querySelector(".input_to");

const trend =document.querySelectorAll(".trending_buttons")

// function starats while typing

input.onkeyup = function () {
  let result = [];
  let inputit = input.value;

  // to get similar words
  if (inputit) {
    result = Data.filter((words) => {
      return words.toLowerCase().includes(inputit.toLowerCase());
    });
    console.log(result);
  }

  // show the element div

  display(result);
};
// this shows the filter reault

function display(result) {
  let alone = result.map((items) => {
    return `<button onclick='show(this)' class='search_button div_b' id="diba">${items}</button>`;
  });

  Box.innerHTML = alone.join("");
}

function show(item) {
  input.value = item.innerText;
  fromBox.innerHTML = item.innerText;
  boxhidden();
  hidedate()
}

// to get similar words for to section for to going section

input_to.onkeyup = function () {
  let content = [];
  let inputito = input_to.value;
  if (inputito) {
    content = Data.filter((word) => {
      return word.toLowerCase().includes(inputito.toLowerCase());
    });
  }

  // show the element div

  displ(content);
};
// this shows the filter reault

function displ(content) {
  let aloneh = content.map((item) => {
    return `<button onclick='show_to(this)' class='search_button_to div_b' id="diba">${item}</button>`;
  });

  Box_to.innerHTML = aloneh.join("");
}

const reset = () => {
  button.forEach((items) => {
    items.style.backgroundColor = "transparent";
  });
};

const reseto = () => {
  to_button.forEach((items) => {
    items.style.backgroundColor = "transparent";
  });
};
// this for user input location change

function show_to(item) {
  input_to.value = item.innerText;
  toBox.innerHTML = item.innerText;
  boxhiddentwo();
  hidedate()
}

// function for each location button
button.forEach((items) => {
  items.addEventListener("click", () => {
    fromBox.innerHTML = items.innerText;
    input.value = items.innerText;
    reset();
    boxhidden();
    hidedate()
    items.style.backgroundColor = "#F8C2C4";
  });
});

to_button.forEach((items) => {
  items.addEventListener("click", () => {
    toBox.innerHTML = items.innerText;
    input_to.value = items.innerText;
    reseto();
    boxhiddentwo();
    hidedate()
    items.style.backgroundColor = "#F8C2C4";
  });
});

// function pusha(){
//   document.querySelector(".search_button").style.backgroundColor = "#F8C2C4";

//   console.log(12)
// }

function boxShowone() {
  searchDiv.classList.toggle("search_hide");
}
function boxhidden() {
  searchDiv.classList.remove("search_hide");
}

function boxShowtwo() {
  document.querySelector(".to_searchbox").classList.toggle("search_hidet");
}
function boxhiddentwo() {
  document.querySelector(".to_searchbox").classList.remove("search_hidet");
}

// for  the cross icon to hide element box
function faka() {
  input.value = "";
  fromBox.innerHTML = "Please select";
  reset();
}
function swit() {
  if (fromBox.innerHTML !== input_to.value && toBox.innerHTML !== input.value) {
    fromBox.innerHTML = input_to.value;
    toBox.innerHTML = input.value;
    console.log(1);
  } else if (
    fromBox.innerHTML === input_to.value &&
    toBox.innerHTML === input.value
  ) {
    fromBox.innerHTML = input.value;
    toBox.innerHTML = input_to.value;
  }

 
}


trend.forEach((item)=>{
  item.addEventListener("click",()=>{
    fromBox.innerHTML=item.querySelector(".first").innerHTML;
    toBox.innerHTML=item.querySelector(".second").innerHTML;
   input.value=item.querySelector(".first").innerHTML;
   input_to.value=item.querySelector(".second").innerHTML;
    console.log(12);


   
  })

})

document.querySelector(".tarikh_button").addEventListener("click",()=>{
   document.querySelector(".datet").classList.add("dat");

  boxhidden();
  boxhiddentwo();
})

document.querySelector(".return_button").addEventListener("click",()=>{
  document.querySelector(".datet").classList.add("dat");
  boxhidden();
  boxhiddentwo();


})
document.querySelector(".datet").addEventListener("click",()=>{
let date =document.querySelector(".datet").innerHTML;
  document.querySelector(".tarikh_button").querySelector('.select').innerHTML = date;


})

function hidedate(){
  document.querySelector(".datet").classList.remove("dat");
}