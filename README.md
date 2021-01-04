# MovieTaste
This template was created using Bulma.io, JavaScript and two APIs. 
The two API's used are Giphy API and OMDB API. 

The purpose for this app is to help users find entertainment during their lockdown boredom. The user will be asked to enter the name of a the movie they are searching for, when they type the title of the movie the app will display their choice of movie on the left column and on the right column the Giphy associated with the movie title will appear. OMDB API is used to populate the user's movie choice with the movie's poster, release year, rating, actors and short plot. The Giphy API will then display Gifs associated with that movie title. 

The code below was used to retrieve the information needed from the Giphy API, in order to properly display the gif associated with the movie title entered. (LINES 98 - 111)

```js
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
```

The screenshot below represents the working app the user sees before searching for a movie title.

! [Screenshot] (../assets/normal.png "This is the app before searching for movie title)

The screenshot below represents how the final working template of the app looks like when the movie "Prom" is searched.

! [Screenshot2] (../assets/working.png "Working app example")
