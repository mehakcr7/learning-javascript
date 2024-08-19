var radius1 = parseInt(prompt("Enter the radius of circle"))
area=0
areavalue=0
function main()
{
    function square(radius1){
        area=radius1*radius1
        return area
       
    
    }
    
    function areacircle(){
        areavalue=area*3.14
       
    
    
    
    }
    let result = square(radius1)
    areacircle(area)
    console.log("square of radius =",result)
    console.log("area of circle=",areavalue)
}
 main()