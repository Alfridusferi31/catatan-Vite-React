// src/components/NoteList.jsx

import React from "react";
import NoteItem from "./NoteItem"; // Pastikan path benar dan NoteItem adalah default export
import PropTypes from "prop-types";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList; // Pastikan ini adalah default export
