const navToggle = document.querySelector(".nav-toggle")
const navList = document.querySelector(".nav")

navToggle.addEventListener("click", function (e) {
  if (window.getComputedStyle(navList).visibility === "hidden") {
    navList.style.visibility = "visible"
    navList.style.position = "relative"
  } else {
    navList.style.visibility = "hidden"
    navList.style.position = "absolute"
  }
})
