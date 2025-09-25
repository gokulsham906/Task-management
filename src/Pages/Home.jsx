// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import TaskTable from "../components/TaskTable";

export default function Home({ tasks, setTasks }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h2>All Tasks</h2>
      <button onClick={() => navigate("/create")}>Create New Task</button>
      <TaskTable tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
