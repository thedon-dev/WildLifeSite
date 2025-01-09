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

function App() {

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/hotline" element={<HotlinePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
}

const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/"; 

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
