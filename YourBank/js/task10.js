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
    var name_value = person[i].email;
    var get_account = person[i].account_number;
    var get_balance_amount = person[i].balance_amount
    var get_transactions = person[i].transactions

    console.log(pass_value);
    console.log(name_value);

    if (name_value === get_username && pass_value === get_userpass) {
      window.location.href = "bank.html";

      var recent_data = {};
      recent_data.recent_email = name_value;
      recent_data.recent_password = pass_value;
      recent_data.account = get_account;
      recent_data.balance_amount =get_balance_amount
      recent_data.transactions = get_transactions

      const recent_data_JSON = JSON.stringify(recent_data);
      localStorage.setItem("recentinfo", recent_data_JSON);

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
