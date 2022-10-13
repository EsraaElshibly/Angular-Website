import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/Navbar/Navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ProductPageComponent } from './Components/Products/ProductPage/ProductPage.component'
import { OrderPageComponent } from './Components/Orders/OrderPage/OrderPage.component'
import { FormsModule } from '@angular/forms';
import { OnlinePaymentComponent } from 'src/app/Components/OnlinePayment/OnlinePayment.component'
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductPageComponent,
    OrderPageComponent,
    OnlinePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
