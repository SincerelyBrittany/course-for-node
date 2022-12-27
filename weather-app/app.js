console.log("STARTING");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

setTimeout(() => {
  console.log("Another 2 second timer");
}, 0);

console.log("STOPPING");
