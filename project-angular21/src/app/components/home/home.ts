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
  // o this. serve para referenciar atributos e métodos da própria classe
  valor = 0;

  incrementar(valor?: number) {
    this.valor += valor || 1;
  }

  decrementar() {
    this.valor--;
  }

  loopExemplo() {
    for (let i = 0; i < 5; i++) {
      console.log('Iteração número:', i);
    }
  } 
}
