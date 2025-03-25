function verify() {
    var age = document.getElementById("age").value;

    if (age >= 18) {
        window.alert("You are eligible to vote.");
    } else {
        window.alert("You are ineligible to vote.");
    }
}