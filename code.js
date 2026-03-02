// function getIDFun(id) {
//   const idIs = document.getElementById(id);
//   const finalID = idIs.value;
//   return finalID;
// }

let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let allCardsCount = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filter_inter = document.getElementById("int_filtered");
const filter_Rejected = document.getElementById("rej_filtered");

const all_filter_Btn = document.getElementById("all_filter_btn");
const interview_filter_Btn = document.getElementById("interview_filter_btn");
const rejected_filter_Btn = document.getElementById("rejected_filter_btn");
const all_buttons = document.getElementsByClassName("dlt_btn");
const sideCount = document.getElementById("side-count");

const cardIn = document.querySelectorAll(".card");

function availJobsCounts() {
  sideCount.textContent = `${cardIn.length}`;
}

availJobsCounts();

let totalJobs = 8;

for (const dlt of all_buttons) {
  dlt.addEventListener("click", function (event) {
    const currentElement = event.currentTarget.parentNode.parentNode;
    console.log(currentElement);
    currentElement.remove();
    // availJobsCounts();
    total.innerHTML -= 1;
    totalJobs -= 1;
    sideCount.textContent = totalJobs;
  });
}

function toggleStyle(id) {
  all_filter_Btn.classList.remove("bg-blue-600", "text-white");
  interview_filter_Btn.classList.remove("bg-blue-600", "text-white");
  rejected_filter_Btn.classList.remove("bg-blue-600", "text-white");

  all_filter_Btn.classList.add("bg-white", "text-gray-400");
  interview_filter_Btn.classList.add("bg-white", "text-gray-400");
  rejected_filter_Btn.classList.add("bg-white", "text-gray-400");

  const selected = document.getElementById(id);
  currentStatus = id;
  // console.log(selected);

  selected.classList.remove("bg-white", "text-gray-400");
  selected.classList.add("bg-blue-600", "text-white");

  console.log(id);

  if (id == "interview_filter_btn") {
    allCardsCount.classList.add("hidden");
    filter_Rejected.classList.add("hidden");
    filter_inter.classList.remove("hidden");
    sideCount.textContent = `${interviewList.length} of ${cardIn.length}`;

    renderInterview();
  } else if (id == "all_filter_btn") {
    allCardsCount.classList.remove("hidden");
    filter_Rejected.classList.add("hidden");
    filter_inter.classList.add("hidden");
    sideCount.textContent = `${cardIn.length}`;
  } else if (id == "rejected_filter_btn") {
    allCardsCount.classList.add("hidden");
    filter_inter.classList.add("hidden");
    filter_Rejected.classList.remove("hidden");
    sideCount.textContent = `${rejectedList.length} of ${cardIn.length}`;
    renderReject();
  }
}

function calculateCount() {
  total.innerText = allCardsCount.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("succBtn")) {
    const parenNode = event.target.parentNode.parentNode;
    // const parenNode = event.target.closest(".card");
    const Company_Name = parenNode.querySelector(".companyName").innerText;
    const JobDesc = parenNode.querySelector(".job_Desc").innerText;
    const salaryRange = parenNode.querySelector(".salary_Range").innerText;
    const staT = parenNode.querySelector(".stat").innerText;

    const whatToDo = parenNode.querySelector(".job_responsibility").innerText;
    // parenNode.querySelector(".stat").innerText = "Applied";
    const card_Infos = {
      Company_Name,
      JobDesc,
      salaryRange,
      whatToDo,
      staT,
    };

    sideCount.textContent = `${interviewList.length} of ${cardIn.length}`;
    const existedComapny = interviewList.find(
      (item) => item.Company_Name == card_Infos.Company_Name,
    );
    parenNode.querySelector(".stat").innerText = "interview";

    if (!existedComapny) {
      interviewList.push(card_Infos);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName == card_Infos.Company_Name,
    );
    calculateCount();
    renderInterview();
    renderReject();
  } else if (event.target.classList.contains("rejec_btn")) {
    const parenNode = event.target.parentNode.parentNode;
    // const parenNode = event.target.closest(".card");
    const Company_Name = parenNode.querySelector(".companyName").innerText;
    const JobDesc = parenNode.querySelector(".job_Desc").innerText;
    const salaryRange = parenNode.querySelector(".salary_Range").innerText;
    const staT = parenNode.querySelector(".stat").innerText;

    const whatToDo = parenNode.querySelector(".job_responsibility").innerText;
    // parenNode.querySelector(".stat").innerText = "Rejected";

    const card_Infos = {
      Company_Name,
      JobDesc,
      salaryRange,
      whatToDo,
      staT,
    };
    sideCount.textContent = `${rejectedList.length} of ${cardIn.length}`;

    const existedComapny = rejectedList.find(
      (item) => item.Company_Name == card_Infos.Company_Name,
    );

    console.log(card_Infos);
    parenNode.querySelector(".stat").innerText = "Rejected";

    // if (!existedComapny) {
    //   rejectedList.push(card_Infos);
    // }
    if (!existedComapny) {
      rejectedList.push(card_Infos);
    }

    interviewList = interviewList.filter(
      (item) => item.Company_Name != card_Infos.Company_Name,
    );

    if (currentStatus == "interview_filter_btn") {
      renderInterview();
    }

    console.log(interviewList);

    calculateCount();
  }
});

