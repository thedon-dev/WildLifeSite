import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";

const DiscoverMorePage = () => {
  const reserveCoordinates = [51.509865, -0.118092]; // Example: London, replace with actual coordinates of a reserve

  return (
    <section className="px-[5%] lg:px-[10%] py-20">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Discover More About the British Wildlife Reserve
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          The British Wildlife Reserve is a sanctuary for countless species of
          animals and plants, providing a safe haven and helping protect
          biodiversity. Located in the heart of the countryside, it spans
          thousands of acres, offering a unique ecosystem for endangered and
          native wildlife. Visit the reserve to witness the beauty of nature
          and join efforts to conserve the environment.
        </p>
        <div className="w-full h-[30rem]">
          <MapContainer
            center={reserveCoordinates}
            zoom={10}
            scrollWheelZoom={false}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={reserveCoordinates}>
              <Popup>
                British Wildlife Reserve. <br /> A haven for biodiversity.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMorePage;
