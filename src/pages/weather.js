import React from "react";
import axios from "axios";
import moment from "moment";
import queryString from "query-string";

import Header from "../components/header";

const apikey = "odO9urtxLC4AqU5SlW3aad04CdZtWxlc";
const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

const location = [43.325989, -79.798302];
// list the fields
const fields = [
  "precipitationIntensity",
  "precipitationType",
  "windSpeed",
  "windGust",
  "windDirection",
  "temperature",
  "temperatureApparent",
  "cloudCover",
  "cloudBase",
  "cloudCeiling",
  "weatherCode",
];

// set the timesteps, like "current", "1h" and "1d"
const timesteps = ["current", "1h", "1d"];

// configure the time frame up to 6 hours back and 15 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, "minutes").toISOString();
const endTime = moment.utc(now).add(1, "days").toISOString();

// choose the unit system, either metric or imperial
const units = "imperial";
// specify the timezone, using standard IANA timezone format
const timezone = "America/New_York";

// request the timelines with all the query string parameters as options
const getTimelineParameters = queryString.stringify(
  {
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
  },
  { arrayFormat: "comma" }
);

let rezzy = {};
axios
  .get(getTimelineURL + "?" + getTimelineParameters)
  .then((json) => console.log(json))
  .then((res) => (rezzy = res))
  .catch((err) => console.error("error: " + err));

const WeatherPage = ({ rezzy }) => {
  return (
    <html lang="en">
      <title>Eric Bilaver</title>
      <Header />
      <p>{rezzy}</p>
    </html>
  );
};

export default WeatherPage;
