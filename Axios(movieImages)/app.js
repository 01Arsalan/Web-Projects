const imgContainer = document.querySelector(".imgSection")
const form = document.querySelector("#searchForm")
const submit = document.querySelector(".formSubmit")



form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let item = form.moviename.value
     //using config to pass query-string. can br used to pass multiple query-strings
    const config = { params: { q: item } }
    //parses the res obj implicitly
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${item}`, config)

    imageGenerator(res)

    form.moviename.value = ""
})


function imageGenerator(result) {
    for (let i = 0; i < 5; i++) {
        let image = document.createElement("img")
        if (result.data[i].show.image.medium) {
            image.src = result.data[i].show.image.medium
            imgContainer.appendChild(image)
        }
    }
}

