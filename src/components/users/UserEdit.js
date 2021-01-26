import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";
const choices = [
  { role_name: "admin" },
  { role_name: "teacher" },
  { role_name: "student" },
];

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <SelectInput
        source="role"
        choices={choices}
        optionText="role_name"
        optionValue="role_name"
      />
      <BooleanInput source="can_login" />
      <TextInput source="phone" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);
