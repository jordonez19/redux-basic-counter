import TaskList from "@/components/TaskList";
import React from "react";

const tasklist = () => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-start p-24`}
    >    
      <TaskList />
    </div>
  );
};

export default tasklist;
