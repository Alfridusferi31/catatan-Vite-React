import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLeft, setCharLeft] = useState(50);

  const onTitleChange = (e) => {
    const val = e.target.value;
    if (val.length <= 50) {
      setTitle(val);
      setCharLeft(50 - val.length);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
    setCharLeft(50);
  };

  return (
    <form className="note-input" onSubmit={onSubmit}>
      <p className="note-input__title__char-limit">Sisa karakter: {charLeft}</p>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
        required
      />
      <textarea
        placeholder="Isi catatan..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default NoteInput;
