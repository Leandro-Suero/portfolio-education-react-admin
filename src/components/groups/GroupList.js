import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  ArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
} from "react-admin";

export const GroupList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="active" />
      <ArrayField source="users">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
