import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  ArrayField,
  SingleFieldList,
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
      <TextField source="payment_date" />
      <NumberField source="amount" />
      <TextField source="description" />
      <TextField source="status" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="userId" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="user.name" />
      <EditButton />
    </Datagrid>
  </List>
);
