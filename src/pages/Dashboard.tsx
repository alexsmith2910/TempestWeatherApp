import { MapPinIcon } from "@heroicons/react/24/solid";
import Graph from "../components/Graph/Graph";
import PercipitationCard from "../components/WeatherCards/PercipitationCard";
import UVIndexCard from "../components/WeatherCards/UVIndexCard";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 mt-5 mx-5">
        <div className="weather-quickview break-after-avoid">
          <div className="current-location flex text-center">
            <MapPinIcon className="h-5 w-5 inline-block " color="white" />
            <span id="current-location" className="inline-block pl-2">
              Staines-Upon-Thames, UK
            </span>
            <span id="current-date" className="inline-block pl-1 text-gray-400">
              (Friday, February 16 2024)
            </span>
          </div>
          <div className="temperature-stats flex flex-column p-5 pl-2 aeronaut">
            <h1
              id="current-temperature"
              className="text-8xl aquatico inline-block"
            >
              18<span className="text-4xl align-top">°C</span>
            </h1>
            <div className="weather-extras pl-5 text-gray-400">
              <div className="flex-col my-2">
                <p className="text-xl">
                  Precipitation: <span>10%</span>
                </p>
                <p className="text-xl">
                  Humidity: <span>85%</span>
                </p>
                <p className="text-xl">
                  Wind: <span>10 mph</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-more">
          <div className="flex flex-col items-end gap-5">
            <PercipitationCard />
            {/* <UVIndexCard /> */}
          </div>
        </div>
      </div>
      <div className="weather-calendar m-5 absolute bottom-0 w-full max-w-[calc(100%-20rem-40px)]">
        <h1
          id="weather-status-title"
          className="text-5xl text-white/60 pb-10 pl-5 aquatico"
        >
          Sunny
          <br />
          With Partial Clouds
        </h1>
        <div className="columns-5 gap-0 text-center">
          <h2 className="text-xl">Monday</h2>
          <h2 className="text-xl">Tuesday</h2>
          <h2 className="text-xl">Wednesday</h2>
          <h2 className="text-xl">Thursday</h2>
          <h2 className="text-xl">Friday</h2>
        </div>
        <div className="h-60 py-5 px-5 pr-10">
          <Graph />
        </div>
        <div className="columns-5 gap-0 text-center">
          <h2 className="text-3xl">12</h2>
          <h2 className="text-3xl">14</h2>
          <h2 className="text-3xl">13</h2>
          <h2 className="text-3xl">16</h2>
          <h2 className="text-3xl">12</h2>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
