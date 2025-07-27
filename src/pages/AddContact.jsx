import React from "react";
import { useContacts } from "../context/ContactContext";
import { ContactForm } from "../components/ContactForm";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { addContact } = useContacts();
  const navigate = useNavigate();

  const handleAdd = (contact) => {
    addContact(contact);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Agregar Contacto</h2>
      <ContactForm onSubmit={handleAdd} />
    </div>
  );
};
