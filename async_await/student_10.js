let students = [
  {
    collage_id: "C001",
    student_name: "Alice Johnson",
    email_id: "alice.johnson@example.com",
    ph_no: "123-456-7890",
    address: {
      house_no: "45",
      street_name: "Maple Street",
      pin_no: "123456",
      country: "USA",
    },
    schoolarship: true,
    sub: [
      { sub_name: "Math", sub_mark: 85 },
      { sub_name: "Science", sub_mark: 90 },
    ],
  },
  {
    collage_id: "C002",
    student_name: "Bob Smith",
    email_id: "bob.smith@example.com",
    ph_no: "987-654-3210",
    address: {
      house_no: "123",
      street_name: "Elm Avenue",
      pin_no: "654321",
      country: "Canada",
    },
    schoolarship: false,
    sub: [
      { sub_name: "Math", sub_mark: 75 },
      { sub_name: "English", sub_mark: 80 },
    ],
  },
  {
    collage_id: "C003",
    student_name: "Carlos Rodriguez",
    email_id: "carlos.rodriguez@example.com",
    ph_no: "456-789-1230",
    address: {
      house_no: "678",
      street_name: "Oak Lane",
      pin_no: "789456",
      country: "Mexico",
    },
    schoolarship: true,
    sub: [
      { sub_name: "History", sub_mark: 88 },
      { sub_name: "Science", sub_mark: 92 },
    ],
  },
  {
    collage_id: "C004",
    student_name: "Diana Kapoor",
    email_id: "diana.kapoor@example.com",
    ph_no: "321-654-9870",
    address: {
      house_no: "987",
      street_name: "Pine Street",
      pin_no: "456123",
      country: "India",
    },
    schoolarship: false,
    sub: [
      { sub_name: "Math", sub_mark: 78 },
      { sub_name: "Art", sub_mark: 85 },
    ],
  },
  {
    collage_id: "C005",
    student_name: "Eve Green",
    email_id: "eve.green@example.com",
    ph_no: "789-123-4560",
    address: {
      house_no: "321",
      street_name: "Birch Road",
      pin_no: "321654",
      country: "UK",
    },
    schoolarship: true,
    sub: [
      { sub_name: "English", sub_mark: 89 },
      { sub_name: "Music", sub_mark: 95 },
    ],
  },
  {
    collage_id: "C006",
    student_name: "Frank Miller",
    email_id: "frank.miller@example.com",
    ph_no: "654-321-9870",
    address: {
      house_no: "789",
      street_name: "Cedar Lane",
      pin_no: "987654",
      country: "Australia",
    },
    schoolarship: false,
    sub: [
      { sub_name: "Physics", sub_mark: 84 },
      { sub_name: "Chemistry", sub_mark: 86 },
    ],
  },
  {
    collage_id: "C007",
    student_name: "Grace Lee",
    email_id: "grace.lee@example.com",
    ph_no: "123-789-6540",
    address: {
      house_no: "456",
      street_name: "Spruce Avenue",
      pin_no: "654987",
      country: "South Korea",
    },
    schoolarship: true,
    sub: [
      { sub_name: "Math", sub_mark: 93 },
      { sub_name: "Biology", sub_mark: 88 },
    ],
  },
  {
    collage_id: "C008",
    student_name: "Henry Brown",
    email_id: "henry.brown@example.com",
    ph_no: "789-456-1230",
    address: {
      house_no: "654",
      street_name: "Fir Street",
      pin_no: "456789",
      country: "USA",
    },
    schoolarship: false,
    sub: [
      { sub_name: "English", sub_mark: 70 },
      { sub_name: "Geography", sub_mark: 72 },
    ],
  },
  {
    collage_id: "C009",
    student_name: "Isabella Garcia",
    email_id: "isabella.garcia@example.com",
    ph_no: "987-123-4560",
    address: {
      house_no: "789",
      street_name: "Willow Street",
      pin_no: "789123",
      country: "Spain",
    },
    schoolarship: true,
    sub: [
      { sub_name: "History", sub_mark: 92 },
      { sub_name: "Spanish", sub_mark: 96 },
    ],
  },
  {
    collage_id: "C010",
    student_name: "Jack Wilson",
    email_id: "jack.wilson@example.com",
    ph_no: "456-321-7890",
    address: {
      house_no: "456",
      street_name: "Cherry Lane",
      pin_no: "123789",
      country: "New Zealand",
    },
    schoolarship: false,
    sub: [
      { sub_name: "Economics", sub_mark: 88 },
      { sub_name: "Math", sub_mark: 82 },
    ],
  },
];

//   console.log(students);
//   let studentsjson = JSON.stringify(students);

//   console.log(studentsjson);

var user_input = document.getElementById("user_input");

for (let i = 0; i < students.length; i++) {
  // names adding to page

  var paragraph = document.createElement("p");

  paragraph.innerText = students[i].student_name;
  box.append(paragraph);
}
var value = user_input.value;

function searcher() {
  var value = user_input.value;

  var student_namePTag = document.getElementsByTagName("p");

  for (let i = 0; i < students.length; i++) {
    // if names == user input then display

    if (students[i].student_name.includes(value)) {
      student_namePTag[i].style.display = "block";

      // creating profile button

      if (value === students[i].student_name) {
        console.log(students[i].student_name);
        console.log(value);
        var button = document.createElement("button");
        box.append(button);
        button.innerText = value + " profile";
        button.setAttribute("onclick", "button_click()");
      }
    }
    // if names not = user input then display none
    else {
      student_namePTag[i].style.display = "none";
    }
  }
}

function button_click() {
  var searchbox = document.getElementById("searchbox");

  searchbox.style.display = "none";
  var profile_info = document.createElement("div");
  document.body.append(profile_info);
  for (let i = 0; i < students.length; i++) {
    var value = user_input.value;

    // displaying student details

    console.log(value);
    if (value === students[i].student_name) {
      var students_info = document.createElement("p");
      var students_info1 = document.createElement("p");
      profile_info.append(students_info);
      profile_info.append(students_info1);
      console.log(students[i].student_name);
      students_info1.innerText = students[i].student_name;
      students_info.innerText = students[i].collage_id;
    }
  }
}
