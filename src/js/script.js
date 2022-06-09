const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".menu");
const navigationItem = document.querySelectorAll(".menu_link")

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("hamburger_active")) {
        hamburger.classList.remove("hamburger_active")
        navigation.classList.remove("menu_active")
    } else {
        hamburger.classList.add("hamburger_active")
        navigation.classList.add("menu_active")
        console.log("good");
    }
})

navigationItem.forEach(item => 
    item.addEventListener("click", () => {
    hamburger.classList.remove("hamburger_active")
    navigation.classList.remove("menu_active")
}))
