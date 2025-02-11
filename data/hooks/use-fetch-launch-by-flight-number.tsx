import { useQuery } from "@tanstack/react-query";
import { Launch } from "../models/launch";
import { LaunchesRepository } from "../repository/launches-repository";

export const useFetchLaunchByFlightNumber = (flightNumber: string) => {
  return useQuery<Launch>({
    queryKey: ["launch"],
    queryFn: () => LaunchesRepository.getLaunchByFlightNumber(flightNumber),
  });
};
