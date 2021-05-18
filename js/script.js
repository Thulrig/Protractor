$("#addHeroForm").submit(function (event) {
  $("#addHeroAlert").addClass("hide")
  if ($("#heroInput").val() == "") {
    $("#addHeroAlert").removeClass("hide")
    $("#addHeroAlert").text("Please, enter some hero name!!!")
  } else {
    $("#heroList").append(
      "<li class='list-group-item'>" + $("#heroInput").val() + "</li>"
    );
    $("#heroInput").val("")
  }

  event.preventDefault()
});

$("#voteForm").submit(function (event) {

  let movieVotes1 = $("#movieVotes1").text()
  let movieVotes2 = $("#movieVotes2").text()
  let movieVotes3 = $("#movieVotes3").text()
  let movieVotes4 = $("#movieVotes4").text()
  let movieVotes5 = $("#movieVotes5").text()

  $("#voteForm").addClass("hide")
  $("#voteAlert").removeClass("hide")
  $("#voteWarningAlert").addClass("hide")

  if($("#heroVote1").is(":checked")) {
    movieVotes1 = parseInt(movieVotes1) + 1
    $("#movieVotes1").text(movieVotes1)  
  }
  else if($("#heroVote2").is(":checked")) {
    movieVotes2 = parseInt(movieVotes2) + 1
    $("#movieVotes2").text(movieVotes2)  
  }
  else if($("#heroVote3").is(":checked")) {
    movieVotes3 = parseInt(movieVotes3) + 1
    $("#movieVotes3").text(movieVotes3)  
  }else if($("#heroVote4").is(":checked")) {
    movieVotes4 = parseInt(movieVotes4) + 1
    $("#movieVotes4").text(movieVotes4)  
  }
  else if($("#heroVote5").is(":checked")) {
    movieVotes5 = parseInt(movieVotes5) + 1
    $("#movieVotes5").text(movieVotes5)  
  }
  else {
    $("#voteForm").removeClass("hide")
    $("#voteAlert").addClass("hide")
    $("#voteWarningAlert").removeClass("hide")
  }

  event.preventDefault();
});


$("#search").submit(function (event) {

if ($("#searchField").val() == "")
{

}
else if($("#searchField").val().toLowerCase() == "hello") {
alert("Hello world!")
}
else {
alert("You are looking for a "+$("#searchField").val()+ " returned 0 results try something else!")
}

event.preventDefault()
});

$("#loginForm").submit(function (event) {
  if ($("#inputEmail").val() == "" || $("#inputPassword").val() == "") {
    $("#loginAlert").removeClass("hide")
  } else {
    if ($("#rememberLoginCheck").is(":checked")) {
      let email = $("#inputEmail").text()
      let password = $("#inputPassword").text()
    }
    else{
      $("#inputEmail").val("")
      $("#inputPassword").val("")
    }
    $("#overlay").addClass("hide")
    $("#addHeroButton").removeClass("hide")
  }

  event.preventDefault()
})

const logout = () => {
  $("#addHeroButton").addClass("hide")
  $("#overlay").removeClass("hide")
  $("#loginAlert").addClass("hide")
  $("#inputEmail").val(email)
  $("#inputPassword").val(password)
}