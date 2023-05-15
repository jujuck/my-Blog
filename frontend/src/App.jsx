import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "@pages/Articles";
import ArticleDesc from "@pages/ArticleDesc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
