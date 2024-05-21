import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const TownList = () => (
  <List>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="postalCode" />
    <NumberField source="idRegion" />
    <TextField source="name" />
    </Datagrid>
  </List>
);
