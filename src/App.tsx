import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LearnMore from "./components/LearnMore/LearnMore";
import GetInvolved from "./components/GetInvolvedPage/GetInvolved";
import Navbar from "./components/Navbar/Navbar";
import EcoTipsPage from "./components/EcoTipsPage/EcoTip";
import Quiz from "./components/GetInvolvedPage/Quiz";
import TermsAndPrivacy from "./components/PrivacyTerms/TermsAndPrivacy";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/eco-tips" element={<EcoTipsPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
      </Routes>
    </Router>
  );
};

export default App;
