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
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PianoIcon from '@mui/icons-material/Piano';
import MicIcon from '@mui/icons-material/Mic';
import StreamIcon from '@mui/icons-material/Stream';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import StyleIcon from '@mui/icons-material/Style';
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
import { InstrumentList } from "./components/InstrumentList";
import { InstrumentEdit } from "./components/InstrumentEdit";
import { MusicianList } from "./components/MusicianList";
import { MusicianEdit } from "./components/MusicianEdit";
import { PerformanceList } from "./components/PerformanceList";
import { PerformanceEdit } from "./components/PerformanceEdit";
import { SpecialisationList } from "./components/SpecialisationList";
import { SpecialisationEdit } from "./components/SpecialisationEdit";
import { SpecialtyList } from "./components/SpecialtyList";
import { SpecialtyEdit } from "./components/SpecialtyEdit";
import { TrackList } from "./components/TrackList";
import { TrackEdit } from "./components/TrackEdit";
import { TypeList } from "./components/TypeList";
import { TypeEdit } from "./components/TypeEdit";

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
      icon={PlaceIcon}
      list={RegionList}
      edit={RegionEdit}
    />
    <Resource
      name="town"
      icon={LocationCityIcon}
      list={TownList}
      edit={TownEdit}
    />
    <Resource
      name="instrument"
      icon={PianoIcon}
      list={InstrumentList}
      edit={InstrumentEdit}
    />
    <Resource
      name="musician"
      icon={MicIcon}
      list={MusicianList}
      edit={MusicianEdit}
    />
    <Resource
      name="performance"
      icon={StreamIcon}
      list={PerformanceList}
      edit={PerformanceEdit}
    />
    <Resource
      name="specialisation"
      icon={StarRateIcon}
      list={SpecialisationList}
      edit={SpecialisationEdit}
    />
    <Resource
      name="specialty"
      icon={LocationSearchingIcon}
      list={SpecialtyList}
      edit={SpecialtyEdit}
    />
    <Resource
      name="track"
      icon={AudiotrackIcon}
      list={TrackList}
      edit={TrackEdit}
    />
    <Resource
      name="type"
      icon={StyleIcon}
      list={TypeList}
      edit={TypeEdit}
    />
  </Admin>
);
