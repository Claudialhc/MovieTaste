$("#searchBtn").on("click", function() {
    if($("#searchBar").val() === "") {
        alert("Enter a movie title");
        return;
    }
    
    var searchVal = $("#searchBar").val();
    var key = "8549cdbb";
    var movieQuery = "https://www.omdbapi.com/?s=" + searchVal + "&y=&plot=short&apikey=" + key;

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        
      });
})
