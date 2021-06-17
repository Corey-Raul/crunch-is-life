function addMovieListToHTML(movieData) {
    console.log(movieData)
    let movieList = $("#movie-list");
    movieList.html("")
    movieData.forEach(currentMovie => {
        movieList.append(
            `<div id="container-id-${currentMovie.id}" data-id="${currentMovie.id}" class="row border">
                <input class="col-6 p-1">Movie: ${currentMovie.title}</input>
                <input class="col-6 p-1">Rating: ${currentMovie.rating}</input>
                <input class="col-12 p-1">Plot: ${currentMovie.plot}</input>
                <button class="col-3 edit-button">Edit</button>
                <button  class="col-3 delete-button" data-id="${currentMovie.id}" >Delete</button>
            </div>
            `
        )
    })
    addDeleteBtnEvents()
}

//Un-hides Add a Movie Section after Load
function toggleAddMovieForm() {
    let addMovieSection = $('#add-movie-section')
    addMovieSection.toggleClass('toggle-add-movie')
}

let addMovieButton = $("#add-movie-button");
addMovieButton.click(addNewMovieInfo)

function addDeleteBtnEvents() {

    $(".delete-button").on("click", function () {
        console.log($(this).attr("data-id"));
    });
}







