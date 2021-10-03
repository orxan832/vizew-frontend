import axios from "../helper/axios";
import { login } from "../redux/actions/user";
import store from '../redux/store';
import { dateNames } from "./enum";
import { info } from "./notification";
const jwt = require("jsonwebtoken");

//Problem var tokeni gormur deyesen
export const setAuthToken = token => axios.defaults.headers.common["authorization"] = `Bearer ${token}`;

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const formatDate = (date) => {
  const dt = new Date(date);
  const correctedDate = `${(dt.getMonth() + 1).toString().padStart(2, "0")}.${dt
    .getDate()
    .toString()
    .padStart(2, "0")}.${dt.getFullYear().toString().padStart(4, "0")}`;
  const splitedDate = correctedDate.split('.');
  return `${splitedDate[1]} ${dateNames.find(date => date.id === splitedDate[0]).name} ${splitedDate[2]}`;
};

export const formatDateUntilSecond = (date) => {
  const dt = new Date(date);
  return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
      .getHours()
      .toString()
      .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
};

export const validation = (data, headers) => {
  let access = true;
  Object.keys(headers)
    .filter(key => key !== "created_at" && key !== "updated_at")
    .map(label => {
      if (data[label] === undefined || data[label] === "") {
        access = false;
      }
      return true;
    });
  return access;
};

export const setDataTags = (values, tags) => {
  const tagsArray = [];
  if (values && tags) {
    const valuesArr = values.split(",");
    valuesArr.map((value) =>
      tagsArray.push(tags.find((tag) => tag.id === Number(value)).tag)
    );
    return tagsArray.toString();
  }
  return null;
};

export const decoder = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_KEY);
    return decoded;
  } catch (err) {
    info('Sizin sistemdə qalma müddətiniz bitmişdir. Zəhmət olmasa yenidən giriş edin.')
  }
};

export const refreshToken = (token) => {
  localStorage.setItem("token", token);
  setAuthToken(token);
  const data = decoder(token);
  store.dispatch(login(data));
}