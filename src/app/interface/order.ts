export class Order {
  public orderid: number = 0;
  public itemid: number = 0;
  public olid: number = 0;
  public qty: number = 0;

  public constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}
