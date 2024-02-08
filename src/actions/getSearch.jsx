"use server";

import { api } from "@/api";

const getSearchResults = async (query) => {
  const res = await fetch(`${api + query}`);

  return res.json();
};
