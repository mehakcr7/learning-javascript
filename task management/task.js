var search = document.getElementById('input')
var body = document.body
const maindiv = document.createElement('div')


document.body.append(maindiv);
let input = []



function inputfun() {

    var value = search.value


    console.log(value)
}

function onnclick() {
    const btn2 = document.createElement('button')
    const btn3 = document.createElement('button')
    const div2 = document.createElement('div')
    maindiv.append(div2)

    const div1 = document.createElement('div')

    var value = search.value

    input.push(value)

    search.value = ""

    for (let i = 0; i < input.length; i++) {
        div2.innerText = input[i]
    }

    console.log(div2);

    div1.style.display= "flex"
   
    div1.style.gap="10px"
    div1.append(btn3)
    div1.append(btn2)
    btn2.innerText = "DELETE"
    btn3.innerText = "Edit"

    btn2.addEventListener('click', () => {
        div2.remove()
        div1.remove()
    })
    btn3.addEventListener('click', () => {



        var newValue = prompt("enter new value", div2.innerText )
        div2.innerText = newValue

        console.log(div1);
    })

    maindiv.append(div1);
    console.log(input);

}

function dark(){

    var element = document.body
    element.classList.toggle("dark-mode")
}





// .............another method for onnclick()




// function onnclick() {
//     const div1 = document.createElement('div');

//     var value = search.value;

//     input.push(value);

//     search.value = "";

//     const btn2 = document.createElement('button');
//     const btn3 = document.createElement('button');
    
//     // Create a span to hold the text
//     const textSpan = document.createElement('span');
//     textSpan.innerText = value;
    
//     // Append the text span to div1
//     div1.append(textSpan);
    
//     btn2.innerText = "DELETE";
//     btn3.innerText = "Edit";
    
//     // Append the buttons to div1
//     div1.append(btn2);
//     div1.append(btn3);

//     btn2.addEventListener('click', () => {
//         div1.remove();
//         // Optionally, remove the corresponding value from input array if needed
//         const index = input.indexOf(value);
//         if (index > -1) {
//             input.splice(index, 1);
//         }
//     });

//     btn3.addEventListener('click', () => {
//         // Allow editing by replacing textSpan's content
//         var newValue = prompt("Edit the value:", textSpan.innerText);
//         if (newValue !== null) { // Check if the user did not press cancel
//             input[input.indexOf(value)] = newValue;
//             textSpan.innerText = newValue;
//             console.log(div1);
            
//         }
//     });

//     maindiv.append(div1);

//     console.log(input);
// }






