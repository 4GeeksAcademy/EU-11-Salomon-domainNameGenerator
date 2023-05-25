/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const somebody = ["luke", "darthvader", "leia", "hansolo"];
  const action = ["fought", "saved", "discovered", "found"];
  const whatever = ["star", "force", "saber", "droid"];
  const when = ["wars", "rogue", "clone", "jedi"];
  const domainEnd = [".com", ".es", ".net", ".org"];

  const somebodyStarWars = Math.floor(Math.random() * somebody.length);
  const actionStarWars = Math.floor(Math.random() * action.length);
  const whateverStarWars = Math.floor(Math.random() * whatever.length);
  const whenStarWars = Math.floor(Math.random() * when.length);
  const domainEndStarWars = Math.floor(Math.random() * domainEnd.length);

  const domainStarWars =
    somebody[somebodyStarWars] +
    action[actionStarWars] +
    whatever[whateverStarWars] +
    when[whenStarWars] +
    domainEnd[domainEndStarWars];
  document.getElementById("domainGenerator").textContent = domainStarWars;
};
