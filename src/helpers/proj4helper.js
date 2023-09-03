import proj4 from 'proj4';
/**
 * Converts WGS84 UTM co-ordinates to Latitude & Longitude
 * @param {number} easting 
 * @param {number} northing 
 * @param {string} zone
 * @returns {Array} [Latitude, Longitude]
 */
export function utmToLatLong(easting, northing, zone = '40') {
    const utmProjection = `+proj=utm +zone=${zone} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
    const wgs84Projection = 'EPSG:4326';
    const utmCoordinates = [easting, northing];
    // Convert to latitude and longitude
    return proj4(utmProjection, wgs84Projection, utmCoordinates).reverse();
}