const input = document.querySelector(".input")
const image = document.querySelector(".img")
const label = document.querySelector(".label")

image.addEventListener("click", (e) => {
    e.preventDefault()

    if (input.getAttribute("type") === "password") {
        image.setAttribute("src", "eye-off.jpg")
        input.setAttribute("type", "text")
        label.style.display = "none"
    }
    else {
        image.setAttribute("src", "eye.jpg")
        input.setAttribute("type", "password")
    }
})