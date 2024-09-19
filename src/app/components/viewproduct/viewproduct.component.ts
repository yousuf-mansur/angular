import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Productcategory } from '../../models/productcategory';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewproduct',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.scss',
})
export class ViewproductComponent implements OnInit {
  deleteItem(cate: Productcategory) {
    const isConfirm = confirm('Are you sure delete this ' + cate.name);
    if (isConfirm) {
      this.service
        .deleteProducutWithCategory(cate.productCategoryID)
        .subscribe((res) => {
          alert('Deleted Successfully');
          this.getList();
        });
    }
  }
  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.getList();
  }

  productList: Productcategory[] = [];

  getList() {
    this.service.getAllProductWithCategory().subscribe((res) => {
      this.productList = res;
    });
  }
}
