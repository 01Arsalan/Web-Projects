
document.getElementById("sub").addEventListener("click", function (event) {
    event.preventDefault();// Prevent the default form submission behavior
    const first = document.getElementById("name").value;
    const last = document.getElementById("l_name").value;

    const fullName = first + " " + last;
    document.getElementById("message").innerText = fullName;
});




