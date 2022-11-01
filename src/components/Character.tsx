import React, { useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { Link } from "react-router-dom";

export const Character = () => {
  const [page, setPage] = useState("");
  const [first, setFirst] = useState(1);

  const data = useFetchCharacters(page);

  const handleNextPage = () => {
    setFirst(first + 1);
    console.log(first);
    let x = first.toString();
    setPage(x);
  };
  const handlePrexPage = () => {
    console.log("prev: " + first);
    let x = first - 1;
    let y = x.toString();
    console.log("this is x: " + x);
    console.log("this is y: " + y);
    setFirst((prev) => prev - 1);
    setPage(y);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center bg-slate-500">
        {data?.results.map((x) => (
          <div
            className="border-8 border-green-50 border-rounded rounded-md bg-slate-700 p-4 m-2"
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
      <div className="flex flex-row justify-center bg-slate-500">
        <div className="p-4">
          <button
            disabled={first === 1}
            onClick={handlePrexPage}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded pt-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
        </div>
        <div className="p-4 ">
          <button
            onClick={handleNextPage}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded pt-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
