import { Datagrid, DateField, EmailField, List, NumberField, TextField } from 'react-admin';

export const PersonList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="civilStatus" />
      <TextField source="address_1" />
      <DateField source="address_2" />
      <TextField source="phone" />
      <EmailField source="email" />
      <DateField source="birthdate" />
      <TextField source="idResponsabilityPerson" />
      <NumberField source="idAppuser" />
      <NumberField source="idBand" />
      <NumberField source="idTown" />
    </Datagrid>
  </List>
);
