const zoroBtn = document.querySelector(".btn-zoro");
const zoroInfo = document.querySelector(".zoro-info");

zoroBtn.addEventListener('click', function() {
    if (zoroInfo.style.visibility === "hidden") {
        zoroInfo.style.visibility = "visible";
      } else {
        zoroInfo.style.visibility = "hidden";
      }
})

