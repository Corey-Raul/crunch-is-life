function documentLoad() {
    setTimeout(loadPage, 700)
}

let glitchURL = "https://spangle-second-act.glitch.me/movies";

//Will load page with multiple functions functions so that all can be done with one setTimeout above
function loadPage() {
    fetchMovieData();
    toggleAddMovieForm();
}

//Will Fetch Movie data and send the data to dom-manipulation.js to display in HTML
function fetchMovieData() {
    fetch(glitchURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addMovieListToHTML(data)
        })
        // !!!!!IMPORTANT!!!!!!!!
        // Get back to this with instructor; error does not log in console
        .catch(error => {
            console.log(error);
            console.error(error)
        })
}

function addNewMovieInfo(e) {
    e.preventDefault();
    let movieTitleInput = $("#add-movie-title").val();
    let ratingsSelection = $("#add-movie-rating").val();
    if (movieTitleInput === "") {
        alert("Please Enter A Title Name")
        fetchMovieData()
    } else {
        fetch(glitchURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: movieTitleInput,
                rating: ratingsSelection,
            })

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                fetchMovieData();
            })
    }
}

documentLoad();

function deleteMovie(movieID) {
    fetch(`${glitchURL}/${movieID}`, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addMovieListToHTML(data)
        })
}