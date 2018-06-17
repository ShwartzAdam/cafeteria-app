export class OrderList {
  public olid: number = 0
  public userid: number = 0
  public totalprice: number = 0
  public ol_dttm: string = "default"
  public ol_dttm_real: string = "default"
  public status: string = "default"
  public hasreview: boolean = false;

  public constructor(init?:Partial<OrderList>) {
    Object.assign(this, init);
  }

}
