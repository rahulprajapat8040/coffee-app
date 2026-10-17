export interface IHomeRes {
  categories: Category[];
}

export interface Category {
  id: string | null;
  name: string;
}
