import {
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  DateField,
  ArrayField,
  ReferenceField,
} from "react-admin";

export const EventShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="start_time" label="Starting time" />
      <TextField source="title" />
      <TextField multiline source="description" />
      <TextField source="place" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ArrayField source="users" label="Participants">
        <Datagrid>
          <TextField source="name" />
          <TextField source="id" />
          <EmailField source="email" />
          <TextField source="role" />
          <BooleanField source="active" />
          {/* <ReferenceField
            source="event_users.event_id"
            reference="event_users.events"
          >
            <TextField source="id" />
          </ReferenceField> */}
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
