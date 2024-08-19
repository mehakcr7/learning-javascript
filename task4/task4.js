    
// var num=[1,2,3,4,5,6,7,8,9]
// var sum = 0
// do{
//     sum=0

//     for ( let i=0; i<num.length;i++)
//     {  
//     console.log(num[i])
//     sum = sum + num[i]

     
//     }
//     if(sum>20)
//     {
//         num.shift()
//     console.log(sum)

//     }

// }
// while(sum>20)
//     console.log(sum)

// my method

// var num =[1,2,3,4,5,6,7,8,9]
// var sum =0
// do{ 
//     sum=0
//     for(let i=0;i<num.length;i++)
//     {
//         console.log(num)
//         sum=sum+num[i]
        
//     }
//     if(sum>20)
//     {
//         num.shift()
//         console.log(sum)

        
//     }
// }
// while(20<sum)
//     console.log(sum)


// optimised method


var num =[1,2,3,4,5,6,7,8,9]
var sum = 0
for(let i=0;i<num.length;i++)
{
    sum=sum+num[i]
    console.log(sum)
    console.log(num)
}
do{
if(sum>20)
{   
    let first=num[0]
    num.shift()
    sum=sum-first
    console.log(sum)
    console.log(num)

    
}
}
while(sum>20)
    console.log(num)
    console.log(sum)
