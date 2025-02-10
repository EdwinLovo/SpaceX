import { useQuery } from "@tanstack/react-query";
import { Launch } from "../models/launch";
import { LaunchesRepository } from "../repository/launches-repository";

export const useFetchNextLaunch = () => {
  return useQuery<Launch>({
    queryKey: ["next-launch"],
    queryFn: () => LaunchesRepository.getNextLaunch(),
  });
};
