import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Adiciona ouvintes globais de erros para o navegador
    provideRouter(routes), // Configura o roteador com as rotas definidas
     provideClientHydration(withEventReplay()) // Habilita a hidratação do cliente com replay de eventos
  ]
};
