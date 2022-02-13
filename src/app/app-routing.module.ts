import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PizzaOrderDetailsComponent } from './component/pizza/pizza-order-details/pizza-order-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'pizza',
    children: [
      { path: 'order', component: PizzaOrderDetailsComponent },
      { path: 'details', component: PizzaOrderDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
