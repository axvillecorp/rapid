System.register(['angular2/core', 'angular2/router', '../contact/contact.service'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_service_1;
    var AddEditContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            AddEditContactComponent = (function () {
                /// constructor to set...
                function AddEditContactComponent(contactService, router) {
                    this.contactService = contactService;
                    this.router = router;
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
                AddEditContactComponent.prototype.InitializeCompany = function () {
                    return {
                        Id: 0,
                        Name: "",
                        Title: ""
                    };
                };
                ;
                /// Save the item...
                AddEditContactComponent.prototype.Save = function (myForm) {
                    console.log(myForm);
                };
                ;
                /// Go to contacts...
                AddEditContactComponent.prototype.BackToContacts = function () {
                    this.router.navigateByUrl("/contacts");
                };
                ;
                /// Companies Mgmt - ADD
                AddEditContactComponent.prototype.AddCompany = function (myCompany) {
                    /// push the item...
                    this.contact.Companies.push({
                        Name: myCompany.Name,
                        Title: myCompany.Title
                    });
                    /// Initialize again..
                    this.contact.Company = this.InitializeCompany();
                };
                /// Company Mgmt - Remove
                AddEditContactComponent.prototype.RemoveCompany = function (myCompany) {
                    /// pop the item...
                    this.contact.Companies.splice(this.contact.Companies.indexOf(myCompany), 1);
                };
                AddEditContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        templateUrl: "./app/maintenance/contact/contact.html",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], AddEditContactComponent);
                return AddEditContactComponent;
            }());
            exports_1("AddEditContactComponent", AddEditContactComponent);
        }
    }
});
//# sourceMappingURL=addeditcontact.component.js.map