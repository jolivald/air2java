import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const TrackList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="year" />
      <TextField source="authorName" />
      <NumberField source="duration" />
      <NumberField source="idType" />
    </Datagrid>
  </List>
);
