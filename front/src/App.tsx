import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
//import crudProvider from 'ra-data-nestjsx-crud';
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user" list={ListGuesser} />
  </Admin>
);
