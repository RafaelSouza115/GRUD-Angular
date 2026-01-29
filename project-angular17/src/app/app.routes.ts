import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'sobre',
        loadComponent: () => import('./components/sobre/sobre.component').then(m => m.SobreComponent),
    },
    {
        path: 'calculadora',
        loadComponent: () => import('./components/calculadora/calculadora.component').then(m => m.CalculadoraComponent),
    },
    {
        path: 'listprodutos',
        loadComponent: () => import('./components/list-product/list-product.component').then(m => m.ListProductComponent),
    }
];
