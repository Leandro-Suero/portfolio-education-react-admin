import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import Dashboard from "./components/Dashboard";
import { EventList } from "./components/events/EventList";
import { EventShow } from "./components/events/EventShow";
import { EventEdit } from "./components/events/EventEdit";
import { EventCreate } from "./components/events/EventCreate";
import { UserList } from "./components/users/UserList";
import { UserShow } from "./components/users/UserShow";
import { UserEdit } from "./components/users/UserEdit";
import { UserCreate } from "./components/users/UserCreate";
import customRestDataProvider from "./lib/customRestDataProvider";
import customAuthProvider from "./lib/customAuthProvider";

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={customRestDataProvider}
    authProvider={customAuthProvider}
  >
    <Resource
      name="events"
      show={EventShow}
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />
    <Resource
      name="users"
      show={UserShow}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;
