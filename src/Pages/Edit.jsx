import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";

function Edit({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { values, setValues, handleChange, validate, errors } = useForm({});

  useEffect(() => {
    const task = tasks.find((t) => t.id === id);
    if (!task) navigate("/");
    else setValues(task);
  }, [id, tasks, navigate, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...values } : t)));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Edit Task</h2>
      <label>Title</label>
      <input name="title" value={values.title || ""} onChange={handleChange} />
      {errors.title && <small className="error">{errors.title}</small>}

      <label>Description</label>
      <textarea name="description" value={values.description || ""} onChange={handleChange} />
      {errors.description && <small className="error">{errors.description}</small>}

      <label>Due Date</label>
      <input type="date" name="dueDate" value={values.dueDate || ""} onChange={handleChange} />
      {errors.dueDate && <small className="error">{errors.dueDate}</small>}

      <label>Priority</label>
      <select name="priority" value={values.priority || "medium"} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Update Task</button>
    </form>
  );
}

export default Edit;
