import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "@pages/Articles";
import ArticleDesc from "@pages/ArticleDesc";
import Administration from "@pages/Layout/Administration";
import ArticlesAdmin from "@pages/Administration/ArticlesAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDesc />} />
        <Route path="/administration" element={<Administration />}>
          <Route path="articles" element={<ArticlesAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
