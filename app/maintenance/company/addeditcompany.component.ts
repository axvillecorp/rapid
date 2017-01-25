import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import {CompanyService} from '../company/company.service'
import {Observable} from 'rxjs/Observable'
import {CompanyData} from './companyData'
import {ContactData} from '../contact/contactData'

@Component({
    selector: "company",
    templateUrl: "./app/maintenance/company/company.html",
    providers: [CompanyService]
})
export class AddEditCompanyComponent {
    company: CompanyData;

    /// constructor to set...
    constructor(
        private companyService: CompanyService,
        private router: Router) {
        this.company = {
            Id: 0,
            Name: "Akfron Limited",
            AddressLine1: "TriState Pkwy",
            AddressLine2: "Park Street",
            Phone: "1800 100 1000",
            Website: "www.akfron.com",
            Fax: "123 456 789",
            Zipcode: "60085",
            City: "Waukegan",
            State: "IL",
            Type: "Lender",
            Contact: this.InitializeContact(),
            Contacts: []
        };
    }

    /// Initialize contact...
    InitializeContact(): any {
        return {
            FirstName: "",
            LastName: "",
            Name: "",
            Title: "",
            Phone: ""
        };
    };

    /// Save the item...
    Save(myForm: CompanyData) {
        console.log(myForm)
    };

    /// Go to Companies...
    BackToCompanies() {
        this.router.navigateByUrl("/companies");
    };

    /// Contacts Mgmt - ADD
    AddContact(myContact: any) {

        /// push the item...
        this.company.Contacts.push({
            FirstName: "",
            LastName: "",
            Name: myContact.Name,
            Title: myContact.Title,
            Phone: myContact.Phone
        });

        /// Initialize again..
        this.company.Contact = this.InitializeContact();
    }

    /// Contacts Mgmt - Remove
    RemoveContact(myContact: any) {

        /// pop the item...
        this.company.Contacts.splice(this.company.Contacts.indexOf(myContact), 1);
    }
}

