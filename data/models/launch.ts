export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  rocket: Rocket;
  details: string;
  upcoming: boolean;
}
