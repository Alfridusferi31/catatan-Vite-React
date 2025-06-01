// src/pages/AddNotePage.jsx

import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import NoteInput from "../components/NoteInput"; // Pastikan path dan export-nya default

function AddNotePage() {
  // Mengambil fungsi onAddNote dari context App.jsx
  const { onAddNote } = useOutletContext();
  const navigate = useNavigate();

  // Handler yang akan dipanggil oleh NoteInput setelah submit form
  const handleAddNote = (newNote) => {
    onAddNote(newNote); // Panggil fungsi onAddNote dari context
    navigate("/"); // Setelah menambah, kembali ke halaman utama
  };

  return (
    <section className="add-new-page">
      <h2>Tambah Catatan Baru</h2>
      <NoteInput onAddNote={handleAddNote} />
    </section>
  );
}

export default AddNotePage;
