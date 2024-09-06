//deposit main
//
var balance_amount = 1000;
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

  amount.style.display = "flex";
  password.style.display = "flex";
  balance.style.display = "none";

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
    console.log(user_amount);
    console.log(user_password);

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

    //view balance and view balance button

    deposited_amount_div.classList.add("deposit_box");
    deposited_amount_div.innerText = user_amount + " Rupees Deposited";
    var deposited_amount_Button = document.createElement("button");
    deposited_amount_div.append(deposited_amount_Button);
    deposited_amount_Button.innerText = "View Balance";
    deposited_amount_Button.classList.add("deposit_box");

    // view balance button function of deposit button
    deposited_amount_Button.addEventListener("click", () => {
      balance.innerText = "Balance : " + balance_amount;

      // display none
      amount.style.display = "none";
      password.style.display = "none";
      withdraw_btn.style.display = "none";
      new_deposit_btn.style.display = "none";
      balance.style.display = "flex";
      deposited_amount_div.style.display = "none";

      deposit_box.style.display = "flex";
    });
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

  amount.style.display = "flex";
  password.style.display = "flex";
  balance.style.display = "none";

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
  deposit_btn.parentNode.replaceChild(new_withdraw_btn,withdraw_btn);

  // withdraw function withdraw button function

  new_withdraw_btn.addEventListener("click", () => {
    var user_amount = document.getElementById("amount").value;
    var user_password = document.getElementById("password").value;
    console.log(user_amount);
    console.log(user_password);

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

    //view balance

    deposited_amount_div.classList.add("deposit_box");
    deposited_amount_div.innerText = user_amount + " Rupees Debited";
    var deposited_amount_Button = document.createElement("button");
    deposited_amount_div.append(deposited_amount_Button);
    deposited_amount_Button.innerText = "View Balance";
    deposited_amount_Button.classList.add("deposit_box");

    // view balance button function of deposit button
    deposited_amount_Button.addEventListener("click", () => {
      balance.innerText = "Balance : " + balance_amount;

      // display none
      amount.style.display = "none";
      password.style.display = "none";
      withdraw_btn.style.display = "none";
      deposit_btn.style.display = "none";
      balance.style.display = "flex";
      deposited_amount_div.style.display = "none";

      deposit_box.style.display = "flex";
    });
  });
}

//local stotage data fetching
//

var recent_details = localStorage.getItem("recentinfo");
if (recent_details) {
  var recent_data_fetched = JSON.parse(recent_details);
  var sign_up_bank = document.getElementById("sign_up_bank");
  sign_up_bank.innerText = "Welcome " + recent_data_fetched.recent_user;
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
  });
}

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
  balance.innerText = "Balance : " + balance_amount;

  // display none
  amount.style.display = "none";
  password.style.display = "none";
  withdraw_btn.style.display = "none";
  deposit_btn.style.display = "none";
  balance.style.display = "flex";

  deposit_box.style.display = "flex";
}
