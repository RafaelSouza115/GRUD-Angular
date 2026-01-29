import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListProductService {
  constructor() {  }

  removeProduct(products: any[], id: number): any[] {
    console.log(`Removendo produto com ID pelo service: ${id}`);
    return products.filter((p) => p.id !== id);
  }

  editProduct(products: any[], id: number){
    console.log(`Editando produto com ID pelo service: ${id}`);
  }
}
