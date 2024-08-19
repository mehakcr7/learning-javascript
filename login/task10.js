var username = document.getElementById('username')
function fn_username() {
    var name_value = username.value
    console.log(name_value);




}


var password = document.getElementById('password')
function fn_pass() {
    var pass_value = password.value
    var name_value = username.value
    console.log(pass_value);
    console.log(name_value);





}

function submitt() {
    var pass_value = password.value
    var name_value = username.value
    console.log(pass_value);
    var get_userpass = localStorage.getItem('password');
    var get_username = localStorage.getItem('username');
    console.log("get name" + get_username);
    console.log("get pass " + get_userpass);


    if (name_value == get_username && pass_value == get_userpass) {
        console.log("yes");
        var element = document.getElementById('display')
        var newelement = document.getElementById('box1id')
        element.style.display = "none";
        var newdiv = document.createElement('div')
        newelement.append(newdiv)
        newdiv.style.display = "flex"
        newdiv.style.justifyContent = "center"
        newdiv.style.alignItems = "center"
        newdiv.style.height = "100%"
        newdiv.innerHTML = "LOGIN SUCCESSFUL"



    }
    else {
        alert("Invalid username/password!")
    }


}


