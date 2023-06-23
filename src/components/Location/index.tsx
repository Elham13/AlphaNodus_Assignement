// import { useQuery } from "@apollo/client";
// import { GET_LOCATION_LIST } from "../../utils/graphql/query";
import styles from "./location.module.css";
import Header from "./Header";
import LocationSearch from "./LocationSearch";

const Location = () => {
  // const { loading, data, error } = useQuery(GET_LOCATION_LIST, {
  //   variables: {
  //     tenant: process.env.REACT_APP_TENANT_ID,
  //   },
  // });

  // if (loading) return <div>Loading...</div>;
  // if (error) {
  //   console.log("error: ", error.message);
  //   return <div>Error...</div>;
  // }

  return (
    <div className={styles.locationWrapper}>
      <Header />
      <LocationSearch />
    </div>
  );
};

export default Location;
