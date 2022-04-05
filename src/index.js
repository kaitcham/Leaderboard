import "./style.css";
import displayScore from "./func/displayScore";

const refreshBtn = document.querySelector(".leadboard-form button");

displayScore();

refreshBtn.addEventListener("click", () => {
  displayScore();
});


