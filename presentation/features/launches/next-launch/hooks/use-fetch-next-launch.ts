import { Launch } from "@/data/models/launches/launch";
import { LaunchesRepository } from "@/data/repository/launches-repository";
import { useQuery } from "@tanstack/react-query";

export const useFetchNextLaunch = () => {
  return useQuery<Launch>({
    queryKey: ["next-launch"],
    queryFn: () => LaunchesRepository.getNextLaunch(),
  });
};
