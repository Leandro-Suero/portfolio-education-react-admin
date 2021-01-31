import {
  List,
  Datagrid,
  TextField,
  ChipField,
  EditButton,
  NumberField,
  DateField,
  ReferenceField,
} from "react-admin";

export const InvoiceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
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
      <EditButton />
    </Datagrid>
  </List>
);
