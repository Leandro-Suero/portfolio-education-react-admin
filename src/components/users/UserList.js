import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <BooleanField source="can_login" />
      <TextField source="phone" />
      <BooleanField source="active" />
      <EditButton />
    </Datagrid>
  </List>
);
