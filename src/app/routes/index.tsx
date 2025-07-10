import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../../components/layouts/PageLayout";
import DashboardPage from "../../pages/Dashboard";
import WarningsPage from "../../pages/Warnings";
import SettingsPage from "../../pages/Settings";

const Routing = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/warnings" element={<WarningsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Routing;
