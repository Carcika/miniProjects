var tab1 = document.getElementById("tab1")
var tab2 = document.getElementById("tab2")
var tab3 = document.getElementById("tab3")
var button1 = document.getElementById("change-tab1")
var button2 = document.getElementById("change-tab2")
var button3 = document.getElementById("change-tab3")

button1.addEventListener("click", function() {
    tab1.style.opacity = "100%"
    tab2.style.opacity = "0%"
    tab3.style.opacity = "0%"
})
button2.addEventListener("click", function() {
    tab1.style.opacity = "0%"
    tab2.style.opacity = "100%"
    tab3.style.opacity = "0%"
})
button3.addEventListener("click", function() {
    tab1.style.opacity = "0%"
    tab2.style.opacity = "0%"
    tab3.style.opacity = "100%"
})