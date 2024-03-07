import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "/src/styles/Gallery.module.css";
import "/src/styles/Home.module.css";
import "/src/styles/globals.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/gallery" element={<gallery />} />
          <Route path="/preorder" element={<preorder />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;