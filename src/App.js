import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Team from "./pages/Team";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="journey" element={<Journey />} exact />
          <Route path="team" element={<Team />} exact />
          <Route path="store" element={<Store />} exact />
          <Route path="contact" element={<Contact />} exact />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
