var num = []
limit = 1
for (var i = 0; i < limit; i++) {
    // for generating random numbers
    num.push(Math.floor(Math.random() * 1000))


}
var student = {

    collage_id: num,
    student_name: "Notime",
    email_id: "notime@gmail.com",
    ph_no: "9999999999",
    address: {
        house_no: "",
        street_name: "",
        pin_no: "",
        country: "",
    },
    schoolarship: false,
    sub: [
        {
            sub_name: "IP",
            sub_mark: 200,
        },
        {
            sub_name: "Eng",
            sub_mark: 150,
        },
        {
            sub_name: "maths",
            sub_mark: 100
        }
    ]

}








//  to change ph and name

function change_name() {
    var new_name = prompt("Enter your new name", new_name)
    console.log("Previous Name =",student.student_name)


    student.student_name = new_name
    console.log("New Name =",student.student_name)

    main()

}

 
function change_ph() {
    var new_ph = prompt("Enter your new phone number", new_ph)
    console.log("Old Phone number" ,student.ph_no)


    student.ph_no = new_ph

    console.log("New Phone number" ,student.ph_no)
    main()

}

// to add address

function change_ad() {
    var ques = prompt("Do you want to change address?",)



    if (ques == "yes") {
        var new_house_no = prompt("Enter house no", new_house_no)
        var new_street_name = prompt("Enter street_name", new_street_name)
        var new_pin_no = prompt("Enter pin_no", new_pin_no)
        var new_country = prompt("Enter country", new_country)
        student.address.house_no = new_house_no
        student.address.street_name = new_street_name
        student.address.pin_no = new_pin_no
        student.address.country = new_country




        console.log("New Address", student.address)

    }

    else {
        console.log("Address not changed")
    }

    main()

}
function sub_choice() {
    var sub_value = prompt(" what is the sub choice\n a.add a new subject and mark\n b.Remove a subject by specifying its name \n c.Changing the mark of subject by specifying its name \n d.Display all the mark", sub_value)

    // to add a subject

    if (sub_value == "a") {

        sub_name = prompt("Enter New subject name")
        sub_mark = parseInt( prompt("Enter New subject mark"))
        student.sub.push({ sub_name, sub_mark })

        


        console.log("Added new subject",student.sub)

    }

    // to delete a subject

    else if (sub_value == "b") {

        var del_subname = prompt("Enter subject name you want to delete")
     
        for (var j = 0; j < student.sub.length; j++) {

            if (student.sub[j].sub_name == del_subname) {

                student.sub.splice(j, 1)
               

            }
        }
        console.log("Updated marklist", student.sub)


    }

    // Changing the mark of subject 

    else if (sub_value == "c") {
        var change_subname = prompt("Enter subject name you want to change")
        var new_mark = parseInt(prompt("Enter your new mark"))
        

        for (var k = 0; k < student.sub.length; k++) {
            if (student.sub[k].sub_name == change_subname) {

                student.sub[k].sub_mark = new_mark
                console.log("Updated marklist",student.sub)


            }


        }




    }

    else if (sub_value == "d") {
        console.log(student.sub);
    }
    main()


}

//  about Schoolarship

function schoolarship_1() {
   
    var schoolarship_value = prompt("do you want to change the status?")

    if (schoolarship_value == "yes") {

        student.schoolarship = true
        console.log("Schoolarship status", student.schoolarship);


    }
    else {
        console.log("Schoolarship status", student.schoolarship);


    }
    main()

}

// to add and create age

function age() {
    var age_value = prompt("Enter your age")
    student.age = age_value
    console.log("Age added =" ,student.age);
    main()


}

//  to find the total mark

function tota_mark() {


    let sum = 0

    for (let k = 0; k < student.sub.length; k++) {



        sum = sum + student.sub[k].sub_mark


    }
    
    console.log("total mark =", sum);
    main()


}

function main(){

var value = prompt("Enter your choice \n 1.change name \n 2.change phone number \n 3.add address\n 4.Subject & Mark \n 5.Schoolarship status \n 6. Age \n 7. total mark \n 8.exit")

    
switch (value) {
    case "1": {

        change_name()
        break
    }

    case "2": {

        change_ph()
        break
    }
    case "3": {

        change_ad()
        break
    }
    case "4": {
        sub_choice()
        break
    }
    case "5": {
        schoolarship_1()
        break
    }
    case "6": {
        age()
        break
    }
    case "7": {
        tota_mark()
        break
    }
    case "8": {
        break
    }

}



}

main()



