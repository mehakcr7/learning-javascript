//local stotage data fetching
//
var recent_data = localStorage.getItem("recentinfo");
var recent_data_fetched = JSON.parse(recent_data);
var transaction_history_btn = document.getElementById(
  "transaction_history_btn"
);
var transactions = recent_data_fetched.transactions;

var table = document.getElementById("table");

if (recent_data) {
  var sign_up_bank = document.getElementById("sign_up_bank");
  sign_up_bank.innerText = "Welcome " + recent_data_fetched.recent_email;
  sign_up_bank.style.color = "white";
  var login_bank = document.getElementById("login_bank");
  login_bank.innerHTML = "Log out";
  login_bank.style.cursor = "pointer";
  var yourbank = document.getElementById("yourbank");
  var id_tag = document.createElement("h4");
  yourbank.append(id_tag);
  id_tag.innerText = "| ID : " + recent_data_fetched.account;
  login_bank.addEventListener("click", () => {
    window.location.href = "task10.html";
    localStorage.removeItem("recentinfo");
  });
}

//deposit main
//
var balance_amount = recent_data_fetched.balance_amount;
var balance = document.getElementById("balance");

function deposit_onclick() {
  var deposit_overlay_page_main = document.getElementById(
    "deposit_overlay_page_main"
  );
  var deposit_btn = document.getElementById("deposit_btn");
  deposit_overlay_page_main.style.display = "flex";
  deposit_btn.style.display = "flex";
  deposit_btn.style.justifyContent = "center";
  withdraw_btn.style.display = "none";
  //
  //display

  account_number.style.display = "none";
  transfer_account_number.style.display = "none";
  transaction_heading.style.display = "none";

  email_id.style.display = "none";
  amount.style.display = "flex";
  password.style.display = "flex";
  balance.style.display = "none";
  table.style.display = "none";
  transaction_history_btn.style.display = "none";

  deposit_btn.style.display = "flex";
  withdraw_btn.style.display = "none";

  // Blur all elements except the overlay
  //

  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });

  // Remove any previous event listeners to prevent multiple triggers

  var new_deposit_btn = deposit_btn.cloneNode(true);
  deposit_btn.parentNode.replaceChild(new_deposit_btn, deposit_btn);

  // deposit btn event handler
  //
  new_deposit_btn.addEventListener("click", () => {
    var user_amount = document.getElementById("amount").value;
    var user_password = document.getElementById("password").value;

    if (recent_data_fetched.recent_password === user_password) {
      // date and time ////////////////////////////////////
      const d = new Date();
      const DateOnly = d.toLocaleDateString();
      // transaction amount
      var transaction_details = {
        credit: user_amount,
        debit: "",
        date: DateOnly,
      };

      // Push the new transaction to the transactions array
      transactions.push(transaction_details);

      console.log(person);

      var deposit_box = document.getElementById("deposit_box");

      deposit_box.style.display = "none";
      var deposit_box_main = document.getElementById("deposit_box_main");
      // to remove if there exist any profile

      var deposited_amount_div = document.createElement("div");
      var existingdepositbox = document.querySelector("#deposited_amount_div");
      deposit_box_main.append(deposited_amount_div);
      deposited_amount_div.id = "deposited_amount_div";

      if (existingdepositbox) {
        existingdepositbox.remove();
      }
      //...............................................

      // to add deposit in balance amount

      balance_amount = parseInt(balance_amount) + parseInt(user_amount);
      console.log(balance_amount);

      // credited amount in withdraw
      balance.innerText = user_amount + " Rupees Credited";

      // display none
      amount.style.display = "none";
      password.style.display = "none";
      withdraw_btn.style.display = "none";
      new_deposit_btn.style.display = "none";
      balance.style.display = "flex";
      table.style.display = "none";
      transfer_account_number.style.display = "none";
      transaction_heading.style.display = "none";

      deposited_amount_div.style.display = "none";
      transaction_history_btn.style.display = "none";

      deposit_box.style.display = "flex";
      //
      //
      //retrieve data from localstorage for updating balance amount
      var stored_details = localStorage.getItem("personinfo");
      if (stored_details) {
        var person = JSON.parse(stored_details);
      }

      //store data to localstorage for updating balance amount

      for (let i = 0; i < person.length; i++) {
        if (person[i].email === recent_data_fetched.recent_email) {
          person[i].balance_amount = balance_amount;
          // storing transaction details
          person[i].transactions = transactions;

          recent_data_fetched.transactions = transactions;

          recent_data_fetched.balance_amount = balance_amount;

          const updated_recent_data = JSON.stringify(recent_data_fetched);
          localStorage.setItem("recentinfo", updated_recent_data);

          const updated_data = JSON.stringify(person);
          localStorage.setItem("personinfo", updated_data);
        }
      }

      // view balance button function of deposit button
    } else {
      alert("Incorrect Password, Please Try Again");
    }
  });
}
//Inside cancel button
//

