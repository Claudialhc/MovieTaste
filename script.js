function historyCheck() {
  if (localStorage.getItem("history") === null) {
    return;
  }
  var hist = localStorage.getItem("history");
  var key = "8549cdbb";
  var query =
    "https://www.omdbapi.com/?t=" +
    hist +
    "&y=&plot=short&apikey=" +
    key;

  $.ajax({
    url: query,
    method: "GET",
  }).then(function (response) {
    var movieTitle = response.Title;
    $("#movie-title").text(movieTitle);
    var poster = response.Poster;
    $("#poster").attr("src", poster);
    var releaseYear = response.Released;
    $("#release-year").text(releaseYear);
    var rating = response.Rated;
    $("#rating").text(rating);
    var actors = response.Actors;
    $("#actors").text(actors);
    var plot = response.Plot;
    $("#plot").text(plot);
  });
}
var nav = document.getElementById('secondNav');

window.onscroll = function () {

  if(window.pageYOffset > 100){

   nav.style.position = "fixed";
   nav.style.top = 0;

   }else{
     // nav.style.position = "absolute";
     nav.style.position = 'relative'; //fixed
     nav.style.top = 100;
   }
}

//Checks local storage for last movie searched
document.onload = historyCheck();


$(document).on('keypress', function(e) {
  if(e.which == 13) {
      searchQuery();
  }
});

function searchQuery() {
  if ($("#searchBar").val() === "") {
    error.textContent = "Search for a movie, my dude"
    error.style.color = "black";
    error.style.fontFamily = "Impact";
    return;
  }

  error.textContent = "";
  var searchVal = $("#searchBar").val();
  var movieKey = "8549cdbb";
  var movieQuery =
    "https://www.omdbapi.com/?t=" +
    searchVal +
    "&y=&plot=short&apikey=" +
    movieKey;
  var gifKey = "zKYzYyTDTozqvU58y7QD6QfI8u0MDxoj";
  var gifQuery =
    "https://api.giphy.com/v1/gifs/search?&api_key=" +
    gifKey +
    "&limit=20&q=" +
    searchVal;
  
  localStorage.removeItem("history");
  localStorage.setItem("history", searchVal);

  $.ajax({
    url: movieQuery,
    method: "GET",
  }).then(function (response) {
    if (response.Response === "False") {
      error.textContent = "Enter a valid movie title"; 
      error.style.color = "black";
      error.style.fontFamily = "Impact";
      $("#searchBar").val("");
      return;
    }
    // This for loop removes the previous img's when entering a new search
    

    error.textContent = "";
    //The following lines retrieve the movie response and set the info
    var movieTitle = response.Title;
    $("#movie-title").text(movieTitle);
    var poster = response.Poster;
    $("#poster").attr("src", poster);
    var releaseYear = response.Released;
    $("#release-year").text(releaseYear);
    var rating = response.Rated;
    $("#rating").text(rating);
    var actors = response.Actors;
    $("#actors").text(actors);
    var plot = response.Plot;
    $("#plot").text(plot);
  });

  $.ajax({
    url: gifQuery,
    method: "GET",
  }).then(function (response) {
    //This for loop adds gifs
    for (x = 0; x < 20; x++) {
      $("#gifs img:last-child").remove();
    }
    for (i = 0; i < 20; i++) {
      $("<img>").attr("src", response.data[i].images.downsized_medium.url).appendTo("#gifs");
    }
    $("#searchBar").val("");
    return;
  });
}

$("#searchBtn").on("click", function () {
  searchQuery();
});
  
$("#backBtn").on("click", function () {
  $(window).scrollTop(0);
});