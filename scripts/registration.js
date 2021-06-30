window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }


    function mask(event) {
        var matrix = this.defaultValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
    }

    var input = document.querySelector("#number");
    input.addEventListener("input", mask, false)
});

let reg = document.querySelector("#reg");

reg.onclick = function() {

    if (document.getElementById("number").value != '+7(___)___-____' &&
        document.getElementById("nik").value != '' &&
        document.getElementById("email").value != '' &&
        document.getElementById("password").value != '' &&
        document.getElementById("date").value != '') {
        alert("Поздравляю! Вы успешно зарегистрировались!");
        document.location.href = "battleship.html";
    } else {
        alert("Нужно ввести все данные!");
    }

};