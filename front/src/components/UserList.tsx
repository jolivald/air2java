import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
    </Datagrid>
  </List>
);
