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

  // Function to save order into local dtorage, to make orders easy for save and is shown again
  saveOrder()
  {
    localStorage.setItem('orderItems', JSON.stringify(this.products))
  }

  // Function to push new order into orderList
  addOrder(addedProduct: any)
  {
    this.products.push(addedProduct)
    this.saveOrder()
  }

  // Function to load data form localStorage to show this data if user open orderPage
  loadOrder()
  {
    this.products = JSON.parse(localStorage.getItem('orderItems') as any) || [] 
  }

  productsInOrder(product: any)
  {
    return this.products.findIndex((x: any) => x.id === product.ProductId) > -1
  }
  
}
