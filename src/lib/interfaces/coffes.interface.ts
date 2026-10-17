import { IPageInfo } from "@/api/axios/base-res.interface"


export interface ICoffessRes {
  data: ICoffee[];
  pageInfo: IPageInfo;
}

export interface ICoffee {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  category: Category;
}


export interface Category {
  name: string
}