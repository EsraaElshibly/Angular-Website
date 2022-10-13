import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { OnlinePaymentComponent } from './Components/OnlinePayment/OnlinePayment.component';
import { OrderPageComponent } from './Components/Orders/OrderPage/OrderPage.component';
import { OrdersListComponent } from './Components/OrdersList/OrdersList.component';
import { ProductPageComponent } from './Components/Products/ProductPage/ProductPage.component';

const routes: Routes = [
  {path: '', component: ProductPageComponent},  // to make this component is default for open
  {path: 'products', component: ProductPageComponent},
  {path: 'allOrders', component: OrderPageComponent},
  {path: 'order', component: OrdersListComponent},
  // {path: 'payment', component: OnlinePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

