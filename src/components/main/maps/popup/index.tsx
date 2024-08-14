// App imports
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ marker, setPropertyInfo }: any) => {
  const coordinates = marker.coordinates.split(",");

  const longitude = coordinates[1];
  const latitude = coordinates[0];

  const onClose = () => setPropertyInfo(null);

  return (
      <Popup
        longitude={longitude}
        latitude={latitude}
        closeOnClick={false}
        onClose={onClose}
        closeOnMove={true}
        offset={20}
      >
          <div className="popup-wrapper">
            <div style={{paddingTop: "20px", borderBottom: "2px solid rgba(126, 126, 132, 0.2)"}}></div>
            <div>{marker.lugar}</div>
            <div style={{fontSize: "2.4em", fontWeight: "600"}}>{marker.nombre}</div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
              <div style={{display: "grid"}}>
                <div>LOTES</div>
                <div>{marker.lotes}</div>
              </div>
              <div style={{display: "grid"}}>
                <div>DISPONIBLES</div>
                <div>{marker.disponibles}</div>
              </div>
            </div>
            <div>DESDE {marker.desde}</div>
            <div>Ir a la Fracción</div>
          </div>
      </Popup>
    )
}

CustomPopup.diplayName="CustomPopup";