const apiBaseUrl = "https://api.spacexdata.com/v3";

export const getAllLaunchesUrl = `${apiBaseUrl}/launches`;

export const getNextLaunchUrl = `${apiBaseUrl}/launches/next`;

export const getLaunchByFlightNumberUrl = `${apiBaseUrl}/launches/{flightNumber}`;
