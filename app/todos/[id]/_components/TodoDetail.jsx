import React from "react";

const TodoDetail = ({ todo }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{todo[0].title}</h1>
        <p className="text-xl">{todo[0].content}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p>{todo[0].category}</p>
          <p>{todo[0].priority}</p>
        </div>
        <p>{new Date(todo[0].createdAt).toISOString()}</p>
      </div>
    </div>

    // <div className="flex flex-col gap-10">
    //   <div className="flex flex-col gap-4">
    //     <h1 className="text-4xl font-bold">{todo.title}</h1>
    //     <p className="text-xl">{todo.content}</p>
    //   </div>
    //   <div className="flex justify-between">
    //     <div className="flex gap-3">
    //       <p>{todo.category}</p>
    //       <p>{todo.priority}</p>
    //     </div>
    //     <p>{new Date(todo.createdAt).toISOString()}</p>
    //   </div>
    // </div>
  );
};

export default TodoDetail;
