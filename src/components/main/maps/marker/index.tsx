// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ propertyData, propertyInfo, currentId, setCurrentId, setPropertyInfo }: any) => {
  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.id);
    propertyInfo && setPropertyInfo(marker); 
  }

  return (
    <>
      {
        propertyData?.map((marker: any, index: number) => {
          const coordinates = marker.coordinates.split(",");
          const propertyId = marker.id

          const longitude = coordinates[1];
          const latitude = coordinates[0];

          return (
            <Marker key={index} longitude={longitude} latitude={latitude}>
              <div className="marker-content-wrapper">
                <div 
                  className={currentId === propertyId || currentId === null ? "marker-content-active" : "marker-content"} 
                  onClick={(e: any) => onClick(e, marker)}
                  style={{display: "grid", alignItems: "center", textAlign: "center", fontSize: "1.4em", fontWeight: "600"}}
                >
                  {propertyId}
                </div>
              </div>
            </Marker>
        )})
      }
    </>
  );
}

CustomMarker.displayName="CustomMarker";