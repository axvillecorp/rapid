import { Observable } from 'rxjs/Observable'
import {ContactData} from '../contact/contactData'

export class CompanyData {
    Id: number;
    Name: string;
    AddressLine1: string;
    AddressLine2: string;
    Phone: string;
    Website: string;
    Fax: string;
    Zipcode: string;
    City: string;
    State: string;
    Type: string;
    Contact: any;
    Contacts: any[];
}