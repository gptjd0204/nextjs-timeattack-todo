import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-6">
      <Link href="/">
        <h1 className="text-2xl font-bold">나만의 Todo 앱</h1>
      </Link>
      <div className="flex gap-5">
        <Link href="/todos">Todo 목록</Link>
      </div>
    </div>
  );
};

export default Header;
