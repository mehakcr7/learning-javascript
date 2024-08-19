// var num1 = parseInt (prompt("Enter first number :"))
// var num2 = parseInt (prompt("Enter second number :"))
// var oper = prompt("choose operations + or -")
// var result=1

// switch(oper)
// {
   
//    case ("+"):
//             {
//                 result=num1 + num2
//                 console.log("result is ",result)
//                 break
//             }
//    case  ("-") :
//             {
//                 result=num1 - num2
//                 console.log("result is ",result)
//                 break
//             }
//    case  ("*") :
//             {
//                 result=num1 * num2
//                 console.log("result is ",result)
//                 break
//             }
//    case  ("/") :
//             {
//                 result=num1 / num2
//                 console.log("result is ",result)
//                 break
//             }

           
//     default :0

           
// }



function calculator(num1,num2,oper)
{

    if(oper=="+")
    {   

        result= num1+num2
        console.log(result)


    }
    else if(oper=="-")
    {   

        result= num1-num2
        console.log(result)


    }
    else if(oper=="*")
    {   

        result= num1*num2
        console.log(result)


    }
    else if(oper=="/")
    {   

        result= num1/num2
        console.log(result)


    }


}


var num1 = parseInt (prompt("Enter first number :"))
var num2 = parseInt (prompt("Enter second number :"))
var oper = prompt("choose operations + or -")
var result=0

calculator(num1,num2,oper)