// const body = document.body

// body.append("hello","world")

// const div = document.createElement('div')
// div.innerHTML= "<strong>learning DOM manipulation</strong>"  // use strong instead
  
// body.append(div)

// const strong =document.createElement('strong')  // alternative method for above div-strong
// strong.innerText = " new text"

// body.append(strong)



// const span = document.createElement('span')
// span.textContent = "hai"

// body.append(span)

// ......................................................................................................................................

// div.innerText = "notime"


// const div = document.querySelector('div')
 
// console.log(div.textContent);
// console.log(div.innerText);   

// ................................................................................................................................

const body = document.body
const spanhi = document.querySelector('#hi')
const spanbye = document.querySelector('#bye')
spanbye.remove() // to remove 
body.append(spanbye) //to add 

console.log(spanhi.getAttribute('title')); // used to print id
console.log(spanhi.title);
console.log(spanhi.id);
console.log(spanbye.setAttribute('id','newid')); // setAttribute is used to add id or replace id || alternative method ->  spanbye.id= "newid" 
console.log(spanbye.id);
spanhi.removeAttribute('title') // to remove attribute

console.log(spanhi.dataset);
spanbye.classList.add("sample_class") // to add class  || to remove use remove instead of add
spanbye.classList.toggle("oldclass" ) // used to remove class if is there is that class and vice versa || use boolean to control it
spanbye.style.backgroundColor='red'