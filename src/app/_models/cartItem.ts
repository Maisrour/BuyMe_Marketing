import { Product } from "./product";

export interface CartItem {
	Id?: number;
	ProductId: number;
    Product?:Product;
	CustomerId: number;
	QTN: number;
    CompanyId:number
}