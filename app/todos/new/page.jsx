import TodoForm from "@/app/components/TodoForm";
import React from "react";

const CreateTodoPage = () => {
  return (
    <div className="flex flex-col gap-10 p-5 m-10 border rounded-md">
      <h1 className="text-center text-2xl font-bold">할일을 작성하세요!</h1>
      <TodoForm />
    </div>
  );
};

export default CreateTodoPage;
