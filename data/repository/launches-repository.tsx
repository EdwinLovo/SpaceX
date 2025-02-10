import { getAllLaunchesUrl, getNextLaunchUrl } from "../api/api-service";
import { Launch } from "../models/launch";

class LaunchesRepositoryImpl {
  async getAllLaunches(): Promise<Launch[]> {
    const response = await fetch(getAllLaunchesUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch launches");
    }

    return response.json();
  }

  async getNextLaunch(): Promise<Launch> {
    const response = await fetch(getNextLaunchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch next launch");
    }

    return response.json();
  }
}

export const LaunchesRepository = new LaunchesRepositoryImpl();
