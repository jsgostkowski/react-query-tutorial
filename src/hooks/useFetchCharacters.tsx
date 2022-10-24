import { useQuery } from "@tanstack/react-query";
import { RickAndMortyServices } from "../services/RickAndMortyServices";

export const useFetchCharacters = () => {
  const { data } = useQuery(
    ["characters"],
    RickAndMortyServices.getAllCharacters
  );

  console.log(data);
  return data;
};
