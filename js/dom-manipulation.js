function addMovieListToHTML(movieData) {
    console.log(movieData)
    let movieList = $("#movie-list");
    movieList.html("")
    movieData.forEach( currentMovie => {
        movieList.append(
            `<div id="container-id-${currentMovie.id}" data-id="${currentMovie.id}" class="row border">
                <div class="col-6 p-1">Movie: ${currentMovie.title}</div>
                <div class="col-6 p-1">Rating: ${currentMovie.rating}</div>
                <div class="col-12 p-1">Plot: ${currentMovie.plot}</div>
                <a href="#" class='col-3'>Edit</a>
                <a href="#" class='col-3'>Delete</a>
            </div>
            `
        )
    })
}
//Un-hides Add a Movie Section after Load
function toggleAddMovieForm () {
    let addMovieSection = $('#add-movie-section')
    addMovieSection.toggleClass('toggle-add-movie')
}

