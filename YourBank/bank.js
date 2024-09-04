//deposit main
//
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
    var deposit_box = document.getElementById("deposit_box");

    deposit_box.style.display = "none";
    
    var deposited_amount_div = document.createElement("div");
    var deposit_box_main = document.getElementById("deposit_box_main");
    deposit_box_main.append(deposited_amount_div);
    deposited_amount_div.classList.add('deposit_box')
    deposited_amount_div.innerText="Amount Deposited"
    var deposited_amount_Button = document.createElement('button')
    deposited_amount_div.append(deposited_amount_Button)
    deposited_amount_Button.innerText = "View Balance"
    deposited_amount_Button.classList.add('deposit_box');
    console.log("hai");

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

  deposit_btn.style.display = "none";
  withdraw_btn.style.display = "flex";

  //   Blur all elements except the overlay
  document
    .querySelectorAll("body > *:not(.deposit_overlay_page_main)")
    .forEach((element) => {
      element.classList.add("blurred");
    });
}
