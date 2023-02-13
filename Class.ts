import { Adress, Login, User } from "./Interface";

class Employee implements Login {
  private id: number;
  private name: string;
  private adress: Adress;

  public constructor(id: number, name: string, adress: Adress) {
    this.id = id;
    this.name = name;
    this.adress = adress;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public getAdress(): Adress {
    return this.adress;
  }
  public setAdress(adress: Adress): void {
    this.adress = adress;
  }

  public toString(): string {
    return `Employee { id: ${this.getId()}, name: ${this.getName()}, adress: ${this.getAdress()} }`;
  }

  login(): User {
    return { fName: "", lName: "", dob: new Date(), email: "" };
  }
}

const eo = new Employee(1, "amir", {
  streetName: "charles de gaulle",
  streetNumber: 17,
  zipCode: 1000,
});
console.log(eo.toString());
console.log(eo.login());
