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
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="start_time" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="place" />
      <ArrayField source="users" fieldKey="id">
        <SingleFieldList>
          <ReferenceField
            label="User"
            source="id"
            reference="users"
            link="show"
          >
            <ChipField source="name" />
          </ReferenceField>
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
