var score = 0;
var maxScore = localStorage.getItem("maxScore") || 0;
var scoreElement = document.getElementById("score");
var maxScoreElement = document.getElementById("max-score");
var button = document.getElementById("add-point-button");
var resetButton = document.getElementById("reset-button");


button.addEventListener("click", function() {
  score++;
  scoreElement.innerHTML = "Clicks: " + score;
  if (score > maxScore) {
    maxScore = score;
    maxScoreElement.innerHTML = "Max Clicks: " + maxScore;
    localStorage.setItem("maxScore", maxScore);
  }
});

resetButton.addEventListener("click", function() {
  score = 0;
  scoreElement.innerHTML = "Clicks: " + score;
});

window.onload = function(){
  maxScore = localStorage.getItem("maxScore") || 0;
  maxScoreElement.innerHTML = "Máximos Clicks: " + maxScore;
}



