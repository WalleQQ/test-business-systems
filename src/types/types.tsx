export interface ICompany {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  company: ICompany;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
