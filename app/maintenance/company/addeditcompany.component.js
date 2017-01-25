System.register(['angular2/core', 'angular2/router', '../company/company.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, company_service_1;
    var AddEditCompanyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            }],
        execute: function() {
            AddEditCompanyComponent = (function () {
                /// constructor to set...
                function AddEditCompanyComponent(companyService, router) {
                    this.companyService = companyService;
                    this.router = router;
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
                AddEditCompanyComponent.prototype.InitializeContact = function () {
                    return {
                        FirstName: "",
                        LastName: "",
                        Name: "",
                        Title: "",
                        Phone: ""
                    };
                };
                ;
                /// Save the item...
                AddEditCompanyComponent.prototype.Save = function (myForm) {
                    console.log(myForm);
                };
                ;
                /// Go to Companies...
                AddEditCompanyComponent.prototype.BackToCompanies = function () {
                    this.router.navigateByUrl("/companies");
                };
                ;
                /// Contacts Mgmt - ADD
                AddEditCompanyComponent.prototype.AddContact = function (myContact) {
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
                };
                /// Contacts Mgmt - Remove
                AddEditCompanyComponent.prototype.RemoveContact = function (myContact) {
                    /// pop the item...
                    this.company.Contacts.splice(this.company.Contacts.indexOf(myContact), 1);
                };
                AddEditCompanyComponent = __decorate([
                    core_1.Component({
                        selector: "company",
                        templateUrl: "./app/maintenance/company/company.html",
                        providers: [company_service_1.CompanyService]
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
                ], AddEditCompanyComponent);
                return AddEditCompanyComponent;
            }());
            exports_1("AddEditCompanyComponent", AddEditCompanyComponent);
        }
    }
});
//# sourceMappingURL=addeditcompany.component.js.map