import { Template } from './template';

export interface Company{
    Id:number;
    Name:string;
    Telephone:string;
    Country:string;
    City:string;
    Business:string;
    Logo:string;
    IsActive:boolean;
    TemplateId:number;
    Template:Template;

}
