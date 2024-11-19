// App imports
import './styles.scss';

// Third-party imports
import { OverlayView, OverlayViewF } from '@react-google-maps/api';

export const CustomMarker = ({ propertyData, currentId, setCurrentId, setPropertyInfo }: any) => {
  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.id);
    setPropertyInfo(marker);
  };
  
  return (
    <>
      {propertyData?.map((marker: any, index: number) => {
        const [ latitude, longitude ] = marker.coordinates.split(',').map(Number);
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
                <div className={`marker-content ${currentId === propertyId || currentId === null ? "active" : ""}`}>
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