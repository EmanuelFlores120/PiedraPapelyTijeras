function play(playerChoice) {
    var choices = ["piedra", "papel", "tijeras"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    if (playerChoice === computerChoice) {
      alert("Empate. Ambos eligieron " + playerChoice + ".");
    } else if (
      (playerChoice === "piedra" && computerChoice === "tijeras") ||
      (playerChoice === "papel" && computerChoice === "piedra") ||
      (playerChoice === "tijeras" && computerChoice === "papel")
    ) {
      alert("¡Ganaste! Elegiste " + playerChoice + " y la computadora eligió " + computerChoice + ".");
    } else if (
      (playerChoice === "tijeras" && computerChoice === "piedra") ||
      (playerChoice === "piedra" && computerChoice === "papel") ||
      (playerChoice === "papel" && computerChoice === "tijeras")
    ) {
      alert("Perdiste. Elegiste " + playerChoice + " y la computadora eligió " + computerChoice + ".");
    }
  }
  