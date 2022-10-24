import axios from "axios";
import { useState } from "react";

import { RickAndMortyTypes } from "../types/RickAndMortyTypes";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getAllCharacters = async () => {
  const res = await apiClient.get<RickAndMortyTypes>("/character");

  return res.data;
};

export const RickAndMortyServices = { getAllCharacters };
