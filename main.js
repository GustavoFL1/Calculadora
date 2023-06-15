let checkbox = document.querySelector('input[name="theme"]');
checkbox.addEventListener("change", function () {
    if (this.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
});
function main(a) {
    mainform.display.value += a;
}
function equal() {
    mainform.display.value = eval(mainform.display.value);
}
function del() {
    var currentValue = mainform.display.value;
    mainform.display.value = currentValue.substr(0, currentValue.length - 1);
}
function ac() {
    mainform.display.value = "";
}
function negate() {
    mainform.display.value = -parseFloat(mainform.display.value);
}