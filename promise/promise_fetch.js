var fetchData = async () => {
  var response = await fetch("https://fakestoreapi.com/products");
  Details = await response.json();

  console.log(Details[1]);

  //   var main_div = document.getElementById("main_div");

  var box = document.getElementById("box");

  for (let i = 0; i < Details.length; i++) {
    var sub_div = document.createElement("div");
    var profile_button = document.createElement("button");
    var paragraph = document.createElement("p");
    box.append(sub_div);
    sub_div.style.display = "flex";
    sub_div.style.gap = "5px";
    profile_button.innerText = "View more..";
    sub_div.append(paragraph);
    sub_div.append(profile_button);
    paragraph.innerText = Details[i].title;
    profile_button.addEventListener("click", () => {
      profile_button_onclick(Details[i]);
    });

    // onclick profile function

    function profile_button_onclick(Details) {
      box.style.display = "none";
      var product_div = document.createElement("div");
      var product_paragraph1 = document.createElement("p");
      var product_paragraph2 = document.createElement("p");
      var product_paragraph3 = document.createElement("p");
      var product_paragraph_img = document.createElement("img");
      var product_paragraph5 = document.createElement("p");
      var product_paragraph6 = document.createElement("p");

      // append p tag to product

      main_div.append(product_div);
      product_div.classList.add("box")
      product_div.append(product_paragraph1);
      product_div.append(product_paragraph6);
      product_div.append(product_paragraph2);
      product_div.append(product_paragraph3);
      product_div.append(product_paragraph_img);
      product_div.append(product_paragraph5);

      // Populate product details

      product_paragraph1.innerText = "title :" + Details.title;
      product_paragraph6.innerText = "Description :" + Details.description;
      product_paragraph2.innerText = "Category :" + Details.category;
      product_paragraph3.innerText = "Id :" + Details.id;
      product_paragraph_img.src = Details.image;
      product_paragraph5.innerText = "Price :" + Details.price;

      // creating back button

      var product_back_btn = document.createElement("button");
      product_div.append(product_back_btn);
      product_back_btn.innerText = "Back";
      product_back_btn.addEventListener("click", () => {
        product_div.remove();
        box.style.display = "grid";
      });
    }
  }

  //   for (let i = 0; i < Details.length; i++) {

  //   }
};

fetchData();

//
//
//
//
//
//

// PROMISE .................................................................................

// fetch("https://fakestoreapi.com/products")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   dress = data;
//   console.log(dress[1]);
// });

//...........................................................................................
