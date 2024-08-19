const btn_1 = document.querySelector("#button_1");
const btn_2 = document.querySelector("#button_2");




btn_1.addEventListener('click', function () {

    Bcolor("red")

});
btn_2.addEventListener('click', function () {

    Bcolor("green")

});





function Bcolor(color) {
    document.body.style.background = color
}