function cancel_onclick() {
  //
  // Remove the blur effect
  document.querySelectorAll("body >*").forEach((element) => {
    element.classList.remove("blurred");
  });

  deposit_overlay_page_main.style.display = "none";
}
// withdraw main
//
function withdraw_onclick() {
  var deposit_overlay_page_main = document.getElementById(
    "deposit_overlay_page_main"
  );
  deposit_overlay_page_main.style.display = "flex";

  //display
  account_number.style.display = "none";
  email_id.style.display = "none";
  amount.style.display = "flex";
  password.style.display = "flex";
  balance.style.display = "none";
  transaction_history_btn.style.display = "none";
  table.style.display = "none";
  transfer_account_number.style.display = "none";
  transaction_heading.style.display = "none";

  deposit_btn.style.display = "none";
  withdraw_btn.style.display = "flex";

  //   Blur all elements except the overlay
  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });
  // Remove any previous event listeners to prevent multiple triggers

  var new_withdraw_btn = withdraw_btn.cloneNode(true);
  deposit_btn.parentNode.replaceChild(new_withdraw_btn, withdraw_btn);

  // withdraw function withdraw button function

  new_withdraw_btn.addEventListener("click", () => {
    var user_amount = document.getElementById("amount").value;
    var user_password = document.getElementById("password").value;

    //insufficent balance
    if (recent_data_fetched.balance_amount < user_amount) {
      var deposit_box = document.getElementById("deposit_box");

      var deposit_box_main = document.getElementById("deposit_box_main");
      // to remove if there exist any profile

      account_number.style.display = "none";
      transfer_account_number.style.display = "none";
      transaction_heading.style.display = "none";

      email_id.style.display = "flex";
      email_id.innerText = "Insufficent Balance";
      amount.style.display = "flex";
      password.style.display = "flex";
      withdraw_btn.style.display = "flex";
      deposit_btn.style.display = "none";
      balance.style.display = "none";
      deposited_amount_div.style.display = "none";
      transaction_history_btn.style.display = "none";
      table.style.display = "none";

      deposit_box.style.display = "none";
    }

    // if password is correct
    else if (recent_data_fetched.recent_password === user_password) {
      // date and time ////////////////////////////////////
      const d = new Date();
      const DateOnly = d.toLocaleDateString();
      // transaction for withdraw
      var transaction_details = {
        credit: "",
        debit: user_amount,
        date: DateOnly,
      };

      // Push the new transaction to the transactions array
      transactions.push(transaction_details);

      var deposit_box = document.getElementById("deposit_box");

      deposit_box.style.display = "none";
      var deposit_box_main = document.getElementById("deposit_box_main");
      // to remove if there exist any profile

      var deposited_amount_div = document.createElement("div");
      var existingdepositbox = document.querySelector("#deposited_amount_div");
      deposit_box_main.append(deposited_amount_div);
      deposited_amount_div.id = "deposited_amount_div";

      if (existingdepositbox) {
        existingdepositbox.remove();
      }
      //...............................................

      // to subtract withdraw in balance amount

      balance_amount = parseInt(balance_amount) - parseInt(user_amount);
      console.log(balance_amount);

      //retrieve data from localstorage for updating balance amount
      console.log(recent_data_fetched.recent_email);
      var stored_details = localStorage.getItem("personinfo");
      if (stored_details) {
        var person = JSON.parse(stored_details);
      }

      //store data to localstorage for updating balance amount

      for (let i = 0; i < person.length; i++) {
        if (person[i].email === recent_data_fetched.recent_email) {
          console.log(person[i]);
          person[i].balance_amount = balance_amount;

          recent_data_fetched.balance_amount = balance_amount;

          // storing transaction details
          person[i].transactions = transactions;

          recent_data_fetched.transactions = transactions;

          const updated_recent_data = JSON.stringify(recent_data_fetched);
          localStorage.setItem("recentinfo", updated_recent_data);

          const updated_data = JSON.stringify(person);
          localStorage.setItem("personinfo", updated_data);
        }
      }

      // debited amount in withdraw
      balance.innerText = user_amount + " Rupees Debited";

      // display none
      transaction_heading.style.display = "none";

      account_number.style.display = "none";
      email_id.style.display = "none";
      amount.style.display = "none";
      password.style.display = "none";
      withdraw_btn.style.display = "none";
      deposit_btn.style.display = "none";
      balance.style.display = "flex";
      deposited_amount_div.style.display = "none";
      transaction_history_btn.style.display = "none";
      table.style.display = "none";

      deposit_box.style.display = "flex";
    } else {
      alert("Incorrect Password, Please Try Again");
    }
  });
}

