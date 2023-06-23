import { ApolloProvider } from "@apollo/client";
import Location from "./components/Location/Location";
import { client } from "./config/graphql";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Location />
      </ApolloProvider>
    </div>
  );
}

export default App;
