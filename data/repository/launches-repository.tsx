import {
  getAllLaunchesUrl,
  getLaunchByFlightNumberUrl,
  getNextLaunchUrl,
} from "../api/api-constants";
import { Launch } from "../models/response/launches/launch";

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

  async getLaunchByFlightNumber(flightNumber: string): Promise<Launch> {
    const response = await fetch(
      getLaunchByFlightNumberUrl.replace("{flightNumber}", flightNumber)
    );
    if (!response.ok) {
      throw new Error("Failed to fetch launch details");
    }

    return response.json();
  }
}

export const LaunchesRepository = new LaunchesRepositoryImpl();
