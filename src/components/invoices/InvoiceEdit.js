import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  DateInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";

const choices = [{ name: "free" }, { name: "paid" }, { name: "unpaid" }];

export const InvoiceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput source="payment_date" />
      <NumberInput source="amount" />
      <TextInput multiline source="description" />
      <SelectInput
        source="status"
        choices={choices}
        optionText="name"
        optionValue="name"
      />
      <ReferenceInput
        label="User"
        source="user_id"
        reference="users"
        link="show"
      >
        <AutocompleteInput optionText="name" resettable />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
