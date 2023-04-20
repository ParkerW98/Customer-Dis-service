const mathProblem = document.getElementById("math-problem");

function changeMath() {

    let H = document.createElement("h4");

    H.setAttribute("id", "math-problem");

    let problemTwo = document.createTextNode("1 + 10 * 8 -4 + 4");

    let problemOne = document.getElementById("math-problem");

    H.appendChild(problemTwo);

    math-problem.replaceChild(H, math-problem[0]);


}