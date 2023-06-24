import { Resources } from "../../types/apiTypes";
import styles from "./location.module.css";
import { GoLocation } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import moment from "moment";

type PropType = {
  data: Resources;
};

const Card = ({ data }: PropType) => {
  const navigateToLocation = () => {
    window.open(`https://www.google.com/maps?q=${data.address}`, "_blank");
  };

  const copyPhoneNo = () => {
    navigator.clipboard.writeText("+919394828485");
    alert("Phone no copied to clipboard!");
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.left}>
        <p className={styles.title}>{data.name}</p>
        <p className={styles.subTitle}>{data.address}</p>
        <div className={styles.widgetsWrapper}>
          <span
            className={styles.locationBtn}
            title="Location"
            onClick={navigateToLocation}
          >
            <GoLocation />
          </span>
          <span
            className={styles.phoneBtn}
            title="Copy phone number"
            onClick={copyPhoneNo}
          >
            <LuPhoneCall />
          </span>
          <span className={styles.phoneBtn} title={data.status}>
            {data.status === "active" ? (
              <AiOutlineCheckCircle style={{ color: "green" }} />
            ) : (
              <AiOutlineCloseCircle style={{ color: "red" }} />
            )}
          </span>
        </div>
      </div>
      <div className={`${styles.right}`}>
        {!!data.status ? (
          <span
            className={`${
              data.status === "active" ? styles.active : styles.inactive
            }`}
          >
            {data.status}
          </span>
        ) : (
          <p />
        )}
        <p className={styles.updatedAt}>
          Last Updated: {moment(data.updatedAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default Card;
