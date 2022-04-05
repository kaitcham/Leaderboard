const endPoint =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9LTt99VZIWrCAWVFfiTW/scores";

const getScore = async () => {
  // const result = (await (await fetch(endPoint)).json()).result;
  // return result;

  const response = await fetch(endPoint);
  const data = await response.json();
  const result = data.result;
  return result;
};

export { getScore };
