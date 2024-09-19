import { Routes } from '@angular/router';
import { ViewproductComponent } from './components/viewproduct/viewproduct.component';
import { AddProductComponent } from './components/addproduct/addproduct.component';
import { EditProductComponent } from './components/editproduct/edit-product.component';

export const routes: Routes = [
  { path: '', component: ViewproductComponent },
  { path: 'products', component: ViewproductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'addProduct/edit/:id', component: EditProductComponent },
];
