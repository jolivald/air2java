import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const PerformanceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="date" />
      <TextInput source="startTime" />
      <TextInput source="endTime" />
      <NumberInput source="idFest" />
      <NumberInput source="idBand" />
    </SimpleForm>
  </Edit>
);
