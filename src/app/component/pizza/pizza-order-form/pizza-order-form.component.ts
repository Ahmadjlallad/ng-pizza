import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-order-form',
  templateUrl: './pizza-order-form.component.html',
  styleUrls: ['./pizza-order-form.component.scss'],
})
export class PizzaOrderFormComponent implements OnInit, OnDestroy {
  thanksMsgLoader = false;
  isLoading = true;
  loadingSub!: Subscription;
  thanksMsgSub!: Subscription;
  pizzaForm!: FormGroup;
  thanksMsgValue = 0;
  pizzaTypes = [
    'Neapolitan Pizza.',
    'Chicago Pizza.',
    'New York-Style Pizza.',
    'Sicilian Pizza.',
    'Greek Pizza.',
    'California Pizza.',
    'Detroit Pizza.',
    'St. Louis Pizza.',
  ];

  constructor(private pizza: PizzaService, public auth: AuthService) {}

  ngOnInit(): void {
    this.loadingSub = this.pizza
      .getData()
      .subscribe({ next: () => (this.isLoading = false) });
    this.makeForm();
  }
  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
    if (this.thanksMsgSub) this.thanksMsgSub.unsubscribe();
  }
  form() {
    this.pizza.newPizza(this.pizzaForm.value);
    this.thanksMsgLoader = true;
    this.thanksMsgSub = this.pizza.getLoader().subscribe({
      next: (count) => {
        this.thanksMsgValue = count;
        console.log(count);
      },
      complete: () => {
        this.thanksMsgLoader = false;
        this.thanksMsgValue = 0;
      },
    });
  }
  makeForm() {
    this.pizzaForm = new FormGroup({
      pizzaType: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      additions: new FormGroup({
        pepperoni: new FormControl(),
        extraCheese: new FormControl(),
        mushroom: new FormControl(),
      }),
    });
  }
}
