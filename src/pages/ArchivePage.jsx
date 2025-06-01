// src/pages/ArchivePage.jsx

import React from "react";
// import { useSearchParams, useOutletContext } from 'react-router-dom'; // Hapus useSearchParams
import { useOutletContext } from "react-router-dom"; // Cukup ini
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";

function ArchivePage() {
  // Ambil keyword dan onSearchChange langsung dari context
  const { notes, onDelete, onArchive, keyword, onSearchChange } =
    useOutletContext();

  // Hapus baris ini karena keyword sudah didapat dari context
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentKeyword = searchParams.get('keyword') || '';

  // Hapus fungsi ini karena onSearchChange sudah didapat dari context
  // const onSearchChangeHandler = (newKeyword) => {
  //   setSearchParams({ keyword: newKeyword });
  // };

  const archivedNotes = notes.filter(
    (note) =>
      note.archived && note.title.toLowerCase().includes(keyword.toLowerCase()) // Gunakan `keyword` dari context
  );

  return (
    <section className="archive-page">
      <h2>Arsip Catatan</h2>
      {/* Gunakan `keyword` dan `onSearchChange` dari context */}
      <NoteSearch keyword={keyword} onSearchChange={onSearchChange} />
      {archivedNotes.length > 0 ? (
        <NoteList
          notes={archivedNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan di arsip.</p>
      )}
    </section>
  );
}

export default ArchivePage;
