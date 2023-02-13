export interface Adress {
  streetName: string;
  streetNumber: number;
  zipCode: number;
}
export interface User {
  fName: string;
  lName: string;
  email: string;
  dob: Date;
  age?: number;
  adress?: Adress;
}
export interface Login {
  login(): User;
}
