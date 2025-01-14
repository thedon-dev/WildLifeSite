import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ArticlesPage from "./pages/Articles";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HotlinePage from "./pages/HotlinePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/Login";
import DiscoverMorePage from "./pages/DiscoverPage";

function App() {

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/animals" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/kids" element={<HotlinePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/discovermore" element={<DiscoverMorePage />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
}

const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; 

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
