//deposit main
//
var Balance = 0;
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

  amount.style.display="flex"
  password.style.display="flex"
  balance.style.display='none'

  // Blur all elements except the overlay
  //

  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });

  // deposit btn event handler
  //
  deposit_btn.addEventListener("click", () => {
    var user_amount = document.getElementById("amount").value;
    var user_password = document.getElementById("password").value;
    console.log(user_amount);
    console.log(user_password);

    var deposit_box = document.getElementById("deposit_box");

    deposit_box.style.display = "none";

    var deposited_amount_div = document.createElement("div");
    var deposit_box_main = document.getElementById("deposit_box_main");
    deposit_box_main.append(deposited_amount_div);
    deposited_amount_div.classList.add("deposit_box");
    deposited_amount_div.innerText = user_amount + " Rupees Deposited";
    var deposited_amount_Button = document.createElement("button");
    deposited_amount_div.append(deposited_amount_Button);
    deposited_amount_Button.innerText = "View Balance";
    deposited_amount_Button.classList.add("deposit_box");
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

  amount.style.display="flex"
  password.style.display="flex"
  balance.style.display='none'


  deposit_btn.style.display = "none";
  withdraw_btn.style.display = "flex";

  //   Blur all elements except the overlay
  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
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
  var balance = document.getElementById("balance");
  balance.innerText ="Balance : "+ Balance  ;

  // display none
  amount.style.display="none"
  password.style.display="none"
  withdraw_btn.style.display="none"
  deposit_btn.style.display="none"
  balance.style.display='flex'


  deposit_box.style.display = "flex";

}
