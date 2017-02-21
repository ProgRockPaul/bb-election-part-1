$(document).ready(function() {
    $.ajax({
      url: "https://bb-election-api.herokuapp.com/",
      method: "GET",
      dataType: "json"
    }).done(function(responseData) {
      for (i = 0; i < responseData.candidates.length; i++) {
      var content = $('<li>').html(responseData.candidates[i].name + " Votes: " + responseData.candidates[i].votes)
      $("#characters").append(content)
    };


  });

});
