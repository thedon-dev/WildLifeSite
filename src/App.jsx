import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ArticlesPage from "./pages/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotlinePage from "./pages/HotlinePage";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/hotline" element={<HotlinePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
