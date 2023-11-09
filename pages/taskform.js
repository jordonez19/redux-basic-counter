import TaskForm from "@/components/TaskForm";
import React from "react";

const taskform = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-start p-24`}
    >
      <TaskForm />
    </div>
  );
};

export default taskform;
