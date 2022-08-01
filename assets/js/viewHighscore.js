var player = document.getElementById("playerName");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.setItem("playerScore", JSON.stringify(player));
});

function renderScore() {
  var playerScore = JSON.parse(localStorage.getItem("playerScore"));

  if (playerScore !== null) {
    document.querySelector(".savedScore").textContent = playerScore.player;
  }
}
