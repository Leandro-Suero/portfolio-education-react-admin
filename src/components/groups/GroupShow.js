import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  EmailField,
  DateField,
} from "react-admin";

export const GroupShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="active" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      {/* <ArrayField source="users">
        <Datagrid>
          <TextField source="name" />
          <TextField source="id" />
          <EmailField source="email" />
          <TextField source="role" />
          <BooleanField source="active" />
          <ReferenceField
            source="group_users.group_id"
            reference="group_users.groups"
          >
            <TextField source="id" />
          </ReferenceField>
        </Datagrid>
      </ArrayField> */}
    </SimpleShowLayout>
  </Show>
);
