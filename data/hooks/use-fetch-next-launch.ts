import { useQuery } from "@tanstack/react-query";
import { Launch } from "../models/launch";
import { getNextLaunchUrl } from "../api/api-service";

const fetchNextLaunch = async (): Promise<Launch> => {
  const response = await fetch(getNextLaunchUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch next launch");
  }

  return response.json();
};

export const useFetchNextLaunch = () => {
  return useQuery<Launch>({
    queryKey: ["next-launch"],
    queryFn: fetchNextLaunch,
  });
};
