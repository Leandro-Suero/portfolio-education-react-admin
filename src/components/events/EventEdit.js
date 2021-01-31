import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  FormDataConsumer,
  TextField,
  ArrayField,
  ReferenceField,
  ReferenceArrayInput,
  AutocompleteArrayInput,
} from "react-admin";

export const EventEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput source="start_time" />
      <TextInput source="title" />
      <TextInput multiline source="description" />
      <TextInput source="place" />
      {/* <ArrayInput source="users">
        <SimpleFormIterator>
          <TextInput source="id" label="Id" />
          <TextInput source="name" label="Name" />
          <TextInput source="email" label="Email" />
          <TextInput source="role" label="Role" />
          <BooleanInput source="active" label="Active" />
        </SimpleFormIterator>
      </ArrayInput> */}
      <ArrayInput source="users" label="Participants">
        <SimpleFormIterator disableAdd>
          <FormDataConsumer>
            {({ getSource, scopedFormData }) => {
              return (
                <TextField source="name" record={scopedFormData} />
                // <TextField source={getSource("name")} record={scopedFormData} />
                // <TextInput source={getSource('name')} label="Name" />
                // <TextInput source={getSource('email')} label="Email" />
                // <TextInput source={getSource('role')} label="Role" />
                // <BooleanInput source={getSource('active')} label="Active" />
              );
            }}
          </FormDataConsumer>
        </SimpleFormIterator>
      </ArrayInput>
      <ReferenceArrayInput
        label="Add participant"
        reference="users"
        source="name"
      >
        <AutocompleteArrayInput />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);
