export interface ICompany {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  company: ICompany;
}
