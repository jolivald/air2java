import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const BandEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <NumberInput source="idPerson" />
      </SimpleForm>
    </Edit>
);
