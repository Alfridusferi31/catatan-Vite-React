import React from "react";

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
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt">
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        <button onClick={() => onDelete(id)}>Hapus</button>
        <button onClick={() => onArchive(id)}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
