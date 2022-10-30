import { useQuery } from "@tanstack/react-query";
import { RickAndMortyServices } from "../services/RickAndMortyServices";

export const useFetchSingleCharacter = (id: string) => {
  //const {data} = useQuery(['character', id], RickAndMortyServices.getSingleCharacters({id}))
  const { data } = useQuery(["singleCharacter", id], () =>
    RickAndMortyServices.getSingleCharacters(id)
  );

  return data;
};
