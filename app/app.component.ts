/// Base compoonents
import {Component} from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';

/// Custom compoonents
import {CompanyComponent} from './maintenance/company/company.component';
import {AddEditCompanyComponent} from './maintenance/company/addeditcompany.component';
import {ContactComponent} from './maintenance/contact/contact.component';
import {AddEditContactComponent} from './maintenance/contact/addeditcontact.component';

/// Import router directives
import { ROUTER_DIRECTIVES } from 'angular2/router';

/// Component data
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    directives: [CompanyComponent, ContactComponent, AddEditCompanyComponent, ROUTER_DIRECTIVES]
})
/// routes
@RouteConfig([
    { path: "/companies", name: "/companies", component: CompanyComponent, useAsDefault: true },
    { path: "/company", name: "/company", component: AddEditCompanyComponent },
    { path: "/company/edit/:id", name: "/company/edit/:id", component: AddEditCompanyComponent },
    { path: "/contacts", name: "/contacts", component: ContactComponent },
    { path: "/contact", name: "/contact", component: AddEditContactComponent }
])
/// App component
export class AppComponent {

    /// Initializers
    menu: string = "companies";
    currentYear: number= new Date().getFullYear();

    /// Set the menu on click
    setMenu(menuItem) {
        this.menu = menuItem;
    }
}