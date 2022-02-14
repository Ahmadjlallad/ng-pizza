import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CookieService } from 'ngx-cookie-service';
import { MatCardModule } from '@angular/material/card';
import { Guard } from './component/auth/auth.guard';

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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [CookieService, Guard, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
