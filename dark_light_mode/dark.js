theme();

function theme() {
    var setMode = localStorage.getItem('value') === 'true';
    console.log("value 2" + setMode);


    document.body.classList.toggle('class-mode', setMode);
}

let darker = document.getElementById('darker')
darker.addEventListener('click', () => {

    var darkMode = localStorage.getItem('value') === 'false';
    console.log("value" + darkMode);


    document.body.classList.toggle('class-mode', darkMode);

    localStorage.setItem('value', darkMode);
});





















// // Add event listener for the 'darker' button
// document.getElementById('darker').addEventListener('click', () => {
//     // Get the current dark mode state from localStorage
//     var darkMode = localStorage.getItem('dark-mode') === 'true';

//     // Toggle the dark mode state
//     if (darkMode) {
//         // If dark mode is currently enabled, disable it
//         document.body.classList.toggle('dark-mode');
//         localStorage.setItem('dark-mode', 'false');
//     } else {
//         // If dark mode is currently disabled, enable it
//         document.body.classList.toggle('dark-mode');
//         localStorage.setItem('dark-mode', 'true');
//     }
// });

// // Function to apply the saved theme from localStorage
// function theme() {
//     // Check the saved dark mode state from localStorage
//     var darkMode = localStorage.getItem('dark-mode') === 'true';

//     // Apply the dark mode class based on the saved state
//     if (darkMode) {
//         document.body.classList.add('dark-mode');
//     } else {
//         document.body.classList.remove('dark-mode');
//     }
// }

// // Apply the theme when the page loads
// theme();

