import { removeTask, editTask } from "@/redux/features/task/tasksSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import { useRouter } from "next/router";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleEdit = (id) => {
    // Pasa los datos de la tarea al componente TaskForm
    router.push({ pathname: "/taskform", query: { id } });
  };

  return (
    <>
      <Link href="/taskform">
        <button className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          crear
        </button>
      </Link>
      <h1 className="fs-3 text-red-500 font-bold text-[30px] ">TaskList </h1>
      {tasks.map((item) => (
        <>
          <div
            key={item.id}
            className="text-center my-4 p-3 bg-white rounded-lg shadow-lg mx-4"
          >
            <h2 className="text-blue-500 font-bold text-[25px] ">
              {item.title}
            </h2>{" "}
            <br />
            <p>{item.description}</p> <br />
            <div className="flex">
              <button
                onClick={() => handleEdit(item.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded"
              >
                <span>Editar</span>
                {/* <TaskForm /> */}
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 mx-2 rounded"
              >
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TaskList;
