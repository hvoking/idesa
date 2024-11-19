// App imports
import './styles.scss';

// Third-party imports
import { InfoWindowF } from '@react-google-maps/api';

export const CustomPopup: any = ({ marker, setPropertyInfo }: any) => {
  const [ latitude, longitude ] = marker.coordinates.split(',').map(Number);
  const onClose = () => setPropertyInfo(null);

  return (
    <InfoWindowF 
      position={{ lat: latitude, lng: longitude }} 
      onCloseClick={onClose}
      options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
    >
        <div className="popup-wrapper">
          <div 
            style={{
              paddingTop: "10px", 
              color: "rgba(126, 126, 132, 1)"
            }}
          >
            {marker.lugar.toUpperCase()}
          </div>
          <div 
            style={{
              fontSize: "3.2em", 
              fontWeight: "500"
            }}
          >
            {marker.nombre.toUpperCase()}
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div style={{display: "grid"}}>
              <div style={{color: "rgba(126, 126, 132, 1)"}}>LOTES</div>
              <div><strong>{marker.lotes}</strong></div>
            </div>
            <div style={{display: "grid"}}>
              <div style={{color: "rgba(126, 126, 132, 1)"}}>DISPONIBLES</div>
              <div><strong>{marker.disponibles}</strong></div>
            </div>
          </div>
          <div>
            DESDE 
            <span 
              style={{
                color: "rgba(255, 130, 48, 1)", 
                fontWeight: "600", 
                fontSize: "1.1em"
              }}
            >
              {marker.desde}
            </span>
          </div>
          <div className="search-cta">
            Ir a la Fracción
          </div>
        </div>
    </InfoWindowF>
  )
}

CustomPopup.diplayName="CustomPopup";