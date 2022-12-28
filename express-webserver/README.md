# Express

https://expressjs.com/

- Getting Started:

  - https://expressjs.com/en/starter/installing.html

```
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/help", (req, res) => {
  res.send("Help Screen!");
});

app.get("/weather", (req, res) => {
  res.send("Weather Screen!");
});

app.get("/about", (req, res) => {
  res.send("About Screen!");
});
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

```

# Node global object

https://nodejs.org/api/globals.html

- `__dirname`
  - https://nodejs.org/api/globals.html#__dirname
- `__filename`
  - https://nodejs.org/api/globals.html#__filename
- `require()`
  - https://nodejs.org/api/globals.html#require

# node path

https://nodejs.org/api/path.html

- Using path to redirect to static pages in public file:

public/index.js

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Express Weather App</title>
  </head>
  <body>
    <h1>About Page</h1>
  </body>
</html>

```

public/about.js

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Express Weather App</title>
  </head>
  <body>
    <h1>About Page</h1>
  </body>
</html>

```

src/app.js

```
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

- Visit http://localhost:3000/about.html or http://localhost:3000/index.html or http://localhost:3000

# npm handlebars:

https://www.npmjs.com/package/handlebars

using template engine to render Dynamic webpages using expreses/
Handlebars will allow us to 1. allow render dynamic documents 2. is to easily create code that we can reuse around pages. Want to use handlebars with express so we should use this one:  

#npm hbs 
https://www.npmjs.com/package/hbs



```

```
