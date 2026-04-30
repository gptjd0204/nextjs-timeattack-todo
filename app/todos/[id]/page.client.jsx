"use client";

import { getTodo } from "@/app/services/todosApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TodoDetail from "./_components/TodoDetail";

const ClientPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodo(id);
      console.log("data", data);
      setTodo(data);
      setIsLoading(false);
    };

    fetchTodo();
  }, [id]);

  return (
    <div className="flex m-5">{!isLoading && <TodoDetail todo={todo} />}</div>
  );
};

export default ClientPage;
