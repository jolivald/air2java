import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const PersonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="civilStatus" />
      <TextInput source="address_1" />
      <DateInput source="address_2" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <DateInput source="birthdate" />
      <TextInput source="idResponsabilityPerson" />
      <TextInput source="idAppuser" />
      <NumberInput source="idBand" />
      <NumberInput source="idTown" />
    </SimpleForm>
  </Edit>
);
