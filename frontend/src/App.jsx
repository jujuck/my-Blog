import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Administration from "@pages/Layout/Administration";
import User from "@pages/Layout/User";
import Articles from "@pages/Articles";
import ArticleDesc from "@pages/ArticleDesc";
import ArticlesAdmin from "@pages/Administration/ArticlesAdmin";
import Auth from "@pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}>
          <Route path="" element={<Articles />} />
          <Route path="articles/:id" element={<ArticleDesc />} />
          <Route path="auth/connexion" element={<Auth />} />
        </Route>
        <Route path="/administration" element={<Administration />}>
          <Route path="articles" element={<ArticlesAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
