import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Locations } from "./pages/Locations";
import { Episodes } from "./pages/Episodes";
import { CharacterDetails } from "./pages/CharacterDetails";
import { LocationDetail } from "./pages/LocationDetail";
import { EpisodeDetail } from "./pages/EpisodeDetail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/characters/:id" element={<CharacterDetails />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/locations/:id" element={<LocationDetail />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/episodes/:id" element={<EpisodeDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
