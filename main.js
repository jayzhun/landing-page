const zoroBtn = document.querySelector(".btn-zoro");
const zoroInfo = document.querySelector(".zoro-info");
const namiBtn = document.querySelector(".btn-nami");
const namiInfo = document.querySelector(".nami-info")
const usoppBtn = document.querySelector(".btn-usopp");
const usoppInfo = document.querySelector(".usopp-info")
const sanjiBtn = document.querySelector(".btn-sanji");
const sanjiInfo = document.querySelector(".sanji-info")

zoroBtn.addEventListener('click', function() {
    if (zoroInfo.style.visibility === "hidden") {
        zoroInfo.style.visibility = "visible";
      } else {
        zoroInfo.style.visibility = "hidden";
      }
})

namiBtn.addEventListener('click', function() {
    if (namiInfo.style.visibility === "hidden") {
        namiInfo.style.visibility = "visible";
      } else {
        namiInfo.style.visibility = "hidden";
      }
})

usoppBtn.addEventListener('click', function() {
    if (usoppInfo.style.visibility === "hidden") {
        usoppInfo.style.visibility = "visible";
      } else {
        usoppInfo.style.visibility = "hidden";
      }
})

sanjiBtn.addEventListener('click', function() {
    if (sanjiInfo.style.visibility === "hidden") {
        sanjiInfo.style.visibility = "visible";
      } else {
        sanjiInfo.style.visibility = "hidden";
      }
})


