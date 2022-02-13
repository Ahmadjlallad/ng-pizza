import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaOrderFormComponent } from './component/pizza/pizza-order-form/pizza-order-form.component';
import { PizzaOrderDetailsComponent } from './component/pizza/pizza-order-details/pizza-order-details.component';
import { AuthComponent } from './component/auth/auth.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    PizzaOrderFormComponent,
    PizzaOrderDetailsComponent,
    AuthComponent,
    SpinnerComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
