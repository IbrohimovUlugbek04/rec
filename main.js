const elButtonSubmit = document.querySelector(".js-submit");
const elButtonReset = document.querySelector(".js-reset");
const elCar = document.querySelector(".js-car");
const elCarBallon = document.querySelector(".car-ballon");
const elCarBallonLast = document.querySelector(".last-balon");
const elList = document.querySelector(".js-list")

let record = new webkitSpeechRecognition();

// record.onstart = function(){
// console.log("boshlandi");
// }
// record.lang = "uz=UZ";

// record.onend = function () {
//   console.log("Tugadi");
// }

record.onresult = function (evt) {
  const result = evt.results[0][0].transcript;
  const createItem = document.createElement("li");
  createItem.classList.add("box-item");
  createItem.textContent = result;
  elList.appendChild(createItem);

  if (result.includes("start") || result.includes("yurish") || result.includes("harakat") || result.includes("harakatlanish") || result.includes("gaz")) {
    elCar.style.animationPlayState = "running";
    elCarBallon.classList.add("balon__start");
    elCarBallonLast.classList.add("balon__start");
  }
  if (result.includes("stop") || result.includes("to'xta") || result.includes("to'xtash") || result.includes("yurma") || result.includes("tormoz")) {
    elCar.style.animationPlayState = "paused";
    elCarBallon.classList.remove("balon__start");
    elCarBallonLast.classList.remove("balon__start");
  }
};


elButtonSubmit.addEventListener("click", function () {
  record.start()
});