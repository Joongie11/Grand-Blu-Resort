import React from "react";
import "./style.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiniHeader from "./components/MiniHeader";
import Home from "./pages/Home";
import RoomsPage from "./pages/RoomsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import MyBookings from "./pages/MyBookings";
import RoomDetailsPage from "./pages/RoomDetailsPage";
import BookingPage from "./pages/BookingPage";
import ThanksPage from "./pages/ThanksPage";

function App() {
  const location = useLocation();

  const noFooterRoutes = ["/login", "/register"];

  const knownRoutes = ["/", "/rooms", "/contact", "/login", "/register"];

  const isNotFoundPage = !knownRoutes.includes(location.pathname.toLowerCase());

  const shouldShowFooter =
    !noFooterRoutes.includes(location.pathname) && !isNotFoundPage;

  const isAuthPage =
    ["/login", "/register"].includes(location.pathname) || isNotFoundPage;

  return (
    <>
      {isAuthPage ? <MiniHeader /> : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/room/:id" element={<RoomDetailsPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
