const mathProblem = "4 + 4 - 8 * 10 + 1";

function changeMath() {

let item2 = 10;

document.getElementById("math-problem").innerHTML = ("1 + "
+ item2 +
" * 8 - 4 + 4");

//onkeyup.item2 = item2 / 2;

}

function revertMath() {

    document.getElementById("math-problem").innerHTML = ("4 + 4 - 8 * 10 + 1");
}