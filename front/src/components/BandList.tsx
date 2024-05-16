import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const BandList = () => (
  <List>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="idPerson" />
    </Datagrid>
  </List>
);
