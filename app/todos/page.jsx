"use client";

import React, { useEffect, useState } from "react";
import { getTodos } from "../services/todosApi";
import TodoCard from "../components/TodoCard";
import Link from "next/link";
import FilteredButton from "../components/FilteredButton";
import { useSearchParams } from "next/navigation";

const TodosListPage = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      if (!completed) {
        setTodos(data);
        return;
      }
      const filteredTodos = [...data].filter(
        (d) => d.completed === JSON.parse(completed),
      );
      setTodos(filteredTodos);
    };

    fetchTodos();
  }, [completed]);

  return (
    <main className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <FilteredButton />
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

export default TodosListPage;
