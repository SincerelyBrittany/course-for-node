# Asynchronous Basics

In Synchronous programs, one line runs after the next regardless of how long each line take to execute

```
console.log("STARTING");

console.log("STOPPING");

```

Asynchronous

```
console.log("STARTING");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

console.log("STOPPING");
```

Response:

```
STARTING
STOPPING
2 second timer
```


```
console.log("STARTING");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

setTimeout(() => {
  console.log("Another 2 second timer");
}, 0);

console.log("STOPPING");

```

REsponse:

```
STARTING
STOPPING
Another 2 second timer
2 second timer
```
