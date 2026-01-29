import { Router, RouterLink } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  homeURL = '/home';
  SobreURL = '/sobre';
  CalculadoraURL = '/calculadora';
  ListProdutosURL = '/listprodutos';
}
