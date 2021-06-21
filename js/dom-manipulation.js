function addMovieListToHTML(movieData) {
    let movieList = $("#movie-list");
    movieList.html("")
    movieData.forEach(currentMovie => {
        let id = currentMovie.id;
        let title = currentMovie.title.toUpperCase();
        let plot = currentMovie.plot;
        let rating = currentMovie.rating
        let genre = currentMovie.genre
        let poster = currentMovie.poster
        movieList.append(
            //THESE ARE THE INDIVIDUAL MOVIE CARDS
            //EVERYTHING INSIDE OF THE TICKS `` IS BEING APPENDED

            `<div class="row movie-container border rounded justify-content-center justify-content-lg-between p-2 mb-2">
                    <div class="col-md-12 col-lg-4 text-center p-0 mb-2">
                        <img src="${poster}" alt="img-id-${id}" class="border rounded poster-container" style="max-height:400px">
                    </div>
                    <div class="col-md-12 col-lg-8 " data-id="${id}" style="min-width: 450px">
                        <div class="row pr-1 align-items-center" data-id="${id}">
                            <h2 id="title-id-${id}" class="col-6 text-center">${title}</h2>
                            <div id="rating-id-${id}" class="col-6 text-center"><strong>Rating: </strong>${rating}</div>
                            <h5 class="col-12 pl-0">Plot:</h5>
                            <p id="plot-id-${id}" class="p-1 col-12 plot-background">${plot}</p>
                            <p id="genre-id-${id}" class="col-12 p-1  genre-background"><strong>Genre:</strong><br> ${genre}</p>
                            <div id="edit-section-id-${id}" class="toggle-feature"></div>
                            <button class="col-6 align-self-end edit-button btn btn-light" data-id="${id}">Edit</button>
                            <button  class="col-6 delete-button btn btn-light" data-id="${id}">Delete</button>
                        </div>
                    </div>
            </div>`
        )
    })

    addDeleteBtnEvents()
    //Add EditButtonEvent
    addEditButtonEvents()

}

//Un-hides Add a Movie Section after Load
function toggleAddMovieForm() {
    console.log('TOGGLE FUNCTION')
    let addMovieSection = $('#add-movie-section')
    addMovieSection.toggleClass('toggle-feature')
}

let addMovieButton = $("#add-movie-button");
addMovieButton.click(addNewMovieInfo)

function addDeleteBtnEvents() {
    $(".delete-button").on("click", function () {
        let id = $(this).attr("data-id")
        let confirm = window.confirm('Are you sure')
        if (confirm) {
            deleteMovie(id);
        }
    });
}

function addEditButtonEvents() {
    $('.edit-button').on('click', function () {
		console.log('Edit Button Click')
        let id = $(this).parent().attr('data-id');
        console.log(id);
        createEditingSection(id)
    });
}

function createEditingSection(parentID) {
    let editSection = $(`#edit-section-id-${parentID}`)
    editSection.html('').toggleClass('toggle-feature')
    let currentMovie = realMovieData[parentID - 1]
    editSection.append(`
            <form class="row m-1">
            	<div class="col-6">
            		<div class="row m-1">
						<!--   *** INPUT FOR TITLE ***   -->
						<label for="edit-title-${parentID}" class="col-12 m-0 pl-0"><strong>Title:</strong></label>
						<input id="edit-title-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.title}">
						
						<!--   *** INPUT FOR YEAR ***   -->
						<label for="edit-year-${parentID}" class="col-12 m-0 pl-0"><strong>Year:</strong></label>
						<input id="edit-year-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.year}">
						
						<!--   *** INPUT FOR GENRE ***   -->
						<label for="edit-genre-${parentID}" class="col-12 m-0 pl-0"><strong>Genre:</strong></label>
						<input id="edit-genre-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.genre}">
						
						<!--   *** INPUT FOR DIRECTOR ***   -->
						<label for="edit-director-${parentID}" class="col-12 m-0 pl-0"><strong>Director:</strong></label>
						<input id="edit-director-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.director}">
						
						<!--   *** INPUT FOR ACTORS ***   -->
						<label for="edit-actors-${parentID}" class="col-12 m-0 pl-0"><strong>Actors:</strong></label>
						<input id="edit-actors-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.actors}">
					</div>
				</div>
				<div class="col-6">
					<div class="row m-1">
						<!--   *** INPUT FOR RATING ***   -->
						<label for="edit-movie-rating-${parentID}" class="col-12 m-0 pl-0"><strong>Rating</strong></label>
						<select name="edit-movie-rating-${parentID}" id="edit-movie-rating-${parentID}" class="col-12 mb-1">
                        	<option value="0">${currentMovie.rating}</option>
                        	<option value="1">1 Star</option>
                        	<option value="2">2 Star</option>
                        	<option value="3">3 Star</option>
                        	<option value="4">4 Star</option>
                        	<option value="5">5 Star</option>
                    	</select>
                    	
                    	<!--   *** INPUT FOR PLOT***   -->
                    	<label for="edit-plot-${parentID}" class="col-12 m-0 pl-0"><strong>Plot:</strong></label>
                    	<textarea name="edit-plot" id="edit-plot-${parentID}" cols="40" rows="5" class="col-12 mb-1">${currentMovie.plot}</textarea>
                    	
                    	<!--   *** INPUT FOR POSTER ***   -->
                    	<label for="edit-poster-${parentID}" class="col-12 m-0 pl-0"><strong>Poster URL:</strong></label>
                    	<input id="edit-poster-${parentID}" class="col-12 mb-1" type="text" value="${currentMovie.poster}">
					</div>
				</div>
                <button id="edit-submit-button-${parentID}" data-id="${parentID}" type="submit" class="mx-auto col-11 btn btn-info submit-button m-1"><strong>Submit</strong></button> 
            </form>`
    )
    $('.submit-button').on('click', function (e) {
        e.preventDefault();
        console.log($('.submit-button'));
        let id = $(this).attr('data-id');
        submitForEditEvent(id);
    })
}

// if (currentMovie.name.toLowerCase().includes(inputSearch.toLowerCase()) ) {
//	newMoviesArray.push(currentMovie)
// }
function sortTest(movieData) {
    let jumbotronSection = $('')
}

// {
// 	"title":
// 	"rating":
// 	"poster":
// 	"year":
// 	"genre":
// 	"director":
// 	"plot":
// 	"actors":
// 	"id":
// }







