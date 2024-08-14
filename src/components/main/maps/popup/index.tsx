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
        <div className="tooltip-wrapper">
          <div className="card-thumbnail-description">
            <div><strong>{marker.nombre}</strong></div>
            <div>{marker.id}</div>
          </div>
        </div>
      </Popup>
    )
}

CustomPopup.diplayName="CustomPopup";