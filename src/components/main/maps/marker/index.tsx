// React imports
import { useEffect, useState } from 'react';

// App imports
import './styles.scss';

// Third-party imports
import { OverlayView, OverlayViewF } from '@react-google-maps/api';

export const CustomMarker = ({ propertyData, currentId, setCurrentId, setPropertyInfo }: any) => {
  const [ selectedMarker, setSelectedMarker ] = useState<any>(null);

  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.id);
    setPropertyInfo(marker);
  };

  const getPixelPositionOffset = (offsetWidth: any, offsetHeight: any, labelAnchor: any) => {
      return {
          x: offsetWidth + labelAnchor.x,
          y: offsetHeight + labelAnchor.y,
      };
  };

  return (
    <>
      {propertyData?.map((marker: any, index: number) => {
        const [latitude, longitude] = marker.coordinates.split(',').map(Number);
        const propertyId = marker.id;

        return (
            <OverlayViewF
              key={index}
              position={{ lat: latitude, lng: longitude }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              getPixelPositionOffset={(width, height) => ({
                x: -(width / 2),
                y: -(height / 2),
              })}
            >
              <div className="marker-content-wrapper" onClick={(e: any) => onClick(e, marker)}>
                <div 
                  className={currentId === propertyId || currentId === null ? "marker-content-active" : "marker-content"} 
                  style={{display: "grid", alignItems: "center", textAlign: "center", fontSize: "1.4em", fontWeight: "600"}}
                >
                  {propertyId}
                </div>
              </div>
            </OverlayViewF>
        );
      })}
    </>
  );
};

CustomMarker.displayName = 'CustomMarker';