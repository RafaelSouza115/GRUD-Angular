import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Captura todas as rotas
    renderMode: RenderMode.Prerender // Define que todas as rotas serão pré-renderizadas
  }
];
