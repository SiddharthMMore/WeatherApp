import React, { useEffect, useRef } from 'react';

export default (props) => {
  const mapEl = useRef();
  useEffect(() => {
    console.log(props.lon, props.lat);
    const google = window.google;
    new google.maps.Map(mapEl.current, {
      zoom: 12,
      center: {
        lat: props.lat,
        lng: props.lon,
      },
    });
  });
  return <div ref={mapEl} />;
};
