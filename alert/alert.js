// var btn1 = document.getElementById('button')

// btn1.addEventListener('keydown', () => {

//     if (event.key == ' ' || event.key == 'Q') {
//         alert("Hi name, How are you")


//     }
// })

addEventListener('keydown', () => {

    if (event.key == ' ') {

        var name1 = prompt("enter your name")
        alert("Hi " +name1 + " how are you")
        


    }
})

var phno1 = document.getElementById('phno')

function numchange() {
    phno.innerText = prompt("enter new number")
    console.log(phno1);
}


addEventListener('keydown', () => {

    if (event.key == 'q') {
        numchange()


    }
})

