export default async function Home() {
  const data = await fetch("https://api.football-data.org/v4/teams/64", {
    headers: {
      "X-Auth-Token": "d9b12d4244034c36a3ae87539c71b59a",
    },
  });

  const posts = await data.json();
  console.log(posts);

  // type Post = {
  //   id: number;
  //   title: string;
  //   body: string;
  // };

  return (
    <div>
      <h1>おはよう</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* {posts.map((post) => ( */}
        <div key={posts.id} className="bg-amber-200 p-6">
          <h2 className="text-2xl font-bold mb-3">{posts.address}</h2>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
