import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  EmailField,
  DateField,
} from "react-admin";

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <BooleanField source="can_login" />
      <TextField source="phone" />
      <BooleanField source="active" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
