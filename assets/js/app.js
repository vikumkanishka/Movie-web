let moviecontainer = document.getElementById("movie-container")
let cardContainer = document.getElementById("cardContainer")
let latest = document.getElementById("latest")
let main = document.getElementById("main")
cardContainer.innerHTML = '';


const apikey = "bc663fa9";
const title = ["action", "romance", "thriller"]


function loadmovies() {


    `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <div class="d-flex align-items-center mt-2 mt-sm-0">
            <label for="sortSelect" class="me-2 text-secondary">Sort by:</label>
            <select class="form-select form-select-sm" id="sortSelect" style="width: 150px;">
                <option value="latest" selected>Release Date</option>
                <option value="rating_desc">IMDb Rating (High)</option>
                <option value="rating_asc">IMDb Rating (Low)</option>
                <option value="title_asc">Title (A-Z)</option>
            </select>
        </div>
    </div>`


    for (let index = 0; index < title.length; index++) {

        cardContainer.innerHTML = '';
        fetch(`https://www.omdbapi.com/?year=2025&s=${title[index]}&type=movie&apikey=${apikey}`)
            .then(res => res.json())
            .then(data => {

                // latest.innerHTML = "Latest Movies"

                let search = data.Search
                console.log(search)

                for (let i = 0; i < search.length; i++) {
                    console.log("hari wada")


                    let card =
                        `<div class="col-sm-4 col-md-3 col-lg-3 g-4">
                        <div class="card h-100 movie-card">
                            <img src="${search[i].Poster}" class="card-img-top" alt="Movie Poster ${i}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${search[i].Title}</h5>
                                <p class="card-text d-flex">${search[i].Year}</p>
                                 <button class="btn btn-primary mt-auto w-100 show-details-btn" onclick="showdetails('${search[i].imdbID}')">Show Details</button>
                            </div>
                        </div>
                     </div>`

                    cardContainer.innerHTML += card

                }
            })
    }
}


function showdetails(imdbID) {
    console.log(imdbID);

    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`)
        .then(res => res.json())
        .then(data => {
            console.log("athule");
            console.log(data);



            main.innerHTML = ""
            main.innerHTML =
                `<div class="row align-top z-1">
                    <div class="col-12 mb-3 border-bottom border-secondary pb-2">
                        <h3>Movie Details</h3>
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="${data.Poster}" alt="Movie Poster" id="detail-poster" class="img-fluid rounded shadow-sm">
                    </div>
                    <div class="col-md-8">
                        <h2 id="detail-title" class="fw-bold text-danger">${data.Title}</h2>
                        <div class="mb-3">
                            <span class="badge bg-secondary me-1" id="detail-year">${data.Year}</span>
                            <span class="badge bg-info text-dark me-1" id="detail-genre">${data.Genre}</span>
                            <span class="badge bg-warning text-dark">${data.imdbRating}</span>
                        </div>
                        <p><strong>Runtime:</strong> <span id="detail-director">${data.Runtime}</span></p>
                        <p><strong>Director:</strong> <span id="detail-director">${data.Director}</span></p>
                        <p><strong>Language:</strong> <span id="detail-actors">${data.Language}</span></p>
                        <p><strong>Country:</strong> <span id="detail-actors">${data.Country}</span></p>
                        <p><strong>Actors:</strong> <span id="detail-actors">${data.Actors}</span></p>
                        <p><strong>Awards:</strong> <span id="detail-actors">${data.Awards}</span></p>
                        
                        <hr class="border-secondary">
                            
                            <p id="detail-plot" class="lead fs-6">${data.Plot}</p>
                            <button class="btn btn-outline-danger mt-3" onclick="window.location.reload()">Close Details</button>
                    </div>
                </div>
            </div>`
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })
}

function searchMovie() {
    let searchInput = document.getElementById("txtInput").value;

    
    console.log(searchInput)

    fetch(`https://www.omdbapi.com/?t=${searchInput}&apikey=d8ce251c`)
        .then(res => res.json())
        .then(data => {console.log(data)
        });
        
        // {


    //         // if (data.Response === "False") {
    //         //     Swal.fire({
    //         //         icon: 'error',
    //         //         title: 'Oops...',
    //         //         text: data.Error,
    //         //         background: '#1e1e1e',
    //         //         color: '#fff'
    //         //     });
    //         // }


    //     })

}
