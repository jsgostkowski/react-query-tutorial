import React, { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { Link } from "react-router-dom";

export const Character = () => {
  const data = useFetchCharacters();

  // console.log(queryById);
  return (
    <div className="flex flex-wrap p-4 m-4">
      {data?.results.map((x) => (
        <div
          className="border-8 border-gray-500 border-rounded rounded-md bg-slate-400 p-4 m-2"
          key={x.id}
        >
          <Link to={"/character/" + x.id.toString()}>
            <h1 className="text-gray-100 text-center">{x.name}</h1>
            <p className="text-gray-100 text-left text-wrap">
              {x.location.name}
            </p>

            <img
              src={x.image}
              alt={x.name}
              className="rounded-3xl object-center"
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
};
