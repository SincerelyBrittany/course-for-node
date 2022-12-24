const fs = require("fs");
import chalk from "chalk";

export const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes!"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

export const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  const duplicateNoteSingular = notes.find((note) => {
    return note.title === title;
  });

  // debugger;

  if (!duplicateNoteSingular) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No Note Found!"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

export const readNote = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => {
    return note.title === title;
  });

  if (searchedNote) {
    console.log(chalk.red.inverse("Title:", searchedNote.title));
    console.log("Text:", searchedNote.body);
  } else {
    console.log(chalk.red.inverse("No Note Found!"));
  }
};
