import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
} from "react-admin";

export const EventList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="start_time" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="place" />
      <ArrayField source="users">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      {/* <ReferenceField label="User" source="userId" reference="users">
          <TextField source="name" />
      </ReferenceField> */}
      <EditButton />
    </Datagrid>
  </List>
);
