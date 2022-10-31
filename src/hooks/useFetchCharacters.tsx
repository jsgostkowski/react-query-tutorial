import { useQuery } from "@tanstack/react-query";
import { ErrorPage } from "../components/ErrorPage";
import { RickAndMortyServices } from "../services/RickAndMortyServices";

export const useFetchCharacters = (page: string) => {
  const { data } = useQuery(
    ["characters", page],
    () => RickAndMortyServices.getAllCharacters(page),
    { keepPreviousData: true }
  );

  return data;
};
