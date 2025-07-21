import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const username = "ddelgado"; // tu usuario en la API


  useEffect(() => {
    fetch(`https://playground.4geeks.com/todo/users/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.todos;
    })
    .catch((error) => {
      console.log("Oh No! There was a problem: \n", error);
    });



  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      label: newTask,
      done: false,
      user: username,
    };

    fetch('https://playground.4geeks.com/todo/todos/ddelgado', {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      }

    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo crear la tarea");
        return res.json();
      })
      .then((createdTodo) => {
    
        setTodos([...todos, createdTodo]);
        setNewTask("");
      }) 
        .then(() => {
          fetch(`https://playground.4geeks.com/todo/users/${username}`, {
            method: "GET",
          })
            .then((res) => {
              if (!res.ok) throw new Error("No se pudo cargar la lista");
              return res.json();
            })
            .then((data) => setTodos(data.todos || []))
            .catch((err) => console.error("Error:", err));
        })
      .catch((err) => console.error("Error al crear tarea:", err));
  };

  const deleteItem = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/{id}`,{
      method: "DELETE"
    })
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Mi lista de tareas</h1>

      <div className="w-full max-w-3xl flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l"
          placeholder="Escribe una nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Añadir
        </button>
        <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Eliminar
            </button>
      </div>

      <ul className="bg-white p-4 rounded shadow-md w-full max-w-3xl">
        {todos.map((item, index) => (
          <li key={index} className="border-b last:border-b-0 py-2">
            {item.label}
          </li>
        ))}
      </ul>
      
    </div>
  );
};
