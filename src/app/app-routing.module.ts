import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { Guard } from './component/auth/auth.guard';
import { PizzaOrderDetailsComponent } from './component/pizza/pizza-order-details/pizza-order-details.component';
import { PizzaOrderFormComponent } from './component/pizza/pizza-order-form/pizza-order-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'pizza/order', pathMatch: 'full' },
  {
    path: 'pizza',
    children: [
      { path: 'order', component: PizzaOrderFormComponent },
      {
        path: 'details',
        component: PizzaOrderDetailsComponent,
        canActivate: [Guard],
      },
    ],
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
