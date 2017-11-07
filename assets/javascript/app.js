// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var title = "dancing";
    var queryURL = "https://github.com/Giphy/?t=" + title + "https://github.com/Giphy/GiphyAPI#public-beta-key";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      console.log(response.Runtime);
    });