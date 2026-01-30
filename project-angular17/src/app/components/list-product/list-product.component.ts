import { Component, ElementRef, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListProductService } from '../../services/list-product.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  products = [
    { id: 1, name: 'Produto A', price: 10.0 },
    { id: 2, name: 'Produto B', price: 20.0 },
    { id: 3, name: 'Produto C', price: 30.0 },
  ];

  constructor(private listProductService: ListProductService) {}

  removeProduct(id: number) {
    console.log(
      `Removendo produto com ID: ${id}, lista de produtos: `,
      this.products,
    );
    this.products = this.listProductService.removeProduct(this.products, id);
  }

  editProduct(id: number) {
    console.log(`Editando produto com ID: ${id}`);
  }

  @ViewChild('productModal') modal!: ElementRef<HTMLDialogElement>;

  addProduct() {
    console.log('Adicionando novo produto');
    this.modal.nativeElement.showModal();
  }

  fecharModal() {
    this.modal.nativeElement.close();
  }

  saveProduct() {
    let newProductName = (
      document.getElementById('productName') as HTMLInputElement
    ).value;
    let newProductPrice = (
      document.getElementById('productPrice') as HTMLInputElement
    ).value;

    if (newProductName === '' || newProductPrice === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    } else {
      this.products.push({
        id: this.products.length + 1,
        name: newProductName,
        price: parseFloat(newProductPrice),
      });
      this.fecharModal();
    }
  }
}
