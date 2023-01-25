var score = 0;
var scoreElement = document.getElementById("score");
var button = document.getElementById("add-point-button");

button.addEventListener("click", function() {
  score++;
  scoreElement.innerHTML = "Clicks: " + score;
  button.classList.add("active");
  setTimeout(function(){ button.classList.remove("active") }, 300);
});
