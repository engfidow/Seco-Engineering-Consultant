import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./style.css";
import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
    iconUrl: "https://i.ibb.co/MnMJt7Z/without-Text.png",
    // iconUrl: {location},
    iconSize: [38, 38] // size of the icon
  });
  
  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };
  
  // markers
  const markers = [
    {
      geocode: [2.03275409548945, 45.3185508554569],
      popUp: "123 Maka Al Mukarama"
    }
  ];
  const MapLocation = () => {
    return (
      <MapContainer center={[2.03275409548945, 45.3185508554569]} zoom={13}>
        {/* OPEN STREEN MAPS TILES */}
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* WATERCOLOR CUSTOM TILES */}
        {/* <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        /> */}
        {/* GOOGLE MAPS TILES */}
        <TileLayer
          attribution="Google Maps"
          // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        /> 
  
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
          {/* Mapping through the markers */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
  
          {/* Hard coded markers */}
          <Marker position={[51.505, -0.09]} icon={customIcon}>
            <Popup>This is popup 1</Popup>
          </Marker>
          <Marker position={[51.504, -0.1]} icon={customIcon}>
            <Popup>This is popup 2</Popup>
          </Marker>
          <Marker position={[51.5, -0.09]} icon={customIcon}>
            <Popup>This is popup 3</Popup>
          </Marker>
        
        </MarkerClusterGroup>
      </MapContainer>
    );
  };
  
export default MapLocation;