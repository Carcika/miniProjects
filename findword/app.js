const input = document.getElementById("input")
const btn = document.getElementById("button")
const textt = document.getElementById("textt")
const text2 = document.getElementById("text2")

const text = `<h1>Lorem ipsum, Lorem dolor sit amet consectetur adipisicing elit. Vitae nobis in non modi asperiores velit nemo alias reiciendis cupiditate perspiciatis ratione libero quae, deleniti consequatur pariatur quo eius cumque! Dolor!</h1>`
textt.innerHTML = text

function search() {
    if(text.includes(input.value)) {
        textt.innerHTML = text.replace(`${input.value}`, `<span style="color: yellow;">${input.value}</span>`)
    }else {
        alert("not found")
    }
}
btn.addEventListener("click", search)

