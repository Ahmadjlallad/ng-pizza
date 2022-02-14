export interface Pizza {
  pizzaType: string;
  size: string;
  additions: {
    pepperoni: true | null;
    extraCheese: true | null;
    mushroom: true | null;
  };
}
