import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const username = "ddelgado";

  useEffect(() => {
    fetch(`https://playground.4geeks.com/todo/users/${username}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener tareas");
        return response.json();
      })
      .then((data) => setTodos(data.todos || []))
      .catch((error) => console.error("Error:\n", error));
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      label: newTask,
      done: false,
      user: username,
    };

    fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo crear la tarea");
        return res.json();
      })
      .then(() => fetch(`https://playground.4geeks.com/todo/users/${username}`))
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos || []);
        setNewTask("");
      })
      .catch((err) => console.error("Error al crear tarea:", err));
  };

  const handleDelete = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar");
        return fetch(`https://playground.4geeks.com/todo/users/${username}`);
      })
      .then((res) => res.json())
      .then((data) => setTodos(data.todos || []))
      .catch((err) => console.error("Error al eliminar tarea:", err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, #f0fdf4)",
        padding: "30px",
      }}
    >
      <div className="card shadow-lg w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Lista de tareas</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe una nueva tarea..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddTask}>
              Añadir
            </button>
          </div>

          {todos.length === 0 ? (
            <p className="text-center text-muted">No tienes tareas aún</p>
          ) : (
            <ul className="list-group">
              {todos.map((item, index) => (
                <li
                  key={item.id || index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{item.label}</span>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
