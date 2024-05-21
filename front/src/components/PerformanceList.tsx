import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const PerformanceList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="startTime" />
      <TextField source="endTime" />
      <NumberField source="idFest" />
      <NumberField source="idBand" />
    </Datagrid>
  </List>
);
