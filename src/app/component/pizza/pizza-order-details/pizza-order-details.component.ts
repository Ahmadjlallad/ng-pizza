import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-order-details',
  templateUrl: './pizza-order-details.component.html',
  styleUrls: ['./pizza-order-details.component.scss'],
})
export class PizzaOrderDetailsComponent implements OnInit, OnDestroy {
  additions = true;
  constructor(public pizzas: PizzaService) {}
  isLoading = true;
  loadingSub!: Subscription;

  ngOnInit(): void {
    this.loadingSub = this.pizzas
      .getData()
      .subscribe({ next: () => (this.isLoading = false) });
    console.log(this.pizzas);
  }
  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }
}
