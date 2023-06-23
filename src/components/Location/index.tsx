import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATION_LIST } from "../../utils/graphql/query";
import styles from "./location.module.css";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import FilterButton from "./FilterButton";
import Error from "../Error";
import NoData from "../NoData";
import Card from "./Card";
import { Resources } from "../../types/apiTypes";
import Loader from "../Loader";
import { useDebounce } from "../../hooks";

const Location = () => {
  const [limit, setLimit] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { loading, data, error, refetch } = useQuery(GET_LOCATION_LIST, {
    variables: {
      tenant: process.env.REACT_APP_TENANT_ID,
      limit,
      search: "",
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = (e: any) => {
    const elem = e.target;
    if (elem.offsetHeight + elem.scrollTop >= elem.scrollHeight && !loading) {
      setLimit((prev) => prev + 5);
    }
  };

  useEffect(() => {
    refetch({ search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <div className={styles.locationWrapper}>
      <Header onRefresh={() => refetch()} />
      <LocationSearch onChange={(e) => setSearchTerm(e.target.value)} />
      <div className={styles.filterWrapper}>
        <FilterButton text="Filter 1" />
        <FilterButton text="Filter 2" />
        <FilterButton text="Filter 3" />
        <FilterButton text="Filter 4" />
      </div>
      <div className={styles.locationContent} onScroll={handleScroll}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error.message} />
        ) : data?.locationList?.resources?.length > 0 ? (
          data?.locationList?.resources?.map((location: Resources) => (
            <Card key={location.id} data={location} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Location;
