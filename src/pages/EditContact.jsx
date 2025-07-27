import React from "react";
import { useContacts } from "../context/ContactContext";
import { ContactForm } from "../components/ContactForm";
import { useParams, useNavigate } from "react-router-dom";

export const EditContact = () => {
  const { contacts, editContact } = useContacts();
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((c) => c.id === id);

  const handleEdit = (updatedContact) => {
    editContact(id, updatedContact);
    navigate("/");
  };

  if (!contact) return <p>Contacto no encontrado</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Editar Contacto</h2>
      <ContactForm initialData={contact} onSubmit={handleEdit} />
    </div>
  );
};