//Account Details

function account_details_onclick() {
  var deposit_overlay_page_main = document.getElementById(
    "deposit_overlay_page_main"
  );
  deposit_overlay_page_main.style.display = "flex";

  //   Blur all elements except the overlay
  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });

  //
  //
  //
  balance.innerText = "Balance : " + balance_amount;
  account_number.innerText = "Account Number : " + recent_data_fetched.account;
  email_id.innerText = "Email : " + recent_data_fetched.recent_email;

  // display none
  amount.style.display = "none";
  transfer_account_number.style.display = "none";
  transaction_heading.style.display="none"


  account_number.style.display = "flex";
  email_id.style.display = "flex";
  password.style.display = "none";
  withdraw_btn.style.display = "none";
  deposit_btn.style.display = "none";
  balance.style.display = "flex";
  transaction_history_btn.style.display = "flex";
  table.style.display = "none";

  deposit_box.style.display = "flex";
}

function transaction_history_btn_onclick() {
  var stored_details = localStorage.getItem("personinfo");
  if (stored_details) {
    var person = JSON.parse(stored_details);
  }

  // to remove all contents in the table
  table.innerHTML = "";

  for (let j = 0; j < person.length; j++) {
    if (recent_data_fetched.recent_email === person[j].email) {
      // Loop through the transactions array
      // Create a new row
      let table_head = document.createElement("tr");
      let dateTh = document.createElement("th");
      dateTh.textContent = "Date";
      let creditTh = document.createElement("th");
      creditTh.textContent = "Credit";
      let debitTh = document.createElement("th");
      debitTh.textContent = "Debit";

      //
      table_head.appendChild(dateTh);
      table_head.appendChild(creditTh);
      table_head.appendChild(debitTh);

      table.appendChild(table_head);

      for (let i = 0; i < transactions.length; i++) {
        // Create a new row

        let table_row = document.createElement("tr");
        transaction_heading.innerHTML = "Transaction History";

        // Create new <td> for Date, Credit, and Debit
        let dateTd = document.createElement("td");
        dateTd.textContent = person[j].transactions[i].date; // Date from array

        let creditTd = document.createElement("td");
        creditTd.style.color = "green";
        creditTd.textContent = person[j].transactions[i].credit; // Credit from array
        console.log(transactions.credit);

        let debitTd = document.createElement("td");
        debitTd.style.color = "red";

        debitTd.textContent = person[j].transactions[i].debit; // Debit from array

        // Append the <td> elements to the row
        table_row.appendChild(dateTd);
        table_row.appendChild(creditTd);
        table_row.appendChild(debitTd);

        // Append the new row to the table
        table.appendChild(table_row);
      }
    }
  }

  // Make the table visible
  table.style.display = "table";
  transaction_heading.style.display = "flex";
  //display none
  transaction_history_btn.style.display = "none";
  account_number.style.display = "none";
  email_id.style.display = "none";
  balance.style.display = "none";
}

