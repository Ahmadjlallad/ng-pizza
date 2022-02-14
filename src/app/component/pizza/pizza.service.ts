import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private _pizza: Pizza[] = [];
  getData() {
    return new Observable((observer) => {
      setTimeout(() => observer.next(), 500);
    });
  }
  getLoader() {
    return new Observable<number>((observe) => {
      let count = 0;
      setInterval(() => {
        if (count === 110) {
          observe.complete();
        }
        observe.next(count);
        count++;
      }, 10);
    });
  }
  get pizza() {
    return this._pizza;
  }
  newPizza(pizza: Pizza) {
    this._pizza.push(pizza);
  }
  constructor() {}
}
