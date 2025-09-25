import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

function Create({ tasks, setTasks }) {
  const navigate = useNavigate();
  const { values, handleChange, validate, errors } = useForm({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTasks([...tasks, { ...values, id: Date.now().toString() }]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Task</h2>
      <label>Title</label>
      <input name="title" value={values.title} onChange={handleChange} />
      {errors.title && <small className="error">{errors.title}</small>}

      <label>Description</label>
      <textarea name="description" value={values.description} onChange={handleChange} />
      {errors.description && <small className="error">{errors.description}</small>}

      <label>Due Date</label>
      <input type="date" name="dueDate" value={values.dueDate} onChange={handleChange} />
      {errors.dueDate && <small className="error">{errors.dueDate}</small>}

      <label>Priority</label>
      <select name="priority" value={values.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Save Task</button>
    </form>
  );
}

export default Create;
