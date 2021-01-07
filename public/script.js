import { makeApiCall, pinglistTypeHandler } from './api.js';
let everythingPinglist;

document.getElementById("role-select").addEventListener("change", async (event) => {
  var ele = document.getElementById("collapse");

  if (event.target.value == 'Seller') {
    ele.classList.remove("d-invisible");

    // everythingPinglist = await makeApiCall();
  } else {
    ele.classList.add("d-invisible");
  }
})


document.getElementById('generate-pings').addEventListener("click", async function() {
  let generatedPinglistField = document.getElementById('hello');
  generatedPinglistField.innerHTML = "loading...";

  generatedPinglistField.innerHTML = await pinglistTypeHandler('Everything');
})