// balance on click
function balance_onclick() {
  var deposit_overlay_page_main = document.getElementById(
    "deposit_overlay_page_main"
  );
  deposit_overlay_page_main.style.display = "flex";

  //   Blur all elements except the overlay
  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });

  //
  //
  //

  // display none
  account_number.style.display = "none";
  transaction_heading.style.display = "none";

  transfer_account_number.style.display = "flex";
  email_id.style.display = "none";
  amount.style.display = "flex";
  password.style.display = "flex";
  withdraw_btn.style.display = "none";
  deposit_btn.style.display = "flex";
  balance.style.display = "none";
  transaction_history_btn.style.display = "none";
  table.style.display = "none";

  deposit_box.style.display = "flex";

  // transfer account deposite btnnnnnnnnn........................

  var new_deposit_btn = deposit_btn.cloneNode(true);
  deposit_btn.parentNode.replaceChild(new_deposit_btn, deposit_btn);

  // deposit btn event handler
  //
  new_deposit_btn.addEventListener("click", () => {
    var user_amount = document.getElementById("amount").value;
    var user_account = document.getElementById("transfer_account_number").value;
    console.log(user_account);
    var user_password = document.getElementById("password").value;
    let flag = 0;

    //retrieve data from localstorage for updating balance amount
    var stored_details = localStorage.getItem("personinfo");
    if (stored_details) {
      var person = JSON.parse(stored_details);
    }
    // user account number matching with localstorage account number
    for (let i = 0; i < person.length; i++) {
      // to check user account number is exist
      if (user_account == person[i].account_number) {
        flag = 0;
        //insufficent balance

        if (recent_data_fetched.balance_amount < user_amount) {
          var deposit_box = document.getElementById("deposit_box");

          var deposit_box_main = document.getElementById("deposit_box_main");
          // to remove if there exist any profile

          account_number.style.display = "none";
          transfer_account_number.style.display = "flex";

          email_id.style.display = "flex";
          email_id.innerText = "Insufficent Balance";
          amount.style.display = "flex";
          password.style.display = "flex";
          withdraw_btn.style.display = "none";
          deposit_btn.style.display = "flex";
          balance.style.display = "none";
          deposited_amount_div.style.display = "none";
          transaction_history_btn.style.display = "none";
          table.style.display = "none";
          transaction_heading.style.display = "none";

          deposit_box.style.display = "none";
        }
        // suffiecient balance
        else if (recent_data_fetched.recent_password == user_password) {
          person[i].balance_amount =
            parseInt(person[i].balance_amount) + parseInt(user_amount);
          // date and time ////////////////////////////////////
          const d = new Date();
          const DateOnly = d.toLocaleDateString();
          // transaction amount
          var transaction_details = {
            credit: "",
            debit: user_amount,
            date: DateOnly,
          };

          // Push the new transaction to the transactions array
          transactions.push(transaction_details);

          var deposit_box = document.getElementById("deposit_box");

          deposit_box.style.display = "none";
          var deposit_box_main = document.getElementById("deposit_box_main");
          // to remove if there exist any profile

          var deposited_amount_div = document.createElement("div");
          var existingdepositbox = document.querySelector(
            "#deposited_amount_div"
          );
          deposit_box_main.append(deposited_amount_div);
          deposited_amount_div.id = "deposited_amount_div";

          if (existingdepositbox) {
            existingdepositbox.remove();
          }
          //...............................................

          // to add deposit in balance amount

          balance_amount = parseInt(balance_amount) - parseInt(user_amount);

          //

          //store data to localstorage for updating balance amount

          for (let i = 0; i < person.length; i++) {
            if (person[i].email === recent_data_fetched.recent_email) {
              person[i].balance_amount = balance_amount;
              // storing transaction details
              person[i].transactions = transactions;

              recent_data_fetched.transactions = transactions;

              recent_data_fetched.balance_amount = balance_amount;

              const updated_recent_data = JSON.stringify(recent_data_fetched);
              localStorage.setItem("recentinfo", updated_recent_data);

              const updated_data = JSON.stringify(person);
              localStorage.setItem("personinfo", updated_data);
            }
          }

          // debited amount in transfer account
          balance.innerText = user_amount + " Rupees Debited";

          // display none
          amount.style.display = "none";
          password.style.display = "none";
          withdraw_btn.style.display = "none";
          new_deposit_btn.style.display = "none";
          balance.style.display = "flex";
          table.style.display = "none";
          transfer_account_number.style.display = "none";
          transaction_heading.style.display = "none";

          deposited_amount_div.style.display = "none";
          transaction_history_btn.style.display = "none";

          deposit_box.style.display = "flex";
        } else {
          alert("Incorrect Password, Please Try Again");
        }

        break;
      } else {
        flag = 1;
      }
    }
    // if account number doesn't exist
    if (flag == 1) {
      alert("invalid Account Number");
    }
  });
}
