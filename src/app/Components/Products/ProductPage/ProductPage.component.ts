  import { Component, OnInit } from '@angular/core';
  import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
  import { Products } from 'src/app/Models/Products'
  import { ProductService } from 'src/app/Services/Product Services/Product.service'
  import { Router } from '@angular/router'

  @Component({
    selector: 'app-ProductPage',
    templateUrl: './ProductPage.component.html',
    styleUrls: ['./ProductPage.component.scss']
  })
  export class ProductPageComponent implements OnInit {

    // Creating Model, import it. then assign it to value of prdList 
    // Assign list of products by product data that returned from JSON file
    productList: Products[] = []
    orderList: any[] = []

    constructor(
      private productService: ProductService,
      private router: Router
      ) { }

    ngOnInit() {
      this.getAllProduct()  //This line for me to show data
    }

    // Add Product In Order List
    AddProductInOrder(product: any)
    {
      console.log(product)
    }

    getAllProduct()
    {
      this.productService.getAllProducts().subscribe({
        next: (res: any) => 
        {
          this.productList = res
          console.log(this.productList)
        },
        error: (err: any) => 
        {
          console.log(err)
        },
        complete: () => 
        {
          console.log("complete")
        }
    })
    
    }
  
    // Function to add order in orderList
    addOrder(product: any)
    {
      if(!this.productService.productsInOrder(product))
      {
        product.AvailablePieces = 1
        this.productService.addOrder(product)
        this.orderList = [...this.productService.getProducts()]
        console.log(this.orderList);
      }
    }

    // Calculate Total price for all order by using accessor decorator (get)
    get totalPrice () 
    {
      return this.orderList?.reduce(
        (sum, product) => ({
          AvailablePieces: 1,
          // calcuate the below evealluation to get total price
          ProductPrice: sum.ProductPrice + product.AvailablePieces * product.ProductPrice
        }),

        // Set Intial value to make price = 0$ if there is no order
        {AvailablePieces:1, ProductPrice: 0}
      ).ProductPrice
    }

    // Function to complete order and pay by online method
    checkout()
    {
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice))
      this.router.navigate(['/payment'])
    }

  }