function renderInterview() {
  filter_inter.innerHTML = "";

  if (interviewList.length > 0) {
    for (let interview of interviewList) {
      let div = document.createElement("div");
      div.className =
        "card mt-[16px] flex justify-between flex-row p-5 bg-white border border-gray-200";
      div.innerHTML = ` <div
          class="card mt-[16px] flex justify-between flex-row p-5 bg-white border border-gray-200"
        >
          <div class="textPart space-y-[20px]">
            <div class="text1-2">
              <h2 class="companyName text-[18px] font-semibold text-[#002C5C]">
                ${interview.Company_Name}
              </h2>
              <p class="job_Desc text-[16px] text-gray-400">
                 ${interview.JobDesc}
              </p>
            </div>
            <div class="text3">
              <p class="salary_Range text-gray-400 text-[14px]">
                ${interview.salaryRange}
              </p>
            </div>
            <div class="text4">
              <p class="stat w-fit btn bg-[#EEF4FF] text-[#002C5C]">
                NOT APPLIED
              </p>

              <p class="job_responsibility text-gray-900">
                ${interview.whatToDo}
              </p>
            </div>
            <div>
              <button class="succBtn btn btn-outline btn-success">
                INTERVIEW
              </button>
              <button class="rejec_btn btn btn-outline btn-error">
                REJECTED
              </button>
            </div>
          </div>
          <div class="dltPart">
            <div class="dlt_btn h-10 w-10 border-black-900 rounded-full btn">
              <i class="fa-regular fa-trash-can" style="color: #64748b"></i>
            </div>
          </div>
        </div>`;
      filter_inter.appendChild(div);
    }
  } else {
    filter_inter.innerHTML = `

    <div class="bg-white px-[120px] py-[80px]  rounded-[8px] my-[30px]  grid grid-cols-1  "> 
      <img class="mx-auto" src="./jobs.png" alt=""> 
  
    <h2 class="companyName text-[24px] font-semibold text-[#002C5C] text-center">
                No jobs available
              </h2>
              <p class ="text-[16px] text-gray-400 text-center"> Check back soon for new job opportunities</p>
             
   
              </div>

    
    `;
  }
}

function renderReject() {
  filter_Rejected.innerHTML = "";

  if (rejectedList.length > 0) {
    for (let reject of rejectedList) {
      let div = document.createElement("div");
      div.className =
        "card mt-[16px] flex justify-between flex-row p-5 bg-white border border-gray-200";
      div.innerHTML = `<div class="textPart space-y-[20px]">
            <div class="text1-2">
              <h2 class="companyName text-[18px] font-semibold text-[#002C5C]">
                ${reject.Company_Name}
              </h2>
              <p class="job_Desc text-[16px] text-gray-400">
                ${reject.JobDesc}
              </p>
            </div>
            <div class="text3">
              <p class="salary_Range text-gray-400 text-[14px]">
                ${reject.salaryRange}
              </p>
            </div>
            <div class="text4">
              <p class="stat btn bg-[#EEF4FF] text-[#002C5C]">NOT APPLIED</p>

              <p class="job_responsibility text-gray-900">
                ${reject.whatToDo}
              </p>
            </div>
            <div>
              <button class="succBtn btn btn-outline btn-success">
                INTERVIEW
              </button>
              <button class="rejec_btn btn btn-outline btn-error">
                REJECTED
              </button>
            </div>
          </div>
          <div class="dltPart">
            <div class="h-10 w-10 border-black-900 rounded-full btn">
              <i class="fa-regular fa-trash-can" style="color: #64748b"></i>
            </div>
          </div>`;
      filter_Rejected.appendChild(div);
    }
  } else {
    filter_Rejected.innerHTML = `

    <div class="bg-white px-[120px] py-[80px]  rounded-[8px] my-[30px]  grid grid-cols-1  "> 
      <img class="mx-auto" src="./jobs.png" alt=""> 
  
    <h2 class="companyName text-[24px] font-semibold text-[#002C5C] text-center">
                No jobs available
              </h2>
              <p class ="text-[16px] text-gray-400 text-center"> Check back soon for new job opportunities</p>
             
   
              </div>

    
    `;
  }
}
