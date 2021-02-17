import axios from 'axios';

const API_KEY = '414bdda647a14e425ee76993d78a131e';
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export default function fetchWeather(cityName) {
  const url = `${rootURL}&q=${cityName}`;
  return axios.get(url);
}
