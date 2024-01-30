import { handleError, handleResponse } from "./LogicApis.js";

export function getProducts() {
  return fetch("http://localhost:3000/products")
    .then(handleResponse)
    .catch(handleError);
}
export function getStock() {
  return fetch("http://localhost:3000/stock")
    .then(handleResponse)
    .catch(handleError);
}
export function getPrices() {
  return fetch("http://localhost:3000/prices")
    .then(handleResponse)
    .catch(handleError);
}
