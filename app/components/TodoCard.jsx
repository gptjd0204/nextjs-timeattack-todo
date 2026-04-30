import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <div className="flex border rounded-md p-3 justify-between gap-5">
      <div className="flex flex-col gap-1">
        <p className="text-sm">{todo.category}</p>
        <h2 className="text-xl font-bold">{todo.title}</h2>
      </div>

      <p
        className={`${todo.completed ? "text-violet-900" : "text-green-900"} flex items-end`}
      >
        {todo.completed ? "완료" : "진행중"}
      </p>
    </div>
  );
};

export default TodoCard;
