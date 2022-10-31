import { useParams } from "react-router-dom";
import { useFetchSingleCharacter } from "../hooks/useFetchSingleCharacter";

export const CharacterDetail = () => {
  const { characterId } = useParams();

  const data = useFetchSingleCharacter(characterId as string);

  return (
    <div className="h-screen w-screen bg-slate-500">
      <div className="flex flex-row justify-center flex-wrap  pt-2">
        <img src={data?.image} alt={data?.name}></img>
        <div className="flex flex-col">
          <h1>
            Name: <span className="">{data?.name}</span>
          </h1>

          <p>
            Location: <span>{data?.location.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
