"use client";
import { Input } from "@/components/Input";
import _ from "lodash";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  // const fetchData = await fetch("https://api.football-data.org/v4/competitions/PL", {
  //   headers: {
  //     "X-Auth-Token": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY || "",
  //   },
  // });

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  if (error) {
    console.log("error");
  }

  console.log("data", data);

  // console.log("newData", newData);

  // const newData = _.cloneDeep(data);
  // console.log(newData);
  // if (newData.seasons[0].winner === null) {
  //   newData.seasons[0].winner = {
  //     address: "Anfield Road Liverpool L4 0TH",
  //     clubColors: "Red / White",
  //     crest: "https://crests.football-data.org/64.png",
  //     founded: 1892,
  //     id: 64,
  //     lastUpdated: "2022-02-10T19:30:22Z",
  //     name: "Liverpool FC",
  //     shortName: "Liverpool",
  //     tla: "LIV",
  //     venue: "Anfield",
  //     website: "http://www.liverpoolfc.tv",
  //   };
  // }
  // console.log(newData);
  // console.log(data);
  // console.log(Array.isArray(data));
  // console.log(Array.isArray(data.seasons));
  // console.log(data.seasons);
  // console.log(newData.seasons[0].winner);
  // console.log(newData);

  // const object = { name: "soccer" };
  // const newObject = { ...object };
  // newObject.name = "baseball";

  // const object = { name: "soccer" };
  // const newObject = { ...object };
  // newObject.name = "baseball";

  // const object = {
  //   name: "soccer",
  //   like: {
  //     team: "yokohama",
  //   },
  // };
  // const newObject = { ...object };

  // newObject.name = "baseball";
  // newObject.like.team = "losangeles";

  // const newObject = _.cloneDeep(object);
  // newObject.name = "baseball";
  // newObject.like.team = "losangeles";

  // console.log(object); // { name: "soccer", like: { team: "yokohama" } }
  // console.log(newObject); // { name: "baseball", like: { team: "losangeles" } }

  // console.log(object); // {name: "apple"}
  // console.log(newObject); // {name: "banana"}

  const onclickSort = () => {
    console.log("onclickSort");
  };

  return (
    <div>
      {/* <div key={newData.id} className="bg-red-500 p-6">
          <h2 className="text-2xl font-bold mb-3">{newData.name}</h2>
          <div>
            {newData.seasons.map((seasons) => (
              <div key={seasons.id}>
                <div className="flex  gap-4">
                  <p>{seasons.startDate}</p>
                  <p>{seasons.endDate}</p>
                </div>
                {seasons.winner ? <p>{seasons.winner.name}</p> : <p>No winner</p>}
              </div>
            ))}
          </div>
        </div> */}
      {data &&
        data.map((userData) => (
          <div key={userData.id} className="p-6">
            <h2 className="text-2xl font-bold mb-3">{userData.name}</h2>
            <div>
              <p>{userData.email}</p>
              <p>{userData.phone}</p>
            </div>
          </div>
        ))}
      <div>
        <Input />
      </div>
    </div>
  );
}
