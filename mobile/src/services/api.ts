import axios from "axios";

export const api = axios.create({
  baseURL: "http://YOUR-MACHINE-IP:4000",
});
