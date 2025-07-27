// // src/pages/Home.jsx
// import { Link } from "react-router-dom";
// import { useContacts } from "../context/ContactContext";
// import { ContactCard } from "../components/ContactCard";

// export default function Home() {
//     const { contacts } = useContacts();

//     return (
//         <div>
//             <h1>Mis Contactos</h1>
//             <Link to="/agregar"><button>➕ Agregar Contacto</button></Link>
//             {contacts.map(contact => (
//                 <ContactCard key={contact.id} contact={contact} />
//             ))}
//         </div>
//     );
// }
