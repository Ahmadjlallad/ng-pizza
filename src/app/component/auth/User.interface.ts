export interface UserInterface {
  user: {
    createdAt: string;
    id: number;
    password: string;
    role: string;
    token: string;
    updatedAt: string;
    username: string;
  };
  token: string;
}
export class User {
  constructor(
    public username: string,
    public token: string,
    public id: number
  ) {}
}
