import React, { useState, useEffect } from "react";

export const ContactForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image_url: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        name="email"
        type="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        name="address"
        placeholder="Dirección"
        value={form.address}
        onChange={handleChange}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        name="image_url"
        placeholder="URL Imagen (opcional)"
        value={form.image_url}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
