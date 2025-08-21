'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import markerPng from "../../../public/assets/marker.png"

// Your Snazzy Maps style array
const customMapStyle = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#62838e"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dae4df"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#3f4a51"
      },
      {
        "weight": "0.30"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "saturation": "-100"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#feffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "lightness": "0"
      },
      {
        "color": "#bbcacf"
      },
      {
        "weight": "0.50"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      },
      {
        "color": "#feffff"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a9b4b8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#feffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "invert_lightness": true
      },
      {
        "saturation": "-7"
      },
      {
        "lightness": "3"
      },
      {
        "gamma": "1.80"
      },
      {
        "weight": "0.01"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#feffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "weight": "0.5"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#7eb8c2"
      }
    ]
  }
];

export default function SimpleMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  function initMap() {
    if (!mapInstanceRef.current && window.google) {
      const location = { lat: 34.064834, lng: 73.366237 };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        styles: customMapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      // Add custom marker
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapInstanceRef.current,
        icon: {
          url: markerPng.src,
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });

      // Always-visible label
      const labelDiv = document.createElement("div");
      labelDiv.style.background = "transparent";
      labelDiv.style.borderRadius = "6px";
      labelDiv.style.fontSize = "16px";
      labelDiv.style.fontWeight = "600";
      labelDiv.style.color = "black";
      labelDiv.style.textAlign = "left";
      labelDiv.innerText = `Serene Heights Nathia\nGali Hotel & Resort`;

      const labelOverlay = new window.google.maps.OverlayView();
      labelOverlay.onAdd = function () {
        const panes = this.getPanes();
        panes.floatPane.appendChild(labelDiv);
      };
      labelOverlay.draw = function () {
        const projection = this.getProjection();
        const pos = projection.fromLatLngToDivPixel(location);
        labelDiv.style.position = "absolute";
        labelDiv.style.left = pos.x + 20 + "px";
        labelDiv.style.top = pos.y - 35 + "px";
      };
      labelOverlay.onRemove = function () {
        if (labelDiv.parentNode) {
          labelDiv.parentNode.removeChild(labelDiv);
        }
      };
      labelOverlay.setMap(mapInstanceRef.current);
    }
  }

  useEffect(() => {
    if (window.google) {
      initMap();
    }
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBhNxQHyvty5jmoon23zVKcALKtAw-WXco&libraries=places`}
        strategy="afterInteractive"
        onLoad={() => initMap()}
      />
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100vh'
        }}
      />
    </>
  );
}