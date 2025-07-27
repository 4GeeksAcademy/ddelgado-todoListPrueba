import React from "react"; // ✅ Importar React para usar JSX
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactList } from "./pages/ContactList";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/agregar" element={<AddContact />} />
        <Route path="/editar/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
};

export default App;
