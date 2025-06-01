// src/pages/NoteDetailPage.jsx

import React from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils/data"; // Pastikan path benar

function NoteDetailPage() {
  const { id } = useParams(); // Mengambil ID dari URL parameter (misal: /notes/1748797739983)
  const { notes, onDelete, onArchive } = useOutletContext(); // Mengambil notes dan handlers dari context App.jsx
  const navigate = useNavigate(); // Hook untuk navigasi programatik

  // Mencari catatan yang sesuai berdasarkan ID dari array notes
  // Karena ID di data dan URL kini hanya angka string, perbandingan ini akan cocok
  const note = notes.find((noteItem) => noteItem.id === id);

  // Jika catatan tidak ditemukan, tampilkan pesan
  if (!note) {
    return (
      <section className="note-detail-page">
        <p>Catatan tidak ditemukan.</p>
      </section>
    );
  }

  // Fungsi untuk menangani penghapusan dan redirect
  const handleDelete = () => {
    onDelete(note.id); // Panggil fungsi onDelete dari context
    navigate("/"); // Kembali ke halaman utama setelah menghapus
  };

  // Fungsi untuk menangani arsip/pindah dan redirect
  const handleArchiveToggle = () => {
    onArchive(note.id); // Panggil fungsi onArchive dari context
    navigate("/"); // Kembali ke halaman utama atau arsip setelah mengubah status
  };

  return (
    <section className="note-detail-page">
      <h2 className="note-detail__title">{note.title}</h2>
      <p className="note-detail__createdAt">
        <small>{showFormattedDate(note.createdAt)}</small>
      </p>
      <p className="note-detail__body">{note.body}</p>
      <div className="note-detail__action">
        <button className="note-detail__delete-button" onClick={handleDelete}>
          Hapus
        </button>
        <button
          className="note-detail__archive-button"
          onClick={handleArchiveToggle}
        >
          {note.archived ? "Pindahkan dari Arsip" : "Arsipkan"}
        </button>
      </div>
    </section>
  );
}

export default NoteDetailPage;
