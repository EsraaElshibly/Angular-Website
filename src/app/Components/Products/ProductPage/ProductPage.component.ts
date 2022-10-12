  import { Component, OnInit } from '@angular/core';
  import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
  import { Products } from 'src/app/Models/Products'
  import { ProductService } from 'src/app/Services/Product Services/Product.service'

  @Component({
    selector: 'app-ProductPage',
    templateUrl: './ProductPage.component.html',
    styleUrls: ['./ProductPage.component.scss']
  })
  export class ProductPageComponent implements OnInit {

    // Creating Model, import it. then assign it to value of prdList 
    // Assign list of products by product data that returned from JSON file
    productList: Products[] = []

    constructor(private productService: ProductService) { }

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
        product.quantity = 1
        this.productService.addOrder(product)
        this.productList = this.productService.getProducts()
        console.log(this.productList);
      }
    }

  }

