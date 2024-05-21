import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const TrackEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <DateInput source="year" />
      <TextInput source="authorName" />
      <NumberInput source="duration" />
      <NumberInput source="idType" />
    </SimpleForm>
  </Edit>
);
