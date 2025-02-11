import { Launch } from "@/data/models/response/launches/launch";
import { LaunchesRepository } from "@/data/repository/launches-repository";
import { useQuery } from "@tanstack/react-query";

export const useFetchLaunchByFlightNumber = (flightNumber: string) => {
  return useQuery<Launch>({
    queryKey: ["launch"],
    queryFn: () => LaunchesRepository.getLaunchByFlightNumber(flightNumber),
  });
};
