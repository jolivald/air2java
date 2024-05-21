import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MusicianEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="idInst" />
      <NumberInput source="idPerson" />
    </SimpleForm>
  </Edit>
);
