import PRODUCTS from "../data/dummy-data";
import { USERS } from "../data/dummy-data";

function getProductByID(id) {
  // returns a Product with the given ID
  return PRODUCTS.find((prod) => prod.id == id);
}

function getUserByID(id) {
  // returns a User with the given ID
  return USERS.find((user) => user.id == id);
}

function getProductsByOwner(id) {
  // UNTESTED: returns an array of products. note that this implementation creates an entirely new array, and that might lead to problems. use at your own risk!
  return PRODUCTS.filter((prod) => prod.ownerId == id);
}

function authenticate(email, password) {
  let user = USERS.find((user) => user.email == email);
  if (user != undefined) {
    if (user.password == password) {
      return user;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function createNewUser(props) {
  //PRODUCTS
}

export { getUserByID, getProductsByOwner, authenticate };
export default getProductByID;
