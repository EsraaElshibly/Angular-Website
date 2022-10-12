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

  saveOrder()
  {
    localStorage.setItem('orderItems', JSON.stringify(this.products))
  }

  addOrder(addedProduct: any)
  {
    this.products.push(addedProduct)
    this.saveOrder()
  }

  loadOrder()
  {
    this.products = JSON.parse(localStorage.getItem('orderItems') as any) || [] 
  }

  productsInOrder(product: any)
  {
    return this.products.findIndex((x: any) => x.id === product.id ) > -1
  }
  
}
