import Vue from "vue";
import Breadcrumb from "./Breadcrumb";
import ErrorLog from "./ErrorLog";
import FormCom from "./FormCom";
import Hamburger from "./Hamburger";
import ItemList from "./ItemList";
import QueryForm from "./QueryForm";
import ScrollPane from "./ScrollPane";
import SizeSelect from "./SizeSelect";
import ListPage from "./ListPage";
import Card from "./Card";
import SideContent from "./SideContent";
import FormControlStatic from "./FormControlStatic";
import AuthTree from "./AuthTree";
import DownloadLink from "./DownloadLink";
import CellGridControls from "./CellGridControls";
import Uploader from "./Uploader";

const components = [
  Breadcrumb,
  ErrorLog,
  FormCom,
  Hamburger,
  ItemList,
  QueryForm,
  ScrollPane,
  SizeSelect,
  ListPage,
  Card,
  SideContent,
  FormControlStatic,
  AuthTree,
  DownloadLink,
  CellGridControls,
  Uploader
];

components.forEach(component => {
  Vue.component(component.name, component);
});
