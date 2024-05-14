import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Datagrid,
  List,
  TextField
} from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import HandymanIcon from '@mui/icons-material/Handyman';
import FestivalIcon from '@mui/icons-material/Festival';
//import UserIcon from '@mui/icons-material/People';

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="user"
      icon={HandymanIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
    <Resource
      name="festival"
      icon={FestivalIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
  </Admin>
);

/*
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
        </Datagrid>
    </List>
*/