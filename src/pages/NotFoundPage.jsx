// src/pages/NotFoundPage.jsx

import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <Link to="/">Kembali ke halaman utama</Link>
    </section>
  );
}

export default NotFoundPage;
