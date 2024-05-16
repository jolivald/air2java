import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const FestivalEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="location" />
      <DateInput source="startDate" />
      <DateInput source="endDate" />
      <NumberInput source="idPerson" />
      <NumberInput source="idTown" />
      <NumberInput source="person.id" />
      <NumberInput source="town.idTown" />
    </SimpleForm>
  </Edit>
);
