import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const TownEdit = () => (
  <Edit>
    <SimpleForm>
    <TextInput source="id" />
    <TextInput source="postalCode" />
    <NumberInput source="idRegion" />
    <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
