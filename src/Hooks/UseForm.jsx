import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!values.title) newErrors.title = "Title is required";
    if (!values.description) newErrors.description = "Description is required";
    if (!values.dueDate) newErrors.dueDate = "Due Date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return { values, setValues, handleChange, validate, errors };
}
