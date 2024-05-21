import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const RegionList = () => (
  <List>
    <Datagrid rowClick="edit">
    <TextField source="id" />
    <NumberField source="idState" />
    <TextField source="name" />
    </Datagrid>
  </List>
);
