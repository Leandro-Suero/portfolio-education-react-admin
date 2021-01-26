import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";
const choices = [
  { role_name: "student" },
  { role_name: "teacher" },
  { role_name: "admin" },
];

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <SelectInput
        source="role"
        choices={choices}
        optionText="role_name"
        optionValue="role_name"
        // allowEmpty
        // emptyText="Choose a role..."
      />
      <BooleanInput source="can_login" />
      <TextInput source="phone" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Create>
);
