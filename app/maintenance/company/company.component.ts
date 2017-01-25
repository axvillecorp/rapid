import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import {CompanyService} from '../company/company.service'
import {Observable} from 'rxjs/Observable'
import {CompanyData} from './companyData'

@Component({
    selector: "companies",
    templateUrl: "./app/maintenance/company/companies.html",
    providers: [CompanyService]
})
export class CompanyComponent {
    companies: any;
    companyName: string;

    /// constructor to set...
    constructor(
        private companyService: CompanyService,
        private router: Router) {

        /// map it with Company Data
        this.companies = companyService.getCompanies().map(comp => <CompanyData[]>comp);
    }

    /// track company name search
    getCompanies() {

        /// map it with Company Data
        this.companies = this.companyService.getCompanies().map(comp => <CompanyData[]>comp);
    }

    /// Add new company...
    AddNew() {

        /// navigate to add company
        this.router.navigateByUrl("/company");
    }
}

