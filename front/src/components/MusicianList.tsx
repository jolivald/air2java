import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MusicianList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="idInst" />
      <NumberField source="idPerson" />
    </Datagrid>
  </List>
);
