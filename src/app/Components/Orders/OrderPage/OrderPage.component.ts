import { Component, OnInit } from '@angular/core';
import OrderData  from 'src/app/DB/orders.json'
import { Orders } from 'src/app/Models/Orders'

@Component({
  selector: 'app-OrderPage',
  templateUrl: './OrderPage.component.html',
  styleUrls: ['./OrderPage.component.scss']
})
export class OrderPageComponent implements OnInit {

  orderList: Orders[] = OrderData

  constructor() { }

  ngOnInit() {
    console.log(this.orderList);
    
  }

}
