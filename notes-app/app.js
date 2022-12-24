import validator from "validator";
import yargs from "yargs";
import chalk from "chalk";
import getNotes from "./notes.js";

// add notes, remove notes, read notes, list notes

// customize yargs version
// yargs.version("1.1.0");

// Create add command

// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   handler: function () {
//     console.log("Adding a new note");
//   },
// });

yargs
  .command({
    command: "add",
    describe: "Adding note",
    handler: (argv) => {
      console.log("Adding notes");
    },
  })
  .parse();

yargs
  .command({
    command: "remove",
    describe: "removing note",
    handler: (argv) => {
      console.log("removing notes");
    },
  })
  .parse();

yargs
  .command({
    command: "read",
    describe: "reading note",
    handler: (argv) => {
      console.log("reading notes");
    },
  })
  .parse();

yargs
  .command({
    command: "list",
    describe: "listing note",
    handler: (argv) => {
      console.log("listing notes");
    },
  })
  .parse();

// console.log(process.argv);
// console.log(yargs.argv);

// const getNotes = require("./notes");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("you are here");
// }

// switch (command) {
//   case "add":
//     console.log("add");
//     break;
//   case "remove":
//     console.log("remove");
//     break;
//   default:
//     console.log("What would you like to do?");
// }
