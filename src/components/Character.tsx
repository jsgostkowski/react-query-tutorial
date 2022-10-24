import React from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

export const Character = () => {
  const data = useFetchCharacters();
  console.log(data);

  return (
    <div className="flex flex-wrap p-4 m-4">
      {data?.results.map((x) => (
        <div
          className="border-8 border-gray-500 border-rounded rounded-md bg-slate-400 p-4 m-2"
          key={x.id}
        >
          <h1 className="text-gray-100 text-center">Name: {x.name}</h1>
          <p className="text-gray-100 text-left text-wrap">
            Location: {x.location.name}
          </p>

          <img
            src={x.image}
            alt={x.name}
            className="rounded-3xl object-center"
          ></img>
        </div>
      ))}
    </div>
  );
};
