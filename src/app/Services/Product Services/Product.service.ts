import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: any[] = []

  constructor(private http: HttpClient) { }

  getAllProducts()
  {
    return this.http.get('assets/porducts.json')
  }

  getProducts()
  {
    return this.products
  }
}
