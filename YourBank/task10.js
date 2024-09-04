function submitt() {
  // to retrieve data from local storage
  var flag = 0;

  var stored_details = localStorage.getItem("personinfo");
  if (stored_details) {
    var person = JSON.parse(stored_details);
  } else {
    alert("Account not found.");
  }

  console.log(stored_details);
  console.log(person);

  // user input

  var get_userpass = password.value;

  var get_username = username.value;

  console.log("get name" + get_username);
  console.log("get pass " + get_userpass);

  // loop for matching

  for (let i = 0; i < person.length; i++) {
    var pass_value = person[i].password;
    var name_value = person[i].username;
    console.log(pass_value);
    console.log(name_value);

    if (name_value === get_username && pass_value === get_userpass) {
      console.log("yes");
      var element = document.getElementById("display");
      var newelement = document.getElementById("box1id");
      element.style.display = "none";
      var newdiv = document.createElement("div");
      newelement.append(newdiv);
      newdiv.style.display = "flex";
      newdiv.style.justifyContent = "center";
      newdiv.style.alignItems = "center";
      newdiv.style.height = "100%";
      newdiv.innerHTML = "LOGIN SUCCESSFUL";

      flag = 1;
      break;
    } else {
      console.log("no");
    }
  }

  // conditions

  if (flag == 0) {
    alert("Invalid username or password!");
  }
}
