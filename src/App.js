import React from 'react';
import {Navbar} from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Recursos from './routes/Recursos';
import { Inicio } from './routes/Inicio';
import { Ods } from './routes/Ods';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Generate routes for ODS components from ID 1 to 17 */}
        {Array.from({ length: 17 }, (_, index) => (
        <Route key={index + 1} path={`/ods/${index + 1}`} element={<Ods id={index + 1} />} />
                ))}
        <Route path="/Recursos" element={<Recursos />} />
      </Routes>

    </div>
  )
}

export default App;
