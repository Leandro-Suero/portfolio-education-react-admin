import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="start_time" />
      <TextInput source="title" />
      <TextInput multiline source="description" />
      <TextInput source="place" />
    </SimpleForm>
  </Create>
);
