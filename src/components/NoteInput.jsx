// src/components/NoteInput.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChangeHandler = (event) => {
    // Batasi judul agar tidak lebih dari 50 karakter (opsional, tapi baik untuk UX)
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
    }
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      // Pastikan judul dan isi tidak kosong
      onAddNote({ title, body });
      setTitle("");
      setBody("");
    } else {
      alert("Judul dan isi catatan tidak boleh kosong!");
    }
  };

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <p className="note-input__title__char-limit">
        Sisa karakter: {50 - title.length}
      </p>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={title}
        onChange={onTitleChangeHandler}
      />
      <textarea
        placeholder="Isi Catatan..."
        value={body}
        onChange={onBodyChangeHandler}
      ></textarea>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteInput; // Pastikan ini adalah default export
