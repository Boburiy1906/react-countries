//React components
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Header from "./components/Header";
import Filter from "./pages/Filter";
import Error from "./components/Error";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className={`App ${mode ? "dark" : "light"}`}>
      <Router>
        <Header setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
