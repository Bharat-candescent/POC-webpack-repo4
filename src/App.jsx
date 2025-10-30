import React from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

export default function MFE4App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div style={{ border: '4px solid #f57c00', padding: 12 }}>
        <h2>MFE4 (repo4)</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<div>MFE4 home</div>} />
          <Route path="/about" element={<div>About MFE4</div>} />
          <Route path="*" element={<div>MFE4 - not found</div>} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}
