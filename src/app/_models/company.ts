import { Template } from './template';

export interface Company{
    id:number;
    name:string;
    telephone:string;
    country:string;
    City:string;
    Business:string;
    Logo:string;
    IsActive:boolean;
    templateId:number;
    template:Template;

}
