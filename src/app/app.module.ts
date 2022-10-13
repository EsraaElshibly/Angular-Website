import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/Navbar/Navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ProductPageComponent } from './Components/Products/ProductPage/ProductPage.component'
import { FormsModule } from '@angular/forms';
import { OnlinePaymentComponent } from 'src/app/Components/OnlinePayment/OnlinePayment.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductPageComponent,
    OnlinePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
