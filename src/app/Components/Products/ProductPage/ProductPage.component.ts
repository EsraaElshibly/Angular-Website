import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import ProductData  from 'src/app/DB/porducts.json'
import { Products } from 'src/app/Models/Products'


@Component({
  selector: 'app-ProductPage',
  templateUrl: './ProductPage.component.html',
  styleUrls: ['./ProductPage.component.scss']
})
export class ProductPageComponent implements OnInit {

  // Creating Model, import it. then assign it to value of prdList 
  // Assign list of products by product data that returned from JSON file
  productList: Products[] = ProductData

  constructor() { }

  ngOnInit() {
    console.log(this.productList);   //This line for me to show data
  }

  

}

