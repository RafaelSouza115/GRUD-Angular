import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],  
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    meuBooleano = false;

    atualizarBooleano(valor: boolean) {
        this.meuBooleano = valor;
    }
}
