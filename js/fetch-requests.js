function documentLoad() {
    setTimeout(fetchMovieData, 2000)
};

function fetchMovieData() {
    fetch("https://spangle-second-act.glitch.me/movies")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addMovieDataToHTML(data)
        })
        // !!!!!IMPORTANT!!!!!!!!
        // Get back to this with instructor; error does not log in console
        .catch(error => {
            console.log(error);
            console.error(error)
        })
}
documentLoad();