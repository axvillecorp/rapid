
import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {CompanyData} from './companyData';

/// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {

    /// Resolve HTTP using the constructor
    // constructor(private http: Http) { }

    /// private instance variable to hold base url
    private companiesUrl = 'app/appData.json';

    /// Get companoes from server...
    getCompanies(): any {

        /// return data
        return [
            {
                "Id": 1000,
                "Name": "ABCD 1000",
                "Address": "#3/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Type": "Lender",
                "Contacts": [
                    {
                        "FirstName": "TSTFN101",
                        "LastName": "TSTLN101",
                        "Phone": "12123 2323 3123",
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
                "Name": "ABCD 1001",
                "Address": "#5/41, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Type": "Lender",
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
                "Name": "ABCD 1002",
                "Address": "#67/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Type": "Lender",
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
                "Name": "ABCD 1003",
                "Address": "#3/4, XXXXX Street, IL",
                "Phone": "12345678",
                "Fax": "3444 44 444",
                "Type": "Lender",
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