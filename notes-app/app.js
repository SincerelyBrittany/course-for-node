import "./addRequire.js";
import validator from "validator";
import yargs from "yargs";
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
  handler: () => {
    note.listNotes();
  },
});

yargs.parse();
