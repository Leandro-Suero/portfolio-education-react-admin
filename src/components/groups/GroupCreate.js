import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
} from "react-admin";

export const GroupCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <BooleanInput source="active" />
      {/* <ArrayInput source="users">
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="id" />
          <TextInput source="email" />
          <TextInput source="role" />
          <BooleanInput source="active" />
          <ReferenceInput
            source="group_users.group_id"
            reference="group_users.groups"
          >
            <SelectInput optionText="id" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput> */}
    </SimpleForm>
  </Create>
);
