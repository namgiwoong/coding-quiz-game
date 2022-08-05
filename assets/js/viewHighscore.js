var player = document.querySelector("#playerName");
var submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var playerName = player.value;
  // local Storage

  var playerRecord = {
    player: playerName,
    playerScore,
  };
  localStorage.setItem("playerScore", JSON.stringify(playerRecord));

  window.location.href = "./highscores.html";
});
