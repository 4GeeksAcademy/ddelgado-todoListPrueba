import React from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../context/ContactContext";

export const ContactCard = ({ contact }) => {
  const { deleteContact } = useContacts();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
      <img
        src={
          contact.image_url ||
          `https://picsum.photos/80?random=${contact.id}`
        }
        alt="Foto contacto"
        style={{ width: "80px", height: "80px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3>{contact.name}</h3>
      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
      <p>🏠 {contact.address}</p>
      <Link to={`/editar/${contact.id}`}>
        <button>✏️ Editar</button>
      </Link>
      <button onClick={() => deleteContact(contact.id)} style={{ marginLeft: "10px" }}>
        🗑️ Borrar
      </button>
    </div>
  );
};
