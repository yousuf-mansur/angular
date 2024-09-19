import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productcategory } from '../models/productcategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://localhost:7115/ProductCategories';
  constructor(private http: HttpClient) {}

  getAllProductWithCategory(): Observable<Productcategory[]> {
    return this.http.get<Productcategory[]>(this.baseUrl);
  }

  deleteProducutWithCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCategoryAndProductById(cateId: number) {
    return this.http.get<Productcategory>(this.baseUrl + `/${cateId}`);
  }

  addProductAndCategory(
    category: Productcategory
  ): Observable<Productcategory> {
    return this.http.post<Productcategory>(this.baseUrl, category);
  }

  updateProductAndCategory(
    cateId: number,
    category: Productcategory
  ): Observable<Productcategory> {
    return this.http.put<Productcategory>(
      this.baseUrl + `/${cateId}`,
      category
    );
  }
}
