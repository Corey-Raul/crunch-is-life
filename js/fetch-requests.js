function documentLoad() {
    setTimeout(loadPage, 700)
}
let glitchURL = "https://spangle-second-act.glitch.me/movies";
//Will load page with multiple functions functions so that all can be done with one setTimeout above
function loadPage () {
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

function addMovieData () {
    fetch(glitchURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Test',
            rating: 'Testing'
        })

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
documentLoad();