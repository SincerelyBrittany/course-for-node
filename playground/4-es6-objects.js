// Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// const transactionExample1 = (type, { label, stock}) => {
//   console.log(type, label, stock);
// };

// transactionExample1("order") // label and stock is undefined, you cant destructure an undefined object;

// const transactionExample2 = (type, { label, stock } = {}) => {
//   console.log(type, label, stock);
// };

// transactionExample2("order"); // Default param for label and stock is an empty object

const transactionExample3 = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transactionExample3("order", product);
