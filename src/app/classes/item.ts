export class Item {
  public itemid: number = 0;
  public supid: number = 1;
  public name: string = "";
  public description: string = "";
  public qty: number = 0;
  public url: string = "";
  public price: number = 0;
  public type: string = "";
  public ispublished: boolean = false;
  public preptime: number = 0;

  public constructor(init?:Partial<Item>) {
    Object.assign(this, init);
  }

}

