import { Launch } from "@/data/models/launches/launch";
import { LaunchesRepository } from "@/data/repository/launches-repository";
import { useQuery } from "@tanstack/react-query";

export const useFetchLaunches = () => {
  return useQuery<Launch[]>({
    queryKey: ["launches"],
    queryFn: () => LaunchesRepository.getAllLaunches(),
  });
};
