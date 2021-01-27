import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  DateInput,
  ReferenceInput,
} from "react-admin";

export const InvoiceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
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
  </Edit>
);
