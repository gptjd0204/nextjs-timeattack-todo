"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilteredButton = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed");
  const router = useRouter();

  const toggleBtnHandler = () => {
    if (completed === "true") {
      router.push("/todos?completed=false");
    } else {
      router.push("/todos?completed=true");
    }
  };

  return (
    <button
      className="border p-2 rounded-md"
      onClick={() => {
        toggleBtnHandler();
      }}
    >
      {completed === "true" ? "진행중" : "완료"}
    </button>
  );
};

export default FilteredButton;
