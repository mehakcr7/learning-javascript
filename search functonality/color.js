
var h1 = document.getElementById('h1')


function clickfn1() {

    var value = prompt("Enter new content")
    h1.innerText = value
    console.log(h1)
}

function colorchange() {
    // var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // document.body.style.color = '#' + randomColor




    var colour = ["red", "green", "grey", "blue", "pink", "violet","wheat","yellow","orange","brown"]

    let i = 0;

    colour[i] = colour[Math.floor(Math.random() * colour.length)]

    console.log(colour[i]);

    document.body.style.color = colour[i]






}

