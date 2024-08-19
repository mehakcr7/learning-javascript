

var total=0
for(i=1;i<=3;i++)
{
    var k = prompt("Enter Item price?");
        
    var j = prompt("Enter Item quantity?");

    total = total + k*j

    console.log("item price", k)
    console.log("item quantity",j)
    console.log("total price",total)

       
}
discount=0
if(total > 500)
{   
    discount=10/100 * total
    total=total-discount
    console.log(total)
}
else{
    console.log(total)

}
console.log("discount rate =",total);



