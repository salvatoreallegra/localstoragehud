let addOpponentButton = document.querySelector("#addPlayer");
addOpponentButton.addEventListener("click", () => {
  addNewOpponent();
});
function addNewOpponent() {
  let opponents = JSON.parse(localStorage.getItem("opponents") || "[]");
  let opponentName = document.getElementById("opponent").value;

  opponents.push({
    name: opponentName,
    rfiHands: [],
    ccHands: [],
    threeBetHands: [],
    totalHands: 0,
    rfiCount: 0,
    openLimpCount: 0,
    vpip: 0,
    raise: 0,
    call: 0,
  });
  console.log(opponents, "Array of opponents");
  saveOpponent(opponents);
  console.log("xxxx", localStorage);
}

function saveOpponent(opponents) {
  localStorage.setItem("opponents", JSON.stringify(opponents));
  console.log("opponents in function", opponents);
}
