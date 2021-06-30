let password = document.querySelector("#new_password");

password.onclick = function() {
    if (document.getElementById("email").value != '') {
        document.location.href = "battleship.html";
    } else {
        alert("Нужно ввести все данные!")
    }
};