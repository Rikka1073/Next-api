export default async function Home() {
  const fetchData = await fetch("https://api.football-data.org/v4/competitions/PL", {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY || "",
    },
  });

  const data = await fetchData.json();
  const newData = { ...data };
  console.log(newData);
  newData.seasons[0].winner.name = "Liverpool FC";
  // console.log(newData);
  // console.log(data);
  // console.log(Array.isArray(data));
  // console.log(Array.isArray(data.seasons));
  // console.log(data.seasons);
  // console.log(data.seasons.winner);

  return (
    <div>
      <div>
        <div key={data.id} className="bg-red-500 p-6">
          <h2 className="text-2xl font-bold mb-3">{data.name}</h2>
          <div>
            {data.seasons.map((seasons) => (
              <div key={seasons.id}>
                <div className="flex  gap-4">
                  <p>{seasons.startDate}</p>
                  <p>{seasons.endDate}</p>
                </div>
                {seasons.winner ? <p>{seasons.winner.name}</p> : <p>No winner</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
