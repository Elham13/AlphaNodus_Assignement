import styles from "./locationDetails.module.css";
import { PiFolderNotchOpen } from "react-icons/pi";

type PropType = {
  id?: string;
};

const LocationDetail = ({ id }: PropType) => {
  if (!id)
    return (
      <div className={styles.emptyDetail}>
        <h3>Details</h3>
        <div>
          <span>
            <PiFolderNotchOpen />
          </span>
          <h4>Nothing here</h4>
          <p>Please click on a location name</p>
        </div>
      </div>
    );

  return <div className={styles.detailsWrapper}>LocationDetail</div>;
};

export default LocationDetail;
