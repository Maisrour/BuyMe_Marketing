import { Product } from "./product";
export interface ProductCategory {
    CategoryId: number;
    CategoryName: string;
    Description: string;
    CompanyId: number;
    Products: Product[];
}
