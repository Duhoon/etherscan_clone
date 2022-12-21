import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import Home from "pages/Home";
import Transaction from "pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tx" element={<Transaction />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
