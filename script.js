$("#searchBtn").on("click", function() {
    if($("#searchBar").val() === "") {
        //Don't use alert
        alert("Enter a movie title");
        return;
    }
    
    var searchVal = $("#searchBar").val();
    var key = "8549cdbb";
    var movieQuery = "https://www.omdbapi.com/?t=" + searchVal + "&y=&plot=short&apikey=" + key;
    

    $.ajax({
        url: movieQuery,
        method: "GET",
      }).then(function (response) {
        // The movie response works. Just need divs and placements on index
        console.log(response);
        var movieTitle = response.Title;
        //Select element-.text(movieTitle);
        var poster = response.Poster;
        //$("<img>").attr("src", poster) <img> will need an id
        var releaseYear = response.Released;
        //Select element-.text(releaseYear)
        var rating = response.Rated;
        //select element-.text(rating);
        var actors = response.Actors;
        //select element-.text(actors);
        var plot = response.Plot;
        //select element-.text(plot);
        //Do not use append(). .text will set the text of the span/element

      });
})

