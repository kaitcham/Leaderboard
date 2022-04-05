import { getScore } from "./leadData";

const scoreBoard = document.querySelector(".leadboard-output");

export default async () => {
  const data = await getScore();
  data.sort((player1, player2) => player2.score - player1.score);
  let scoreHTML = "";
  data.forEach(({ user, score }) => {
    scoreHTML += `<p>${user} : &nbsp; ${score}</p>`;
  });
  scoreBoard.innerHTML = scoreHTML;
};