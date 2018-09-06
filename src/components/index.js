import Vue from 'vue';
import Breadcrumb from './Breadcrumb';
import ErrorLog from './ErrorLog';
import FormCom from './FormCom';
import Hamburger from './Hamburger';
import ItemList from './ItemList';
import QueryForm from './QueryForm';
import ScrollPane from './ScrollPane';
import SizeSelect from './SizeSelect';
import ListPage from './ListPage';

const components = [
  Breadcrumb,
  ErrorLog,
  FormCom,
  Hamburger,
  ItemList,
  QueryForm,
  ScrollPane,
  SizeSelect,
  ListPage
];

components.forEach(component => {
  Vue.component(component.name, component);
});
