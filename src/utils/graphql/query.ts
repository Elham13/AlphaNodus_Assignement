import { gql } from "@apollo/client";

export const GET_LOCATION_LIST = gql`
  query LocationList($tenant: String!) {
    locationList(tenant: $tenant) {
      pages
      resources {
        id
        address
        alias
      }
    }
  }
`;
