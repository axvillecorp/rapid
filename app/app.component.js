System.register(['angular2/core', 'angular2/router', './maintenance/company/company.component', './maintenance/company/addeditcompany.component', './maintenance/contact/contact.component', './maintenance/contact/addeditcontact.component'], function(exports_1, context_1) {
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
    var core_1, router_1, company_component_1, addeditcompany_component_1, contact_component_1, addeditcontact_component_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (company_component_1_1) {
                company_component_1 = company_component_1_1;
            },
            function (addeditcompany_component_1_1) {
                addeditcompany_component_1 = addeditcompany_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (addeditcontact_component_1_1) {
                addeditcontact_component_1 = addeditcontact_component_1_1;
            }],
        execute: function() {
            /// Component data
            AppComponent = (function () {
                function AppComponent() {
                    /// Initializers
                    this.menu = "companies";
                    this.currentYear = new Date().getFullYear();
                }
                /// Set the menu on click
                AppComponent.prototype.setMenu = function (menuItem) {
                    this.menu = menuItem;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.html',
                        directives: [company_component_1.CompanyComponent, contact_component_1.ContactComponent, addeditcompany_component_1.AddEditCompanyComponent, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: "/companies", name: "/companies", component: company_component_1.CompanyComponent, useAsDefault: true },
                        { path: "/company", name: "/company", component: addeditcompany_component_1.AddEditCompanyComponent },
                        { path: "/company/edit/:id", name: "/company/edit/:id", component: addeditcompany_component_1.AddEditCompanyComponent },
                        { path: "/contacts", name: "/contacts", component: contact_component_1.ContactComponent },
                        { path: "/contact", name: "/contact", component: addeditcontact_component_1.AddEditContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map