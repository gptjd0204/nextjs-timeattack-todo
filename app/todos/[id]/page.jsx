import { getTodos } from "@/app/services/todosApi";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const todos = await getTodos();
  const todo = todos.filter((todo) => todo.id === id);

  return {
    title: todo[0].title,
  };
};

const page = async ({ params }) => {
  const { id } = await params;
  const todos = await getTodos();
  const todo = todos.filter((todo) => todo.id === id);
  console.log("todo ", todo);
  return (
    <div>
      <h1>{todo[0].title}</h1>
      <p>{todo[0].content}</p>
      <p>{todo[0].category}</p>
      <p>{todo[0].priority}</p>
      <p>{new Date(todo[0].createdAt).toISOString()}</p>
    </div>
  );
};

export default page;
