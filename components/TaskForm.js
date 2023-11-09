import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTask, editTask } from "@/redux/features/task/tasksSlice";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the router from Next.js

const TaskForm = ({ taskData }) => {
  const router = useRouter();
  const tasksState = useSelector((state) => state.tasks);
  const taskId = router.query.id; // Obtén el ID de la tarea de la consulta
  const taskToEdit = tasksState.find((item) => item.id === taskId);
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    if (taskData) {
      dispatch(editTask({ id: taskId, ...task }));
    } else {
      let lastId = Math.max(...tasksState.map((item) => item.id), 0);
      lastId++;
      dispatch(addTask({ id: String(lastId), ...task }));
    }
    router.push("/tasklist");
  };

  useEffect(() => {
    if (taskToEdit) {
      // Si taskToEdit existe, establece los campos del formulario con los datos de la tarea
      setTask({
        title: taskToEdit.title || "",
        description: taskToEdit.description || "",
      });
    }
  }, [taskToEdit]);
  return (
    <>
      <h1 className="fs-3 text-red-500 font-bold text-[30px] ">Task Form</h1>
      <form className="flex flex-col text-center my-4 p-3 bg-white rounded-lg shadow-lg mx-4">
        <input
          value={task.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          className="border p-2"
        />
        <textarea
          value={task.description}
          className="border my-2 p-2"
          onChange={handleChange}
          placeholder="Description"
          name="description"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {taskData ? "Update" : "Save"}{" "}
        </button>
      </form>
      <Link href="/tasklist">
        <button className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Volver
        </button>
      </Link>
    </>
  );
};

export default TaskForm;
