var account_number = document.getElementById("account_number");
var username = document.getElementById("username");
var pass_value = document.getElementById("password");
var con_pass_value = document.getElementById("confirm_password");

var details = [];
var person = {};
var transactions = [];
var transaction_details ={}

person.transactions = transactions
var flag = 0;

function login_btn() {
  // random account number
  var account_number_value = Math.floor(Math.random() * 10000 + 1);

  person.account_number = account_number_value;

  // username
  var name_value = username.value;
  person.email = name_value;

  // password
  var pass_value = password.value;
  person.password = pass_value;

  //confirm password
  var con_pass_value = confirm_password.value;

  // Balance

  var balance_amount = 0;
  person.balance_amount = balance_amount;

  // pushing to array

  var storedDetails = localStorage.getItem("personinfo");
  if (storedDetails) {
    details = JSON.parse(storedDetails);
  }
  var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // form is incomplete

  if (name_value === "" || pass_value === "") {
    alert("The form is incomplete.");

    // email varification
  } else if (gmailPattern.test(name_value)) {
    // Further actions like form submission or data processing

    for (let i = 0; i < details.length; i++) {
      // repeated username || existing username

      if (details[i].email === name_value) {
        alert("The username already exists.");

        flag = 1;
        break;
      } else {
        flag = 0;
      }

      // lowercase letter

      var myInput = document.getElementById("password");

      var lowerCaseLetters = /[a-z]/g;
      if (!myInput.value.match(lowerCaseLetters)) {
        alert("Password must contain at least one lowercase letter");

        flag = 1;
        break;
      } else {
        flag = 0;
      }

      // uppercase letter
      var upperCaseLetters = /[A-Z]/g;

      if (!myInput.value.match(upperCaseLetters)) {
        alert("Password must contain at least one uppercase letter");

        flag = 1;
        break;
      } else {
        flag = 0;
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (!myInput.value.match(numbers)) {
        alert("Password must contain at least one number");

        flag = 1;
        break;
      } else {
        flag = 0;
      }

      // Validate length
      if (myInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        flag = 1;
        break;
      } else {
        console.log(myInput.value.length);

        flag = 0;
      }

      // flag===0 , true condition
    }
    if (flag === 0) {
      if (pass_value === con_pass_value && pass_value !== "") {
        // person push
        details.push(person);
        // transaction push
        transactions.push(transaction_details);
        console.log(transactions);
        person.transactions;

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
      }
    }
  } else {
    alert("Enter Valid Gmail ID");
  }
}
