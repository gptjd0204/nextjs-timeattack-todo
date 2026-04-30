export const getTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  if (!res.ok) {
    throw new Error("Todos 데이터 로딩에 실패했습니다!");
  }
  const result = await res.json();

  return result;
};

export const getTodo = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  if (!res.ok) {
    throw new Error("Todos 데이터 로딩에 실패했습니다!");
  }
  const result = await res.json();

  return [...result].filter((d) => d.id === id);
};

export const createTodo = async (todo) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const result = await res.json();

  return result;
};
