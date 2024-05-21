import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const SpecialisationList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="idSpec" />
      <NumberField source="idPerson" />
    </Datagrid>
  </List>
);
