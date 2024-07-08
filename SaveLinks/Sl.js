let myleads = []
const links = document.getElementById("ul-el")
const input_field = document.getElementById("input-el")


document.getElementById("input-btn").addEventListener("click", function () {
    myleads.push(input_field.value)
    input_field.value = ""//clears out text from input field
    render()
})
input_field.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      myleads.push(input_field.value);
      input_field.value = ""; // Clear out text from input field
      render();
    }
  });

function render() {
    let string = ""
    for (let i = 0; i < myleads.length; i++) {
        //string += "<li><a href='" + myleads[i] + "' target='_blank'>" + myleads[i] + "</a></li>";
        //alternative(tempelate string/literals)
        string+=`
        <li>
            <a href='${myleads[i]}' target='_blank'> ${myleads[i]} </a>
        </li>
        `
    }
    links.innerHTML = string
}







