export interface CategoryDescription {
	Id: number;
	Categoryid: number;
	Companyid: number;
	Description: string;
}

export interface ProductDescription {
	Id: number;
	Productid: number;
	CategoryDescriptionid: number;
	CategoryDescription: CategoryDescription;
	Description: string;
}