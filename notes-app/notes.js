const fs = require("fs");

export const getNotes = function () {
  return "Your notes. . .";
};

export const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export const removeNotes = function (title) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 1) {
    const notesCopy = notes.filter((note) => note.title !== title);
    saveNotes(notesCopy);
  } else {
    console.log("No note with that Title");
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// export default getNotes;
// module.exports = {
//   getNotes: getNotes,
//   addNotes: addNotes,
// };
