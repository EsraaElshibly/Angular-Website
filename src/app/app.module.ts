import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/Navbar/Navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ProductPageComponent } from './Components/Products/ProductPage/ProductPage.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
