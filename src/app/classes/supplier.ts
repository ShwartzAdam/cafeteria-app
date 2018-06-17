export class Supplier {
  public supid: number = 0;
  public name: string = "default";
  public phone: string = "default";
  public email: string = "default";

  public constructor(init?: Partial<Supplier>) {
    Object.assign(this, init);
  }
}
