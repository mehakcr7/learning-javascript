var username = document.getElementById("username");
var pass_value = document.getElementById("password");
var con_pass_value = document.getElementById("confirm_password");

var details = [];
var person = {};
var flag = 0;

function login_btn() {
  // username
  var name_value = username.value;
  person.username = name_value;

  //confirm password
  var con_pass_value = confirm_password.value;

  // password
  var pass_value = password.value;
  person.password = pass_value;

  // pushing to array

  var storedDetails = localStorage.getItem("personinfo");
  if (storedDetails) {
    details = JSON.parse(storedDetails);
  }

  // console.log("pushed array " + person);
  console.log("pushed array length" + details.length);

  for (let i = 0; i < details.length; i++) {
    console.log(details[i].username);

    

    // repeated username || existing username

    if (details[i].username === name_value) {
      console.log(details[i].username);
      console.log(name_value);
      alert("The username already exists.");

      flag = 1;
      break;
    }

    



    // check 8 letter

    if (pass_value.length < 8) {
      alert("Password must be at least 8 characters long.");
      flag = 1;
      break;
    }

    


    // flag===0 , true condition
  }
  if (flag === 0) {
    if (pass_value === con_pass_value && pass_value !== "") {
      details.push(person);

      var element = document.getElementById("display");
      var newelement = document.getElementById("box1id");

      element.style.display = "none";
      var newdiv = document.createElement("div");
      var atag = document.createElement("a");
      var atag2 = document.createElement("a");

      newelement.append(newdiv);
      newelement.append(atag);
      newelement.append(atag2);
      atag.setAttribute("href", "task10.html");
      atag2.setAttribute("href", "task10signup.html");
      atag.innerText = "LOGIN PAGE";
      atag2.innerText = "SIGNUP PAGE";
      atag.style.display = "flex";
      atag.style.justifyContent = "center";
      atag.style.alignItems = "center";
      atag2.style.display = "flex";
      atag2.style.justifyContent = "center";
      atag2.style.alignItems = "center";
      newdiv.style.display = "flex";
      newdiv.style.justifyContent = "center";
      newdiv.style.alignItems = "center";
      newdiv.style.height = "50%";
      newdiv.textContent = "PROFILE CREATED";

      const userJSON = JSON.stringify(details);
      localStorage.setItem("personinfo", userJSON);
      console.log(userJSON);
      // console.log("pass val = " + pass_value);
    } else if (pass_value != con_pass_value) {
      alert("The passwords do not match.");
    } else if (name_value === "" || pass_value === "") {
      alert("The form is incomplete.");
    }
  }

  
}
