import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const RegionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="idState" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
