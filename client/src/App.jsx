import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Report } from "./pages/Report";
import { CreditAccount } from "./pages/CreditAccount";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Detail />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/CreditAccount" element={<CreditAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
