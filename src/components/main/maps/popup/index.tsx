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
        offset={20}
      >
          <div className="popup-wrapper">
            <div style={{paddingTop: "20px", borderBottom: "2px solid rgba(126, 126, 132, 0.2)"}}>
              <div className="search-cross" style={{position: "absolute", right: "10px", top: "10px"}}>
                  <svg viewBox="0 0 15 15" onClick={onClose}>
                      <line
                          x1={0}
                          y1={0}
                          x2={15}
                          y2={15}
                          stroke="rgba(0, 0, 0, 0.6)"
                          strokeWidth="2"
                      />
                      <line
                          x1={15}
                          y1={0}
                          x2={0}
                          y2={15}
                          stroke="rgba(0, 0, 0, 0.6)"
                          strokeWidth="2"
                      />
                  </svg>
              </div>
            </div>
            <div style={{paddingTop: "10px", color: "rgba(126, 126, 132, 1)"}}>{marker.lugar.toUpperCase()}</div>
            <div style={{fontSize: "3.2em", fontWeight: "500"}}>{marker.nombre.toUpperCase()}</div>
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
            <div>DESDE <span style={{color: "rgba(255, 130, 48, 1)", fontWeight: "600", fontSize: "1.1em"}}>{marker.desde}</span></div>
            <div className="search-cta">Ir a la Fracción</div>
          </div>
      </Popup>
    )
}

CustomPopup.diplayName="CustomPopup";