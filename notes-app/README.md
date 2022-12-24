# Part One

notes-app/app.js

```
const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by node.js ");
fs.appendFileSync("notes.txt", " and this text was appended");

```

# Part Two

notes-app/utils.js

```
console.log("utils.js");
```

notes-app/app.js

```
require("./utils");

const name = "Sincerely Brittany";
console.log(name);

```

# Part Three - using module.exports

notes-app/utils.js

```
console.log("utils.js");

const name = "Sincerely Brittany";

module.exports = name;
```

notes-app/app.js

```
const name = require("./utils");
console.log(name);
```

# Part Four - exporting a function

notes-app/utils.js

```
const add = function (a, b) {
  return a + b;
};

module.exports = add;
```

notes-app/app.js

```
const add = require("./utils");

const sum = add(4, 9);

console.log(sum);
```

# Part Five - Import npm modules

`npm init`

```
package name: (notes-app)
version: (1.0.0)
description:
entry point: (app.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

`npm i validator`
docs: https://www.npmjs.com/package/validator
notes: to use import instead of validator add "type": "module", to package.json (https://stackoverflow.com/questions/63588714/node9374-warning-to-load-an-es-module-set-type-module)

// const validator = require("validator");
import validator from "validator";

console.log(validator.isEmail("email@gmail"));

# Part Six - Printing in color

https://www.npmjs.com/package/chalk

import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));

```
import validator from "validator";
import chalk from "chalk";

console.log(validator.isEmail("email@gmail"));
console.log(chalk.green("Success"));
```

# Part Seven- Add Nodeman to restart script instantly

https://www.npmjs.com/package/nodemon

https://stackoverflow.com/questions/35530930/nodemon-not-working-bash-nodemon-command-not-found

`sudo npm install -g nodemon`

`npx nodemon`

terminate nodeman by pressing `ctrl + c`

# Part Eight- Add Nodeman to restart script instantly

notes-app/app.js

```
console.log(process.argv);
```

terminal:

`node app.js SincerelyBrittany`

_Returns_
[
'/usr/local/bin/node',
'/Users/sincerelybrittany/Documents/code/node-course/notes-app/app.js',
'SincerelyBrittany'
]

// the path to the node.js executable on your machine,
// 2nd path to app.js file
// 3rd is the value that we provided

### To get the value:

console.log(process.argv[2]);

`node app.js SincerelyBrittany`

_Returns_
'SincerelyBrittany'

# Part 9 - Parsing through our command line arguments

https://www.npmjs.com/package/yargs

npm i yargs
