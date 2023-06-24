import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import Location from "./components/Location";
import { client } from "./config/graphql";
import styles from "./app.module.css";
import LocationDetail from "./components/LocationDetail";

function App() {
  const [locationId, setLocationId] = useState<string | undefined>();

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main className={styles.main_wrapper}>
          <Location onLocationClick={(id) => setLocationId(id)} />
          <LocationDetail id={locationId} />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
