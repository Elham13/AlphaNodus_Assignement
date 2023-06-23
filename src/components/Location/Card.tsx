import { Resources } from "../../types/apiTypes";
import styles from "./location.module.css";
import { GoLocation } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

type PropType = {
  data: Resources;
};

const Card = ({ data }: PropType) => {
  const navigateToLocation = () => {
    window.open(
      "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544595,77.3012554,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu",
      "_blank"
    );
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
          <span className={styles.phoneBtn}>
            {data.status === "active" ? (
              <AiOutlineCheckCircle style={{ color: "green" }} />
            ) : (
              <AiOutlineCloseCircle style={{ color: "red" }} />
            )}
          </span>
        </div>
      </div>
      <div className={`${styles.right}`}>
        <span className={``}>{data.status}</span>
      </div>
    </div>
  );
};

export default Card;
