import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TaskContext from '../../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      status: 'todo',
      priority: 'low',
      deadline: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string(),
      deadline: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      addTask(values);
      formik.resetForm();
    },
  });

  return (
    <form className='task-form' onSubmit={formik.handleSubmit}>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Task Title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <textarea
        id="description"
        name="description"
        placeholder="Task Description"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <input
        id="deadline"
        name="deadline"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.deadline}
      />
      {formik.errors.deadline ? <div>{formik.errors.deadline}</div> : null}

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
