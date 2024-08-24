var students = []; // Initialize students array to be used later

var fetchData = async () => {
  var response = await fetch("student.json");
  students = await response.json(); // Update global students variable
  var box = document.getElementById("box");

  // Create the page with student names and corresponding profile buttons
  for (let i = 0; i < students.length; i++) {
    var paragraph = document.createElement("p");
    var newdiv = document.createElement("div");
    var profile_button = document.createElement("button");

    box.append(newdiv);
    newdiv.append(paragraph);
    newdiv.append(profile_button);

    paragraph.innerText = students[i].student_name;
    profile_button.innerText = students[i].student_name + " profile";
    profile_button.style.display = "none"; // Initially hide all buttons
  }
};

fetchData();

var user_input = document.getElementById("user_input");

// User search and data matching
function searcher() {
  var value = user_input.value.toLowerCase(); // Case insensitive search
  var paragraphs = document.querySelectorAll("#box p");
  var buttons = document.querySelectorAll("#box button");

  for (let i = 0; i < students.length; i++) {
    if (students[i].student_name.toLowerCase().includes(value)) {
      paragraphs[i].style.display = "block";

      buttons[i].style.display = "block"; // Show the corresponding profile button

      buttons[i].addEventListener("click", () => {
        button_click(students[i]);
      });
    } else {
      paragraphs[i].style.display = "none";
      buttons[i].style.display = "none"; // Hide non-matching names and buttons
    }

    // Hide everything if the input is empty
    if (value == "") {
      paragraphs[i].style.display = "none";
      buttons[i].style.display = "none";
    }
  }
}

// function to display searched student details

function button_click(student) {
  // to remove if there exist any profile
  
  var profile_info = document.createElement("div");
  profile_info.id = "profile_info";

  document.body.append(profile_info);

  var existingProfileInfo = document.querySelector("#profile_info");
  if (existingProfileInfo) {
    existingProfileInfo.remove();
  }

  // select searchbox
  var searchbox = document.getElementById("searchbox");
  searchbox.style.display = "none";

  // creating P tag for profile details

  var students_info = document.createElement("p");
  var students_info1 = document.createElement("p");
  var students_info2 = document.createElement("p");
  var students_info3 = document.createElement("p");
  var students_info4 = document.createElement("p");
  var students_info5 = document.createElement("p");
  var students_info6 = document.createElement("p");
  var students_info7 = document.createElement("p");
  var students_info9 = document.createElement("p");

  // Adding datas of student

  students_info1.innerText = student.student_name;
  students_info.innerText = student.collage_id;

  students_info2.innerText = student.email_id;
  students_info3.innerText = student.ph_no;

  students_info4.innerText = student.address.street_name;
  students_info5.innerText = student.address.pin_no;
  students_info5.innerText = student.address.house_no;
  students_info6.innerText = student.address.country;

  students_info9.innerText = student.schoolarship;

  // to add subject mark and sub name
  students_info7.innerText = student.sub.map(subject);

  function subject(item) {
    return `${item.sub_name}: ${item.sub_mark}`;
  }

  profile_info.append(
    students_info,
    students_info1,
    students_info2,
    students_info3,
    students_info4,
    students_info5,
    students_info6,
    students_info7,
    students_info9
  );

  // back button craetion

  var back_button = document.createElement("button");

  back_button.innerText = "back";
  profile_info.append(back_button);
  back_button.addEventListener("click", () => {
    profile_info.remove();
    searchbox.style.display = "flex";
    user_input.value = "";
  });
}

//

//optimised solution

//

// var students = []; // Initialize students array to be used later

// var fetchData = async () => {
//   var response = await fetch("student.json");
//   students = await response.json(); // Update global students variable
//   var box = document.getElementById("box");

//   // Create the page with student names and corresponding profile buttons
//   for (let i = 0; i < students.length; i++) {
//     var paragraph = document.createElement("p");
//     var newdiv = document.createElement("div");
//     var profile_button = document.createElement("button");

//     box.append(newdiv);
//     newdiv.append(paragraph);
//     newdiv.append(profile_button);

//     paragraph.innerText = students[i].student_name;
//     profile_button.innerText = students[i].student_name + " profile";
//     profile_button.style.display = "none"; // Initially hide all buttons

//     // Store references for easy access later
//     paragraph.setAttribute("data-index", i);
//     profile_button.setAttribute("data-index", i);
//     profile_button.addEventListener("click", () => button_click(students[i]));
//   }
// };

// fetchData();

// var user_input = document.getElementById("user_input");

// // User search and data matching
// function searcher() {
//   var value = user_input.value.toLowerCase(); // Case insensitive search
//   var paragraphs = document.querySelectorAll("#box p");
//   var buttons = document.querySelectorAll("#box button");

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].student_name.toLowerCase().includes(value)) {
//       paragraphs[i].style.display = "block";
//       buttons[i].style.display = "block"; // Show the corresponding profile button
//     } else {
//       paragraphs[i].style.display = "none";
//       buttons[i].style.display = "none"; // Hide non-matching names and buttons
//     }
//   }

//   // Hide everything if the input is empty
//   if (value == "") {
//     paragraphs.forEach(p => p.style.display = "none");
//     buttons.forEach(b => b.style.display = "none");
//   }
// }

// // Function to display searched student details
// function button_click(student) {
//   var searchbox = document.getElementById("searchbox");
//   searchbox.style.display = "none";

//   var profile_info = document.createElement("div");
//   document.body.append(profile_info);

//   // Creating P tags for profile details
//   var students_info1 = document.createElement("p");
//   var students_info2 = document.createElement("p");
//   var students_info3 = document.createElement("p");
//   var students_info4 = document.createElement("p");
//   var students_info5 = document.createElement("p");
//   var students_info6 = document.createElement("p");
//   var students_info7 = document.createElement("p");
//   var students_info9 = document.createElement("p");

//   // Adding student data
//   students_info1.innerText = student.student_name;
//   students_info2.innerText = student.collage_id;
//   students_info3.innerText = student.email_id;
//   students_info4.innerText = student.ph_no;
//   students_info5.innerText = student.address.street_name + ", " + student.address.house_no;
//   students_info6.innerText = student.address.pin_no + ", " + student.address.country;

//   // Add subjects and marks
//   students_info7.innerText = student.sub.map(subject).join(", ");
//   students_info9.innerText = student.scholarship;

//   function subject(item) {
//     return `${item.sub_name}: ${item.sub_mark}`;
//   }

//   profile_info.append(students_info1, students_info2, students_info3, students_info4, students_info5, students_info6, students_info7, students_info9);

//   // Create back button
//   var back_button = document.createElement("button");
//   back_button.innerText = "Back";
//   profile_info.append(back_button);

//   back_button.addEventListener("click", () => {
//     profile_info.remove();
//     searchbox.style.display = "flex";
//     user_input.value = "";
//   });
// }
