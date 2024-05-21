import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const SpecialisationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="idSpec" />
      <NumberInput source="idPerson" />
    </SimpleForm>
  </Edit>
);
