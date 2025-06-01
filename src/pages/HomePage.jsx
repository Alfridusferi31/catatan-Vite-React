// src/pages/HomePage.jsx

import React from "react";
// import { Link, useSearchParams, useOutletContext } from 'react-router-dom'; // Hapus useSearchParams
import { Link, useOutletContext } from "react-router-dom"; // Cukup ini
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";

function HomePage() {
  // Ambil keyword dan onSearchChange langsung dari context
  const { notes, onDelete, onArchive, keyword, onSearchChange } =
    useOutletContext();

  // Hapus baris ini karena keyword sudah didapat dari context
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentKeyword = searchParams.get("keyword") || "";

  // Hapus fungsi ini karena onSearchChange sudah didapat dari context
  // const onSearchChangeHandler = (newKeyword) => {
  //   setSearchParams({ keyword: newKeyword });
  // };

  const filteredNotes = notes.filter(
    (note) =>
      !note.archived && note.title.toLowerCase().includes(keyword.toLowerCase()) // Gunakan `keyword` dari context
  );

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      {/* Gunakan `keyword` dan `onSearchChange` dari context */}
      <NoteSearch keyword={keyword} onSearchChange={onSearchChange} />
      {filteredNotes.length > 0 ? (
        <NoteList
          notes={filteredNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan aktif.</p>
      )}
      <div className="homepage__action">
        <Link to="/notes/new" className="action-button">
          +
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
