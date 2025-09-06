const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

if (hamburger && navigation) {
  hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });
}
