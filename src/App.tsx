import { ApolloProvider } from "@apollo/client";
import Location from "./components/Location";
import { client } from "./config/graphql";
import styles from "./app.module.css";
// import LocationDetail from "./components/LocationDetail";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main className={styles.main_wrapper}>
          <Location />
          {/* <LocationDetail /> */}
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
