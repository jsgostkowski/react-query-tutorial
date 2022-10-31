import axios from "axios";
import { useState } from "react";
import { RickAndMortySingleCharacter } from "../types/RickAndMortySingleCharacter";

import { RickAndMortyTypes } from "../types/RickAndMortyTypes";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getAllCharacters = async (page: string) => {
  const res = await apiClient.get<RickAndMortyTypes>(
    `/character/?page=${page}`
  );

  return res.data;
};

export const getSingleCharacters = async (id: string) => {
  const res = await apiClient.get<RickAndMortySingleCharacter>(
    `/character/${id}`
  );
  return res.data;
};

export const RickAndMortyServices = { getAllCharacters, getSingleCharacters };
