import React, { useState } from "react";

export default function TaskTable({ tasks, onDelete, onEdit }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );


  const indexOfLast = currentPage * tasksPerPage;
  const indexOfFirst = indexOfLast - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks…"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ marginBottom: "1rem", padding: "5px" }}
      />

      <table border="1" width="100%" cellPadding="5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.length > 0 ? (
            currentTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>
                  <button onClick={() => onEdit(task.id)}>Edit</button>
                  <button
                    style={{ backgroundColor: "red", color: "#fff", marginLeft: 5 }}
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: "1rem" }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === number ? "#007bff" : "#f0f0f0",
              color: currentPage === number ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
