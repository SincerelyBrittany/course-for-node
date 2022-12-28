# Asynchronous Basics

In Synchronous programs, one line runs after the next regardless of how long each line take to execute

```
console.log("STARTING");

console.log("STOPPING");

```

In Asynchronous programs, 

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


`` npm init -y``
``npm i request@2.88.0 `` --depreciated, make sure to use https://www.npmjs.com/package/postman-request in the future!

# API's used 

https://weatherstack.com for weather 
https://positionstack.com/documentation for GEOCODING
