export const getTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`);
  if (!res.ok) {
    throw new Error("Todos 데이터 로딩에 실패했습니다!");
  }
  const data = await res.json();

  return data;
};
