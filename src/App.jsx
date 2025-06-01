// src/App.jsx

import React, { useState, useEffect } from "react";
import { Outlet, useSearchParams, Link } from "react-router-dom";
import { getInitialData } from "./utils/data"; // Mengimpor data awal

function App() {
  // Menginisialisasi state `notes` dari `localStorage`,
  // atau menggunakan `getInitialData()` jika `localStorage` kosong/error.
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      try {
        // Mencoba mengurai JSON dari `localStorage`
        return JSON.parse(savedNotes);
      } catch (e) {
        console.error("Gagal mengurai notes dari localStorage:", e);
        // Jika ada error, kembalikan data awal
        return getInitialData();
      }
    }
    // Jika tidak ada data di `localStorage`, gunakan data awal
    return getInitialData();
  });

  // Mengelola state `keyword` pencarian, disinkronkan dengan URL search params
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  // Sinkronkan state `keyword` dengan `searchParams` saat `searchParams` berubah
  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  // `useEffect` untuk menyimpan `notes` ke `localStorage` setiap kali `notes` berubah
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); // Dependencies array: `useEffect` akan berjalan setiap kali `notes` berubah

  // Handler untuk menambah catatan baru
  const onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      // ID baru HANYA timestamp dalam bentuk string
      id: String(+new Date()), // Contoh ID: "1748797739983"
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Handler untuk menghapus catatan
  const onDeleteNoteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Handler untuk mengubah status arsip catatan
  const onArchiveNoteHandler = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  // Handler untuk perubahan input pencarian, memperbarui URL
  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Catatan Aktif</Link>
            </li>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
            <li>
              <Link to="/notes/new">Tambah Catatan</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Outlet untuk merender rute anak, menyediakan context untuk komponen anak */}
        <Outlet
          context={{
            notes,
            onAddNote: onAddNoteHandler,
            onDelete: onDeleteNoteHandler,
            onArchive: onArchiveNoteHandler,
            keyword,
            onSearchChange: onKeywordChangeHandler,
          }}
        />
      </main>
    </div>
  );
}

export default App;
