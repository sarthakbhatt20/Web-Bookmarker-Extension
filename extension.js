const inputel = document.getElementById("input-El");
let myLeads = [];
const savebtn = document.getElementById("save-btn");
const ulEl = document.getElementById("Ulist");
const delbtn = document.getElementById("del-btn");

let myLeadsStorage = JSON.parse(localStorage.getItem("myLeads"));

if (myLeadsStorage) {
  myLeads = myLeadsStorage;
  saveLeads();
}

savebtn.addEventListener("click", function () {
  console.log("Button clicked");
  myLeads.push(inputel.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  saveLeads();
  inputel.value = "";
});

delbtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  saveLeads();
});

function saveLeads() {
  let listitems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listitems += `<li>
    <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listitems;
}
