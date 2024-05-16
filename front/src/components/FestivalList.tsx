import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const FestivalList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="location" />
      <DateField source="startDate" />
      <DateField source="endDate" />
      <NumberField source="idPerson" />
      <NumberField source="idTown" />
      <NumberField source="person.id" />
      <NumberField source="town.idTown" />
    </Datagrid>
  </List>
);
