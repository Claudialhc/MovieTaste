$("#searchBtn").on("click", function () {
  if ($("#searchBar").val() === "") {
    //Don't use alert
    alert("Enter a movie title");
    return;
  }

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
    "&limit=30&q=" +
    searchVal;

  $.ajax({
    url: movieQuery,
    method: "GET",
  }).then(function (response) {
    //This for loop removes the previous img's when entering a new search
    for(x = 0; x < 30; x++) {
      $("#gifs img:last-child").remove();
      console.log("test");
    }
    //The following lines retrieve the movie response and set the info
    console.log(response);
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
    for(i = 0; i < 30; i++) {
      $("<img>").attr("src", response.data[i].images.downsized_medium.url).appendTo("#gifs");
    }
    $("#searchBar").val("");
    return;
  });
});

$("#backBtn").on("click", function () {
  $(window).scrollTop(0);
  console.log("?");
});

