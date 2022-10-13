import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OnlinePayment',
  templateUrl: './OnlinePayment.component.html',
  styleUrls: ['./OnlinePayment.component.scss']
})
export class OnlinePaymentComponent implements OnInit {

  totalPrice!: any
  constructor() { }

  ngOnInit() {
    this.totalPrice = JSON.parse(localStorage.getItem('totalPrice') as any) || []

    console.log(this.totalPrice)
  }

}
