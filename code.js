// function getIDFun(id) {
//   const idIs = document.getElementById(id);
//   const finalID = idIs.value;
//   return finalID;
// }

let interviewList = [];
let rejectedList = [];

let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let allCardsCount = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

// let allFilterBtn = document.getElementById("all-filter-btn");
// let interviewFilterBtn = document.getElementById("interview-filter-btn");
// let rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const all_filter_Btn = document.getElementById("all_filter_btn");
const interview_filter_Btn = document.getElementById("interview_filter_btn");
const rejected_filter_Btn = document.getElementById("rejected_filter_btn");

function toggleStyle(id) {
  all_filter_Btn.classList.remove("bg-blue-600", "text-white");
  interview_filter_Btn.classList.remove("bg-blue-600", "text-white");
  rejected_filter_Btn.classList.remove("bg-blue-600", "text-white");

  all_filter_Btn.classList.add("bg-white", "text-gray-400");
  interview_filter_Btn.classList.add("bg-white", "text-gray-400");
  rejected_filter_Btn.classList.add("bg-white", "text-gray-400");

  const selected = document.getElementById(id);
  console.log(selected);

  selected.classList.remove("bg-white", "text-gray-400");
  selected.classList.add("bg-blue-600", "text-white");
}

function calculateCount() {
  total.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

// function toggleStyle(id) {
//   allFilterBtn.classList.add("bg-white", "text-black");
//   interviewFilterBtn.classList.add("bg-white", "text-black");
//   rejectedFilterBtn.classList.add("bg-white", "text-black");

//   allFilterBtn.classList.remove("bg-blue-600", "text-white");
//   interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
//   rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");

//   let selectedBtn = document.getElementById.apply(id);

//   selectedBtn.classList.remove("bg-white", "text-black");
//   selectedBtn.classList.add("bg-blue-600", "text-white");
// }
