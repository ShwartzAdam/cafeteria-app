export class User {
  public userid: number = 0;
  public email: string = "";
  public password: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public phone: string = "";
  public url: string = "";
  public role: string = "";
  public credit: number = 0;

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }

}
