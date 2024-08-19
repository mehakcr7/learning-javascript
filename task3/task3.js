var name1 = ["cr7", "njr", "lm10", "messi"]
var name2 = prompt("enter the string")
var flag = 0


for (var i = 0; i < name1.length; i++) 
{
    console.log(name1[i])
    if (name1[i] == name2 )
        { 
           flag=1;
             
         } 
 
}
if (flag == 1) 
    { 
       console.log("String is present " ,)

     } 
else {
   console.log("string is not present")
   console.log(name2)
}



