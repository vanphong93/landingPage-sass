// truncate
window.addEventListener("load", function () {
    truncate()
})
function truncate() {
    var cardList = document.getElementsByClassName("card-title");
    for (let i = 0; i < cardList.length; i++) {
        const element = cardList[i].innerHTML;
        var newText = cutString(element, 30);
        cardList[i].innerHTML = newText;

    }
}
function cutString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
// sidebar Mini
var toggleBtn=document.querySelector(".sidebarMini_btn");
var sidebarMini=document.querySelector(".sidebarMini");
var switchBtn=document.querySelector("#checkbox");


toggleBtn.addEventListener("click", function () {
    sidebarMini.classList.toggle("opened");
})

switchBtn.addEventListener("click", function () {
document.querySelector("body").classList.toggle("darkMode")
})