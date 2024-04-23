// Функція для виводу інформації про розробника сторінки
function showDeveloperInfo(lastName, firstName, position = "Web Developer") {
    alert("Developer Info:\nLast Name: " + lastName + "\nFirst Name: " + firstName + "\nPosition: " + position);
}

function customDialog() {
    let userInput;
    let dialogHistory = "";

    do {
        userInput = prompt("Enter your message (click 'Cancel' to quit):");
        if (userInput === null) {
            dialogHistory += "Dialog is ended\n";
            break; // Exit the loop if 'Cancel' is clicked
        } else {
            dialogHistory += userInput + "\n";
        }
    } while (true);

    alert("Dialog history:\n" + dialogHistory);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "blue";

    setTimeout(function() {
        document.body.style.backgroundColor = ""; 
    }, 30000); 
}

function to_other_page(){
    window.location.href = "https://ua.trip.com/?locale=uk-ua"
}

function compareStrings(str1, str2) {
    if (str1.length === str2.length) {
        alert("Both strings are equal.");
    } else if (str1.length > str2.length) {
        alert("The first string is greater: " + str1);
    } else {
        alert("The second string is greater: " + str2);
    }
}
compareStrings("abrakadabra", "heh")

