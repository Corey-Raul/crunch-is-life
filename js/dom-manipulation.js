function addMovieDataToHTML(moviedata) {
    let movieList = $("#movie-list");
    let
    movieList.html("")
    movieList.append(
        `<button id="movie-${}">${moviedata[0].title}</button>`
    )
}

