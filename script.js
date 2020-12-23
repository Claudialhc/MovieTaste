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
    "&limit=1&q=" +
    searchVal;

  $.ajax({
    url: movieQuery,
    method: "GET",
  }).then(function (response) {
    // The movie response works. Just need divs and placements on index
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
    //gif response goes here
    //content.data[index?].images.downsized.url
    //may need to create a loop to go through the array of results?
    console.log(response);
    // $("#gifs").append(response.data[0].images.downsized_medium.url);
    //^^May need to go in an img tag? Test out differnet things
    
    
    // $("#searchBar").val("");
  });
});
