import { getTodo } from "@/app/services/todosApi";
import React from "react";
import ClientPage from "./page.client";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const todo = await getTodo(id);

  return {
    title: todo[0].title,
  };
};

const TodosDetailPage = async () => {
  return <ClientPage />;
};

export default TodosDetailPage;
