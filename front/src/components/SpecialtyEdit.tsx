import { Edit, SimpleForm, TextInput } from 'react-admin';

export const SpecialtyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
