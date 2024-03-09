/**
 * A class for managing basic user data.
 * @export
 * @class User
 */
export class User {
 constructor(
    public id: number,
    public username: string,
    public email: string,
    public registrationDate: Date,
    public rating: number
  ) {}
}