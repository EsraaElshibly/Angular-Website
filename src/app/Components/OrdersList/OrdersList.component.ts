import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/Products'
  import { ProductService } from 'src/app/Services/Product Services/Product.service'

@Component({
  selector: 'app-OrdersList',
  templateUrl: './OrdersList.component.html',
  styleUrls: ['./OrdersList.component.css']
})
export class OrdersListComponent implements OnInit {

  orderList: any[] = []

  constructor(private router: Router) { }

  ngOnInit() {
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
    // this.router.navigate(['/payment'])
  }

}
