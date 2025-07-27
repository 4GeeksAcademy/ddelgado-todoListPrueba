import React from "react";
import { useContacts } from "../context/ContactContext";
import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Contactos</h1>
      <Link to="/agregar">
        <button style={{ marginBottom: "20px" }}>➕ Agregar Contacto</button>
      </Link>
      console.log("contacts recibidos:", contacts);
      {contacts.length === 0 ? (
        <p>No hay contactos aún.</p>
      ) : (
        
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
};
