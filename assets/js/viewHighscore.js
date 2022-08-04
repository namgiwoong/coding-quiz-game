var player = document.getElementById("playerName");
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // local Storage
  // var playerScore = {
  //   player:
  //   score:
  // }
  localStorage.setItem("playerScore", JSON.stringify(playerScore));
  renderScore();
});

function renderScore() {
  var playerScore = JSON.parse(localStorage.getItem("playerScore"));

  if (playerScore !== null) {
    document.querySelector(".savedScore").textContent =
      "Your final score is " + playerScore.score;
  }
}
