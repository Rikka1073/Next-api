export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await data.json();

  type Post = {
    id: number;
    title: string;
    body: string;
  };

  return (
    <div>
      <h1>おはよう</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-amber-200 p-6">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
