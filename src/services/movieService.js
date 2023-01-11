import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(id) {
  return http.delete(apiEndpoint + "/" + id);
}

export function saveMovie(obj) {
  return http.post(apiEndpoint, obj);
}

export function getMovie(id) {
  return http.get(apiEndpoint + "/" + id);
}

export function updateMovie(obj) {
  return http.put(apiEndpoint + "/" + obj.id, obj);
}
