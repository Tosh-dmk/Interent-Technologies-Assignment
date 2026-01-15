function showResult(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const python = document.getElementById("python").checked;
    const javascript = document.getElementById("javascript").checked;

    let skills = "";

    if (python && javascript) {
        skills = "Python and JavaScript";
    } else if (python) {
        skills = "Python";
    } else if (javascript) {
        skills = "JavaScript";
    } else {
        skills = "no programming languages";
    }

    document.getElementById("result").textContent =
        `My name is ${name}, I am ${age} years old and can code in ${skills}.`;
}
