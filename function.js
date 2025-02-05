// <-----load pets function----->
loadPets();
// <-----load Buttons function----->
loadButtons();
// <-----View Button Function Call----->
const viewBtn = document.getElementById("view-btn");
const mainContainer = document.getElementById("main");
viewBtn.addEventListener("click", () => {
  main.scrollIntoView({ behavior: "smooth" });
});
