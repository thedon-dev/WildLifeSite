import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ArticlesPage from "./pages/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotlinePage from "./pages/HotlinePage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/hotline" element={<HotlinePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
