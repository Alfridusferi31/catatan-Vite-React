// src/components/NoteSearch.jsx

import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ keyword, onSearchChange }) {
  return (
    <div className="note-search-container">
      {" "}
      {/* Opsional: bisa diberi nama kelas berbeda jika .note-search sudah dipakai input */}
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(event) => onSearchChange(event.target.value)}
        className="note-search-input" // Tambahkan kelas baru untuk input itu sendiri
      />
    </div>
  );
}

NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default NoteSearch;
