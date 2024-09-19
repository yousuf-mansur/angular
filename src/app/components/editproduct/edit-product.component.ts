import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Productcategory } from '../../models/productcategory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: 'edit-product.component.html',
  styleUrl: 'editproduct.component.scss',
})
export class EditProductComponent implements OnInit {
  addProduct() {
    throw new Error('Method not implemented.');
  }
  updateProductCategory() {
    throw new Error('Method not implemented.');
  }
  deleteProduct(_t76: Product, arg1: Product[]) {
    throw new Error('Method not implemented.');
  }
  productObj: Product = {
    productID: 0,
    name: '',
    productNumber: '',
    color: '',
    standardCost: 0,
    listPrice: 0,
    size: 0,
    weight: 0,
    productCategoryID: 0,
  };
  productList: Product[] = [];
  productCategory: Productcategory = {
    name: '',
    productCategoryID: 0,
    products: [],
  };
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.service.getCategoryAndProductById(Number(id)).subscribe({
            next: (res) => {
              this.productList = res.products;
              this.productCategory = {
                productCategoryID: res.productCategoryID,
                name: res.name,
                products: this.productList,
              };
            },
          });
        }
      },
    });
  }
}
