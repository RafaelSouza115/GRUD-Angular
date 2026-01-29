import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListProductService } from '../../services/list-product.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  products  = [
    { id: 1, name: 'Produto A', price: 10.0 },
    { id: 2, name: 'Produto B', price: 20.0 },
    { id: 3, name: 'Produto C', price: 30.0 }
  ];

  constructor(private listProductService: ListProductService) {} 

  removeProduct(id: number) {
    console.log(`Removendo produto com ID: ${id}, lista de produtos: `, this.products);
    this.products = this.listProductService.removeProduct(this.products, id);
  }

  editProduct(id: number) {
    console.log(`Editando produto com ID: ${id}`);
  }
}
