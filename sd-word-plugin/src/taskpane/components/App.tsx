import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import FileExplorer from "./FileExplorer";
import { UserProvider, useAuth } from "../../Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </>
  );
}

function AppContent() {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={token ? <FileExplorer /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
