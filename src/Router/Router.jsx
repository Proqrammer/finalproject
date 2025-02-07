import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import AddressBook from "./pages/AddressBook";
import Home from "../pages/Home/Home";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addressbook" element={<AddressBook />} />
        </Routes>
    </Router>
  );
}

export default App;

