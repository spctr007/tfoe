import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layoutComponent/Layout";
import MainPage from "./layoutComponent/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
