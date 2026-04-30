"use client";

import React, { useState } from "react";
import { createTodo } from "../services/todosApi";
import { useRouter } from "next/navigation";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(1);
  const [priority, setPriority] = useState("high");
  const [validTitle, setValidTitle] = useState("제목을 입력해주세요!");
  const [validContent, setValidContent] = useState("설명을 입력해주세요!");
  const router = useRouter();

  const titleHandler = (e) => {
    setTitle(e.target.value);
    if (!e.target.value) {
      setValidTitle("제목을 입력해주세요!");
    } else if (e.target.value.length > 10) {
      setValidTitle("10자 이하로 입력해주세요!");
    } else {
      setValidTitle("");
    }
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
    if (!e.target.value) {
      setValidContent("설명을 입력해주세요!");
    } else if (e.target.value.length > 500) {
      setValidContent("500자 이하로 입력해주세요!");
    } else {
      setValidContent("");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      content,
      category,
      priority,
      completed: false,
      createdAt: Date.now(),
    };

    if (validTitle !== "" || validContent !== "") {
      alert("할일을 생성할 수 없습니다!");
      return;
    }
    await createTodo(newTodo);
    router.replace("/todos");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <div>
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={titleHandler}
          className="border"
        />
        <p>{validTitle || ""}</p>
      </div>
      <div>
        <p>설명</p>
        <input
          type="text"
          value={content}
          onChange={contentHandler}
          className="border"
        />
        <p>{validContent || ""}</p>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <p>카테고리</p>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="border"
          >
            <option value={1}>업무</option>
            <option value={2}>공부</option>
            <option value={3}>개인</option>
            <option value={4}>운동</option>
          </select>
        </div>
        <div className="flex gap-2">
          <p>우선순위</p>
          <select
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
            className="border"
          >
            <option value={"high"}>높음</option>
            <option value={"medium"}>중간</option>
            <option value={"low"}>낮음</option>
          </select>
        </div>
      </div>
      <button type="submit" className="border rounded-md py-2 px-3">
        제출
      </button>
    </form>
  );
};

export default TodoForm;
