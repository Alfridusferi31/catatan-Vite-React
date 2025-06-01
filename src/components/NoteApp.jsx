import React, { useState } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [keyword, setKeyword] = useState("");

  const addNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNoteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const archiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="note-app">
      <h1>Aplikasi Catatan</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={onSearch}
        className="note-search"
      />
      <NoteInput addNote={addNoteHandler} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={filteredNotes.filter((note) => !note.archived)}
        onDelete={deleteNoteHandler}
        onArchive={archiveNoteHandler}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={filteredNotes.filter((note) => note.archived)}
        onDelete={deleteNoteHandler}
        onArchive={archiveNoteHandler}
      />
    </div>
  );
}

export default NoteApp;
