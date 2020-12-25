// $(document).ready(function(){/*code here*/}); for local storage page load


$("#searchBtn").on("click", function () {
  //press enter for search?
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
    for (x = 0; x < 30; x++) {
      $("#gifs img:last-child").remove();
    }
    //The following lines retrieve the movie response and set the info
    console.log(response);
    var movieTitle = response.Title;
    $("#movie-title").text(movieTitle);
    localStorage.setItem()
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
    console.log(response);
    //This for loop adds gifs
    for (i = 0; i < 30; i++) {
      $("<img>").attr("src", response.data[i].images.downsized_medium.url).appendTo("#gifs");
    }
    $("#searchBar").val("");
    return;
  });
});

$("#backBtn").on("click", function () {
  $(window).scrollTop(0);
});


//Theoretically this should work. Need stable internet connection to test
// $("#randomBtn").on("click", function () {
//   for (x = 0; x < 30; x++) {
//     $("#gifs img:last-child").remove();
//   }

//   var gifKey = "zKYzYyTDTozqvU58y7QD6QfI8u0MDxoj";
//   var gifQuery =
//     "https://api.giphy.com/v1/gifs/trending?&api_key=" +
//     gifKey + "&limit=30";

//   $.ajax({
//     url: gifQuery,
//     method: "GET",
//   }).then(function (response) {
//     //This for loop adds gifs
//     for (y = 0; y < 30; y++) {
//       console.log(response);
//       $("<img>").attr("src", response.data[y].images.downsized_medium.url).appendTo("#gifs");
//     }

//     return;
//   });
// });

