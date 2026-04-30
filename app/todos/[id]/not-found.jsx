import Link from "next/link";

const NotFound = async () => {
  return (
    <div>
      {/* <h2>Not Found: {data.name}</h2> */}
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">홈으로 이동</Link>
      </p>
    </div>
  );
};

export default NotFound;
