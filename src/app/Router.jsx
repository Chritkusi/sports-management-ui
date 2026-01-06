import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public pages
import Home from "../pages/public/Home";
import Tournaments from "../pages/public/Tournaments";
import TournamentDetails from "../pages/public/TournamentDetails";

// Auth
import Login from "../pages/auth/Login";

// Admin pages
import AdminDashboard from "../pages/admin/Dashboard";
import Sports from "../pages/admin/Sports";
import Teams from "../pages/admin/Teams";

import NotFound from "../pages/system/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetails />} />
        </Route>

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />

        {/* 🛠 ADMIN */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/sports" element={<Sports />} />
          <Route path="/admin/teams" element={<Teams />} />
        </Route>

        {/* ❌ FALLBACK */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}