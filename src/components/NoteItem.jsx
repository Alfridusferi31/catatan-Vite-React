// src/components/NoteItem.jsx

import React from "react";
import { Link } from "react-router-dom"; // Pastikan Link diimpor
import PropTypes from "prop-types";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        {/* Link akan mengarah ke /notes/ID_CATATAN (misal /notes/1748797739983) */}
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Hapus
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem; // Pastikan ini adalah default export
