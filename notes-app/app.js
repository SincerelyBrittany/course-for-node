import "./addRequire.js";
import validator from "validator";
import yargs from "yargs";
import chalk from "chalk";
// const addNotes = require("./notes.js");
// import { getNotes, addNotes } from "./notes.js";
import * as note from "./notes.js";

// add notes, remove notes, read notes, list notes

// customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Adding note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing note",
  builder: {
    title: {
      describe: "provide note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.removeNotes(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "reading note",
  handler: (argv) => {
    console.log("reading notes");
  },
});

yargs.command({
  command: "list",
  describe: "listing note",
  handler: (argv) => {
    console.log("listing notes");
  },
});

yargs.parse();

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
