import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import customRestDataProvider from "./lib/customRestDataProvider";

const App = () => (
  <Admin dataProvider={customRestDataProvider}>
    <Resource name="events" list={ListGuesser} />
  </Admin>
);

export default App;
