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

type PropType = {
  onLocationClick: (id: string) => void;
};

const Location = ({ onLocationClick }: PropType) => {
  const [limit, setLimit] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { loading, data, error, refetch } = useQuery(GET_LOCATION_LIST, {
    variables: {
      tenant: process.env.REACT_APP_TENANT_ID,
      limit,
      search: "",
      status: filters,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = (e: any) => {
    const elem = e.target;
    if (
      elem.offsetHeight + elem.scrollTop + 2 >= elem.scrollHeight &&
      !loading
    ) {
      setLimit((prev) => prev + 5);
    }
  };

  useEffect(() => {
    if (!!debouncedSearch) refetch({ search: debouncedSearch });
  }, [debouncedSearch, refetch]);

  return (
    <div className={styles.locationWrapper}>
      <Header onRefresh={() => refetch()} />
      <LocationSearch onChange={(e) => setSearchTerm(e.target.value)} />
      <div className={styles.filterWrapper}>
        <FilterButton
          text="active"
          active={filters === "active"}
          onClick={() =>
            setFilters((prev) => (prev === "active" ? "" : "active"))
          }
        />
        <FilterButton
          text="inactive"
          active={filters === "inactive"}
          onClick={() =>
            setFilters((prev) => (prev === "inactive" ? "" : "inactive"))
          }
        />
        <FilterButton
          text="Filter 3"
          active={filters === "filter1"}
          onClick={() =>
            setFilters((prev) => (prev === "filter1" ? "" : "filter1"))
          }
        />
        <FilterButton
          text="Filter 4"
          active={filters === "filter2"}
          onClick={() =>
            setFilters((prev) => (prev === "filter2" ? "" : "filter2"))
          }
        />
      </div>
      <div className={styles.locationContent} onScroll={handleScroll}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error.message} />
        ) : data?.locationList?.resources?.length > 0 ? (
          data?.locationList?.resources?.map((location: Resources) => (
            <Card
              key={location.id}
              data={location}
              onLocationClick={onLocationClick}
            />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Location;
