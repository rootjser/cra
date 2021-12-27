export const getWeather = (params) => {
  console.log("getWeather参数", params);
  return fetch("http://localhost:3000/data.json");
};
