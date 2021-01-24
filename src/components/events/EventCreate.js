import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const EventCreate = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateInput source="start_time" />
      <TextInput source="title" />
      <TextInput multiline source="description" />
      <TextInput source="place" />
      {/* <ArrayInput source="users"><SimpleFormIterator><TextInput source="name" />
<TextInput source="id" />
<TextInput source="email" />
<TextInput source="role" />
<BooleanInput source="active" />
<ReferenceInput source="event_users.event_id" reference="event_users.events"><SelectInput optionText="id" /></ReferenceInput></SimpleFormIterator></ArrayInput>*/}
    </SimpleForm>
  </Edit>
);
