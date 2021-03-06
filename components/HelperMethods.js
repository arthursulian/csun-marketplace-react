import PRODUCTS, { FILTEREDPRODUCTS, IMGS } from "../data/dummy-data";
import { USERS } from "../data/dummy-data";

function getProductByID(id) {
  // returns a Product with the given ID
  return PRODUCTS.find((prod) => prod.id == id);
}

function searchProducts(searchTerm) {
  while (FILTEREDPRODUCTS.length > 0) {
    FILTEREDPRODUCTS.pop();
    //console.log("REEEEEEEEEE");
  }

  let newFiltered = PRODUCTS.filter((prod) =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  for (let i = 0; i < newFiltered.length; i++) {
    if (
      FILTEREDPRODUCTS.find((prod) => prod.id == newFiltered[i].id) == undefined
    ) {
      FILTEREDPRODUCTS.push(newFiltered[i]);
    }
  }
  // FILTEREDPRODUCTS.concat(
  //   PRODUCTS.filter((prod) =>
  //     prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //);
  //console.log(FILTEREDPRODUCTS);
}

function getUniqueProductID() {
  // Simple function that returns a new unique Product ID
  let unique = PRODUCTS.length + 1;
  let id = "p" + unique;
  return id;
}

function getUniqueUserID(email) {
  // A function that will either return a unique User ID, or false if a user with that email already exists in the system.
  let unique = USERS.length + 1;
  let id = "u" + unique;
  let arr = USERS.find((prod) => prod.email == email);
  if (arr != undefined) {
    return false;
  } else {
    return id;
  }
}

function getImgForListing() {
  return IMGS[IMGS.length - 1];
}

function getUserByID(id) {
  // returns a User with the given ID
  return USERS.find((user) => user.id == id);
}

function userHasItems(id) {
  if (PRODUCTS.find((prod) => prod.ownerId == id) === undefined) {
    return false;
  } else {
    return true;
  }
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

function getFormattedDate() {
  date = new Date();
  month = date.getMonth() + 1;
  return month + "/" + date.getDate() + "/" + date.getFullYear();
}

export {
  getUserByID,
  getProductsByOwner,
  authenticate,
  getFormattedDate,
  getUniqueProductID,
  getUniqueUserID,
  userHasItems,
  getImgForListing,
  searchProducts,
};
export default getProductByID;
