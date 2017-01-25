import { Observable } from 'rxjs/Observable'
import {CompanyData} from '../company/companyData'

export class ContactData {
    Id: number;
    FirstName: string;
    LastName: string;
    Name: string;
    Sex: string;
    Phone: string;
    AddressLine1: string;
    AddressLine2: string;
    Email: string;
    Fax: string;
    Zipcode: string;
    City: string;
    State: string;
    Company: any;
    Companies: any[];
}