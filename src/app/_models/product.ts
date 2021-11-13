
import { ProductDescription } from "./productDescription";
import { ProductImage } from "./productImage";

export interface Product {
	ProductId: number;
	ProductName: string;
	CategoryId: number;
	Barcode: string;
	DefaultBuyingPrice: number;
	DefaultSellingPrice: number;
	CurrencyId: number;
	BranchId: number;
	BranchName?: any;
	Description: string;
	UnitOfMeasureId: number;
	UOM?: any;
	CompanyId: number;
	CurrencyCode?: any;
	AllowMarketing: boolean;
	ProductImages: ProductImage[];
	ProductDescriptions:ProductDescription[];
}

