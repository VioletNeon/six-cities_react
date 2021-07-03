import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from '../../../node_modules/leaflet/dist/leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';

const defaultIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  let markers = [];

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        markers.push(
          leaflet
            .marker({
              lat: point.location.latitude,
              lng: point.location.longitude,
            }, {
              icon: defaultIcon,
            })
            .addTo(map),
        );
      });
    }
    return () => {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });
      markers = [];
    };
  }, [map, points]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.object.isRequired,
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
