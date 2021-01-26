import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { EventList } from "./components/events/EventList";
import { EventEdit } from "./components/events/EventEdit";
import { EventCreate } from "./components/events/EventCreate";
import { UserList } from "./components/users/UserList";
import { UserEdit } from "./components/users/UserEdit";
import { UserCreate } from "./components/users/UserCreate";
import customRestDataProvider from "./lib/customRestDataProvider";
import customAuthProvider from "./lib/customAuthProvider";

const App = () => (
  <Admin
    dataProvider={customRestDataProvider}
    authProvider={customAuthProvider}
  >
    <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;
