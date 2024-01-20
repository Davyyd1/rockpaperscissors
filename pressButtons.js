const pressButtons = function () {
  rock.addEventListener("click", function (e) {
    playerChoice.src = e.target.attributes.src.nodeValue;
    playerChoice.style.display = "flex";
    // showPlayersChoices(e.target.attributes.src.nodeValue, "");
  });
};
