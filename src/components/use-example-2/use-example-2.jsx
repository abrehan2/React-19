// IMPORTS -
import { use, Suspense } from "react";
import Loading from "../loading";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

const PostItem = () => {
  const posts = use(fetchData());

  return (
    <ul>
      {posts.map((post) => (
        <div
          className="bg-slate-50 shadow-md p-4 my-6 rounded-lg"
          key={post.title}
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const UseExample2 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PostItem />
    </Suspense>
  );
};

export default UseExample2;
