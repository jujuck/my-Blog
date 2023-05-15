import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "@pages/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
