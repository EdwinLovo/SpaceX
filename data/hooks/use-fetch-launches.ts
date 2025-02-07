import { useQuery } from "@tanstack/react-query";
import { Launch } from "../models/launch";
import { getAllLaunchesUrl } from "../api/api-service";

const fetchLaunches = async (): Promise<Launch[]> => {
  const response = await fetch(getAllLaunchesUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch launches");
  }

  return response.json();
};

export const useFetchLaunches = () => {
  return useQuery<Launch[]>({
    queryKey: ["launches"],
    queryFn: fetchLaunches,
  });
};
