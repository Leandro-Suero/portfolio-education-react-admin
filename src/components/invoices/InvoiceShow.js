import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  ChipField,
} from "react-admin";

export const InvoiceShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="payment_date" />
      <NumberField
        source="amount"
        options={{ style: "currency", currency: "ARS" }}
      />
      <TextField source="description" />
      <TextField source="status" />
      <ReferenceField source="user_id" reference="users" link="show">
        <ChipField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
