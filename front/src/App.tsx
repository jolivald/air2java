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
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

import { UserList } from "./components/UserList";
import { FestivalList } from "./components/FestivalList";
import { BandList } from "./components/BandList";
import { PersonList } from "./components/PersonList";
import { UserEdit } from "./components/UserEdit";
import { FestivalEdit } from "./components/FestivalEdit";
import { BandEdit } from "./components/BandEdit";
import { PersonEdit } from "./components/PersonEdit";
import { ResponsabilityList } from "./components/ResponsabilityList";
import { ResponsabilityEdit } from "./components/ResponsabilityEdit";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="user"
      icon={HandymanIcon}
      list={UserList}
      edit={UserEdit}
    />
    <Resource
      name="festival"
      icon={FestivalIcon}
      list={FestivalList}
      edit={FestivalEdit}
    />
    <Resource
      name="band"
      icon={GroupIcon}
      list={BandList}
      edit={BandEdit}
    />
    <Resource
      name="person"
      icon={PersonIcon}
      list={PersonList}
      edit={PersonEdit}
    />
    <Resource
      name="responsability"
      icon={WorkIcon}
      list={ResponsabilityList}
      edit={ResponsabilityEdit}
    />
  </Admin>
);
