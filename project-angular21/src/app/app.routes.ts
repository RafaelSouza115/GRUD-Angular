import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '/', //isso que aparece na barra de endereços
    component: Home, //componente que será renderizado
  },
  {
    path: 'header', //isso que aparece na barra de endereços
    component: Header, //componente que será renderizado
  },
];
