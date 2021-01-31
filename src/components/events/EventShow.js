import {
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  DateField,
  ArrayField,
} from "react-admin";

export const EventShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="start_time" label="Starting time" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="place" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ArrayField source="users" label="Participants">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="role" />
          <BooleanField source="active" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
