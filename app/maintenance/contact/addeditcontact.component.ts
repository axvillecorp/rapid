import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import {ContactService} from '../contact/contact.service'
import {Observable} from 'rxjs/Observable'
import {ContactData} from './contactData'

@Component({
    selector: "contact",
    templateUrl: "./app/maintenance/contact/contact.html",
    providers: [ContactService]
})
export class AddEditContactComponent {
    contact: ContactData;

    /// constructor to set...
    constructor(
        private contactService: ContactService,
        private router: Router) {
        this.contact = {
            Id: 0,
            FirstName: "",
            LastName: "",
            Email: "abcd@gmail.com",
            Name: "Kiju Victoria - Ronaldo",
            AddressLine1: "TriState Pkwy",
            AddressLine2: "Park Street",
            Sex: "M",
            Phone: "1800 100 1000",
            Fax: "123 456 789",
            Zipcode: "60085",
            City: "Waukegan",
            State: "IL",
            Company: this.InitializeCompany(),
            Companies: []
        };
    }

    /// Initialize Company...
    InitializeCompany(): any {
        return {
            Id: 0,
            Name: "",
            Title: ""
        };
    };

    /// Save the item...
    Save(myForm: ContactData) {
        console.log(myForm)
    };

    /// Go to contacts...
    BackToContacts() {
        this.router.navigateByUrl("/contacts");
    };

    /// Companies Mgmt - ADD
    AddCompany(myCompany: any) {

        /// push the item...
        this.contact.Companies.push({
            Name: myCompany.Name,
            Title: myCompany.Title
        });

        /// Initialize again..
        this.contact.Company = this.InitializeCompany();
    }

    /// Company Mgmt - Remove
    RemoveCompany(myCompany: any) {

        /// pop the item...
        this.contact.Companies.splice(this.contact.Companies.indexOf(myCompany), 1);
    }
}

