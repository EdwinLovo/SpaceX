import { useQuery } from "@tanstack/react-query";
import { Launch } from "../models/launch";
import { LaunchesRepository } from "../repository/launches-repository";

export const useFetchLaunches = () => {
  return useQuery<Launch[]>({
    queryKey: ["launches"],
    queryFn: () => LaunchesRepository.getAllLaunches(),
  });
};
