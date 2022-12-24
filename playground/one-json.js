const book = {
  title: "All Good People Here",
  author: "Ashley Flowers",
};

const bookJson = JSON.stringify(book);

console.log(bookJson);

console.log(bookJson.title, "returns undefined");

const parsedBookData = JSON.parse(bookJson);

console.log(parsedBookData.author);
