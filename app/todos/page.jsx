import React from "react";
import { getTodos } from "../services/todosApi";
import TodoCard from "../components/TodoCard";
import Link from "next/link";

const page = async () => {
  const todos = await getTodos();
  return (
    <main className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <div className="grid grid-cols-2 gap-3">
        {todos.map((todo) => {
          return (
            <Link href={`/todos/${todo.id}`} key={todo.id}>
              <TodoCard todo={todo} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default page;
