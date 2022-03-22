import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layoutComponent/Layout";
import MainPage from "./layoutComponent/MainPage";
import MembersListPage from "./membersComponent/MembersListPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<MembersListPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
