const greeter = (name = "user") => {
  console.log(`Hello ${name}`);
};
greeter("Sincerely Brittany");

greeter(); // undefined
