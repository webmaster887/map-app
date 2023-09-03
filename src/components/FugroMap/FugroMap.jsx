import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { utmToLatLong } from "../../helpers/proj4helper";
import { Icon } from 'leaflet'
import './FugroMap.css';
import 'leaflet/dist/leaflet.css';
import marker from 'leaflet/dist/images/marker-icon.png';
import points from '../../data/points.json';

const markerIcon = new Icon({
    iconUrl: marker,
})
/**
 * Renders the map component
 */
function FugroMap() {
    return (
        <div id="map">
            <MapContainer attributionControl={false} center={utmToLatLong(points[0].easting, points[0].northing)} zoom={7} maxZoom={18} scrollWheelZoom={true}>
                <LayersControl >
                    <LayersControl.BaseLayer checked name="Map View">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Earth View">
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                {
                    points.map(function (point, index) {
                        return (
                            <Marker key={index} title={point.name} position={utmToLatLong(point.easting, point.northing)} icon={markerIcon}>
                                <Popup offset={[10, 10]}>
                                    <h4>{point.name}</h4>
                                    <b>Easting</b>: {point.easting}<br />
                                    <b>Northing</b>: {point.northing} <br />
                                    <b>Depth</b>: {point.depth} m<br />
                                    <b>Layer Amount</b>: {point.amount}
                                </Popup>
                            </Marker>
                        );
                    })
                }
            </MapContainer>
        </div>
    );
}

export default FugroMap;