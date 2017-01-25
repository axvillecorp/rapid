import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import {ContactService} from '../contact/contact.service'
import {Observable} from 'rxjs/Observable'
import {ContactData} from '../contact/contactData'

@Component({
    selector: "contacts",
    templateUrl: "./app/maintenance/contact/contacts.html",
    providers: [ContactService]
})
export class ContactComponent {
    contacts: any;
    contactName: string;

    /// constructor to set...
    constructor(private contactService: ContactService,
        private router: Router) {

        /// map it with contact Data
        this.contacts = contactService.getContacts().map(comp => <ContactData[]>comp);
    }

    /// track contact name search
    getContacts() {

        /// map it with contact Data
        this.contacts = this.contactService.getContacts().map(comp => <ContactData[]>comp);
    }

    /// Add new contact...
    AddNew() {

        /// navigate to add contact
        this.router.navigateByUrl("/contact");
    }
}