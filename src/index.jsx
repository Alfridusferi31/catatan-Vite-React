// src/index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Impor semua halaman yang diperlukan
import App from "./App";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";

import "./style.css"; // Pastikan path ke file CSS Anda benar

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter
      // Future flags untuk kompatibilitas React Router v7 (opsional, tapi baik untuk ke depan)
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Rute utama yang membungkus seluruh aplikasi, menyediakan konteks melalui Outlet */}
        <Route path="/" element={<App />}>
          {/* Rute default untuk HomePage */}
          <Route index element={<HomePage />} />
          {/* Rute untuk menambah catatan baru */}
          <Route path="notes/new" element={<AddNotePage />} />
          {/* Rute untuk detail catatan, ID diambil dari URL */}
          <Route path="notes/:id" element={<NoteDetailPage />} />
          {/* Rute untuk halaman arsip */}
          <Route path="archives" element={<ArchivePage />} />
          {/* Rute wildcard untuk halaman tidak ditemukan */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
