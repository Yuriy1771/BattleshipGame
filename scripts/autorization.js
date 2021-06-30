let entrance = document.querySelector("#entrance");

entrance.onclick = function() {
    if (document.getElementById("login").value != '' &&
        document.getElementById("password").value != '') {
        document.location.href = "battleship.html";
    } else {
        alert("Нужно ввести все данные!")
    }
};