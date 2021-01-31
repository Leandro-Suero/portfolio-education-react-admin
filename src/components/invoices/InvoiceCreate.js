import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

export const InvoiceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="payment_date" />
      <NumberInput source="amount" />
      <TextInput multiline source="description" />
      <TextInput source="status" />
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="user.name" />
    </SimpleForm>
  </Create>
);
