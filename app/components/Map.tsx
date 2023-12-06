'use client'

import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import mrkerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import mrkerIcon from 'leaflet/dist/images/marker-icon.png';
import mrkerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: mrkerIcon2x.src,
    iconUrl: mrkerIcon.src,
    shadowUrl: mrkerShadow.src
});

interface MapProps {
    center?: number[];

}

const Map: React.FC<MapProps> = ({
    center
                                 }) => {
    return(
        <MapContainer center={center as L.LatLngExpression || [51, -0.09]} zoom={center ? 4:2} scrollWheelZoom={false} className="h-[35] rounded-lg">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center && (
                <Marker position={center as L.LatLngExpression}/>
            )}
        </MapContainer>
    )
}

export default Map