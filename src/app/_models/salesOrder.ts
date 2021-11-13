import { Product } from "./product";




export interface SalesOrderLine {
	SalesOrderLineId: number;
	SalesOrderId: number;
	ProductId: number;
	Product: Product;
	ProductName: string;
	Description?: any;
	Quantity: number;
	Price: number;
	Amount: number;
	DiscountPercentage: number;
	Discountamount: number;
	Subtotal: number;
	TaxPercentage: number;
	Taxamount: number;
	Total: number;
}

export interface SalesOrder {
	SalesOrderId: number;
	SalesOrderName: string;
	BranchId: number;
	BranchName: string;
	CurrencyId: number;
	SalesTypeId: number;
	SalesTypeName?: any;
	CustomerId: number;
	CustomerName?: any;
	OrderDate: string;
	DeliveryDate: string;
	Amount: number;
	SubTotal: number;
	Discount: number;
	Tax: number;
	Total: number;
	Freight: number;
	Remarks?: any;
	CurrencyCode?: any;
	SalesOrderLines: SalesOrderLine[];
}