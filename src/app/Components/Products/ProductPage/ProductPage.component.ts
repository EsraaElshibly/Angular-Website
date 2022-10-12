  import { Component, OnInit } from '@angular/core';
  import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
  import ProductData  from 'src/app/DB/porducts.json'
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
    productList: any[] = []

    constructor(private productService: ProductService) { }

    ngOnInit() {
      this.getAllProduct()   //This line for me to show data
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



  }

