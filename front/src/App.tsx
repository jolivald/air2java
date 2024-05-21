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
import polyglotI18nProvider from 'ra-i18n-polyglot';
import fr from 'ra-language-french';
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import HandymanIcon from '@mui/icons-material/Handyman';
import FestivalIcon from '@mui/icons-material/Festival';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import FlagIcon from '@mui/icons-material/Flag';


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
import { StateList } from "./components/StateList";
import { StateEdit } from "./components/StateEdit";
import { RegionEdit } from "./components/RegionEdit";
import { RegionList } from "./components/RegionList";
import { TownList } from "./components/TownList";
import { TownEdit } from "./components/TownEdit";

export const i18nProvider = polyglotI18nProvider(() => fr, 'fr'); 

export const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
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
    <Resource
      name="state"
      icon={FlagIcon}
      list={StateList}
      edit={StateEdit}
    />
    <Resource
      name="region"
      icon={FlagIcon}
      list={RegionList}
      edit={RegionEdit}
    />
    <Resource
      name="town"
      icon={FlagIcon}
      list={TownList}
      edit={TownEdit}
    />
  </Admin>
);
