const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');

const endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9LTt99VZIWrCAWVFfiTW/scores';

const getScore = async () => {
  // const result = (await (await fetch(endPoint)).json()).result;
  // return result;

  const response = await fetch(endPoint);
  const data = await response.json();
  const { result } = data;
  return result;
};

const addScore = async () => {
  const response = await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: inputName.value.trim(),
      score: inputScore.value.trim(),
    }),
  });
  const data = response.json();
  return data;
};

export { getScore, addScore };
