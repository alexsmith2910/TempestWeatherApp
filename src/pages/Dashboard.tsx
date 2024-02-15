import { MapPinIcon } from "@heroicons/react/24/solid";


function Dashboard() {
    return (
        <>
            <div className="weather-quickview mt-5 ml-5">
                <div className="current-location flex text-center">
                    <MapPinIcon className="h-6 w-6 inline-block" color="white" />
                    <span id="current-location" className="inline-block pl-2">Staines-Upon-Thames, UK</span>
                    <span id="current-date" className="inline-block pl-1 text-gray-400">(Friday, February 16 2024)</span>
                </div>
                <div className="temperature-stats p-5 pl-0 flex aeronaut">
                    <h1 id="current-temperature" className="text-8xl aquatico inline-block">18<span className="text-4xl align-top">°C</span></h1>
                    <div className="weather-extras pl-5 text-gray-400">
                        <div className="flex-col my-2">
                            <p className="text-xl">Precipitation: <span>10%</span></p>
                            <p className="text-xl">Humidity: <span>85%</span></p>
                            <p className="text-xl">Wind: <span>10 mph</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;


