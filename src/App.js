import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { EventList } from "./components/events/EventList";
import { EventEdit } from "./components/events/EventEdit";
import { EventCreate } from "./components/events/EventCreate";
import customRestDataProvider from "./lib/customRestDataProvider";

const App = () => (
  <Admin dataProvider={customRestDataProvider}>
    <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />
  </Admin>
);

export default App;
