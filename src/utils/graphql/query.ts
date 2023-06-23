import { gql } from "@apollo/client";

export const GET_LOCATION_LIST = gql`
  query LocationList(
    $tenant: String!
    $limit: Int
    $page: Int
    $search: String
    $status: String
  ) {
    locationList(
      tenant: $tenant
      limit: $limit
      page: $page
      search: $search
      status: $status
    ) {
      pages
      resources {
        id
        name
        address
        type
        status
      }
    }
  }
`;
