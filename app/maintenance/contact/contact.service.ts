
import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {ContactData} from './contactData';

/// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {

    /// Resolve HTTP using the constructor
    // constructor(private http: Http) { }

    /// private instance variable to hold base url
    private contactsUrl = 'app/appData.json';

    /// Get companoes from server...
    getContacts(): any {

        /// return data
        return [
            {
                "Id": 1000,
                "Name": "ABCD 1000",
                "AddressLine1": "#3/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Email": "abcd@abb.com",
                "Companies": [
                    {
                        "FirstName": "TSTFN101",
                        "LastName": "TSTLN101",
                        "Phone": "12123 2323 3123",
                        "Name": "dsf",
                        "Sex": "M"
                    },
                    {
                        "FirstName": "TSTFN102",
                        "LastName": "TSTLN102",
                        "Phone": "12123 2323 3123",
                        "Sex": "M"
                    },
                    {
                        "FirstName": "TSTFN103",
                        "LastName": "TSTLN103",
                        "Phone": "12123 2323 3123",
                        "Sex": "F"
                    }
                ]
            },
            {
                "Id": 1001,
                "Name": "EFGH 1001",
                "AddressLine1": "#5/41, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Email": "efgh@abb.com",
                "Contacts": [
                    {
                        "FirstName": "TSTFN101",
                        "LastName": "TSTLN101",
                        "Phone": "12123 2323 3123",
                        "Sex": "M"
                    }
                ]
            },
            {
                "Id": 1002,
                "Name": "HIKL 1002",
                "AddressLine1": "#67/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Email": "hijk@abb.com",
                "Contacts": [
                    {
                        "FirstName": "TSTFN101",
                        "LastName": "TSTLN101",
                        "Phone": "12123 2323 3123",
                        "Sex": "M"
                    },
                    {
                        "FirstName": "TSTFN103",
                        "LastName": "TSTLN103",
                        "Phone": "12123 2323 3123",
                        "Sex": "F"
                    }
                ]
            },
            {
                "Id": 1003,
                "Name": "XYZ 1003",
                "AddressLine1": "#3/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Email": "xyz@abb.com",
                "Contacts": [
                    {
                        "FirstName": "TSTFN102",
                        "LastName": "TSTLN102",
                        "Phone": "12123 2323 3123",
                        "Sex": "M"
                    },
                    {
                        "FirstName": "TSTFN103",
                        "LastName": "TSTLN103",
                        "Phone": "12123 2323 3123",
                        "Sex": "F"
                    }
                ]
            }
        ];

        /// using get request
        // return this.http.get(this.companiesUrl)
        //     // ...and calling .json() on the response to return data
        //     .map((res: Response) => res.json())
        //     //.map((comp: Response) => <CompanyData[]>comp)
        //     //...errors if any
        //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

        // this.http.get(this.companiesUrl)
        //     .subscribe(res => this.data = res.json());

        // console.log(this.data);
        // this.http.get(this.companiesUrl)
        //     .map((comp: Response) => comp.json());
        //     //.subscribe(res => this.companies = res.json());
        // console.log(this.companies);
        // return this.companies;
    }
}