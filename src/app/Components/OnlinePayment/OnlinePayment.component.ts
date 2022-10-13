import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-OnlinePayment',
  templateUrl: './OnlinePayment.component.html',
  styleUrls: ['./OnlinePayment.component.scss']
})
export class OnlinePaymentComponent implements OnInit {

  totalPrice!: any
  public payPalConfig?: IPayPalConfig;
  showSuccess!: any

  constructor() { }

  ngOnInit() {
    this.totalPrice = JSON.parse(localStorage.getItem('totalPrice') as any) || []

    console.log(this.totalPrice)

    this.initConfig()
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: `${environment.clientID}`,
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: `${this.totalPrice}`,
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: `${this.totalPrice}`
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: `${this.totalPrice}`,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

}
