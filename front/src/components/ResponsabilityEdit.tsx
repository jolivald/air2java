import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ResponsabilityEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="nameResponsabilityPerson" />
    </SimpleForm>
  </Edit>
);
