import { createClient, QueryParams } from "next-sanity";
import { allPostsPaginatedQuery } from "./groq";

export const client = createClient({
  projectId: "p8bgl0wr",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const fetcher = async ([query, params]: [string, QueryParams]) => {
  return client ? client.fetch(query, params) : [];
};
