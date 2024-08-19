var username = document.getElementById('username')

let details = {}
function fn_username() {
    var name_value = username.value
   
    localStorage.setItem('username', name_value);
    details.username = name_value


}


var pass_value = document.getElementById('password')
function fn_pass() {
    var pass_value = password.value
    localStorage.setItem('password', pass_value);
    details.password = pass_value



}
var con_pass_value = document.getElementById('confirm_password')
function fn_confirm_pass() {
    var con_pass_value = confirm_password.value
    localStorage.setItem('con_password', con_pass_value);
    details.confirm_password = con_pass_value

}


function login_btn() {

    addEventListener("click", () => {
        

        let pass_value = localStorage.getItem('password')
        let con_pass_value = localStorage.getItem('con_password')

        if (pass_value == con_pass_value) {
            console.log(pass_value);
            console.log(con_pass_value);



        var element = document.getElementById('display')
        var newelement = document.getElementById('box1id')

        element.style.display = "none";
        var newdiv = document.createElement('div')
        var atag = document.createElement('a')
        atag.textContent = "click me"
        newelement.append(newdiv)
        newelement.append(atag)
        atag.setAttribute("href", "task10.html")
        atag.innerText = "LOGIN PAGE"
        atag.style.display = "flex"
        atag.style.justifyContent = "center"
        atag.style.alignItems = "center"
        newdiv.style.display = "flex"
        newdiv.style.justifyContent = "center"
        newdiv.style.alignItems = "center"
        newdiv.style.height = "50%"
        newdiv.innerHTML = "PROFILE CREATED"
    }
        else {
            alert('Password does not match')
        }




    })
}