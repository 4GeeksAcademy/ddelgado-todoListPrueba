import { createContext, useContext, useState, useEffect } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/ddelgado/contacts")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.contacts)) {
          setContacts(data.contacts);
        } else {
          console.error("Respuesta inesperada:", data);
          setContacts([]);
        }
      })
      .catch(err => {
        console.error("Error al cargar contactos:", err);
        setContacts([]);
      });
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (id, newData) => {
    setContacts(contacts.map(c => (c.id === id ? { ...c, ...newData } : c)));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, editContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
}

// ✅ ESTA LÍNEA es la que necesitas exportar:
export const useContacts = () => useContext(ContactContext);
