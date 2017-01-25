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
    var ContactComponent;
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
            ContactComponent = (function () {
                /// constructor to set...
                function ContactComponent(contactService, router) {
                    this.contactService = contactService;
                    this.router = router;
                    /// map it with contact Data
                    this.contacts = contactService.getContacts().map(function (comp) { return comp; });
                }
                /// track contact name search
                ContactComponent.prototype.getContacts = function () {
                    /// map it with contact Data
                    this.contacts = this.contactService.getContacts().map(function (comp) { return comp; });
                };
                /// Add new contact...
                ContactComponent.prototype.AddNew = function () {
                    /// navigate to add contact
                    this.router.navigateByUrl("/contact");
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contacts",
                        templateUrl: "./app/maintenance/contact/contacts.html",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map