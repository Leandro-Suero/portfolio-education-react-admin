import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
} from "react-admin";

export const InvoiceShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="payment_date" />
      <NumberField source="amount" />
      <TextField multiline source="description" />
      <TextField source="status" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ReferenceField source="userId" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="user" />
    </SimpleShowLayout>
  </Show>
);
