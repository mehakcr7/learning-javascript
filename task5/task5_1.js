const num = []
var limit = 10
const num_new = []
const filtered= []

for (let i = 0; i < limit; i++) {
    // for generating random numbers
    num.push(Math.floor(Math.random() * 100))
    // console.log(num)     

}

for (let j = 0; j < 10; j++) {

   
    if (num[j] < 40) {
        num_new.push(num[j])

    }
    if (num[j] > 40) {
        filtered.push(num[j])

    }
    

}

// filter method

// var filtered = num.filter(function (value) {

//     return value > 40 ;

// });




console.log("generated 10 random numbers ",num)
console.log("filtered numbers greater than 40", filtered)  
console.log("Numbers less than 40",num_new)

var map_num = num.map(function(mymap)
{
    return mymap * 2;
})
console.log(" Random numbers that are multiplied by 2" ,map_num)  


