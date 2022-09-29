// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName);
// ("Droid");

// console.log(pricePerItem);
// 2000;

// --------------------------||--------------------------------------------------------------

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// console.log(productName);
// console.log(pricePerItem);

// --------------------------||--------------------------------------------------------------

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// console.log(topSpeed);
// console.log(distance, login, isAdmin, isOnline);

// --------------------------||--------------------------------------------------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);
// --------------------------||--------------------------------------------------------------

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// --------------------------||--------------------------------------------------------------

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// --------------------------||--------------------------------------------------------------

// Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// --------------------------||--------------------------------------------------------------

// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// --------------------------||--------------------------------------------------------------

// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// --------------------------||--------------------------------------------------------------

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// --------------------------||--------------------------------------------------------------

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// --------------------------||--------------------------------------------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// --------------------------||--------------------------------------------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   //   return isMatch;
//   console.log(password);
// }

// --------------------------||--------------------------------------------------------------

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// --------------------------||--------------------------------------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available >= ordered) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   // Change code above this line
//   return message;
// }
// --------------------------||--------------------------------------------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   return message;
// }
// --------------------------||--------------------------------------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else discount = BASE_DISCOUNT;
//   // Change code above this line
//   return discount;
// }
// --------------------------||--------------------------------------------------------------

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// --------------------------||--------------------------------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (
//     password // Change this line
//   ) {
//     case null: // Change this line
//       message = "Canceled by user!"; // Change this line
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!"; // Change this line
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   // Change code above this line
//   return message;
// }

// --------------------------||--------------------------------------------------------------
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (
//     country // Change this line
//   ) {
//     case "China": // Change this line
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`; // Change this line
//       break;
//     case "Chile": // Change this line
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`; // Change this line
//       break;
//     case "Australia": // Change this line
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`; // Change this line
//       break;
//     case "Jamaica": // Change this line
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`; // Change this line
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// --------------------------||--------------------------------------------------------------
// const name = "roman";
// const nameLength = name.length;

// // Якщо у змінній зберігається рядок
// console.log(nameLength); // 12

// --------------------------||--------------------------------------------------------------
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// --------------------------||--------------------------------------------------------------

function getSubstring(string, length) {
  const substring = string.slice(0, length);
  // Change this line
  return substring;
  console.log(getSubstringe);
}

// --------------------------||--------------------------------------------------------------
// const message = "Curabitur ligula sapien";
// const maxLength = 16;
// if (massage.length > maxLength) {
//   result = message.slice(0, maxLength) + "...";
// } else {
//   result = message;
// }
// console.log(message.length);
// console.log(message);
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   } else {
//     return message;
//   }
//   /// Change code above this line
//   return result;
// }

function checkForSpam(message) {
  let result;
  // Change code below this line
  const normalizeMessage = message.toLowerCase();
  result =
    normalizeMessage.includes("spam") || normalizeMessage.includes("sale");
  // Change code above this line
  return result;
}

// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
// --------------------------||--------------------------------------------------------------
