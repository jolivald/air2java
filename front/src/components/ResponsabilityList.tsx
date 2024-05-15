import { Datagrid, List, TextField } from 'react-admin';

export const ResponsabilityList = () => (
  <List>
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="nameResponsabilityPerson" />
    </Datagrid>
  </List>
);
